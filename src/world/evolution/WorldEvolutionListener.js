/*
==========================================

BLINKITA METHOD™

WORLD EVOLUTION LISTENER™

The awareness system
of a Living World™

Version 1.2

Connected with:

- EventTypes™
- EventBus™
- WorldEvolutionEngine™
- WorldState™
- LivingWorldEventAdapter™

==========================================
*/


import {

    subscribe

}

from "../../core/events/EventBus";


import {

    EventTypes

}

from "../../core/events/EventTypes";


import {

    getWorldState,
    updateWorldState

}

from "../../core/state/WorldState";


import {

    WorldEvolutionEngine

}

from "./WorldEvolutionEngine";


import {

    LivingWorldEventAdapter

}

from "../events/LivingWorldEventAdapter";





/*
==========================================
EVOLVE FROM EVENT™

The listener translates
canonical Living World events
into evolution transitions.

==========================================
*/


export function evolveFromEvent(

    world,

    event

) {


    if (

        !world

        ||

        !event

    ) {

        return world;

    }



    let nextStage = null;




    switch (

        event.type

    ) {



        case EventTypes.WORLD_CREATED:

            nextStage =

                WorldEvolutionEngine.EvolutionStages

                ?.

                AWAKENING

                ||

                "awakening";

            break;




        case EventTypes.PORTAL_COMPLETED:

            nextStage =

                WorldEvolutionEngine.getNextStage(

                    world.evolution?.stage

                    ||

                    "seed"

                );

            break;




        case EventTypes.WORLD_EVOLVED:

            return world;




        default:

            return world;

    }




    if (!nextStage) {

        return world;

    }




    return WorldEvolutionEngine.evolve(

        world,

        nextStage

    );

}






/*
==========================================
INITIALIZE WORLD EVOLUTION™

Connects canonical world events
with the Evolution Engine™.

==========================================
*/


export function initializeWorldEvolutionListener() {



    subscribe(

        EventTypes.WORLD_CREATED,

        (event) => {



            const world =

                getWorldState();



            const evolvedWorld =

                evolveFromEvent(

                    world,

                    event

                );



            if (

                !evolvedWorld

                ||

                evolvedWorld === world

            ) {

                return;

            }



            updateWorldState(

                evolvedWorld

            );



            LivingWorldEventAdapter.worldEvolved(

                evolvedWorld

            );



            console.log(

                "🌱 World Evolution Awakening™",

                evolvedWorld.evolution

            );

        }

    );





    subscribe(

        EventTypes.PORTAL_COMPLETED,

        (event) => {



            const world =

                getWorldState();



            const evolvedWorld =

                evolveFromEvent(

                    world,

                    event

                );



            if (

                !evolvedWorld

                ||

                evolvedWorld === world

            ) {

                return;

            }



            updateWorldState(

                evolvedWorld

            );



            LivingWorldEventAdapter.worldEvolved(

                evolvedWorld

            );



            console.log(

                "🌱 World Evolution Transition™",

                evolvedWorld.evolution

            );

        }

    );



}
