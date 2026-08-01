/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

LANGUAGE SYSTEM™

Central translation access

Version 1.0
==========================================
*/

import { en } from "./translations/en";
import { sl } from "./translations/sl";

import { LanguageState } from "./LanguageState";


const translations = {

    en,

    sl

};


export function getTranslations(

    languageId = LanguageState.getLanguage()

) {

    return (

        translations[languageId]

        ||

        translations.en

    );

}


export function t(

    path,

    languageId = LanguageState.getLanguage()

) {

    const translation =

        getTranslations(languageId);


    return path

        .split(".")

        .reduce(

            (value, key) =>

                value?.[key],

            translation

        )

        ||

        path;

}
