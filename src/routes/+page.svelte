<script>
	import { w, h, datalaag, country, theme } from "$lib/stores.js";
	import Chart from "$lib/components/Chart.svelte"
  	import Sidepanel from "$lib/components/Sidepanel.svelte"
	import Explanation from "$lib/components/Explanation.svelte"

	import Zeespiegelstijging from "$lib/components/Zeespiegelstijging.svelte";
	
	export let data

	let dataCountry;
	$: $country === 'Bonaire' 
		? (dataCountry = data.bonaire_klimaatdata)
		: (dataCountry = data.sabast_klimaatdata);

	let chartTitle
	$:  $theme === 'zst' ? (chartTitle = 'Zeespiegelstijging'):
		(chartTitle = String($datalaag));

</script>

<div class='App'>
	<div class='sidepanel'>
		<Sidepanel/>
	</div>
	<div class='main_panel'>
		<div class='chart-container'>
			<p class='chart-title'>{chartTitle + ' op ' + $country}</p>
			<p class='chart-subtitle'>{' '}</p>
			{#if data && dataCountry}
				<div class='chart' bind:clientWidth={$w} bind:clientHeight={$h}>
					{#if $theme === 'zst'}
							<Zeespiegelstijging {data} />
					{:else}
							<Chart {dataCountry}/>
					{/if}
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

	.chart-container{
		height:100%;
	}

	.chart{
		height:100%;
	}

	.sidepanel{
		display:flex;
		flex:1;
		flex-direction:column;
		padding-left:3vw;
		padding-top:15vh;
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
