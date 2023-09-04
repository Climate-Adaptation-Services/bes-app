<script>
  import { datalaag } from "$lib/stores.js";

  let Tekst = '';
  $: if($datalaag === 'Gemiddelde temperatuur'){
		Tekst = "De grafieken tonen de gemiddelde temperatuur (°C) in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
  }
	else if($datalaag === 'Gemiddelde temperatuur droog seizoen'){
		Tekst = "De grafieken tonen de gemiddelde temperatuur (°C) tijdens het droge seizoen in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100(waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
  }
  	else if($datalaag === 'Gemiddelde temperatuur nat seizoen'){
		Tekst = "De grafieken tonen de gemiddelde temperatuur (°C) tijdens het droge seizoen in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
	}
	else if($datalaag === 'Gemiddelde neerslag'){
		Tekst = "De grafieken tonen de gemiddelde neerslag (mm) in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
	}
	else if($datalaag === 'Gemiddelde neerslag droog seizoen'){
		Tekst = "De grafieken tonen de gemiddelde neerslag (mm) tijdens het droge seizoen in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
	}
	else if($datalaag === 'Gemiddelde neerslag nat seizoen'){
		Tekst = "De grafieken tonen de gemiddelde neerslag (mm) tijdens het natte seizoen in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
	}
	else if($datalaag === 'Gemiddelde wind'){
		Tekst = "De grafieken tonen de gemiddelde windsnelheid (m/s) in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
	}
	else if($datalaag === 'Gemiddelde wind droog seizoen'){
		Tekst = "De grafieken tonen de gemiddelde windsnelheid (m/s) tijdens het droge seizoen in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
	}
	else if($datalaag === 'Gemiddelde wind nat seizoen'){
		Tekst = "De grafieken tonen de gemiddelde windsnelheid (m/s) tijdens het natte seizoen in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
	}
	else if($datalaag === 'Zeespiegelstijging'){
		Tekst = "De grafiek toont de zeespiegelstijging."
	}
</script>

<section>
  <div>
    <p class='explanation'>{Tekst}</p>
  </div>

</section>

<style>

.explanation{
		flex:5;
		display: flex;
		align-items: center;
		margin:15px;
		margin-top:0px;
		font-size:2vh;
	}
 
</style>
