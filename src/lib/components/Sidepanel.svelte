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

    let themeSentence = 'Skohe un indikadó:';
	$: if($theme === 'zst'){
		themeSentence = ''}
	else{themeSentence = 'Skohe un indikadó:'}


    const optionsHeter = [{
		value: 'Gemiddelde temperatuur',
		label: 'Temperatura promedio',
	}, {
		value: 'Gemiddelde temperatuur droog seizoen',
		label: 'Temperatura promedio di temporada seku',
	}, {
		value: 'Gemiddelde temperatuur nat seizoen',
		label: 'Temperatura promedio di temporada ku awa',
	}]

    const optionsDroger = [{
		value: 'Gemiddelde neerslag',
		label: 'Yobida promedio',
	}, {
		value: 'Gemiddelde neerslag droog seizoen',
		label: 'Yobida promedio den temporada seku',
	}, {
		value: 'Gemiddelde neerslag nat seizoen',
		label: 'Yobida promedio den temporada di yobida',
	}]

    const optionsWind = [{
		value: 'Gemiddelde windsnelheid',
		label: 'Velosidat promedio di bientu',
	}, {
		value: 'Gemiddelde windsnelheid droog seizoen',
		label: 'Velosidat promedio di bientu den temporada seku',
	}, {
		value: 'Gemiddelde windsnelheid nat seizoen',
		label: 'Velosidat promedio di bientu den temporada di yobida',
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
     $theme === 'wind' ? ($datalaag = 'Gemiddelde windsnelheid'):
    ($datalaag = 'Gemiddelde neerslag');

</script>

<section>
    <h2>Skohe un tema:</h2>
    <div class="item">
        <img class = 'themelogo heter active' id = 'heter' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/hitte_carib.png" on:click={handleClickTheme}>
        <p class="caption heter activecaption">Ta birando mas kalor</p>
    </div>
    <div class="item">
        <img class = 'themelogo droger' id = 'droger' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/droogte_carib.png" on:click={handleClickTheme}> 
        <p class="caption droger">Ta birando mas seku</p>
    </div>
    <div class="item">
        <img class = 'themelogo wind' id = 'wind' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/wind_carib.png" on:click={handleClickTheme}> 
        <p class="caption wind ">Lo tin mas bientu</p>
    </div>
    <div class="item">
        <img class = 'themelogo zst' id = 'zst' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/zst_carib.png" on:click={handleClickTheme}> 
        <p class="caption zst">Nivel di laman ta subiendo</p>
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

    <h2 class = 'kieslocatie'>Skohe un lugá:</h2>
    <img class = 'countrylogo bo activecountry' id = 'Bonaire' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/bonairenew.png" on:click={handleClickCountry}> 
    <figcaption class = 'countrycaptionbo'>Boneiru</figcaption>
    <img class = 'countrylogo se' id = 'st.Eustatius & Saba' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/saba_eus_gezelligbijelkaar.png" on:click={handleClickCountry}> 
    <figcaption class = 'countrycaptionse'>Statia & Saba</figcaption>    
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
        left:15vw;
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
  