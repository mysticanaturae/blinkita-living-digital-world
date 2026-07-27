/*
==========================================

BLINKITA METHOD™
LIVING DIGITAL WORLD™

LIVING PORTAL EXPERIENCE™

The living experience layer

Version 1.0

==========================================
*/


import { useState } from "react";

import { BlinkitaEngine } from "../../core/engine/BlinkitaEngine";



export default function LivingPortalExperience({ portal }) {


    const [activated, setActivated] = useState(false);



    if (!portal) {

        return null;

    }




    function handleJourney() {


        console.log(
            "🌱 Portal Interaction:",
            portal.id
        );



        const state = BlinkitaEngine.completePortal(

            portal.id

        );



        console.log(

            "🌎 Living World Updated:",
            state

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






            <button

                className="journey-button"

                onClick={handleJourney}

                disabled={activated}

            >

                {activated

                    ? "Journey Activated ✨"

                    : portal.experience?.interaction || "Begin Your Journey™"

                }


            </button>




        </section>


    );


}