/*
==========================================
BLINKITA METHOD™

EVENT FACTORY™

Creates Living Events™

Version 1.0
==========================================
*/


export function createEvent({

    type,

    source,

    payload = {}

}) {


    return {


        id:
            Date.now(),


        type,


        source,


        payload,


        timestamp:
            new Date()
                .toISOString()


    };


}