import { writable } from 'svelte/store';

export const w = writable(0);
export const h = writable(0);

export const datalaag = writable('Gemiddelde temperatuur');

export const theme = writable('heter')

export const country = writable('Bonaire')

export const csvData = writable(null)

export const hoveredYear = writable(null)
