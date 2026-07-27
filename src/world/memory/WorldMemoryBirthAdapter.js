/*
==========================================

BLINKITA METHOD™

WORLD MEMORY BIRTH ADAPTER™

Connecting the birth
of a Living World™
with World Memory™

Version 1.0

==========================================
*/


import {

    createWorldBirthMemory

}

from "./WorldBirthMemory";



import {

    attachMemoryToWorld

}

from "./WorldMemoryAdapter";







export function attachBirthMemory(

    world

) {



    const memory =

        createWorldBirthMemory(

            world

        );





    return attachMemoryToWorld(

        world,

        memory

    );



}