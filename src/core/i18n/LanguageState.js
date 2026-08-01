/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

LANGUAGE STATE™

Reactive language state
for the Living World™

Version 1.1
==========================================
*/

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "blinkita_language";

let currentLanguage =
    localStorage.getItem(STORAGE_KEY) || "en";

const listeners = new Set();


function notify() {

    listeners.forEach(

        listener => listener()

    );

}


export const LanguageState = {

    getLanguage() {

        return currentLanguage;

    },


    setLanguage(languageId) {

        currentLanguage = languageId;

        localStorage.setItem(

            STORAGE_KEY,

            languageId

        );

        notify();

        return currentLanguage;

    },


    reset() {

        currentLanguage = "en";

        localStorage.removeItem(

            STORAGE_KEY

        );

        notify();

        return currentLanguage;

    },


    subscribe(listener) {

        listeners.add(listener);

        return () => {

            listeners.delete(listener);

        };

    }

};


export function useLanguage() {

    return useSyncExternalStore(

        LanguageState.subscribe,

        LanguageState.getLanguage,

        LanguageState.getLanguage

    );

}
