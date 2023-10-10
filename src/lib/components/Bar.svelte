<script>
  import * as d3 from "d3";
  import { onMount, afterUpdate } from 'svelte'
  
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

    afterUpdate(() => {
      
    d3.selectAll('.' + className + '_bartext')
        .data(data)
        .transition().duration(2000)
        .attr("y", (d) => yScale(yValue(d)) + 0.016*screenHeight)

          
		d3.selectAll('.' + className+ '_rect')
                 .data(data)
                 .transition().duration(2000)
                 .attr("transform", (d,i) => `translate (${i*0.15*screenWidth}, ${yScale(yValue(d))})`)
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
            transform = {`translate (${i*0.15*screenWidth}, ${yScale(yDomain[0])})`}
          />
          <text
            class = {'tickmark'}
            dy = "0.7em"
            text-anchor="middle"
            transform = {`translate (${i*0.15*screenWidth + xScale.bandwidth()/2}, ${0.5*screenHeight+10}) `}>
            {d.scenario}
          </text>
          <text
            class={className + '_bartext'}
            text-anchor='middle'
            x={(i*0.15*screenWidth + xScale.bandwidth()/2)}
            fill='white'
            y={yScale(yDomain[0])}
            font-size = '2vh'
            
          >
            {tickFormat(yValue(d)) + unit}
          </text>
        </g>
    {/each}

  <style>
  </style>
  