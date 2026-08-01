/*

BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL GATEWAY™

Stable transition layer

Connected with:

Journey System™
Event System™
World State™
Living World Runtime™
Creator House™
Version 3.3

*/

import {
useNavigate
}
from "react-router-dom";

import {
useEffect,
useRef
}
from "react";

import {
TransitionEngine
}
from "../../core/transitions/TransitionEngine";

import {
PortalRoutes
}
from "../../core/routes/PortalRoutes";

import {
BlinkitaEngine
}
from "../../core/engine/BlinkitaEngine";

import {
getAuthState
}
from "../../core/auth/AuthState";







export default function PortalGateway({

currentPortalId,

exposeAction,

}) {




const navigate = useNavigate();


const transitioning = useRef(false);






/*
======================================
FIND NEXT PORTAL
======================================
*/


const nextPortalId =

    TransitionEngine.getNextPortal(

        currentPortalId

    );





const nextPortal =

    PortalRoutes.find(

        portal =>

            portal.id === nextPortalId

    );






/*
======================================
ENTER NEXT PORTAL™

The Gateway does NOT complete
the current portal.

The current portal has already
been completed by
LivingPortalExperience™.

The Gateway only:

1. enters the next portal
2. activates the Living World Runtime™
3. navigates to the next route

FINAL PORTAL:

living-world
    ↓
Creator House™

======================================
*/


function enterNextPortal() {


    console.log(

        "🌱 Gateway activated:",

        currentPortalId

    );





    if (transitioning.current) {


        console.log(

            "Transition already running."

        );


        return;

    }





    transitioning.current = true;






    /*
    ======================================
    FINAL LIVING WORLD PORTAL
    ======================================

    There is no next portal in
    PortalRoutes.

    Instead the Living Portal Journey™
    hands the Creator into
    Creator House™.

    ======================================
    */


    if (currentPortalId === "living-world") {


        console.log(

            "🌎 Living Portal Journey™ completed."

        );


        console.log(

            "🏠 Entering Creator House™"

        );





        const auth = getAuthState();


        console.log(

            "Identity state:",

            auth

        );





        window.scrollTo({

            top: 0,

            behavior: "auto"

        });





        navigate(

            "/creator"

        );


        return;

    }






    /*
    ======================================
    NORMAL PORTAL TRANSITION
    ======================================
    */


    if (!nextPortal) {


        console.warn(

            "No next portal available."

        );


        transitioning.current = false;


        return;

    }






    /*
    ----------------------------------
    OPTIONAL IDENTITY CHECK
    ----------------------------------

    Arrival remains open.
    Identity can be created anytime.

    ----------------------------------
    */


    const auth = getAuthState();


    console.log(

        "Identity state:",

        auth

    );






    /*
    ======================================
    ENTER NEXT PORTAL

    IMPORTANT:

    Use the central Living World Runtime™.

    This guarantees that:

    enterPortal()
        ↓
    WorldState
        ↓
    PORTAL_ENTERED
        ↓
    EventBus
        ↓
    Memory
    Timeline
    Journey
    Intelligence
    Decision
    Governance
    Action

    all remain connected.

    ======================================
    */


    const updatedWorld =

        BlinkitaEngine.enterPortal(

            nextPortal.id

        );






    console.log(

        "🌎 Portal transition:",

        currentPortalId,

        "→",

        nextPortal.id

    );





    console.log(

        "🌱 Next Living World State:",

        updatedWorld

    );






    /*
    ----------------------------------
    NAVIGATION
    ----------------------------------
    */


    window.scrollTo({

        top: 0,

        behavior: "auto"

    });






    navigate(

        nextPortal.path

    );

}









/*
======================================
CONNECT BUTTON ACTION

Does NOT execute automatically.

Only exposes the Gateway action
to LivingPortalExperience™.

======================================
*/


useEffect(() => {


    console.log(

        "🟢 Gateway mounted:",

        currentPortalId

    );





    if (!exposeAction) {

        return;

    }






    exposeAction(

        () => {


            console.log(

                "✨ USER CLICK SHOULD START THIS:",

                currentPortalId

            );





            enterNextPortal();


        }

    );


}, [

    exposeAction,

    currentPortalId,

    nextPortalId

]);









/*
======================================
GATEWAY

Invisible intelligence bridge.

It does not render another button.

======================================
*/


return null;

}