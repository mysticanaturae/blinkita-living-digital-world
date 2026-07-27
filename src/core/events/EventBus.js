/*
==========================================
BLINKITA METHOD™

EVENT BUS™

The nervous system
of a Living World™

Version 2.0
==========================================
*/


const listeners = {};





export function subscribe(

    eventType,

    callback

){

    
    if(!listeners[eventType]){


        listeners[eventType] = [];


    }



    listeners[eventType].push(

        callback

    );


}







export function emit(

    eventType,

    event

){

    console.log(
        "📡 EVENT EMITTED:",
        eventType,
        event
    );


    const eventListeners =
        listeners[eventType];


    if(!eventListeners){

        console.log(
            "⚠️ No listeners for:",
            eventType
        );

        return;

    }


    eventListeners.forEach(

        callback => {

            callback(event);

        }

    );

}