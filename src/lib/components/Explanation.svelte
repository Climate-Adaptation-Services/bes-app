<script>
  import { theme, datalaag } from "$lib/stores.js";
  import { t } from '$lib/i18n/translate.js';

  let variable
	$:  $theme === 'zst' ? (variable = 'Sea level rise'):
		$datalaag.column === 'Gemiddelde temperatuur' ? (variable = 'Gemiddelde temperatuur'):
		$datalaag.column === 'Gemiddelde temperatuur droog seizoen' ? (variable = 'Gemiddelde temperatuur droge season'):
		$datalaag.column === 'Gemiddelde temperatuur nat seizoen' ? (variable = 'Gemiddelde temperatuur natte season'):
		$datalaag.column === 'Gemiddelde neerslag' ? (variable = 'Gemiddelde neerslag'):
		$datalaag.column === 'Gemiddelde neerslag droog seizoen' ? (variable = 'Gemiddelde neerslag droge season'):
		$datalaag.column === 'Gemiddelde neerslag nat seizoen' ? (variable = 'Gemiddelde neerslag natte season'):
		$datalaag.column === 'Gemiddelde windsnelheid' ? (variable = 'Gemiddelde windsnelheid'):
		$datalaag.column === 'Gemiddelde windsnelheid droog seizoen' ? (variable = 'Gemiddelde windsnelheid droge seizoen'):
		$datalaag.column === 'Gemiddelde windsnelheid nat seizoen' ? (variable = 'Gemiddelde windsnelheid natte seizoen'):
		(variable = String($datalaag.column));

console.log($datalaag.column)
console.log("variable",variable)
  let Tekst = '';
  $: if($datalaag.season==='annual') {
		Tekst = t('explanationAnnual', {
      variable: $datalaag.column.split(' ').slice(0, 2).join(' ').toLowerCase()
    })
  	}


	  
	else if($theme === 'zst' ){
			Tekst = t('explanationSeaLevelRise')
	}

	else if($theme !== 'zst' ){
		Tekst = t('explanationSeason', {
			variable: $datalaag.indicator, 
			season: $datalaag.season
		})
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
