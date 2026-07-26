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



    const eventListeners =

        listeners[eventType];




    if(!eventListeners){


        return;


    }





    eventListeners.forEach(

        callback => {


            callback(event);


        }


    );



}