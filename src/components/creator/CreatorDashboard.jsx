/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR DASHBOARD™

Creator identity and evolution space

Version 4.1
==========================================
*/

import {
    useState
} from "react";


import {
    useLanguage
} from "../../core/i18n/LanguageState";


import {
    t
} from "../../core/i18n/LanguageSystem";


import {
    getCreatorState
} from "../../core/creator/CreatorState";


import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";


import WorldBuilderEvolutionCard
from "../evolution/WorldBuilderEvolutionCard";


import WorldBuilderDomainCard
from "../worldbuilder/WorldBuilderDomainCard";


export default function CreatorDashboard() {

    const language =
        useLanguage();


    const creatorState =
        getCreatorState() || {};


    const worldState =
        getWorldState() || {};


    const creator =
        creatorState.creator || {

            id: null,

            identity: {

                name: "",
                archetype: "Explorer",
                description: ""

            },

            evolution: {

                level: 1,
                experience: 0,
                stage: "Beginning"

            }

        };


    const worlds =
        creatorState.worlds || [];


    const evolution =
        creatorState.evolution ||
        creator.evolution;


    const worldEvolution =
        worldState.evolution || {};


    const worldGovernance =
        worldState.governance || {};


    const worldDecision =
        worldState.decision || {};


    const worldAction =
        worldState.action || {};


    const creatorArchetype =
        creator.identity?.archetype || "";


    const normalizedArchetype =
        creatorArchetype.toLowerCase();


    const translatedArchetype =

        normalizedArchetype === "explorer"

            ? t("archetypes.explorer")

            : creatorArchetype;


    const creatorStage =
        evolution?.stage || "";


    const translatedCreatorStage =

        creatorStage.toLowerCase() === "beginning"

            ? t("creatorStages.beginning")

            :

        creatorStage.toLowerCase() === "creation"

            ? t("creatorStages.creation")

            :

        creatorStage;


    const [name, setName] = useState(

        creator.identity?.name || ""

    );


    const [archetype, setArchetype] = useState(

        creator.identity?.archetype || "Explorer"

    );


    const [description, setDescription] = useState(

        creator.identity?.description || ""

    );


    const [saved, setSaved] = useState(false);


    function handleSaveIdentity() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...creator.identity,

                name:
                    name.trim() ||
                    t(
                        "dashboard.anonymousCreator"
                    ),

                archetype:
                    archetype.trim() ||
                    t(
                        "dashboard.explorer"
                    ),

                description:
                    description.trim()

            }

        };


        updateWorldState({

            creator: updatedCreator

        });


        setSaved(true);


        console.log(

            "🌱 Creator Identity Saved:",

            updatedCreator.identity

        );


        setTimeout(() => {

            setSaved(false);

        }, 2500);

    }


    return (

        <section className="living-page creator-dashboard">

            <header className="living-header">

                <h1>

                    🌱{" "}

                    {t(
                        "dashboard.creatorWelcome"
                    )}

                </h1>


                <p>

                    {
                        t(
                            "dashboard.creatorIntroduction"
                        )
                    }

                </p>

            </header>


            <section className="living-card living-section">

                <h2>

                    {
                        t(
                            "dashboard.creatorIdentity"
                        )
                    }

                </h2>


                <p>

                    {
                        t(
                            "dashboard.creatorIdentityPrompt"
                        )
                    }

                </p>


                <div className="creator-identity-form">

                    <div>

                        <label>

                            {
                                t(
                                    "dashboard.name"
                                )
                            }

                        </label>


                        <input

                            type="text"

                            value={name}

                            onChange={(event) =>
                                setName(
                                    event.target.value
                                )
                            }

                            placeholder={
                                t(
                                    "dashboard.yourName"
                                )
                            }

                        />

                    </div>


                    <div>

                        <label>

                            {
                                t(
                                    "dashboard.archetype"
                                )
                            }

                        </label>


                        <input

                            type="text"

                            value={archetype}

                            onChange={(event) =>
                                setArchetype(
                                    event.target.value
                                )
                            }

                            placeholder={
                                t(
                                    "dashboard.archetypePlaceholder"
                                )
                            }

                        />

                    </div>


                    <div>

                        <label>

                            {
                                t(
                                    "dashboard.aboutYou"
                                )
                            }

                        </label>


                        <textarea

                            value={description}

                            onChange={(event) =>
                                setDescription(
                                    event.target.value
                                )
                            }

                            placeholder={
                                t(
                                    "dashboard.aboutYouPlaceholder"
                                )
                            }

                            rows="5"

                        />

                    </div>


                    <button

                        type="button"

                        className="journey-button"

                        onClick={handleSaveIdentity}

                    >

                        {

                            saved

                                ?

                            t(
                                "dashboard.identitySaved"
                            )

                                :

                            t(
                                "dashboard.saveIdentity"
                            )

                        }

                    </button>

                </div>

            </section>


            <div className="living-grid">

                <section className="living-card">

                    <h2>

                        {
                            t(
                                "dashboard.creatorIdentitySummary"
                            )
                        }

                    </h2>


                    <p>

                        {
                            t(
                                "dashboard.name"
                            )
                        }:

                        {" "}

                        {

                            creator.identity?.name ||

                            t(
                                "dashboard.anonymousCreator"
                            )

                        }

                    </p>


                    <p>

                        {
                            t(
                                "dashboard.archetypeSummary"
                            )
                        }:

                        {" "}

                        {

                            translatedArchetype ||

                            t(
                                "dashboard.explorer"
                            )

                        }

                    </p>


                    {

                        creator.identity?.description && (

                            <p>

                                {
                                    t(
                                        "dashboard.about"
                                    )
                                }:

                                {" "}

                                {
                                    creator.identity.description
                                }

                            </p>

                        )

                    }

                </section>


                <section className="living-card">

                    <h2>

                        {
                            t(
                                "dashboard.creatorJourney"
                            )
                        }

                    </h2>


                    <p>

                        {
                            t(
                                "dashboard.level"
                            )
                        }:

                        {" "}

                        {
                            evolution?.level || 1
                        }

                    </p>


                    <p>

                        {
                            t(
                                "dashboard.experience"
                            )
                        }:

                        {" "}

                        {
                            evolution?.experience || 0
                        }

                        {" "}

                        {
                            t(
                                "dashboard.xp"
                            )
                        }

                    </p>


                    <p>

                        {
                            t(
                                "dashboard.stage"
                            )
                        }:

                        {" "}

                        {

                            translatedCreatorStage ||

                            t(
                                "creatorStages.beginning"
                            )

                        }

                    </p>

                </section>


                <WorldBuilderEvolutionCard />


                <section className="living-card">

                    <h2>

                        {
                            t(
                                "dashboard.livingWorldStatus"
                            )
                        }

                    </h2>


                    <p>

                        {
                            t(
                                "dashboard.currentPortal"
                            )
                        }:

                        {" "}

                        {

                            worldState.currentPortal ||

                            "arrival"

                        }

                    </p>


                    <p>

                        {
                            t(
                                "dashboard.evolution"
                            )
                        }:

                        {" "}

                        {

                            worldEvolution.stage ||

                            "seed"

                        }

                    </p>


                    <p>

                        {
                            t(
                                "dashboard.decisions"
                            )
                        }:

                        {" "}

                        {

                            worldDecision.choices?.length ||

                            0

                        }

                    </p>


                    <p>

                        {
                            t(
                                "dashboard.governance"
                            )
                        }:

                        {" "}

                        {

                            worldGovernance.decisions ||

                            0

                        }

                        {" "}

                        {
                            t(
                                "dashboard.evaluations"
                            )
                        }

                    </p>


                    <p>

                        {
                            t(
                                "dashboard.actions"
                            )
                        }:

                        {" "}

                        {

                            worldAction.executed ||

                            0

                        }

                    </p>

                </section>

            </div>


            <WorldBuilderDomainCard />


            <section className="living-card living-section">

                <h2>

                    {
                        t(
                            "dashboard.myLivingWorlds"
                        )
                    }

                </h2>


                <div className="living-grid">

                    {

                        worlds.length > 0

                            ?

                        worlds.map((world) => (

                            <article

                                key={world.id}

                                className="living-card"

                            >

                                <h3>

                                    🌎 {world.id}

                                </h3>


                                <p>

                                    {
                                        t(
                                            "dashboard.worldStatus"
                                        )
                                    }:

                                    {" "}

                                    {
                                        world.status
                                    }

                                </p>

                            </article>

                        ))

                            :

                        <p>

                            {
                                t(
                                    "dashboard.firstLivingWorldWaiting"
                                )
                            }

                        </p>

                    }

                </div>

            </section>


            <section className="living-card living-section">

                <h2>

                    {
                        t(
                            "dashboard.achievements"
                        )
                    }

                </h2>


                <p>

                    {
                        t(
                            "dashboard.achievementsDescription"
                        )
                    }

                </p>

            </section>

        </section>

    );

}
