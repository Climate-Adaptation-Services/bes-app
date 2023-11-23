<script>
  import { theme, datalaag } from "$lib/stores.js";

  let variable
	$:  $theme === 'zst' ? (variable = 'subida di nivel'):
		$datalaag === 'Gemiddelde temperatuur' ? (variable = 'Temperatura promedio'):
		$datalaag === 'Gemiddelde temperatuur droog seizoen' ? (variable = 'Temperatura promedio'):
		$datalaag === 'Gemiddelde temperatuur nat seizoen' ? (variable = 'Temperatura promedio'):
		$datalaag === 'Gemiddelde neerslag' ? (variable = 'e Yobida promedio'):
		$datalaag === 'Gemiddelde neerslag droog seizoen' ? (variable = 'e Yobida promedio'):
		$datalaag === 'Gemiddelde neerslag nat seizoen' ? (variable = 'e Yobida promedio'):
		$datalaag === 'Gemiddelde wind' ? (variable = 'e Velosidat di bientu promedio'):
		$datalaag === 'Gemiddelde wind droog seizoen' ? (variable = 'e bientu promedio'):
		$datalaag === 'Gemiddelde wind nat seizoen' ? (variable = 'e bientu promedio '):
		(chartTitle = String($datalaag));


  let Tekst = '';
  $: if(($datalaag === 'Gemiddelde temperatuur' || $datalaag === 'Gemiddelde neerslag' || $datalaag === 'Gemiddelde wind') && $theme !== 'zst'  ){
		Tekst = 'Bara ta mustra ' + variable. toLowerCase() + ' den e klima aktual (1991-2020) i pa klima den futuro banda di 2050 i 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(senarionan di KNMI 2023)</a>. E senarionan ta representá e rango den kua probablemente kambio di klima ta desaroyá. E rango akí ta dependé di tantu e kantidat di gas ku ta emití komo e sensibilidat di e sistema di klima. E senarionan ‘bou’ i ‘haltu’ ta reflehá e dos senarionan mas diferente.'
  }
  else if($theme === 'zst' ){
		Tekst = 'E gráfiko ta mustra subida di nivel di laman relashoná ku e periodo 1995 te 2014 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(senarionan di KNMI 2023)</a>. E proyekshonnan ta mustra e rango den kua kambio di klima probablemente ta desaroyá. E rango akí ta dependé di tantu e kantidat di gas ku ketu bai ta emití (e dos kolónan) komo sensibilidat di e sistema di klima (e rango ku sombra).'
  }
	else if(($datalaag === 'Gemiddelde temperatuur droog seizoen' || $datalaag === 'Gemiddelde neerslag droog seizoen' || $datalaag === 'Gemiddelde wind droog seizoen') && $theme !== 'zst'  ){
		Tekst = 'Bara ta mustra ' + variable.split(' ').join(' '). toLowerCase() + ' durante e temporada seku den e klima aktual (1991-2020) i pa klima den futuro banda di 2050 i 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(senarionan di KNMI 2023)</a>. E senarionan ta representá e rango den kua probablemente kambio di klima ta desaroyá. E rango akí ta dependé di tantu e kantidat di gas ku ta emití komo e sensibilidat di e sistema di klima. E senarionan ‘bou’ i ‘haltu’ ta reflehá e dos senarionan mas diferente.'
  }
	else if(($datalaag === 'Gemiddelde temperatuur nat seizoen' || $datalaag === 'Gemiddelde neerslag nat seizoen' || $datalaag === 'Gemiddelde wind nat seizoen')&& $theme !== 'zst'   ){
		Tekst = 'Bara ta mustra ' + variable.split(' ').join(' '). toLowerCase() + ' durante e temporada muhá den e klima aktual (1991-2020) i pa klima den futuro banda di 2050 i 2100 <a href="https://cdn.knmi.nl/system/data_center_publications/files/000/071/901/original/KNMI23_klimaatscenarios_gebruikersrapport_23-03.pdf" target="_blank">(senarionan di KNMI 2023)</a>. E senarionan ta representá e rango den kua probablemente kambio di klima ta desaroyá. E rango akí ta dependé di tantu e kantidat di gas ku ta emití komo e sensibilidat di e sistema di klima. E senarionan ‘bou’ i ‘haltu’ ta reflehá e dos senarionan mas diferente.'
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
