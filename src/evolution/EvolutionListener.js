/*
==========================================
BLINKITA METHOD™

EVOLUTION LISTENER™

Automatic evolution response

Version 1.1

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








subscribe(

    EventTypes.PORTAL_COMPLETED,


    (event)=>{


        processEvolution(

            event

        );


    }


);