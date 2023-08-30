import { dsv } from 'd3'

export function load(){
  const data = dsv(',', "https://raw.githubusercontent.com/sophievanderhorst/data/main/bonaire_klimaatdata.csv")
  return { data}
}