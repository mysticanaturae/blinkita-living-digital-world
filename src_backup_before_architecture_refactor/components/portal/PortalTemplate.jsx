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

    console.log("🔥 Interaction clicked");

    console.log(
        "Gateway Action:",
        gatewayAction
    );

    if (gatewayAction) {

        gatewayAction();

    } else {

        console.log(
            "❌ gatewayAction is NULL"
        );

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