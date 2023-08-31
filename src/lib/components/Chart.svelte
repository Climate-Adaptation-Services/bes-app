<script>
  import * as d3 from "d3";
  import { datalaag } from "$lib/stores.js";
  import { theme } from "$lib/stores.js";
  import { onMount } from 'svelte'
  import { dsv } from 'd3';
  
  export let data

  let screenHeight
  let screenWidth
  let filteredData


  onMount(() => {
    screenHeight = document.documentElement.clientHeight
    screenWidth = document.documentElement.clientWidth
  })

  let yDomain = [20,31]
  let unit = " °C"

  $: $theme === 'heter' ? (yDomain = [20,31]):
     $theme === 'wind' ? (yDomain = [6,10]):
    (yDomain = [0,600]);

  $: $theme === 'heter' ? (unit = " °C"):
    $theme === 'wind' ? (unit = " m/s"):
    (unit = " mm");

  $: xScale = d3.scaleBand()
      .domain(maxData.map(xValue))
      .range([0, 0.4*screenWidth])
      .paddingInner(0.25)

  $: yScale = d3.scaleLinear()
		  .domain(yDomain)
	    .range([0.5*screenHeight, 0])
		  .nice() 

  
  $: filteredData = data.data.filter(function(x) { return x.variabel === $datalaag})

  $: console.log('hoi', data.data)

  const colorsMax = ['#635F5D', '#F6B656', '#F6B656']

  const colorsMin = ['#635F5D', '#E6842A', '#E6842A']

  const colorsLegend = ['#F6B656', '#E6842A',  '#635F5D']
  
  let maxData
  let minData

  $: maxData = [
      {
        scenario:'Huidig',
        data: filteredData[0]['huidig']
      },
      {
        scenario:'2050',
        data: filteredData[0]['2050_max']
      },
      {
        scenario:'2100',
        data: filteredData[0]['2100_max']
    }]

  $: minData = [
    {
        scenario:'Huidig',
        data: filteredData[0]['huidig']
      },
    {
      scenario:'2050',
      data: filteredData[0]['2050_min']
    },
    {
      scenario:'2100',
      data: filteredData[0]['2100_min']
    }]

  let xValue = ' '
  $: xValue = d => d['scenario']

  let yValue= ''
  $: yValue = d => d['data']

</script>

<section>
  <svg className='svg_chart' width={0.7*screenWidth} height={0.7*screenHeight} >
    <g className='g_chart' transform={`translate(${0.1*screenWidth},${0.15 * screenHeight})`}>
      {#each maxData as d,i}
        <rect
          class={'mark_max' + 'rect'}
          transform = {`translate (${i*0.15*screenWidth}, ${yScale(yValue(d))})`}
          key={xValue(d.data)}
          width={xScale.bandwidth()}
          height = {Math.abs(yScale(yValue(d)) - yScale(15))}
          fill={colorsMax[i]}
        />
        <text
          class = {'tickmark'}
          dy = "0.7em"
          text-anchor="middle"
          transform = {`translate (${i*0.15*screenWidth + xScale.bandwidth()/2}, ${0.5*screenHeight+10}) `}
        >
          {d.scenario}
        </text>
        <text
		      class={'graphtext'}
		      text-anchor='middle'
					x={(i*0.15*screenWidth + xScale.bandwidth()/2)}
					y={yScale(yValue(d)) + 0.02*screenHeight}
					fill='white'
		    >
		      {yValue(d) + unit}
		    </text>
      {/each}
      {#each minData as d,i}
        <rect
          class={'mark_min' + 'rect'}
          transform = {`translate (${i*0.15*screenWidth}, ${yScale(yValue(d))})`}
          key={xValue(d)}
          width={xScale.bandwidth()}
          height = {Math.abs(yScale(yValue(d)) - yScale(15))}
          fill={colorsMin[i]}
        />
        <text
		      class={'graphtext'}
		      text-anchor='middle'
					x={(i*0.15*screenWidth + xScale.bandwidth()/2)}
					y={yScale(yValue(d)) + 0.02*screenHeight}
					fill='white'
		    >
		      {yValue(d) + unit}
		    </text>
      {/each}
      <g class='legend' transform={`translate(${0.45*screenWidth}, ${0*screenHeight})`}>
        <text
        x={0}
        y={-15}
        class="legendlabel"
        >
        {'Legenda'}
        </text>
        {#each ['Hoog' , 'Laag', 'Huidig' ] as d,i}
        <rect
          class={'legend' + 'rect'}
          transform = {`translate (${0}, ${i*0.034*screenHeight})`}
          key={xValue(d)}
          width={0.05*screenWidth}
          height = {0.03*screenHeight}
          fill={colorsLegend[i]}
        />  
        <text
        transform = {`translate (${0.025*screenWidth}, ${(i*0.034*screenHeight) + (0.017*screenHeight)})`}
        class="legendtext"
        text-anchor= 'middle'
        fill = 'white'        
        >
        {d}
        </text>
        {/each}  
      </g>
    </g>
  </svg>
</section>

<style>

  .tickmark{
    text-align:center;
    font-size:2vh;

  }

  .graphtext{
    text-align:center;
    font-size:2vh;
  }  

  .legendtext{
    dominant-baseline: middle;
    font-size:1.5vh;
    fill:'white'
  }

</style>
