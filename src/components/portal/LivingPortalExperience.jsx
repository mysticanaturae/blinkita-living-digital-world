/*
==========================================

BLINKITA METHOD™
LIVING DIGITAL WORLD™

LIVING PORTAL EXPERIENCE™

The living experience layer

Version 1.4

Connected with:
- Portal Gateway™
- Journey System™
- Living World Runtime™
- Event System™
- Memory System™
- Timeline System™
- Creator House™

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


import PortalGateway
from "../navigation/PortalGateway";






export default function LivingPortalExperience({ portal }) {


    const [activated, setActivated] = useState(false);


    const [awakeningMessage, setAwakeningMessage] = useState(null);


    const [continueJourney, setContinueJourney] = useState(null);





    /*
    ======================================
    PORTAL JOURNEY ACTION™

    Gateway exposes the next
    portal transition here.

    useCallback keeps the function
    stable between renders.
    ======================================
    */


    const handleGatewayAction = useCallback(

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
    FIRST PORTAL INTERACTION™

    Completes the current portal
    and awakens the journey.
    ======================================
    */


    function handleJourney() {


        console.log(

            "🌱 Portal Interaction:",

            portal.id

        );





        const state =

            BlinkitaEngine.completePortal(

                portal.id

            );





        console.log(

            "🌎 Living World Updated:",

            state

        );





        /*
        ----------------------------------
        PORTAL AWAKENING MESSAGE
        ----------------------------------

        Individual portals may later
        provide their own awakening
        message.

        Until then we use the
        Living World fallback.
        ----------------------------------
        */


        setAwakeningMessage(

            {

                title:

                    portal.experience?.awakeningTitle

                    ||

                    "🌱 Portal Awakened",


                text:

                    portal.experience?.awakeningMessage

                    ||

                    "Your journey has begun. A new memory has entered your Living World™."

            }

        );





        setActivated(true);


    }





    /*
    ======================================
    SECOND PORTAL INTERACTION™

    Continue into the next portal
    or enter Creator House™ when
    the Living World journey is complete.
    ======================================
    */


    function handleContinue() {


        console.log(

            "✨ Continuing Living Journey™:",

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






    return (


        <section className="living-portal-experience">





            <div className="portal-identity-window">


                <h2>

                    {portal.experience?.identity}

                </h2>


            </div>





            <div className="portal-atmosphere-window">


                <h3>

                    Atmosphere

                </h3>


                <p>

                    {portal.experience?.atmosphere}

                </p>


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


                awakeningMessage && (


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

                    activated && !continueJourney

                }


            >


                {


                    activated

                    ?


                    "Journey Activated ✨"

                    :


                    portal.experience?.interaction

                    ||

                    "Begin Your Journey™"

                }



            </button>






            {/*

            ======================================
            PORTAL GATEWAY™

            Invisible transition intelligence.

            It prepares the next portal action
            without rendering another button.

            For the final portal, the Gateway
            leads into Creator House™.
            ======================================
            */}


            <PortalGateway


                currentPortalId={portal.id}


                exposeAction={handleGatewayAction}


            />





        </section>


    );


}