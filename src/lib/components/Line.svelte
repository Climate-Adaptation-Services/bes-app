<script>
  import * as d3 from 'd3';
  import { onMount } from 'svelte';
  export let data;
  export let color;
  export let variable;
  export let legendText;
  export let xScale;
  export let yScale;
  export let className;

  console.log('test1', data)

  onMount(() => {
    d3.select('.' + className)
      .datum(data)
      .attr('d', d3.line()
        .x(function(d) {
          return xScale(d.year);
        })
        .y(function(d) {
          return yScale(d[variable]);
        }));
  });
</script>

<g>
  <path
    class={className}
    stroke={color}
    stroke-width='2.2'
    fill="none"
  />
  <text
    x={5}
    y={yScale(data[data.length - 1][variable]) - 40}
    dy="0.33em"
    class="lineChart__lineLabel"
    fill={color}
  >
    {legendText}
  </text>
</g>

<style>
  .lineChart__lineLabel{
    font-size:11px;
    font-weight:normal;
  }
</style>