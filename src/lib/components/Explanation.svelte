<script>
  import { theme, datalaag } from "$lib/stores.js";

  $: console.log($theme, $datalaag)

  let Tekst = '';
  $: if($datalaag === 'Gemiddelde temperatuur' || $datalaag === 'Gemiddelde neerslag' || $datalaag === 'Gemiddelde wind'){
		Tekst = 'De grafiek toont de ' + $datalaag. toLowerCase() + ' in het huidige klimaat (1991-2020) en voor het klimaat rond 2050 en 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. De scenario’s geven de bandbreedte weer waarbinnen klimaatverandering zich waarschijnlijk zal ontwikkelen. Deze bandbreedte hangt af van zowel de hoeveelheid broeikasgassen die nog worden uitgestoten en de gevoeligheid van het klimaatsysteem. De ‘laag’ en ‘hoog’ scenarios weerspiegelen de twee meest uiteenlopende scenario’s.'
  }
	else if($datalaag === 'Gemiddelde temperatuur droog seizoen' || $datalaag === 'Gemiddelde neerslag droog seizoen' || $datalaag === 'Gemiddelde wind droog seizoen' ){
		Tekst = 'De grafiek toont de ' + $datalaag.split(' ').slice(0,2).join(' '). toLowerCase() + ' tijdens het droge seizoen in het huidige klimaat (1991-2020) en voor het klimaat rond 2050 en 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. De scenario’s geven de bandbreedte weer waarbinnen klimaatverandering zich waarschijnlijk zal ontwikkelen. Deze bandbreedte hangt af van zowel de hoeveelheid broeikasgassen die nog worden uitgestoten en de gevoeligheid van het klimaatsysteem. De ‘laag’ en ‘hoog’ scenarios weerspiegelen de twee meest uiteenlopende scenario’s.'
  }
	else if($datalaag === 'Gemiddelde temperatuur nat seizoen' || $datalaag === 'Gemiddelde neerslag nat seizoen' || $datalaag === 'Gemiddelde wind nat seizoen' ){
		Tekst = 'De grafiek toont de ' + $datalaag.split(' ').slice(0,2).join(' '). toLowerCase() + ' tijdens het natte seizoen in het huidige klimaat (1991-2020) en voor het klimaat rond 2050 en 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. De scenario’s geven de bandbreedte weer waarbinnen klimaatverandering zich waarschijnlijk zal ontwikkelen. Deze bandbreedte hangt af van zowel de hoeveelheid broeikasgassen die nog worden uitgestoten en de gevoeligheid van het klimaatsysteem. De ‘laag’ en ‘hoog’ scenarios weerspiegelen de twee meest uiteenlopende scenario’s.'
  }
	else if($theme === 'zst' ){
		Tekst = 'De grafiek toont de zeespiegelstijging ten opzichte van de periode 1995 tot 2014 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(KNMI 2023 scenario’s)</a>. De projecties geven de bandbreedte weer waarbinnen klimaatverandering zich waarschijnlijk zal ontwikkelen. Deze bandbreedte hangt af van zowel de hoeveelheid broeikasgassen die nog worden uitgestoten (weergegeven in de twee kleuren) en de gevoeligheid van het klimaatsysteem (weergegeven in de gearceerde bandbreedte).'
  }
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
