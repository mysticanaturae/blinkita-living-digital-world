import PortalShell from "../layouts/PortalShell";
import PortalTemplate from "../components/portal/PortalTemplate";

import { getPortal } from "../core/registry/PortalRegistry";
import { validatePortal } from "../core/utils/validatePortal";

export default function PortalPage({ portalId }) {

    const portal = getPortal(portalId);

    if (!portal) {
        return <h1>Portal not found</h1>;
    }

    const validation = validatePortal(portal);

    console.log(
        `${portalId} validation:`,
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