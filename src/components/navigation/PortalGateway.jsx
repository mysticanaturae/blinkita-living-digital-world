import { TransitionEngine } from "../../core/transitions/TransitionEngine";
import { PortalRoutes } from "../../core/routes/PortalRoutes";


export default function PortalGateway({
    currentPortalId,
}) {


    const nextPortalId = TransitionEngine.getNextPortal(
        currentPortalId
    );


    const nextPortal = PortalRoutes.find(
        portal => portal.id === nextPortalId
    );


    if (!nextPortal) {
        return null;
    }


    return (
        <section className="portal-gateway">

            <p>
                Your next portal awaits.
            </p>


            <a href={nextPortal.path}>
                Begin your journey
            </a>

        </section>
    );
}