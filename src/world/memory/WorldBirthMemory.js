/*
==========================================

BLINKITA METHOD™

WORLD BIRTH MEMORY™

The first memory
of a Living World™

Version 1.0

==========================================
*/


import {

    createMemory

}

from "../../core/memory/MemoryFactory";



import {

    MemoryTypes

}

from "../../core/memory/MemoryTypes";







export function createWorldBirthMemory(

    world

) {



    return createMemory({



        type:

            MemoryTypes.CREATION,



        message:

            "A new Living World™ was born.",



        data: {



            worldId:

                world.id,



            identity:

                world.identity,



            seed:

                world.seed,



            createdAt:

                world.createdAt



        }



    });



}