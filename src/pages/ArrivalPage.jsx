import PortalShell from "../layouts/PortalShell";
import PortalIdentity from "../components/experience/PortalIdentity";

import { portals } from "../core/data/portals";
import { validatePortal } from "../core/utils/validatePortal";


export default function ArrivalPage() {

    const portal = portals.find(
        item => item.id === "arrival"
    );

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
                atmosphere={portal.atmosphere}
                experience={portal.experience}
            />

            <p>
                Your journey begins here.
            </p>

        </PortalShell>
    );
}