/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER EVOLUTION CARD™

The visible evolution space
of a World Builder™

Version 1.2
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
    getWorldBuilderState
} from "../../core/worldbuilder/WorldBuilderState";


import {
    getCurrentStage
} from "../../core/worldbuilder/WorldBuilderEvolution";


import {
    addExperience,
    addMilestone
} from "../../core/worldbuilder/WorldBuilderActions";


export default function WorldBuilderEvolutionCard() {

    const language = useLanguage();

    const [refresh, setRefresh] = useState(0);


    function handleCreationStep() {

        addExperience(100);

        addMilestone(
            "First World Builder Step"
        );

        setRefresh(
            refresh + 1
        );

    }


    const worldBuilderState =
        getWorldBuilderState();


    const evolution =
        worldBuilderState.evolution
        ||
        {};


    const stage =
        getCurrentStage();


    const milestones =
        evolution.milestones
        ||
        [];


    const stageId =
        stage?.id || "dreamer";


    const translatedStageName =
        t(
            `worldBuilder.stages.${stageId === "world-builder"
                ? "worldBuilder"
                : stageId === "world-architect"
                ? "worldArchitect"
                : stageId === "living-creator"
                ? "livingCreator"
                : stageId === "legacy-builder"
                ? "legacyBuilder"
                : stageId
            }.name`
        );


    const translatedEssence =
        t(
            `worldBuilder.stages.${stageId === "world-builder"
                ? "worldBuilder"
                : stageId === "world-architect"
                ? "worldArchitect"
                : stageId === "living-creator"
                ? "livingCreator"
                : stageId === "legacy-builder"
                ? "legacyBuilder"
                : stageId
            }.essence`
        );


    return (

        <section className="living-card">

            <h2>

                🌎{" "}

                {
                    t(
                        "worldBuilder.evolution.title"
                    )
                }

            </h2>


            <p>

                {
                    t(
                        "worldBuilder.evolution.currentStage"
                    )
                }:

            </p>


            <h3>

                ✨{" "}

                {
                    translatedStageName
                    ||
                    stage?.name
                    ||
                    "Dreamer™"
                }

            </h3>


            <p>

                {
                    t(
                        "worldBuilder.evolution.level"
                    )
                }:

                {" "}

                {
                    stage?.level || 1
                }

            </p>


            <p>

                {
                    t(
                        "worldBuilder.evolution.experience"
                    )
                }:

                {" "}

                {
                    evolution.experience || 0
                }

                {" "}

                XP

            </p>


            <button

                className="living-button"

                onClick={handleCreationStep}

            >

                🌱{" "}

                {
                    t(
                        "worldBuilder.evolution.completeStep"
                    )
                }

            </button>


            <p>

                {
                    t(
                        "worldBuilder.evolution.milestones"
                    )
                }:

                {" "}

                {
                    milestones.length
                }

            </p>


            <p>

                {
                    translatedEssence
                    ||
                    t(
                        "worldBuilder.evolution.defaultEssence"
                    )
                }

            </p>


        </section>

    );

}
