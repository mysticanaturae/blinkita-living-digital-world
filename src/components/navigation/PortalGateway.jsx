import { useNavigate } from "react-router-dom";

import { TransitionEngine } from "../../core/transitions/TransitionEngine";
import { PortalRoutes } from "../../core/routes/PortalRoutes";

import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";

import { PortalStateEngine } from "../../core/state/PortalStateEngine";



export default function PortalGateway({
    currentPortalId,
}) {


    const navigate = useNavigate();


    const nextPortalId =
        TransitionEngine.getNextPortal(
            currentPortalId
        );


    const nextPortal =
        PortalRoutes.find(
            portal =>
                portal.id === nextPortalId
        );



    if (!nextPortal) {

        return null;

    }



    function enterNextPortal() {


        const state =
            getWorldState();



        const newState =
            PortalStateEngine.enterPortal(
                state,
                nextPortal.id
            );



        updateWorldState(
            newState
        );



        console.log(
            "World State Updated:",
            newState
        );



        navigate(
            `/portal/${nextPortal.id}`
        );

    }



    return (

        <section className="portal-gateway">


            <p>
                Your next portal awaits.
            </p>


            <button
                onClick={enterNextPortal}
            >
                Begin your journey
            </button>


        </section>

    );

}