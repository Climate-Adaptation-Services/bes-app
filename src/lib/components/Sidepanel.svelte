<script>
    import { datalaag, theme, country, countrySelection, themeOptions } from "$lib/stores.js";
    import { t } from '$lib/i18n/translate.js';

    function handleClickTheme(event) {
		$theme = event.target.id 
        console.log(event.target.id)
        let selectedTheme = document.getElementsByClassName($theme)
        let prevTheme = document.querySelector('.active')
        let prevCaption= document.querySelector('.activecaption')
        console.log(selectedTheme)
        if(prevTheme) {
            prevTheme.classList.remove('active');
            prevCaption.classList.remove('activecaption');
        }
        selectedTheme[0].classList.add('active');
        selectedTheme[1].classList.add('activecaption');
    }
    
    function handleClickCountry(event) {
		$country = event.target.id    
        let selectedCountry= document.getElementById($country)      
        let prevCountry = document.querySelector('.activecountry')
        if(prevCountry) {
        prevCountry.classList.remove('activecountry');
        }
        selectedCountry.classList.add('activecountry');
	}

    let indicatorSentence = t('chooseIndicator');
    $: if($theme === 'slr'){
        indicatorSentence = ''}
    else{indicatorSentence = t('chooseIndicator')}

    let selectedIndex=0;
    $: if ($theme) {
        selectedIndex = 0;
    }

    console.log("Current theme:", $theme);
    console.log("themeOptions:", $themeOptions);
</script>

<section>
    <h2>{t('chooseTheme')}</h2>
    <div class="item">
        <img class = 'themelogo heat active' id = 'heat' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/hitte_carib.png" on:click={handleClickTheme}>
        <p class="caption heat activecaption">{t('titleheat')}</p>
    </div>
    <div class="item">
        <img class = 'themelogo drought' id = 'drought' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/droogte_carib.png" on:click={handleClickTheme}> 
        <p class="caption drought">{t('titledrought')}</p>
    </div>
    <div class="item">
        <img class = 'themelogo wind' id = 'wind' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/wind_carib.png" on:click={handleClickTheme}> 
        <p class="caption wind ">{t('titlewind')}</p>
    </div>
    <div class="item">
        <img class = 'themelogo slr' id = 'slr' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/zst_carib.png" on:click={handleClickTheme}> 
        <p class="caption slr">{t('titleslr')}</p>
    </div>
    
    <h2>{indicatorSentence}</h2>
    {#each $themeOptions as option, i}
    <label class="keuzes">
      <input
        type="radio"
        name="laag"
        value={option.indicator}
        on:click={() => {
          selectedIndex = i;
          $datalaag = option;
        }}
        checked={i === selectedIndex}
      />
      {t(option.indicator)}
    </label>
  {/each}
    

    
    {#if $countrySelection}
        <h2 class='kieslocatie'>{t('chooseLocation')}</h2>
        <img class='countrylogo bo activecountry' id='Bonaire' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/bonairenew.png" on:click={handleClickCountry}> 
        <figcaption class='countrycaptionbo'>Bonaire</figcaption>
        <img class='countrylogo se' id='Saba & St.Eustatius' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/saba_eus_gezelligbijelkaar.png" on:click={handleClickCountry}> 
        <figcaption class='countrycaptionse'>Saba & St. Eustatius</figcaption>
    {/if}
</section>

<style>

    .keuzes{
        margin-top:1vh;
        font-size: 2vh;
    }
    
    .caption{
        font-size:1.5vh;
        display: block;
        
    }

    div.item {
        vertical-align: top;
        display: inline-block;
        text-align: center;
        width: 6vw;
        margin:0vw;
        margin-bottom: 3vh; 
        }
    
    .kieslocatie{
        position: absolute;
        bottom: 33vh;
    }

    .themelogo{
        width:4vw;
            
    }

    .countrylogo{
        margin-top:2vh;
        position: absolute;
        bottom: 19vh;
        
    }

    .countrycaptionbo{
        position: absolute;
        bottom: 14vh;
        left: 5vw;
        text-align:center;
        font-size: 2.3vh;
    }

    .countrycaptionse{
        position: absolute;
        bottom: 14vh;
        left:14vw;
        font-size: 2.3vh;
        text-align:center
    }


    .bo{
        height: 13vh;
        left:4vw;
    }

    .se{
        height: 13vh;
        left: 14vw;
    }

    .themelogo:not(.active) {
        opacity: 0.3;
    }

    .caption:not(.activecaption) {
        opacity: 0;
    }

    .countrylogo:not(.activecountry) {
        opacity: 0.3;
    }

    h2{
	font-size: 2.3vh;
}

</style>
  