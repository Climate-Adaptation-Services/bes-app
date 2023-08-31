<script>
    import { datalaag, theme, country } from "$lib/stores.js";

    function handleClickTheme(event) {
		$theme = event.target.id 
        let selectedTheme = document.getElementById($theme)
        let prevTheme = document.querySelector('.active')
        if(prevTheme) {
            prevTheme.classList.remove('active');
        }
        selectedTheme.classList.add('active');
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

    let themeSentence = 'Het wordt heter';
	$: if($theme === 'heter'){
		themeSentence = 'Het wordt heter'}
	else if($theme === 'droger'){
		themeSentence = 'Het wordt droger'}
    else if($theme === 'wind'){
		themeSentence = 'Er komt meer wind'}
	else{themeSentence = 'De zeespiegel stijgt'}

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
    
    let defaultTheme
    $: $theme === 'heter' ? ($datalaag = 'Gemiddelde temperatuur'):
     $theme === 'wind' ? ($datalaag = 'Gemiddelde wind'):
    ($datalaag = 'Gemiddelde neerslag');


</script>

<section>
    <h2>Kies een thema</h2>
    <img class = 'themelogo heter active' id = 'heter' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/heter.png" on:click={handleClickTheme}> 
    <img class = 'themelogo droger' id = 'droger' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/droger.png" on:click={handleClickTheme}> 
    <img class = 'themelogo wind' id = 'wind' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/wind.png" on:click={handleClickTheme}> 
    <img class = 'themelogo zst' id = 'zst' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/zst.png" on:click={handleClickTheme}> 
    
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

    <h2>Op:</h2>
    <img class = 'countrylogo bo activecountry' id = 'Bonaire' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/bonaire.png" on:click={handleClickCountry}> 
    <img class = 'countrylogo se' id = 'st.Eustatius & Saba' src="https://raw.githubusercontent.com/sophievanderhorst/data/main/s%26e.png" on:click={handleClickCountry}> 
  
</section>

<style>

    .keuzes{
        margin-top:1vh;
        font-size: 2vh;
    }    

    .themelogo{
        width:4vw;
        margin:1vw;
        margin-bottom: 5vh;     
    }

    .countrylogo{
        margin:1.5vw;
        margin-top:8vh;
    }

    .bo{
        height: 13vh;
        left:4vw;
    }

    .se{
        height: 10vh;
    }

    .themelogo:not(.active) {
        opacity: 0.3;
    }


    .countrylogo:not(.activecountry) {
        opacity: 0.3;
    }
</style>
  