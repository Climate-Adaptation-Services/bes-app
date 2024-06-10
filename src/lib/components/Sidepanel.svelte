<script>
    import { datalaag, theme, country } from "$lib/stores.js";

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

    // let themeSentence = 'Het wordt heter';
	// $: if($theme === 'heter'){
	// 	themeSentence = 'Het wordt heter'}
	// else if($theme === 'droger'){
	// 	themeSentence = 'Het wordt droger'}
    // else if($theme === 'wind'){
	// 	themeSentence = 'Er komt meer wind'}
	// else{themeSentence = 'De zeespiegel stijgt'}

    let themeSentence = 'Kies een indicator:';
	$: if($theme === 'zst'){
		themeSentence = ''}
	else{themeSentence = 'Kies een indicator:'}

    const optionsHeter = ['Gemiddelde temperatuur', 'Gemiddelde temperatuur droog seizoen', 'Gemiddelde temperatuur nat seizoen']
    const optionsDroger = ['Gemiddelde neerslag', 'Gemiddelde neerslag droog seizoen', 'Gemiddelde neerslag nat seizoen']
    const optionsWind = ['Gemiddelde wind', 'Gemiddelde wind droog seizoen', 'Gemiddelde wind nat seizoen']

    let themeOptions = optionsHeter
    $: if($theme === 'heter'){
		themeOptions = optionsHeter}
	else if($theme === 'droger'){
		themeOptions = optionsDroger}
    else if($theme === 'wind'){
		themeOptions = optionsWind}
	else{themeOptions = []}
    
    $: $theme === 'heter' ? ($datalaag = 'Gemiddelde temperatuur'):
     $theme === 'wind' ? ($datalaag = 'Gemiddelde wind'):
    ($datalaag = 'Gemiddelde neerslag');

</script>

<section>
    <h2>Kies een thema:</h2>
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
        <p class="caption wind ">Er komt meer wind</p>
    </div>
    <div class="item">
        <img class = 'themelogo zst' id = 'zst' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/zst_carib.png" on:click={handleClickTheme}> 
        <p class="caption zst">De zeespiegel stijgt</p>
    </div>
    
    <h2>{themeSentence}</h2>
    {#each themeOptions as option}
        <label class='keuzes'>
            <input
                type="radio"
                name="laag"
                value={option}
                bind:group={$datalaag}
            />
            {option}
        </label>
    {/each}

    <h2 class = 'kieslocatie'>Kies een locatie:</h2>
    <img class = 'countrylogo bo activecountry' id = 'Bonaire' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/bonairenew.png" on:click={handleClickCountry}> 
    <figcaption class = 'countrycaptionbo'>Bonaire</figcaption>
    <img class = 'countrylogo se' id = 'st.Eustatius & Saba' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/saba_eus_gezelligbijelkaar.png" on:click={handleClickCountry}> 
    <figcaption class = 'countrycaptionse'>Saba & St. Eustatius </figcaption>    
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
  