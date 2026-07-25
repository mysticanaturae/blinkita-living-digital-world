import { TransitionEngine } from "../../core/transitions/TransitionEngine";
import { getPortal } from "../../core/registry/PortalRegistry";


export default function PortalGateway({
    currentPortalId,
}) {


    const nextPortalId = TransitionEngine.getNextPortal(
        currentPortalId
    );


    const nextPortal = getPortal(nextPortalId);


    if (!nextPortal) {
        return null;
    }


    return (
        <section className="portal-gateway">

            <p>
                Your next portal awaits.
            </p>


            <a href={`/portal/${nextPortal.id}`}>
                Begin your journey
            </a>


        </section>
    );
}