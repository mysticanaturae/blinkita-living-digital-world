/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

LANGUAGE SWITCHER™

Global language control

Version 1.2

==========================================
*/

import {
    useLanguage,
    LanguageState
} from "../../core/i18n/LanguageState";


export default function LanguageSwitcher() {

    const language =
        useLanguage();


    function handleLanguageChange(languageId) {

        LanguageState.setLanguage(
            languageId
        );

    }


    return (

        <div className="language-switcher">

            <button

                type="button"

                className={
                    language === "en"
                        ? "active"
                        : ""
                }

                onClick={() =>
                    handleLanguageChange("en")
                }

                aria-pressed={
                    language === "en"
                }

                title="English"

            >

                🇬🇧

            </button>


            <span
                className="language-divider"
                aria-hidden="true"
            >

                /

            </span>


            <button

                type="button"

                className={
                    language === "sl"
                        ? "active"
                        : ""
                }

                onClick={() =>
                    handleLanguageChange("sl")
                }

                aria-pressed={
                    language === "sl"
                }

                title="Slovenščina"

            >

                🇸🇮

            </button>

        </div>

    );

}
