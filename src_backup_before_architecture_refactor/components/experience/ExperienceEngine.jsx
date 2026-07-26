/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

EXPERIENCE ENGINE™

The living experience layer
of every portal

Version 1.1
==========================================
*/

import PortalAtmosphere from "./PortalAtmosphere";
import PortalWhisper from "./PortalWhisper";
import PortalIdentity from "./PortalIdentity";
import PortalMessage from "./PortalMessage";
import PortalRitual from "./PortalRitual";
import PortalInteraction from "./PortalInteraction";

export default function ExperienceEngine({

    experience,

    onActivate,

}) {

    if (!experience) {

        return null;

    }

    return (

        <section className="experience-engine">

            <PortalAtmosphere

                atmosphere={
                    experience.atmosphere
                }

            />

            <PortalWhisper

                whisper={
                    experience.whisper
                }

            />

            <PortalIdentity

                identity={
                    experience.identity
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