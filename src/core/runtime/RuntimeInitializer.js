/*
==========================================

BLINKITA METHODâ„˘

RUNTIME INITIALIZERâ„˘

Awakens the Living World Runtimeâ„˘

Version 1.0

==========================================
*/



import { LivingWorldRuntime }

from "./LivingWorldRuntime";





export function initializeRuntime(){

    const existingState =
        LivingWorldRuntime.getState();

    /*
    ======================================
    RUNTIME BOOTSTRAP DECISION™

    A persisted Living World already exists:
    reuse it.

    No persisted Living World exists:
    create it through the canonical
    LivingWorldRuntime.createWorld() path.

    ======================================
    */

    if (
        existingState?.livingWorld
    ) {

        console.log(
            "🌱 Living World Runtime Resumed",
            existingState.livingWorld.id
        );

        return {
            world:
                existingState.livingWorld,

            state:
                existingState
        };

    }

    const result =
        LivingWorldRuntime.createWorld();

    console.log(
        "🌱 Living World Runtime Initialized",
        result.world.id
    );

    return result;

}

