import PortalShell from "../layouts/PortalShell";
import { portals } from "../core/data/portals";

export default function ArrivalPage() {

    const portal = portals.find(
        item => item.id === "arrival"
    );

    return (
        <PortalShell
            title={portal.title}
            subtitle={portal.subtitle}
        >
            <p>
                Your journey begins here.
            </p>
        </PortalShell>
    );
}