<script>
  import { theme, datalaag } from "$lib/stores.js";
  import { t } from '$lib/i18n/translate.js';

  let Tekst = '';

	$: if($theme === 'slr' ){
			Tekst = t('explanationSeaLevelRise')
	}

	else if($datalaag.season==='annual') {
		Tekst = t('explanationAnnual', {
		variable: t($datalaag.indicator).split(' ').slice(0,2).join(' ').toLowerCase()
	})
	}

	else {
		Tekst = t('explanationSeason', {
			variable: t($datalaag.indicator).split(' ').slice(0,2).join(' ').toLowerCase(), 
			season: t($datalaag.season)
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
