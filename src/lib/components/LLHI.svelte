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
      data: {'year': 2059, variable:'118.26'},
      dy: -10,
      dx: $w/18,
    }
  ]

  const makeAnnotations = annotation()
    .accessors({
      x: d => xScale(d.year),
      y: d => yScale(d.variable)
    })
    .accessorsInverse({
      year: d => xScale.invert(d.year),
      variable: d => yScale.invert(d.variable)
    })
    .annotations(annotations)

  onMount(() => {
    d3.select("." + className + 'g')
    .append("g")
    .call(makeAnnotations)
  })

  afterUpdate(() => {
    console.log('change')
    makeAnnotations.updatedAccessors()
    
    d3.select('.' + className.replaceAll(' ', '').replaceAll('&', '').replaceAll('.', '') + 'path')
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

<g class={className.replaceAll(' ', '').replaceAll('&', '').replaceAll('.', '') + 'g'} text-anchor='start' font-size='{8 + $w*0.007}px'>
  <path
    class={className.replaceAll(' ', '').replaceAll('&', '').replaceAll('.', '') + 'path'}
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