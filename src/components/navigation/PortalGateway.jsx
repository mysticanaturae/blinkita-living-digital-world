/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL GATEWAY™

Stable transition layer

Connected with:
- Journey System™
- Event System™
- Memory System™
- World State™

Version 3.1
==========================================
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

    enterWorldPortal,

    completeWorldPortal

}
from "../../core/state/WorldState";



import {

    emit

}
from "../../core/events/EventBus";



import {

    createEvent

}
from "../../core/events/EventFactory";



import {

    EventTypes

}
from "../../core/events/EventTypes";



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

    ONLY AFTER BUTTON CLICK

    ======================================
    */


    function enterNextPortal(){


        console.log(

            "🌱 Gateway activated:",

            currentPortalId

        );



        if(transitioning.current){

            console.log(
                "Transition already running."
            );

            return;

        }



        transitioning.current = true;





        if(!nextPortal){


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
        ----------------------------------
        COMPLETE CURRENT PORTAL
        ----------------------------------
        */


        const completedWorld =

            completeWorldPortal(

                currentPortalId

            );






        emit(

            EventTypes.PORTAL_COMPLETED,


            createEvent({

                type:

                    EventTypes.PORTAL_COMPLETED,


                source:

                    "PortalGateway",


                payload:{


                    portalId:

                        currentPortalId,


                    worldState:

                        completedWorld


                }


            })

        );










        /*
        ----------------------------------
        ENTER NEXT PORTAL
        ----------------------------------
        */


        const updatedWorld =

            enterWorldPortal(

                nextPortal.id

            );








        emit(

            EventTypes.PORTAL_ENTERED,


            createEvent({

                type:

                    EventTypes.PORTAL_ENTERED,


                source:

                    "PortalGateway",


                payload:{


                    portalId:

                        nextPortal.id,


                    previousPortal:

                        currentPortalId,


                    worldState:

                        updatedWorld


                }


            })

        );








        console.log(

            "🌎 Portal transition:",

            currentPortalId,

            "→",

            nextPortal.id

        );








        /*
        ----------------------------------
        NAVIGATION
        ----------------------------------
        */


        window.scrollTo({

            top:0,

            behavior:"auto"

        });




        navigate(

            nextPortal.path

        );



    }









    /*
    ======================================
    CONNECT BUTTON ACTION

    Does NOT execute automatically.

    Only stores callback.

    ======================================
    */


    useEffect(()=>{


    console.log(
        "🟢 Gateway mounted:",
        currentPortalId
    );


    if(!exposeAction){

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


},[
    exposeAction,
    currentPortalId,
    nextPortalId
]);









    /*
    ======================================
    GATEWAY

    Invisible intelligence bridge

    ======================================
    */


    return null;


}