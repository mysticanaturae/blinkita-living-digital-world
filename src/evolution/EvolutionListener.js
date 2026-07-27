/*
==========================================
BLINKITA METHOD™

EVOLUTION LISTENER™

Automatic evolution response

Version 1.2

Connected with:
- EventBus™
- Evolution Engine™
- World Evolution™

==========================================
*/


import {

    subscribe

}

from "../core/events/EventBus";



import {

    processEvolution

}

from "./EvolutionEngine";



import {

    EventTypes

}

from "../core/events/EventTypes";









function handleEvolution(

    event

){



    const evolution =

        processEvolution(

            event

        );





    console.log(


        "🌱 World Evolution™",


        evolution


    );





    return evolution;



}









export function initializeEvolutionListener(){





    subscribe(


        EventTypes.PORTAL_COMPLETED,


        handleEvolution


    );





}