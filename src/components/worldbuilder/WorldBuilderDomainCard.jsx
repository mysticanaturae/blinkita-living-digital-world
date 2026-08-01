/*
==========================================
BLINKITA OS™

WORLD BUILDER DOMAIN CARD™

Creation path selector
of the World Builder™

Connected with:
- WorldBuilderState™
- WorldBuilderDomains™
- WorldBuilderActions™

Version 1.1
==========================================
*/

import {
    useLanguage
} from "../../core/i18n/LanguageState";


import {
    t
} from "../../core/i18n/LanguageSystem";


import {
    WorldBuilderDomains
} from "../../core/worldbuilder/WorldBuilderDomains";


import {
    selectDomain
} from "../../core/worldbuilder/WorldBuilderActions";


export default function WorldBuilderDomainCard() {

    const language =
        useLanguage();


    function handleSelect(domain) {

        selectDomain(domain);

    }


    const domainKeys = {

        "digital-worlds":
            "digitalWorlds",

        "books":
            "books",

        "businesses":
            "businesses",

        "academies":
            "academies",

        "communities":
            "communities",

        "creative-projects":
            "creativeProjects",

        "organizations":
            "organizations"

    };


    return (

        <section className="living-card living-section">

            <h2>

                🌱{" "}

                {
                    t(
                        "worldBuilder.domains.title"
                    )
                }

            </h2>


            <p>

                {
                    t(
                        "worldBuilder.domains.introduction"
                    )
                }

            </p>


            <div className="living-grid">

                {

                    WorldBuilderDomains.map(

                        domain => {

                            const translationKey =
                                domainKeys[domain.id];


                            const translatedDomain =
                                translationKey
                                    ? t(
                                        `worldBuilder.domains.${translationKey}`
                                    )
                                    : {};


                            return (

                                <article

                                    key={domain.id}

                                    className="living-card"

                                >

                                    <h3>

                                        {domain.icon}

                                        {" "}

                                        {
                                            translatedDomain.name
                                            ||
                                            domain.name
                                        }

                                    </h3>


                                    <p>

                                        {
                                            translatedDomain.description
                                            ||
                                            domain.description
                                        }

                                    </p>


                                    <button

                                        className="living-button"

                                        onClick={() =>
                                            handleSelect(domain)
                                        }

                                    >

                                        {
                                            t(
                                                "worldBuilder.domains.choose"
                                            )
                                        }

                                    </button>

                                </article>

                            );

                        }

                    )

                }

            </div>

        </section>

    );

}
