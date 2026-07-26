/*
==========================================

BLINKITA METHOD™

WORLD MEMORY ADAPTER™

Connecting World Memory™
with LivingWorld™

Version 1.1

==========================================
*/


export function attachMemoryToWorld(

    world,

    memory

) {


    return {


        ...world,


        memory:

        [

            ...(world.memory || []),

            {

                ...memory,

                attachedAt:

                    new Date().toISOString()

            }

        ]


    };


}