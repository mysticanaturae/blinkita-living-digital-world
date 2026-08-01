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




/*
==========================================
PORTAL RESPONSE SYSTEM™

Each portal responds differently
after the Creator gives an answer.

Later this layer can become
Living Intelligence™ generated.
==========================================
*/

const portalResponses = {

    arrival: {

        title:
            "Your Arrival",

        message:
            "Thank you.\n\nYour first words are now part of your Living World™ memory.\n\nThis is the first thing your world knows about you."

    },


    invitation: {

        title:
            "The Invitation Is Open",

        message:
            "You have accepted the invitation.\n\nSomething has begun to move.\n\nYour Living World™ now knows what is asking for your attention."

    },


    possibility: {

        title:
            "A Possibility Has Appeared",

        message:
            "You have named a possibility.\n\nIt does not need to exist yet.\n\nIt only needed a place to begin."

    },


    "the-call": {

        title:
            "You Heard the Call",

        message:
            "You listened.\n\nYour answer gives the call its first form.\n\nYou do not need to know the whole path yet."

    },


    "world-seed": {

        title:
            "The Seed Has Been Planted",

        message:
            "Your world now has its first seed.\n\nIt is small enough to grow.\n\nAnd alive enough to become something more."

    },


    vision: {

        title:
            "Your Vision Has Been Remembered",

        message:
            "You have given your world a first glimpse of what it could become.\n\nYour vision can change as your world grows.\n\nThat is part of being alive."

    },


    essence: {

        title:
            "The Essence Has Been Found",

        message:
            "You have named something that belongs at the heart of your world.\n\nThis essence can become the thread that connects everything that follows."

    },


    experience: {

        title:
            "The Experience Has Begun",

        message:
            "You have imagined what it means to enter your world.\n\nNow it has something to offer — not only as an idea, but as an experience."

    },


    "living-world": {

        title:
            "Your Living World Has Begun",

        message:
            "Look at what you have created.\n\nYour answers are now part of its first memory.\n\nThis is not the end of the journey.\n\nThis is where your Living World™ begins to evolve."

    }

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
        "Write your answer here...";





    /*
    ======================================
    PORTAL RESPONSE™

    ======================================
    */


    const response =
        portalResponses[portal.id]
        ||
        {

            title:
                "Your World Has Remembered",

            message:
                "Your answer has become part of your Living World™ memory."

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


                <h3>

                    Atmosphere

                </h3>


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


                <h3>

                    Whisper

                </h3>


                <p>

                    {portal.experience?.whisper}

                </p>


            </div>





            <div className="portal-message-window">


                <h3>

                    Message

                </h3>


                <p>

                    {portal.experience?.message}

                </p>


            </div>





            <div className="portal-ritual-window">


                <h3>

                    Ritual

                </h3>


                <p>

                    {portal.experience?.ritual}

                </p>


            </div>





            {

                portalQuestion
                && (

                    <div className="portal-question-window">


                        <h3>

                            Your First Question

                        </h3>


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

                    "Continue Journey"

                    :

                    portal.experience?.interaction

                    ||

                    "Begin Your Journey™"

                }


            </button>





            <PortalGateway

                currentPortalId={portal.id}

                exposeAction={handleGatewayAction}

            />





        </section>

    );

}
