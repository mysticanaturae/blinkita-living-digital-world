/*
==========================================

BLINKITA METHOD™

INTELLIGENCE LISTENER™

Automatic awareness response

Version 2.1

Connected with:
- World Intelligence Engine™
- World Memory™
- World State™

Optimized World Commit™

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

    WorldIntelligenceEngine

}

from "./WorldIntelligenceEngine";



import {

    getWorldState,

    updateWorldState

}

from "../../core/state/WorldState";



import {

    MemoryTypes

}

from "../../core/memory/MemoryTypes";



import {

    createMemory

}

from "../../core/memory/MemoryFactory";









function processIntelligence(

    event

){



    const insight =

        WorldIntelligenceEngine.analyze(

            event

        );







    const world =

        getWorldState();









    const memory =

        createMemory({



            type:

                MemoryTypes.WORLD_TRANSFORMATION,



            message:

                insight.meaning,



            data:{



                eventType:

                    event.type,



                suggestedAction:

                    insight.suggestedAction



            }



        });









    updateWorldState({





        memory:{



            ...(world.memory || {}),



            events:[



                ...(world.memory?.events || []),



                memory



            ]



        },







        intelligence:{





            ...(world.intelligence || {}),





            level:

                (world.intelligence?.level || 0)

                + 1,







            insights:[



                ...(world.intelligence?.insights || []),



                insight



            ],






            history:[



                ...(world.intelligence?.history || []),



                memory



            ]





        }





    });









    console.log(



        "🌎 World Intelligence™",



        {



            insight,

            memory



        }



    );









    return insight;



}














export function initializeIntelligenceListener(){






    subscribe(



        EventTypes.PORTAL_ENTERED,



        processIntelligence



    );









    subscribe(



        EventTypes.PORTAL_COMPLETED,



        processIntelligence



    );









    subscribe(



        EventTypes.WORLD_CREATED,



        processIntelligence



    );









    subscribe(



        EventTypes.WORLD_EVOLVED,



        processIntelligence



    );







}