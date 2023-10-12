<script>
  import * as d3 from 'd3';
  import { afterUpdate, onMount } from 'svelte';
  export let data;
  export let color;
  export let variable;
  export let legendText;
  export let xScale;
  export let yScale;
  export let className;
  export let margin;

  import { annotation } from 'd3-svg-annotation';

  const annotations = [
    {
      note: {
        label: "Low-likelihood-high-impact",
        // title: "Annotation title"
      },
      data: {'year': 2060, variable:'130.26'},
      dy: 30,
      dx: 50
    }
  ]

  const makeAnnotations = annotation()
    .accessors({
      x: d => xScale(d.year),
      y: d => yScale(d.variable)
    })
    .annotations(annotations)

  afterUpdate(() => {
    // d3.select("." + className + 'g')
    // .append("g")
    // .call(makeAnnotations)
    
    d3.select('.' + className + 'path')
      .datum(data)
      .attr('d', d3.line()
        .x(d => xScale(d.year))
        .y(function(d) {
          if(legendText === 'LLHI'){
            return yScale(d[variable]*100)
          }else{
            return yScale(d[variable]);
          }
        }));
  });
</script>

<g class={className + 'g'}>
  <path
    class={className + 'path'}
    stroke={color}
    stroke-width='2.2'
    fill="none"
  />
</g>

<style>
  .lineChart__lineLabel{
    font-size:11px;
    font-weight:normal;
  }
</style>