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
  import { w } from '$lib/stores';

  // console.log(annotationXYThreshold)
  const annotations = [
    {
      note: {
        label: "Scenario voor hoogst mogelijke zeespiegelstijging",
        // title: "Annotation title"
      },
      data: {'year': 2057, variable:'112.26'},
      dy: 20,
      dx: $w/28
    }
  ]

  const makeAnnotations = annotation()
    .accessors({
      x: d => xScale(d.year),
      y: d => yScale(d.variable)
    })
    .accessorsInverse({
      date: d => xScale.invert(d.year),
      close: d => yScale.invert(d.variable)
    })
    .annotations(annotations)

  onMount(() => {
    d3.select("." + className + 'g')
    .append("g")
    .call(makeAnnotations)
  })

  afterUpdate(() => {
    makeAnnotations.updatedAccessors()
    
    d3.select('.' + className + 'path')
      .datum(data.slice(0,58))
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

<g class={className + 'g'} text-anchor='start' font-size='{$w*0.0012}vw'>
  <path
    class={className + 'path'}
    stroke={color}
    stroke-width='1'
    fill="none"
    stroke-dasharray="8 4"
  />
</g>

<style>
  .lineChart__lineLabel{
    font-size:11px;
    font-weight:normal;
  }

</style>