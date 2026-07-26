/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL GATEWAY™

The transition point
between Living Worlds™

Connected with:
- Event System™
- Memory System™
- Evolution System™
- Journey System™
- Living Event Architecture™

Version 2.2
==========================================
*/


import { useNavigate } 
from "react-router-dom";

import { useEffect } 
from "react";



import { TransitionEngine } 
from "../../core/transitions/TransitionEngine";


import { PortalRoutes } 
from "../../core/routes/PortalRoutes";



import {

    enterWorldPortal,

    completeWorldPortal

}

from "../../core/state/WorldState";




// Living World nervous system

import {

    emit

}

from "../../core/events/EventBus";



// Living Event Architecture™

import {

    createEvent

}

from "../../core/events/EventFactory";



import {

    EventTypes

}

from "../../core/events/EventTypes";








export default function PortalGateway({

    currentPortalId,

    exposeAction,

}) {



    const navigate = useNavigate();





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

    Portal transition becomes
    a Living World Event™

    ======================================
    */


    function enterNextPortal() {



        /*
        ----------------------------------
        COMPLETE CURRENT PORTAL
        ----------------------------------
        */


        const completedWorld =

            completeWorldPortal(

                currentPortalId

            );







        /*
        ----------------------------------
        PORTAL COMPLETED EVENT™

        The world remembers completion.

        ----------------------------------
        */


        const completionEvent =

            createEvent({

                type:

                    EventTypes.PORTAL_COMPLETED,


                source:

                    "PortalGateway",


                payload: {


                    portalId:

                        currentPortalId,


                    worldState:

                        completedWorld


                }

            });




        emit(

            completionEvent.type,

            completionEvent

        );









        /*
        ----------------------------------
        CHECK NEXT PORTAL
        ----------------------------------
        */


        if (!nextPortal) {


            console.warn(

                "No next portal available."

            );


            return;


        }









        /*
        ----------------------------------
        ENTER NEXT PORTAL

        World transforms here.

        ----------------------------------
        */


        const updatedWorld =

            enterWorldPortal(

                nextPortal.id

            );









        /*
        ----------------------------------
        PORTAL ENTERED EVENT™

        Activates:

        - Memory™
        - Evolution™
        - Journey™
        - Future Systems™

        ----------------------------------
        */


        const entryEvent =

            createEvent({

                type:

                    EventTypes.PORTAL_ENTERED,


                source:

                    "PortalGateway",



                payload: {


                    portalId:

                        nextPortal.id,


                    previousPortal:

                        currentPortalId,


                    worldState:

                        updatedWorld


                }


            });








        emit(

            entryEvent.type,

            entryEvent

        );









        console.log(

            "🌱 Living Event Created:",

            entryEvent

        );



        console.log(

            "🌎 Living World Updated:",

            updatedWorld

        );









        /*
        ----------------------------------
        NAVIGATION
        ----------------------------------
        */


        navigate(

            nextPortal.path

        );



    }









    /*
    ======================================
    EXPOSE ACTION™

    PortalTemplate™ controls interaction

    ======================================
    */


    useEffect(() => {


    if (

        !exposeAction ||

        !nextPortal

    ) {

        return;

    }



    exposeAction(

        () => enterNextPortal

    );



}, [

    exposeAction,

    nextPortalId

]);









    /*
    ======================================
    GATEWAY

    No visual output.

    The intelligence bridge
    between portals.

    ======================================
    */


    return null;


}