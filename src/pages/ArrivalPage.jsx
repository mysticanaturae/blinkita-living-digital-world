import PortalShell from "../layouts/PortalShell";
import PortalTemplate from "../components/portal/PortalTemplate";

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

            <PortalTemplate
                portal={portal}
            />

        </PortalShell>
    );
}