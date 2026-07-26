/*
==========================================
BLINKITA METHOD™

MEMORY FACTORY™

Creates Living Memories™

Version 1.0
==========================================
*/


export function createMemory({

    type,

    message,

    data = {}

}) {


    return {


        id:

            Date.now(),



        type,



        message,



        data,



        createdAt:

            new Date().toISOString()



    };


}