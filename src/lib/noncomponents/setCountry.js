import { country,countrySelection,indicatorOptionsCountry } from "$lib/stores"
import {indicatorOptions} from "$lib/noncomponents/indicatorOptions" 
import { get } from 'svelte/store';

export function setCountry(country_iso){
    if(country_iso === 'bq'){
        country.set('Bonaire')
        countrySelection.set(true)
    }else if(country_iso === 'sm'){
        country.set('St. Martin')
        countrySelection.set(false)
    }else{
        country.set('Bonaire')
        countrySelection.set(true)
    }
}