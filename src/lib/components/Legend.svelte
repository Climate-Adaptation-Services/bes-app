<script> 
    export let colorsLegend
    export let screenHeight
    export let screenWidth
    export let xValue
    </script>
  
    <g class='legend' transform={`translate(${0.45*screenWidth}, ${0*screenHeight})`}>
        <text
            x={0}
            y={-15}
            class="legendlabel"
            font-size = '2.2vh'
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
            transform = {`translate (${0.025*screenWidth}, ${(i*0.034*screenHeight) + (0.02*screenHeight)})`}
            class="legendtext"
            text-anchor= 'middle'
            fill = 'white'
            font-size = '2vh'
        >
        {d}
            </text>
        {/each}
    </g>
  
    <style>
    </style>
    