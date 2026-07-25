/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

EXPERIENCE ENGINE™

The living experience layer
of every portal

Version 1.0
==========================================
*/


import PortalAtmosphere from "./PortalAtmosphere";
import PortalWhisper from "./PortalWhisper";
import PortalIdentity from "./PortalIdentity";
import PortalMessage from "./PortalMessage";
import PortalRitual from "./PortalRitual";
import PortalInteraction from "./PortalInteraction";

import { ExperienceSequence } from "./ExperienceSequence";


export default function ExperienceEngine({

    experience,

    onActivate,

}) {


    console.log(
        "Experience Sequence:",
        ExperienceSequence
    );



    return (

        <section className="experience-engine">


            <PortalAtmosphere

                atmosphere={
                    experience.atmosphere
                }

            />



            <PortalIdentity

                identity={
                    experience.identity
                }

            />



            <PortalWhisper

                whisper={
                    experience.whisper
                }

            />



            <PortalMessage

                message={
                    experience.message
                }

            />



            <PortalRitual

                ritual={
                    experience.ritual
                }

            />



            <PortalInteraction

                interaction={
                    experience.interaction
                }

                onActivate={
                    onActivate
                }

            />


        </section>

    );

}