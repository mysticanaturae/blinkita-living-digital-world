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





export function createLivingWorld(seed = {}) {



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


            seed,


            lifecycle,


            record



        });









    return {


        id:

            identity.id,



        identity,



        seed,



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