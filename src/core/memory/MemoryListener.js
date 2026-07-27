/*
==========================================
BLINKITA METHOD™

MEMORY LISTENER™

Automatic world memory response

Version 1.1
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



import {

    EventTypes

}

from "../events/EventTypes";









function handlePortalEntered(

    event

){



    WorldMemory.rememberPortalVisit(


        event.payload.portalId


    );





    console.log(


        "🧠 Memory: Portal Visit Recorded",


        event.payload.portalId


    );



}









function handlePortalCompleted(

    event

){



    WorldMemory.rememberPortalCompletion(


        event.payload.portalId


    );





    console.log(


        "🧠 Memory: Portal Completion Recorded",


        event.payload.portalId


    );



}









function handleWorldCreated(

    event

){



    WorldMemory.rememberWorldCreation(


        event.payload.world


    );





    console.log(


        "🧠 Memory: World Creation Recorded"


    );



}









export function initializeMemoryListener(){





    subscribe(


        EventTypes.PORTAL_ENTERED,


        handlePortalEntered


    );







    subscribe(


        EventTypes.PORTAL_COMPLETED,


        handlePortalCompleted


    );







    subscribe(


        EventTypes.WORLD_CREATED,


        handleWorldCreated


    );





}