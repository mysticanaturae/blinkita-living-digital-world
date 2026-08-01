/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

LANGUAGE REGISTRY™

Central language definition layer

Version 1.0
==========================================
*/

export const languages = {

    en: {

        id: "en",

        name: "English",

        nativeName: "English"

    },


    sl: {

        id: "sl",

        name: "Slovenian",

        nativeName: "Slovenščina"

    }

};


export function getLanguage(languageId) {

    return languages[languageId] || languages.en;

}


export function getAllLanguages() {

    return Object.values(languages);

}
