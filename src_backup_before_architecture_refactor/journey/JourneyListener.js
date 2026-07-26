/*
==========================================
BLINKITA METHOD™

JOURNEY LISTENER™

Automatic creator journey response

Version 1.0
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







subscribe(

    EventTypes.PORTAL_ENTERED,


    (event)=>{


        processJourney(

            event

        );


    }


);





subscribe(

    EventTypes.PORTAL_COMPLETED,


    (event)=>{


        processJourney(

            event

        );


    }


);