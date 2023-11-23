<script>
  import * as d3 from "d3";
  import { datalaag } from "$lib/stores.js";
  import { theme, country } from "$lib/stores.js";
  import { onMount, afterUpdate } from 'svelte'
  
  import Bar from './Bar.svelte';
  import Legend from './Legend.svelte';

  export let dataCountry

  let screenHeight
  let screenWidth
  let filteredData

  onMount(() => {
    screenHeight = document.documentElement.clientHeight
    screenWidth = document.documentElement.clientWidth
  })


  $: filteredData = dataCountry.filter(function(x) { return x.variabel === $datalaag})


  const colorsMax = ['#E5CDC0', '#E5CDC0']

  const colorsMin = ['#5A8A8A', '#E68650', '#E68650']

  const colorsLegend = ['#E5CDC0', '#E68650',  '#5A8A8A']

  let maxData
  let minData

  $: maxData = [
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

  $: console.log($country)

  $: console.log(maxData)



  $: yDomain = $theme === 'heter' ? [20,33]:
     $theme === 'wind' & $country === 'Bonaire' ? [6,9]:
     $theme === 'wind' & $country === 'st.Eustatius & Saba' ? [5,8]:
     $theme === 'droger' & $country === 'st.Eustatius & Saba' ? [0,1100]:
    [0,600];

  $: unit = $theme === 'heter' ? " °C":
    $theme === 'wind' ? " m/s":
    " mm"; 

  
  function tickFormat(value){
    if ($theme === 'droger') {return d3.format('.0f')(value)}
    else {return d3.format('.1f')(value)}
  }

  $: xValue = d => d['scenario']

  $: yValue = d => d['data'] 

  $: xScale = d3.scaleBand()
      .domain(minData.map(xValue))
      .range([0, 0.4*screenWidth])
      .paddingInner(0.25)

  $: yScale = d3.scaleLinear()
		  .domain(yDomain)
	    .range([0.5*screenHeight, 0])
		  .nice()

</script>

<section>
  <svg className='svg_chart' width={0.7*screenWidth} height={0.7*screenHeight} >
    <g className='g_chart' transform={`translate(${0.1*screenWidth},${0.15 * screenHeight})`}>
      {#if screenWidth}
        <Bar data = {maxData} colors = {colorsMax} {yScale} {xScale} {yValue} {xValue} {screenHeight} {screenWidth} {yDomain} {unit} {tickFormat} className = 'mark_max'/>
        <Bar data = {minData} colors = {colorsMin} {yScale} {xScale} {yValue} {xValue} {screenHeight} {screenWidth} {yDomain} {unit} {tickFormat} className = 'mark_min'/>
      {/if}
      <Legend {screenHeight} {screenWidth} {colorsLegend} {xValue}/>
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
