<script>
  import { datalaag } from "$lib/stores.js";

  let Tekst = '';
  $: if($datalaag === 'Gemiddelde temperatuur'){
		Tekst = "De grafieken tonen de gemiddelde zomertemperatuur (°C) in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2100 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
  }
	else if($datalaag === 'Gemiddelde temperatuur droog seizoen'){
		Tekst = "De grafieken tonen de gemiddelde zomertemperatuur (°C) in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2085 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
  }
  else{
		Tekst = "De grafieken tonen de gemiddelde zomertemperatuur (°C) in het huidige klimaat (1981-2010) en voor het klimaat rond 2050 en 2085 (waarden voor het laagste (GL) en hoogste (WH) KNMI’14 klimaatscenario)."
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
