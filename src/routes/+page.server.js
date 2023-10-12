import { dsv } from 'd3'

export function load(){
  const bonaire_klimaatdata = dsv(',', "https://raw.githubusercontent.com/sophievanderhorst/data/main/bonaire_klimaatdata.csv")
  const zeespiegel_projectiedata_bonaire = dsv(',', "https://gist.githubusercontent.com/stichtingcas/cdcf6d53bdfeac4494ad81a4b2878aab/raw/6aeabf231a8ddf4d7835436a3a695ac9091dff0f/bonaire-zeespiegelstijging.csv")
  const zeespiegel_projectiedata_saba = dsv(',', "https://gist.githubusercontent.com/stichtingcas/86d27026230225096cc431697d0b0d94/raw/2d0a7a404447ce130f2d231cd3f7da1df38a65c0/saba-zeespiegelstijging.csv")
  const zeespiegel_projectiedata_bonaire_llhi = dsv(',', "https://gist.githubusercontent.com/stichtingcas/3687d450f1f31da3886d39bf19d46808/raw/d2c1a95aec66014486fe612fca0fd931ecb91de9/llhi-bonaire.csv")
  const zeespiegel_historisch = dsv(',', "https://gist.githubusercontent.com/stichtingcas/a1bf8178404a14f81aeb9d02b21058f5/raw/fc65d6816f0c2bfde5787775abcd81bd7d31e4a5/zeespiegelstijging-historisch.csv")
  const sabast_klimaatdata = dsv(',', "https://raw.githubusercontent.com/sophievanderhorst/data/main/sabast_klimaatdata.csv")

  return { bonaire_klimaatdata, sabast_klimaatdata, zeespiegel_historisch, zeespiegel_projectiedata_bonaire, zeespiegel_projectiedata_saba, zeespiegel_projectiedata_bonaire_llhi }
}

