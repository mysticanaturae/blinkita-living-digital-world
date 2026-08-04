/*
==========================================

BLINKITA METHODĂ˘â€žË
LIVING DIGITAL WORLDĂ˘â€žË

LIVING PORTAL EXPERIENCEĂ˘â€žË

The living experience layer

Version 1.6

Connected with:

* Portal GatewayĂ˘â€žË
* Journey SystemĂ˘â€žË
* Living World RuntimeĂ˘â€žË
* Event SystemĂ˘â€žË
* Memory SystemĂ˘â€žË
* Timeline SystemĂ˘â€žË
* Creator HouseĂ˘â€žË
* Living IntelligenceĂ˘â€žË

==========================================
*/

import {
    useState,
    useCallback
}
from "react";


import {
    BlinkitaEngine
}
from "../../core/engine/BlinkitaEngine";


import {
    updateWorldState
}
from "../../core/state/WorldState";


import PortalGateway
from "../navigation/PortalGateway";

import {
    t
}
from "../../core/i18n/LanguageSystem";





/*
==========================================
PORTAL RESPONSE SYSTEMĂ˘â€žË

Each portal responds differently
after the Creator gives an answer.

Later this layer can become
Living IntelligenceĂ˘â€žË generated.
==========================================
*/

const responseKeys = {

    arrival: "arrival",

    invitation: "invitation",

    possibility: "possibility",

    "the-call": "theCall",

    "world-seed": "worldSeed",

    vision: "vision",

    essence: "essence",

    experience: "experience",

    "living-world": "livingWorld"

};





