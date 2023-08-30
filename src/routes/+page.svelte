<script>
	import { dsv } from 'd3'
	import { w,h } from "$lib/stores.js";
	import Chart from "$lib/components/Chart.svelte"
    import Sidepanel from "$lib/components/Sidepanel.svelte"
	import Explanation from "$lib/components/Explanation.svelte"
	import { datalaag } from "$lib/stores.js";
    import { country } from "$lib/stores.js";
    
	
	export let data

	$: console.log(data.data)

</script>

<div class='App' bind:clientWidth={$w} bind:clientHeight={$h}>
	<div class='sidepanel'>
		<Sidepanel/>
	</div>
	<div class='main_panel'>
		<div class='chart-container'>
			<p class='chart-title'>{$datalaag + ' op ' + $country}</p>
			<p class='chart-subtitle'>{' '}</p>
			{#if data}	
				<div class='chart'>
					<Chart {data}/>
				</div>
			{/if}
		</div>		
		<div class='explanation-container'>
			<!-- <p class='explanation_title'>Toelichting</p> -->
			<Explanation/>
		</div>
	</div> 
</div>

<style>
	.App{
		width:100%;
		height:100%;
		background: whitesmoke;
		display:flex;
	}

	.sidepanel{
		display:flex;
		flex:1;
		flex-direction:column;
		padding-left:3vw;
		padding-top:20vh;
		width:20%;
	}

	.main_panel{
		flex:2;
		display:flex;
		flex-direction:column;
		border-left:1px #ccc solid;
		width: 80%
	}

	.chart-title{
		flex:1;
		display: flex;
		align-items: center;
		align-self:center;
		font-size:4vh;
		padding-left:30px;
		padding-right:30px;
		text-align: center;
	}

	.explanation-container{
		display:flex;
		flex:1.5;
		flex-direction:column;
		padding:10px;
		top:90%;
	}

	.explanation_title{
		flex:1;
		display: flex;
		align-items: left;
		align-self:left;
		margin:15px;
		font-size:2vh;
	}

	
</style>