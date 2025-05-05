import { indicatorOptions } from './indicatorOptions';

export const areas = {
  bq: {
    area_id: 'bq',
    name: 'Bonaire',
    logo: 'https://raw.githubusercontent.com/sophievanderhorst/data/main/bonairenew.png',
    indicatorOptions: indicatorOptions['bq'],
    switchableTo: ['se'],
    dataUrls: {
      climate: 'https://raw.githubusercontent.com/sophievanderhorst/data/main/bonaire_klimaatdata.csv',
      seaLevel: 'https://gist.githubusercontent.com/stichtingcas/cdcf6d53bdfeac4494ad81a4b2878aab/raw/6aeabf231a8ddf4d7835436a3a695ac9091dff0f/bonaire-zeespiegelstijging.csv',
      llhi: 'https://gist.githubusercontent.com/stichtingcas/3687d450f1f31da3886d39bf19d46808/raw/d2c1a95aec66014486fe612fca0fd931ecb91de9/llhi-bonaire.csv'
    }
  },
  se: {
    area_id: 'se',
    name: 'Saba & St.Eustatius',
    logo: 'https://raw.githubusercontent.com/sophievanderhorst/data/main/saba_eus_gezelligbijelkaar.png',
    indicatorOptions: indicatorOptions['se'],
    switchableTo: ['bq'],
    dataUrls: {
      climate: 'https://raw.githubusercontent.com/sophievanderhorst/data/main/sabast_klimaatdata.csv',
      seaLevel: 'https://gist.githubusercontent.com/stichtingcas/86d27026230225096cc431697d0b0d94/raw/2d0a7a404447ce130f2d231cd3f7da1df38a65c0/saba-zeespiegelstijging.csv',
      llhi: 'https://gist.githubusercontent.com/stichtingcas/01a920f71325b35fc193d48f19dd065e/raw/baef6c01aa777844fad66c596eebee5ae37eb88f/llhi-saba.csv'
    }
  },
  sm: {
    area_id: 'sm',
    name: 'St. Martin',
    indicatorOptions: indicatorOptions['sm'],
    switchableTo: [],
    dataUrls: {
      climate: 'https://raw.githubusercontent.com/Climate-Adaptation-Services/data/refs/heads/main/climatestatistics/stmaarten_climatestatistics.csv',
      seaLevel: 'https://gist.githubusercontent.com/stichtingcas/86d27026230225096cc431697d0b0d94/raw/2d0a7a404447ce130f2d231cd3f7da1df38a65c0/saba-zeespiegelstijging.csv', // Please check if this is correct
      llhi: 'https://gist.githubusercontent.com/stichtingcas/01a920f71325b35fc193d48f19dd065e/raw/baef6c01aa777844fad66c596eebee5ae37eb88f/llhi-saba.csv' // Please check if this is correct
    }
  }
};
