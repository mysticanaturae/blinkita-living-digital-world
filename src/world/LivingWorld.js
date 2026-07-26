/*
==========================================

BLINKITA METHOD™

LIVING WORLD CORE™

The living organism
of a Living World™

Version 1.1

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












    return {


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

                "seed",


            history:

                []

        },







        relationships: [],



        events: [],






        createdAt:

            new Date().toISOString(),






        status:

            "alive"



    };


}