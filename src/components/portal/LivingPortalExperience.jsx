/*
==========================================

BLINKITA METHOD™
LIVING DIGITAL WORLD™

LIVING PORTAL EXPERIENCE™

The living experience layer

Version 1.6

Connected with:

* Portal Gateway™
* Journey System™
* Living World Runtime™
* Event System™
* Memory System™
* Timeline System™
* Creator House™
* Living Intelligence™

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
PORTAL RESPONSE SYSTEM™

Each portal responds differently
after the Creator gives an answer.

Later this layer can become
Living Intelligence™ generated.
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
    PORTAL JOURNEY ACTION™

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


    if (!portal) {

        return null;

    }





    /*
    ======================================
    PORTAL QUESTION™

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
    PORTAL RESPONSE™

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
    FIRST PORTAL INTERACTION™

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
        SAVE PORTAL ANSWER™

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

                "Living Intelligence™ received answer:",

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
        PORTAL-SPECIFIC RESPONSE™

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
    SECOND PORTAL INTERACTION™

    Continue into the next portal
    or Creator House™.
    ======================================
    */


    function handleContinue() {


        console.log(

            "Continuing Living Journey™:",

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
    QUESTION VALIDATION™

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





            <div className="portal-identity-window">


                <h2>

                    {portal.experience?.identity}

                </h2>


                {

                    portal.experience?.identityMessage
                    && (

                        <p>

                            {portal.experience.identityMessage}

                        </p>

                    )

                }


            </div>





            <div className="portal-atmosphere-window">


                <h3>`r`n`r`n                    {t("portal.atmosphere")}`r`n`r`n                </h3>


                <p>

                    {portal.experience?.atmosphere}

                </p>


                {

                    portal.experience?.atmosphereMessage
                    && (

                        <p>

                            {portal.experience.atmosphereMessage}

                        </p>

                    )

                }


            </div>





            <div className="portal-whisper-window">


                <h3>`r`n`r`n                    {t("portal.whisper")}`r`n`r`n                </h3>


                <p>

                    {portal.experience?.whisper}

                </p>


            </div>





            <div className="portal-message-window">


                <h3>`r`n`r`n                    {t("portal.message")}`r`n`r`n                </h3>


                <p>

                    {portal.experience?.message}

                </p>


            </div>





            <div className="portal-ritual-window">


                <h3>`r`n`r`n                    {t("portal.ritual")}`r`n`r`n                </h3>


                <p>

                    {portal.experience?.ritual}

                </p>


            </div>





            {

                portalQuestion
                && (

                    <div className="portal-question-window">


                        <h3>`r`n`r`n                            {t("portal.firstQuestion")}`r`n`r`n                        </h3>


                        <p>

                            {portalQuestion}

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

                                portalPlaceholder

                            }

                            rows="6"

                            disabled={activated}

                        />


                    </div>

                )

            }





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





            <PortalGateway

                currentPortalId={portal.id}

                exposeAction={handleGatewayAction}

            />





        </section>

    );

}

