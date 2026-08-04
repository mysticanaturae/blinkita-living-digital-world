/*
==========================================

BLINKITA METHOD™

LIVING WORLD CORE™

The living organism
of a Living World™

Version 1.2

==========================================
*/


import { createWorldIdentity }

from "./identity/WorldIdentity";


import { WorldLifecycle }

from "../core/world/WorldLifecycle";


import { WorldRecord }

from "../core/world/WorldRecord";


import { WorldCreationEngine }

from "./creation/WorldCreationEngine";


import { WorldEvolutionEngine }

from "./evolution/WorldEvolutionEngine";


import { WorldTransformationEngine }

from "./transformation/WorldTransformationEngine";


import { LivingWorldEventAdapter }

from "./events/LivingWorldEventAdapter";


import { attachBirthMemory }

from "./memory/WorldMemoryBirthAdapter";


export function createLivingWorld(seed = {}) {




    const createdSeed =

        WorldCreationEngine.createSeed(

            seed

        );








    const lifecycle =

        WorldLifecycle.getStage(

            "SEED"

        );









    const record =

        WorldRecord.createWorldRecord({


            currentPortal:

                null,


            visitedPortals:

                [],


            completedPortals:

                [],


            progress:

                0,


            status:

                "seed"



        });









    const identity =

        createWorldIdentity({


            seed:

                createdSeed,


            lifecycle,


            record



        });









    const world = {




        id:

            identity.id,





        identity,





        seed:

            createdSeed,





        lifecycle,





        record,









        memory: [],






        journey: {


            stage:

                "beginning",


            milestones:

                []

        },









                evolution: {


    stage:

        WorldEvolutionEngine.EvolutionStages?.SEED || "seed",


    history:

        [],


    milestones:

        [],


    level:

        0


},









        relationships: [],






        events: [],









        createdAt:

            new Date().toISOString(),









        status:

            "alive"



    };









    /*
    ======================================

    WORLD EVOLUTION FUNCTION™

    A Living World™ can evolve itself

    ======================================
    */



    world.evolve = function(){



        return WorldEvolutionEngine.evolve(

            world

        );



    };



/*
======================================

WORLD TRANSFORMATION FUNCTION™

A Living World™ transforms
through experiences

======================================
*/


world.transform = function(

    transformation

){


    return WorldTransformationEngine.transform(

        world,

        transformation

    );


};





/*
======================================

WORLD BIRTH EVENT™

The first heartbeat
of a Living World™

======================================
*/


const livingWorld =

    attachBirthMemory(

        world

    );



LivingWorldEventAdapter.worldCreated(

    livingWorld

);


return livingWorld;


}