export default function LivingPortalExperience({ portal }) {


    const [activated, setActivated] =
        useState(false);


    const [awakeningMessage, setAwakeningMessage] =
        useState(null);


    const [continueJourney, setContinueJourney] =
        useState(null);


    const [answer, setAnswer] =
        useState("");





    /*
    ======================================
    PORTAL JOURNEY ACTIONĂ˘â€žË

    Gateway exposes the next
    portal transition here.
    ======================================
    */

    const handleGatewayAction =
        useCallback(

            (action) => {

                setContinueJourney(
                    () => action
                );

            },

            []

        );





    /*
    ======================================
    SAFETY CHECK
    ======================================
    */

    console.log("BLINKITA PORTAL DATA:", portal);
    console.log("BLINKITA PORTAL EXPERIENCE:", portal?.experience);

    if (!portal) {

        return null;

    }





    /*
    ======================================
    PORTAL QUESTIONĂ˘â€žË
    ======================================
    */

    const portalQuestion =
        portal.experience?.question;


    const portalPlaceholder =
        portal.experience?.placeholder
        ||
        t("portal.placeholder");





    /*
    ======================================
    PORTAL RESPONSEĂ˘â€žË
    ======================================
    */

    const responseKey =
        responseKeys[portal.id]
        ||
        "remembered";


    const response = {

        title:
            t(`portal.responses.${responseKey}.title`),

        message:
            t(`portal.responses.${responseKey}.message`)

    };





    /*
    ======================================
    FIRST PORTAL INTERACTIONĂ˘â€žË

    Saves the Creator's answer,
    completes the portal,
    and creates the portal response.
    ======================================
    */

    function handleJourney() {


        console.log(

            "Portal Interaction:",

            portal.id

        );





        /*
        ----------------------------------
        SAVE PORTAL ANSWERĂ˘â€žË
        ----------------------------------
        */

        if (

            portalQuestion
            &&
            answer.trim()

        ) {


            const currentState =
                BlinkitaEngine.getWorldState();


            const existingAnswers =
                currentState.portalAnswers
                ||
                {};


            const updatedAnswers = {

                ...existingAnswers,

                [portal.id]: {

                    question:
                        portalQuestion,

                    answer:
                        answer.trim(),

                    answeredAt:
                        new Date().toISOString()

                }

            };


            updateWorldState({

                portalAnswers:
                    updatedAnswers

            });


            console.log(

                "Living IntelligenceĂ˘â€žË received answer:",

                portal.id,

                answer.trim()

            );

        }





        /*
        ----------------------------------
        COMPLETE PORTAL
        ----------------------------------
        */

        const state =
            BlinkitaEngine.completePortal(

                portal.id

            );


        console.log(

            "Living World Updated:",

            state

        );





        /*
        ----------------------------------
        PORTAL-SPECIFIC RESPONSEĂ˘â€žË
        ----------------------------------
        */

        setAwakeningMessage({

            title:
                response.title,

            text:
                response.message

        });


        setActivated(true);

    }





    /*
    ======================================
    SECOND PORTAL INTERACTIONĂ˘â€žË

    Continue into the next portal
    or Creator HouseĂ˘â€žË.
    ======================================
    */

    function handleContinue() {


        console.log(

            "Continuing Living JourneyĂ˘â€žË:",

            portal.id

        );


        if (!continueJourney) {

            console.warn(

                "No Gateway transition available."

            );

            return;

        }


        continueJourney();

    }





    /*
    ======================================
    QUESTION VALIDATIONĂ˘â€žË
    ======================================
    */

    const questionRequired =
        Boolean(portalQuestion);


    const answerMissing =
        questionRequired
        &&
        !answer.trim();





    /*
    ======================================
    RENDER
    ======================================
    */

    return (

        <section className="living-portal-experience">


            {/* ======================================
                PORTAL IDENTITY
            ====================================== */}

            <div className="portal-identity-window">

                <h2>

                    {portal.experience?.identity}

                </h2>


                {

                    portal.experience?.identityMessage
                    && (

                        <p>

                            {t(`portal.experiences.${portal.id}.identityMessage`) || portal.experience?.identityMessage}

                        </p>

                    )

                }

            </div>





            {/* ======================================
                ATMOSPHERE
            ====================================== */}

            <div className="portal-atmosphere-window">

                <h3>

                    {t("portal.atmosphere")}

                </h3>


                {

                    portal.experience?.atmosphere
                    && (

                        <p>

                            {t(`portal.experiences.${portal.id}.atmosphere`) || portal.experience?.atmosphere}

                        </p>

                    )

                }


                {

                    portal.experience?.atmosphereMessage
                    && (

                        <p>

                            {t(`portal.experiences.${portal.id}.atmosphereMessage`) || portal.experience?.atmosphereMessage}

                        </p>

                    )

                }

            </div>





            {/* ======================================
                WHISPER
            ====================================== */}

            <div className="portal-whisper-window">

                <h3>

                    {t("portal.whisper")}

                </h3>


                {

                    portal.experience?.whisper
                    && (

                        <p>

                            {t(`portal.experiences.${portal.id}.whisper`) || portal.experience?.whisper}

                        </p>

                    )

                }

            </div>





            {/* ======================================
                MESSAGE
            ====================================== */}

            <div className="portal-message-window">

                <h3>

                    {t("portal.message")}

                </h3>


                {

                    portal.experience?.message
                    && (

                        <p>

                            {t(`portal.experiences.${portal.id}.message`) || portal.experience?.message}

                        </p>

                    )

                }

            </div>





            {/* ======================================
                RITUAL
            ====================================== */}

            <div className="portal-ritual-window">

                <h3>

                    {t("portal.ritual")}

                </h3>


                {

                    portal.experience?.ritual
                    && (

                        <p>

                            {t(`portal.experiences.${portal.id}.ritual`) || portal.experience?.ritual}

                        </p>

                    )

                }

            </div>





            {/* ======================================
                PORTAL QUESTION
            ====================================== */}

            {

                portalQuestion
                && (

                    <div className="portal-question-window">

                        <h3>

                            {t("portal.firstQuestion")}

                        </h3>


                        <p>

                            {t(`portal.experiences.${portal.id}.question`) || portalQuestion}

                        </p>


                        <textarea

                            value={answer}

                            onChange={

                                (event) =>

                                    setAnswer(

                                        event.target.value

                                    )

                            }

                            placeholder={

                                t(`portal.experiences.${portal.id}.placeholder`) || portalPlaceholder

                            }

                            rows="6"

                            disabled={activated}

                        />

                    </div>

                )

            }





            {/* ======================================
                PORTAL RESPONSE
            ====================================== */}

            {

                awakeningMessage
                && (

                    <div className="portal-message-window">

                        <h3>

                            {awakeningMessage.title}

                        </h3>


                        <p>

                            {awakeningMessage.text}

                        </p>

                    </div>

                )

            }





            {/* ======================================
                JOURNEY BUTTON
            ====================================== */}

            <button

                className="journey-button"

                onClick={

                    activated

                    ?

                    handleContinue

                    :

                    handleJourney

                }

                disabled={

                    activated

                    ?

                    !continueJourney

                    :

                    answerMissing

                }

            >

                {

                    activated

                    ?

                    t("portal.continueJourney")

                    :

                    portal.experience?.interaction

                    ||

                    t("portal.beginJourney")

                }

            </button>





            {/* ======================================
                PORTAL GATEWAY
            ====================================== */}

            <PortalGateway

                currentPortalId={portal.id}

                exposeAction={handleGatewayAction}

            />


        </section>

    );

}






