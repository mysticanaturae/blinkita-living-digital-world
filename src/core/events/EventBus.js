/*
==========================================

BLINKITA METHOD™

EVENT BUS™

The nervous system
of a Living World™

Version 2.1

==========================================
*/


const listeners = {};




/*
==========================================
SUBSCRIBE
==========================================
*/


export function subscribe(

    eventType,

    callback

) {


    if (

        !eventType

        ||

        typeof callback !== "function"

    ) {

        return () => {};

    }



    if (

        !listeners[eventType]

    ) {

        listeners[eventType] = [];

    }



    listeners[eventType].push(

        callback

    );




    /*
    ======================================
    UNSUBSCRIBE
    ======================================
    */


    return () => {

        const eventListeners =

            listeners[eventType];



        if (!eventListeners) {

            return;

        }



        listeners[eventType] =

            eventListeners.filter(

                listener =>

                    listener !== callback

            );

    };

}




/*
==========================================
EMIT
==========================================
*/


export function emit(

    eventType,

    event

) {


    console.log(

        "📡 EVENT EMITTED:",

        eventType,

        event

    );



    const eventListeners =

        listeners[eventType];



    if (

        !eventListeners

        ||

        eventListeners.length === 0

    ) {

        console.log(

            "⚠️ No listeners for:",

            eventType

        );

        return;

    }




    /*
    ======================================
    SNAPSHOT LISTENERS

    Prevent mutation of the listener
    collection while an event is running.

    ======================================
    */


    [

        ...eventListeners

    ].forEach(

        callback => {


            try {

                callback(event);

            }

            catch (error) {

                console.error(

                    "❌ Event listener failed:",

                    eventType,

                    error

                );

            }

        }

    );

}




/*
==========================================
CLEAR LISTENERS

Useful for development/testing.

==========================================
*/


export function clearListeners(

    eventType

) {


    if (eventType) {

        delete listeners[eventType];

        return;

    }



    Object.keys(

        listeners

    ).forEach(

        type => {

            delete listeners[type];

        }

    );

}
