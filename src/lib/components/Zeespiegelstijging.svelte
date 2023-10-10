<script>
  import * as d3 from 'd3';

  import XAxis from './axes/XAxis.svelte';
  import YAxis from './axes/YAxis.svelte';
  import Line from './Line.svelte';
  import Area from './Area.svelte'
  import ZeespiegelHover from './ZeespiegelHover.svelte';

  import { w, h } from '$lib/stores';

  export let data;


  const dataProjection = data.zeespiegel_projectiedata;
  const dataHistoric = data.zeespiegel_historisch;

  console.log(dataProjection)
  
  const margin = {bottom:100, top:100, left:100, right:200}
  const innerWidth = $w - margin.left - margin.right
  const innerHeight = $h - margin.top - margin.bottom

  let xScale = d3
    .scaleLinear()
    .domain([
      dataHistoric[0].year,
      dataProjection[dataProjection.length - 1].year
    ])
    .range([margin.left, innerWidth])
  // .nice()

  var yScale = d3
    .scaleLinear()
    .domain([
      0,
      150
    ])
    .range([innerHeight, margin.top])
    .nice()

  const xAxisTickFormat = number => d3
    .format('d')(number)
    .replace(',', '')

  // Add scales to axis
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(12)
    .tickFormat(xAxisTickFormat);

  const yAxisTickFormat = number => d3
    .format('.3s')(number)
    .replace('.000', "")
    .replace('.00', "")
    .replace('.0', "")

  // Add scales to axis
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(5)
    .tickFormat(yAxisTickFormat);

  const colorGematigd = '#009fd1';
  const colorSterk = 'red';

  const median_lines = [
    {
      'variableLow': 'ssp126_5pc',
      'variableHigh': 'ssp126_95pc',
      'color': colorGematigd,
      'legendText': 'Gematigd',
      'hachureAngle': '140',
      'legendText2': 'Met gematigde',
      'y_offset_text': ['48', '62']
    }, {
      'variableLow': 'ssp585_5pc',
      'variableHigh': 'ssp585_95pc',
      'color': colorSterk,
      'legendText': 'Sterk',
      'hachureAngle': '60',
      'legendText2': 'Met sterke',
      'y_offset_text': ['53', '67']
    }
  ]

  const areaOpacity = '0.6';

</script>

<svg id="svg_zeespiegel_chart">

  <XAxis scale={xScale} xTransform={0} yTransform={innerHeight} className="lineChart__xAxis" axis={xAxis}/>
  <YAxis xTransform={margin.left} yTransform={0} scale={yScale} className="lineChart__yAxis" axis={yAxis}/>

  {#each median_lines as median_line}
    <g>
      <Area className='areaChart' data={dataProjection} 
        variable1={median_line.variableLow} variable2={median_line.variableHigh} 
        color={median_line.color} opacity={areaOpacity} xScale={xScale} yScale={yScale} 
        width={innerWidth} height={innerHeight} hachureAngle={median_line.hachureAngle} fillStyle='hachure' 
        hachureGap='4'/>
      
      <text x={innerWidth + 9} y={yScale(dataProjection[dataProjection.length - 1][median_line.variableHigh]) + 48} className='legendText' fill={median_line.color} opacity={areaOpacity + 0.2}>
        {median_line.legendText2}
      </text>
      <text 
        x={innerWidth + 9} 
        y={yScale(dataProjection[dataProjection.length - 1][median_line.variableHigh]) + 62}
        class='legendText' 
        fill={median_line.color} 
        opacity={areaOpacity + 0.2}>
        klimaatverandering
      </text>
    </g>
  {/each}

  <!-- <Line data={dataHistoric} color='black' variable='Stijging' legendText='Gemeten stijging' xScale={xScale} yScale={yScale} className='gemeten_zeespiegel' {margin} /> -->

  <!-- <path d="M{margin.left + 50},{yScale(dataHistoric[parseInt(dataHistoric.length/2)]['Stijging'])-44} l0,32" stroke='black' fill='none' stroke-width='0.8' stroke-dasharray="5,2"/> -->

  <ZeespiegelHover dataProjection={dataProjection} dataHistoric={dataHistoric} linesData={median_lines} xScale={xScale} yScale={yScale} height={innerHeight} areaOpacity={areaOpacity} {margin}/>

</svg>

<style>
  svg{
    width:100%;
    height:100%;
  }

  .legendYear {
    font-weight: normal;
    font-size: 17px;
  }

  .legendCircles {
    font-weight: normal;
    font-size: 11px;
  }

  .legendText {
    font-size: 12px;
    font-weight: normal;
  }

</style>

