/*
==========================================
BLINKITA METHOD™

MEMORY LISTENER™

Automatic world memory response

Version 1.0
==========================================
*/


import {

    subscribe

}

from "../events/EventBus";



import {

    WorldMemory

}

from "./WorldMemory";



import { EventTypes } from "../events/EventTypes";







subscribe(

    EventTypes.PORTAL_ENTERED,


    (event)=>{


        WorldMemory.rememberPortalVisit(

            event.payload.portalId

        );


    }


);







subscribe(

    EventTypes.PORTAL_COMPLETED,


    (event)=>{


        WorldMemory.rememberPortalCompletion(

            event.payload.portalId

        );


    }


);