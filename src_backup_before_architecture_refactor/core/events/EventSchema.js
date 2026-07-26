/*
==========================================
BLINKITA METHOD™

EVENT SCHEMA™

Version 1.0
==========================================
*/


export function validateEvent(event){


    if(!event.type){

        throw new Error(
            "Event requires type."
        );

    }


    if(!event.timestamp){

        throw new Error(
            "Event requires timestamp."
        );

    }


    return true;

}