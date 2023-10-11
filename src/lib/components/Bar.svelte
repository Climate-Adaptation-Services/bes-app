<script>
  import * as d3 from "d3";
  import { onMount, afterUpdate } from 'svelte'
  import { theme, country } from "$lib/stores.js";
  
  export let data
  export let colors
  export let xScale
  export let yScale
  export let xValue
  export let yValue
  export let screenHeight
  export let screenWidth
  export let unit
  export let yDomain
  export let className   
  export let tickFormat
  
  $: markslabelposition = $country === 'st.Eustatius & Saba' && $theme === 'wind' && className === 'mark_max' ? (-0.01*screenHeight):
    $country === 'st.Eustatius & Saba' && $theme === 'heter' && className === 'mark_max' ? (-0.01*screenHeight):
    $country === 'st.Eustatius & Saba' && $theme === 'droger' && className === 'mark_max' ? (-0.01*screenHeight):
    (0.016*screenHeight);

  $: markTextColor = $country === 'st.Eustatius & Saba' && $theme === 'wind' && className === 'mark_max' ? 'grey':
     $country === 'st.Eustatius & Saba' && $theme === 'heter' && className === 'mark_max' ? 'grey':
     $country === 'st.Eustatius & Saba' && $theme === 'droger' && className === 'mark_max' ? 'grey':
    'white'; 

  afterUpdate(() => {
      
    d3.selectAll('.' + className + '_bartext')
        .data(data)
        .transition().duration(2000)
        .attr("transform", (d) => `translate (${0}, ${-Math.abs(yScale(yValue(d)) - yScale(yDomain[0]))})`)

          
		d3.selectAll('.' + className+ '_rect')
                 .data(data)
                 .transition().duration(2000)
                 .attr("transform", (d,i) => `translate (${xScale(xValue(d))}, ${yScale(yValue(d))})`)
                 .attr("height", (d) => Math.abs(yScale(yValue(d)) - yScale(yDomain[0]))) 
	});

  </script>

    {#each data as d,i}
      <g className={className} key={'key_' + i + className}>
          <rect
            class={className + '_rect'}
            key={xValue(d.data)}
            width={xScale.bandwidth()}
            fill={colors[i]}
            height = {0}
            transform = {`translate (${xScale(xValue(d))}, ${yScale(yDomain[0])})`}
          />
          <text
            class = {'tickmark'}
            dy = "0.7em"
            text-anchor="middle"
            transform = {`translate (${xScale(xValue(d)) + xScale.bandwidth()/2}, ${0.5*screenHeight+10}) `}>
            {d.scenario}
          </text>
          <text
            class={className + '_bartext'}
            text-anchor='middle'
            x={(xScale(xValue(d)) + xScale.bandwidth()/2)}
            fill= {markTextColor}
            y={yScale(yDomain[0])+markslabelposition}
            font-size = '2vh'
          >
            {tickFormat(yValue(d)) + unit}
          </text>
        </g>
    {/each}

  <style>
  </style>
  