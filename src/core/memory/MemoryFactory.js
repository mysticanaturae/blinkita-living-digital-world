/*
==========================================

BLINKITA METHOD™

MEMORY FACTORY™

Creates Living Memories™

Version 2.0

==========================================
*/





export function createMemory({

    type,

    message,

    data = {},

    source = "living_world",

    importance = 1

}) {



    return {



        id:

            Date.now(),





        type,





        message,





        data,





        source,





        importance,





        createdAt:

            new Date().toISOString()



    };



}