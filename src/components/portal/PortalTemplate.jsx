import { useState } from "react";

import PortalIdentity from "../experience/PortalIdentity";
import ExperienceEngine from "../experience/ExperienceEngine";
import PortalGateway from "../navigation/PortalGateway";
import JourneyProgress from "../journey/JourneyProgress";


export default function PortalTemplate({

    portal,

}) {


    const [gatewayAction, setGatewayAction] = useState(null);



    return (

        <section className="portal-template">


            <PortalIdentity

                purpose={portal.purpose}

                experience={portal.experience}

            />



            <ExperienceEngine

                experience={
                    portal.experience
                }

                onActivate={() => {

                    if (gatewayAction) {

                        gatewayAction();

                    }

                }}

            />



            <JourneyProgress />



            <PortalGateway

                currentPortalId={
                    portal.id
                }

                exposeAction={
                    setGatewayAction
                }

            />


        </section>

    );

}