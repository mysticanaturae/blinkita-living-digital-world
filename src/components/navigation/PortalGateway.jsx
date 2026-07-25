/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL GATEWAY™

The transition point
between Living Worlds™

Version 1.3
==========================================
*/


import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { TransitionEngine } from "../../core/transitions/TransitionEngine";
import { PortalRoutes } from "../../core/routes/PortalRoutes";

import { enterWorldPortal } from "../../core/state/WorldState";


export default function PortalGateway({

    currentPortalId,

    exposeAction,

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



    function enterNextPortal() {


    if (!nextPortal) {

        console.warn(
            "No next portal available."
        );

        return;

    }


    const updatedWorld =
        enterWorldPortal(
            nextPortal.id
        );


    console.log(
        "World State Updated:",
        updatedWorld
    );


    navigate(
        nextPortal.path
    );

}

console.log(
    "GATEWAY DEBUG",
    {
        currentPortalId,
        nextPortalId,
        nextPortal
    }
);

   useEffect(() => {

    if (
        exposeAction &&
        nextPortal
    ) {

        exposeAction(() => enterNextPortal);

    }

}, [
    exposeAction,
    currentPortalId,
    nextPortalId
]);


    if (!nextPortal) {

        return null;

    }



    return (

        <section className="portal-gateway">


            <p>
                Your next portal awaits.
            </p>



            <button

                onClick={
                    enterNextPortal
                }

            >

                Begin your journey

            </button>


        </section>

    );

}