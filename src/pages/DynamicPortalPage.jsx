import { useParams } from "react-router-dom";

import PortalShell from "../layouts/PortalShell";
import PortalTemplate from "../components/portal/PortalTemplate";

import { getPortal } from "../core/registry/PortalRegistry";
import { validatePortal } from "../core/utils/validatePortal";


export default function DynamicPortalPage() {


    const { portalId } = useParams();


    const portal = getPortal(portalId);


    if (!portal) {

        return (
            <div>
                Portal not found.
            </div>
        );

    }


    const validation = validatePortal(portal);


    console.log(
        "Dynamic Portal:",
        portal.id
    );


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