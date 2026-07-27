/*
==========================================
BLINKITA METHOD™

JOURNEY LISTENER™

Automatic creator journey response

Version 1.1
==========================================
*/


import {

    subscribe

}

from "../core/events/EventBus";



import {

    processJourney

}

from "./JourneyEngine";



import {

    EventTypes

}

from "../core/events/EventTypes";









function handleJourney(

    event

){



    const journey =

        processJourney(

            event

        );





    console.log(


        "🌱 Creator Journey™",


        journey


    );





    return journey;



}









export function initializeJourneyListener(){





    subscribe(


        EventTypes.PORTAL_ENTERED,


        handleJourney


    );








    subscribe(


        EventTypes.PORTAL_COMPLETED,


        handleJourney


    );





}