import { dsv } from 'd3'

export function load(){
  const bonaire_klimaatdata = dsv(',', "https://raw.githubusercontent.com/sophievanderhorst/data/main/bonaire_klimaatdata.csv")
  const zeespiegel_projectiedata = dsv(',', "https://gist.githubusercontent.com/stichtingcas/650d8a3acefc070615ac5ec2127f6289/raw/b574e8efd5a5c3a13a0f5582f8ac1664fa247bae/zeespiegel-k14-scenarios.csv")
  const zeespiegel_historisch = dsv(',', "https://gist.githubusercontent.com/stichtingcas/a1bf8178404a14f81aeb9d02b21058f5/raw/fc65d6816f0c2bfde5787775abcd81bd7d31e4a5/zeespiegelstijging-historisch.csv")

  return { bonaire_klimaatdata, zeespiegel_historisch, zeespiegel_projectiedata }
}