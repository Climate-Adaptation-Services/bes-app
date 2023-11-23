<script>
  import { theme, datalaag } from "$lib/stores.js";

  let variable
	$:  $theme === 'zst' ? (variable = 'Sea level rise'):
		$datalaag === 'Gemiddelde temperatuur' ? (variable = 'Average temperature'):
		$datalaag === 'Gemiddelde temperatuur droog seizoen' ? (variable = 'Average temperature dry season'):
		$datalaag === 'Gemiddelde temperatuur nat seizoen' ? (variable = 'Average temperature wet season'):
		$datalaag === 'Gemiddelde neerslag' ? (variable = 'Average precipitation'):
		$datalaag === 'Gemiddelde neerslag droog seizoen' ? (variable = 'Average precipitation dry season'):
		$datalaag === 'Gemiddelde neerslag nat seizoen' ? (variable = 'Average precipitation wet season'):
		$datalaag === 'Gemiddelde windsnelheid' ? (variable = 'Average wind speed'):
		$datalaag === 'Gemiddelde windsnelheid droog seizoen' ? (variable = 'Average wind speed dry season'):
		$datalaag === 'Gemiddelde windsnelheid nat seizoen' ? (variable = 'Average wind speed wet season'):
		(chartTitle = String($datalaag));


  let Tekst = '';
  $: if(($datalaag === 'Gemiddelde temperatuur' || $datalaag === 'Gemiddelde neerslag' || $datalaag === 'Gemiddelde windsnelheid') && $theme !== 'zst'  ){
		Tekst = 'The bars show the ' + variable. toLowerCase() + ' in the current climate (1991-2020) and for the future climate around 2050 and 2100  <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. The scenarios represent the range within which climate change is likely to develop. This range depends on both the amount of greenhouse gases being emitted and the sensitivity of the climate system. The ‘low’ en ‘high’ scenarios reflect the two most widely differing scenarios.'
  }
  else if($theme === 'zst' ){
		Tekst = 'The graph shows sea level rise relative to the period 1995 to 2014 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. The projections show the range within which climate change is likely to develop. This range depends on both the amount of greenhouse gases still being emitted (the two colours) and the sensitivity of the climate system (the shaded range).'
  }
	else if(($datalaag === 'Gemiddelde temperatuur droog seizoen' || $datalaag === 'Gemiddelde neerslag droog seizoen' || $datalaag === 'Gemiddelde windsnelheid droog seizoen') && $theme !== 'zst'  ){
		Tekst = 'The bars show the ' + variable.split(' ').slice(0,2).join(' '). toLowerCase() + ' during the dry season in the current climate (1991-2020) and for the future climate around 2050 and 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. The scenarios represent the range within which climate change is likely to develop. This range depends on both the amount of greenhouse gases being emitted and the sensitivity of the climate system. The ‘low’ en ‘high’ scenarios reflect the two most widely differing scenarios.'
  }
	else if(($datalaag === 'Gemiddelde temperatuur nat seizoen' || $datalaag === 'Gemiddelde neerslag nat seizoen' || $datalaag === 'Gemiddelde windsnelheid nat seizoen')&& $theme !== 'zst'   ){
		Tekst = 'The bars show the ' + variable.split(' ').slice(0,2).join(' '). toLowerCase() + ' during the wet season in the current climate (1991-2020) and for the future climate around 2050 and 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. The scenarios represent the range within which climate change is likely to develop. This range depends on both the amount of greenhouse gases being emitted and the sensitivity of the climate system. The ‘low’ en ‘high’ scenarios reflect the two most widely differing scenarios.'
  }
	

  $: console.log($theme, Tekst, $datalaag)
</script>

<section>
  <div>
    <p class='explanation'>{@html Tekst}</p>
  </div>

</section>

<style>

.explanation{
		display: block;
		margin:1vh;
		margin-top:0px;
		font-size:1.9vh;
		text-align: left;
	}

ul.myUL {
text-align: left;
}

a:link {    /* unvisited link */
color: #ffffff;
text-decoration: none;
border-bottom: 1px solid;
}
a:visited {    /* visited link */
	color: white;
}
a:hover {    /* mouse over link */
	color: #ffffff;
	border-bottom: none;
}
a:active {    /* active link */
	color: #ffffff;
}
 
</style>
