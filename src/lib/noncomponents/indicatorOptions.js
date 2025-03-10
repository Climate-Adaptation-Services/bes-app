import { text } from "d3";
import { t } from '$lib/i18n/translate.js';

export const indicatorOptions = {
    "Bonaire": [
        {
            indicator: "temperatureAvg",
            column: "Gemiddelde temperatuur",
            theme: "heter",
            season: "annual",
            textName: t("temperatureAvg"),
        },
        {
            indicator: "temperatureAvgDry",
            column: "Gemiddelde temperatuur droog seizoen",
            theme: "heter",
            season: "dry",
            textName: t("temperatureAvgDry"),
        },
        {
            indicator: "temperatureAvgWet",
            column: "Gemiddelde temperatuur nat seizoen",
            theme: "heter",
            season: "wet",
            textName: t("temperatureAvgWet"),
        },
        {
            indicator: "precipitationAvg",
            column: "Gemiddelde neerslag", 
            theme: "droger",
            season: "annual",
            textName: t("precipitationAvg"),
        },
        {
            indicator: "precipitationAvgDry",
            column: "Gemiddelde neerslag droog seizoen",
            theme: "droger",
            season: "dry",
            textName: t("precipitationAvgDry"),
        },
        {
            indicator: "precipitationAvgWet",
            column: "Gemiddelde neerslag nat seizoen",
            theme: "droger",
            season: "wet",
            textName: t("precipitationAvgWet"),
        },
        {
            indicator: "windAvg",
            column: "Gemiddelde windsnelheid",
            theme: "wind",
            season: "annual",
            textName: t("windAvg"),
        },
        {
            indicator: "windAvgDry",
            column: "Gemiddelde windsnelheid droog seizoen",
            theme: "wind",
            season: "dry",
            textName: t("windAvgDry"),
        },
        {
            indicator: "windAvgWet",
            column: "Gemiddelde windsnelheid nat seizoen",
            theme: "wind",
            season: "wet",
            textName: t("windAvgWet"),
        }

    ],
    "Saba & St.Eustatius": [
        {
            indicator: "temperatureAvg",
            column: "Gemiddelde temperatuur",
            theme: "heter",
            season: "annual",
        },
        {
            indicator: "temperatureAvgDry",
            column: "Gemiddelde temperatuur droog seizoen",
            theme: "heter",
            season: "dry",
        },
        {
            indicator: "temperatureAvgWet",
            column: "Gemiddelde temperatuur nat seizoen",
            theme: "heter",
            season: "wet",
        },
        {
            indicator: "precipitationAvg",
            column: "Gemiddelde neerslag", 
            theme: "droger",
            season: "annual",
        },
        {
            indicator: "precipitationAvgDry",
            column: "Gemiddelde neerslag droog seizoen",
            theme: "droger",
            season: "dry",
        },
        {
            indicator: "precipitationAvgWet",
            column: "Gemiddelde neerslag nat seizoen",
            theme: "droger",
            season: "wet",
        },
        {
            indicator: "windAvg",
            column: "Gemiddelde windsnelheid",
            theme: "wind",
            season: "annual",
        },
        {
            indicator: "windAvgDry",
            column: "Gemiddelde windsnelheid droog seizoen",
            theme: "wind",
            season: "dry",
        },
        {
            indicator: "windAvgWet",
            column: "Gemiddelde windsnelheid nat seizoen",
            theme: "wind",
            season: "wet",
        }

    ],
    "St. Maarten": 
    [
        {
            indicator: "temperatureAvg",
            column: "Gemiddelde temperatuur",
            theme: "heter",
            season: "annual",
        },
        {
            indicator: "temperatureAvgDry",
            column: "Gemiddelde temperatuur droog seizoen",
            theme: "heter",
            season: "dry",
        },
        {
            indicator: "temperatureAvgWet",
            column: "Gemiddelde temperatuur nat seizoen",
            theme: "heter",
            season: "wet",
        },
        {
            indicator: "precipitationAvg",
            column: "Gemiddelde neerslag", 
            theme: "droger",
            season: "annual",
        },
        {
            indicator: "precipitationAvgDry",
            column: "Gemiddelde neerslag droog seizoen",
            theme: "droger",
            season: "dry",
        },
        {
            indicator: "precipitationAvgWet",
            column: "Gemiddelde neerslag nat seizoen",
            theme: "droger",
            season: "wet",
        },
        {
            indicator: "windAvg",
            column: "Gemiddelde windsnelheid",
            theme: "wind",
            season: "annual",
        },
        {
            indicator: "windAvgDry",
            column: "Gemiddelde windsnelheid droog seizoen",
            theme: "wind",
            season: "dry",
        },
        {
            indicator: "windAvgWet",
            column: "Gemiddelde windsnelheid nat seizoen",
            theme: "wind",
            season: "wet",
        }
    ]
}