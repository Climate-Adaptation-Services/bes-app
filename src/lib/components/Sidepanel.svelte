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

    let themeSentence = 'Choose an indicator:';
	$: if($theme === 'zst'){
		themeSentence = ''}
	else{themeSentence = 'Choose an indicator:'}


    const optionsHeter = [{
		value: 'Gemiddelde temperatuur',
		label: 'Average temperature',
	}, {
		value: 'Gemiddelde temperatuur droog seizoen',
		label: 'Average temperature dry season',
	}, {
		value: 'Gemiddelde temperatuur nat seizoen',
		label: 'Average temperature wet season',
	}]

    const optionsDroger = [{
		value: 'Gemiddelde neerslag',
		label: 'Average precipitation',
	}, {
		value: 'Gemiddelde neerslag droog seizoen',
		label: 'Average precipitation dry season',
	}, {
		value: 'Gemiddelde neerslag nat seizoen',
		label: 'Average precipitation wet season',
	}]

    const optionsWind = [{
		value: 'Gemiddelde wind',
		label: 'Average wind speed',
	}, {
		value: 'Gemiddelde wind droog seizoen',
		label: 'Average wind speed dry season',
	}, {
		value: 'Gemiddelde wind nat seizoen',
		label: 'Average wind speed wet season',
	}]
   

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
    <h2>Choose a theme:</h2>
    <div class="item">
        <img class = 'themelogo heter active' id = 'heter' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/heter.png" on:click={handleClickTheme}>
        <p class="caption heter activecaption">It's getting hotter</p>
    </div>
    <div class="item">
        <img class = 'themelogo droger' id = 'droger' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/droger.png" on:click={handleClickTheme}> 
        <p class="caption droger">It's getting dryer</p>
    </div>
    <div class="item">
        <img class = 'themelogo wind' id = 'wind' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/wind.png" on:click={handleClickTheme}> 
        <p class="caption wind ">There will be more wind</p>
    </div>
    <div class="item">
        <img class = 'themelogo zst' id = 'zst' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/zst.png" on:click={handleClickTheme}> 
        <p class="caption zst">The sea levels are rising</p>
    </div>
    
    <h2>{themeSentence}</h2>
    {#each themeOptions as { value, label }}
        <label class='keuzes'>
            <input
                type="radio"
                label = {label} 
                name="laag"
                value={value}
                bind:group={$datalaag}
            />
            {label}
        </label>
    {/each}

    <h2 class = 'kieslocatie'>Choose a location:</h2>
    <img class = 'countrylogo bo activecountry' id = 'Bonaire' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/bonairenew.png" on:click={handleClickCountry}> 
    <figcaption class = 'countrycaptionbo'>Bonaire</figcaption>
    <img class = 'countrylogo se' id = 'st.Eustatius & Saba' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/saba_eus_gezelligbijelkaar.png" on:click={handleClickCountry}> 
    <figcaption class = 'countrycaptionse'>st. Eustatius & Saba</figcaption>    
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
  