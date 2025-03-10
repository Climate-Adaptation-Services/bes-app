import { writable } from 'svelte/store';

export const w = writable(0);
export const h = writable(0);

// export const datalaag = writable('Gemiddelde temperatuur');
export const datalaag = writable({indicator: "temperatureAvg", column: "Gemiddelde temperatuur", theme: "heter", season: "annual", textName: "Average temperature"});

export const theme = writable('heter')

export const country = writable(null)

export const countrySelection = writable(null)

export const lang = writable(null)

export const csvData = writable(null)

export const hoveredYear = writable(null)

export const indicatorOptionsCountry = writable([])