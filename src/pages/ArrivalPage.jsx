import PortalShell from "../layouts/PortalShell";
import PortalIdentity from "../components/experience/PortalIdentity";

import { getPortal } from "../core/registry/PortalRegistry";
import { validatePortal } from "../core/utils/validatePortal";


export default function ArrivalPage() {

    const portal = getPortal("arrival");


    const validation = validatePortal(portal);


    console.log(
        "Portal validation:",
        validation
    );


    return (
        <PortalShell
            title={portal.title}
            subtitle={portal.subtitle}
        >

            <PortalIdentity
                purpose={portal.purpose}
                experience={portal.experience}
            />

            <p>
                Your journey begins here.
            </p>

        </PortalShell>
    );
}