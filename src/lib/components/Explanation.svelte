<script>
  import { theme, datalaag } from "$lib/stores.js";

  let variable
	$:  $theme === 'zst' ? (variable = 'Sea level rise'):
		$datalaag === 'Gemiddelde temperatuur' ? (variable = 'Gemiddelde temperatuur'):
		$datalaag === 'Gemiddelde temperatuur droog seizoen' ? (variable = 'Gemiddelde temperatuur droge season'):
		$datalaag === 'Gemiddelde temperatuur nat seizoen' ? (variable = 'Gemiddelde temperatuur natte season'):
		$datalaag === 'Gemiddelde neerslag' ? (variable = 'Gemiddelde neerslag'):
		$datalaag === 'Gemiddelde neerslag droog seizoen' ? (variable = 'Gemiddelde neerslag droge season'):
		$datalaag === 'Gemiddelde neerslag nat seizoen' ? (variable = 'Gemiddelde neerslag natte season'):
		$datalaag === 'Gemiddelde windsnelheid' ? (variable = 'Gemiddelde windsnelheid'):
		$datalaag === 'Gemiddelde windsnelheid droog seizoen' ? (variable = 'Gemiddelde windsnelheid droge seizoen'):
		$datalaag === 'Gemiddelde windsnelheid nat seizoen' ? (variable = 'Gemiddelde windsnelheid natte seizoen'):
		(chartTitle = String($datalaag));

	$:console.log($theme, '///')

  let Tekst = '';
  $: if(($datalaag === 'Gemiddelde windsnelheid' || $datalaag === 'Gemiddelde neerslag' || $datalaag === 'Gemiddelde temperatuur') && $theme !== 'zst') {
		Tekst = 'De grafiek toont ' + variable.split(' ').slice(0,2).join(' '). toLowerCase()+ ' voor het huidige klimaat (1991-2020) en voor het toekomstige klimaat rond 2050 en 2100, volgens <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">de KNMI’23-klimaatscenario’s</a>. De klimaatscenario’s tonen de bandbreedte waarbinnen klimaatverandering zich waarschijnlijk zal ontwikkelen. Deze bandbreedte is afhankelijk van de hoeveelheid broeikasgassen die wordt uitgestoten en de gevoeligheid van het klimaatsysteem. De scenario’s ‘laag’ en ‘hoog’ zijn de twee scenario’s die het verst uit elkaar liggen.'
  	}
	  
	else if($theme === 'zst' ){
			Tekst = 'De grafiek toont de zeespiegelstijging ten opzichte van de periode 1995 tot 2014 volgens de KNMI’23-klimaatscenario’s. De klimaatscenario’s tonen de bandbreedte waarbinnen klimaatverandering zich waarschijnlijk zal ontwikkelen. Deze bandbreedte is afhankelijk van de hoeveelheid broeikasgassen die wordt uitgestoten (de twee kleuren) en de gevoeligheid van het klimaatsysteem (het donkere deel). '
	}

	else if($theme !== 'zst' ){
		Tekst = 'De grafiek toont de ' + variable.split(' ').slice(0,2).join(' '). toLowerCase()+ ' tijdens het ' + variable.split(' ').slice(2,3).join(' '). toLowerCase()+ ' seizoen voor het huidige klimaat (1991-2020) en voor het toekomstige klimaat rond 2050 en 2100, volgens <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">de KNMI’23-klimaatscenario’s</a>. De klimaatscenario’s tonen de bandbreedte waarbinnen klimaatverandering zich waarschijnlijk zal ontwikkelen. Deze bandbreedte is afhankelijk van de hoeveelheid broeikasgassen die wordt uitgestoten en de gevoeligheid van het klimaatsysteem. De scenario’s ‘laag’ en ‘hoog’ zijn de twee scenario’s die het verst uit elkaar liggen.'
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
