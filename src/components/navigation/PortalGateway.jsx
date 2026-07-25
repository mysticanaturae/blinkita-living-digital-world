/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL GATEWAY™

The transition point
between Living Worlds™

Version 1.1
==========================================
*/


import { useNavigate } from "react-router-dom";

import { TransitionEngine } from "../../core/transitions/TransitionEngine";
import { PortalRoutes } from "../../core/routes/PortalRoutes";

import { enterWorldPortal } from "../../core/state/WorldState";



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