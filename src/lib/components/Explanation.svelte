<script>
  import { theme, datalaag } from "$lib/stores.js";
  import { t } from '$lib/i18n/translate.js';

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
		Tekst = t('explanationAnnual', {
      variable: variable.split(' ').slice(0, 2).join(' ').toLowerCase()
    })
  	}


	  
	else if($theme === 'zst' ){
			Tekst = t('explanationSeaLevelRise')
	}

	else if($theme !== 'zst' ){
		Tekst = t('explanationSeason', {
			variable: variable.split(' ').slice(0, 2).join(' ').toLowerCase(), 
			season: variable.split(' ').slice(2,3).join(' '). toLowerCase()
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
