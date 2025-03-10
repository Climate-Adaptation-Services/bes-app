<script>
    import { datalaag, theme, country, countrySelection, indicatorOptionsCountry } from "$lib/stores.js";
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
    let themeOptions = [];
    $: if($theme === 'zst'){
        indicatorSentence = ''}
    else{indicatorSentence = t('chooseIndicator')}

    // console.log("indicatoroptions",indicatorOptionsCountry)

    const optionsHeter = [
    "temperatureAvg",
    "temperatureAvgDry",
    "temperatureAvgWet",  
    ]  

    const optionsDroger = [
    "precipitationAvg",
    "precipitationAvgDry",
    "precipitationAvgWet",    
]

    const optionsWind = [
    "windAvg",
    "windAvgDry",
    "windAvgWet"    
    ]
   
    // let themeOptions = []
    // let themeOptions = optionsHeter
    // $: if($theme === 'heter'){
	// 	themeOptions = optionsHeter}
	// else if($theme === 'droger'){
	// 	themeOptions = optionsDroger}
    // else if($theme === 'wind'){
	// 	themeOptions = optionsWind}
	// else{themeOptions = []}

    // console.log("type",typeof($indicatorOptionsCountry))
//     console.log(Array.isArray($indicatorOptionsCountry) ? $indicatorOptionsCountry.filter(indicatorOption => {
//   return indicatorOption.theme === "heter"
// }) : []);

    $: {
        // Filter options based on the current theme
        const filteredOptions = $indicatorOptionsCountry.filter(option => option.theme === $theme);
        themeOptions = filteredOptions;
        console.log("Filtered themeOptions:", themeOptions);

        // Set the default datalaag if any options are available
        if (themeOptions.length) {
            $datalaag = themeOptions[0];
            console.log("Selected datalaag:", $datalaag);
        } else {
            $datalaag = null;
        }
    }

    console.log("Current theme:", $theme);

</script>

<section>
    <h2>{t('chooseTheme')}</h2>
    <div class="item">
        <img class = 'themelogo heter active' id = 'heter' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/hitte_carib.png" on:click={handleClickTheme}>
        <p class="caption heter activecaption">Het wordt heter</p>
    </div>
    <div class="item">
        <img class = 'themelogo droger' id = 'droger' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/droogte_carib.png" on:click={handleClickTheme}> 
        <p class="caption droger">Het wordt droger</p>
    </div>
    <div class="item">
        <img class = 'themelogo wind' id = 'wind' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/wind_carib.png" on:click={handleClickTheme}> 
        <p class="caption wind ">Er zal meer wind komen</p>
    </div>
    <div class="item">
        <img class = 'themelogo zst' id = 'zst' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/zst_carib.png" on:click={handleClickTheme}> 
        <p class="caption zst">De zeespiegel stijgt</p>
    </div>
    
    <h2>{indicatorSentence}</h2>
    {#each themeOptions as option}
        <label class='keuzes'>
            <input
                type="radio"
                label={option.indicator}
                name="laag"
                value={option.indicator}
                on:change={() => $datalaag = option}
            />
            {option.textName}
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
  