import PortalIdentity from "../experience/PortalIdentity";
import PortalExperience from "../experience/PortalExperience";
import PortalGateway from "../navigation/PortalGateway";


export default function PortalTemplate({
    portal,
}) {

    return (
        <section className="portal-template">


            <PortalIdentity
                purpose={portal.purpose}
                experience={portal.experience}
            />


            <PortalExperience
                identity={portal.experience.identity}
                atmosphere={portal.experience.atmosphere}
                message={portal.experience.message}
                interaction={portal.experience.interaction}
            />


            <PortalGateway
                currentPortalId={portal.id}
            />


        </section>
    );
}