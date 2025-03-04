import { country,countrySelection } from "$lib/stores"

export function setCountry(country_iso){
    if(country_iso === 'bq'){
        country.set('Bonaire')
        countrySelection.set(true)
    }else if(country_iso === 'sm'){
        country.set('St. Maarten')
        countrySelection.set(false)
    }else{
        country.set('Bonaire')
        countrySelection.set(true)
    }
}