/*
==========================================

BLINKITA METHOD™
LIVING DIGITAL WORLD™

LIVING PORTAL EXPERIENCE™

The living experience layer

Version 1.1

==========================================
*/


import { useState } from "react";

import { BlinkitaEngine } from "../../core/engine/BlinkitaEngine";



export default function LivingPortalExperience({ portal }) {


    const [activated, setActivated] = useState(false);

    const [awakeningMessage, setAwakeningMessage] = useState(null);



    if (!portal) {

        return null;

    }





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





        setAwakeningMessage(

            {
                title:
                    "🌱 Portal Awakened",

                text:
                    "Your journey has begun. A new memory has entered your Living World™."

            }

        );



        setActivated(true);



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

                onClick={handleJourney}

                disabled={activated}

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





        </section>


    );


}