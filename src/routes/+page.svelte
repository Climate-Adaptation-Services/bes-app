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

	$: dataSeaLevelProjection = ($country === 'Bonaire')
    ? data.zeespiegel_projectiedata_bonaire
    : data.zeespiegel_projectiedata_saba

	$: dataSeaLevelProjectionLLHI = ($country === 'Bonaire')
    ? data.zeespiegel_projectiedata_bonaire_llhi
    : data.zeespiegel_projectiedata_saba_llhi

	let chartTitle
	$:  $theme === 'zst' ? (chartTitle = 'Subida di nivel di laman'):
		$datalaag === 'Gemiddelde temperatuur' ? (chartTitle = 'Temperatura promedio'):
		$datalaag === 'Gemiddelde temperatuur droog seizoen' ? (chartTitle = 'Temperatura promedio di temporada seku '):
		$datalaag === 'Gemiddelde temperatuur nat seizoen' ? (chartTitle = 'Temperatura promedio di temporada ku awa '):
		$datalaag === 'Gemiddelde neerslag' ? (chartTitle = 'Yobida promedio '):
		$datalaag === 'Gemiddelde neerslag droog seizoen' ? (chartTitle = 'Yobida promedio den temporada seku '):
		$datalaag === 'Gemiddelde neerslag nat seizoen' ? (chartTitle = 'Yobida promedio den temporada di yobida'):
		$datalaag === 'Gemiddelde windsnelheid' ? (chartTitle = 'Velosidat promedio di bientu'):
		$datalaag === 'Gemiddelde windsnelheid droog seizoen' ? (chartTitle = 'Velosidat promedio di bientu den temporada seku'):
		$datalaag === 'Gemiddelde windsnelheid nat seizoen' ? (chartTitle = 'Velosidat promedio di bientu den temporada di yobida'):
		(chartTitle = String($datalaag));

	let chartTitleCountry
	$:  $country === 'Bonaire' ? (chartTitleCountry = 'Boneiru'):
		$country === 'Statia & Saba' ? (chartTitleCountry = 'Statia & Saba'):
		''
		

</script>

<div class='App'>
	<div class='sidepanel'>
		<Sidepanel/>
	</div>
	<div class='main_panel'>
		<div class='chart-container'>
			<p class='chart-title'>{chartTitle + ' na ' + chartTitleCountry}</p>
			<p class='chart-subtitle'>{' '}</p>
			{#if data && dataCountry}
				<div class='chart' bind:clientWidth={$w} bind:clientHeight={$h}>
					{#if $h > 0 && $theme === 'zst'}
							<Zeespiegelstijging dataProjection={dataSeaLevelProjection} dataLLHI={dataSeaLevelProjectionLLHI} />
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
		height:80%;
	}

	.sidepanel{
		display:flex;
		flex:1;
		flex-direction:column;
		padding-left:2vw;
		padding-top:10vh;
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
</style>
