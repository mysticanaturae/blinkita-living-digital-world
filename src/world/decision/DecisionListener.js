/*
==========================================

BLINKITA METHOD™

DECISION LISTENER™

Automatic choice response
of a Living World™

Version 2.1

Connected with:

- World Intelligence™
- World Decision Engine™
- World Event Bus™
- World Memory™
- World State™

Optimized World Commit™

==========================================
*/



import {

    subscribe,

    emit

}

from "../../core/events/EventBus";



import {

    EventTypes

}

from "../../core/events/EventTypes";



import {

    WorldIntelligenceEngine

}

from "../intelligence/WorldIntelligenceEngine";



import {

    WorldDecisionEngine

}

from "./WorldDecisionEngine";



import {

    createMemory

}

from "../../core/memory/MemoryFactory";



import {

    MemoryTypes

}

from "../../core/memory/MemoryTypes";



import {

    updateWorldState,

    getWorldState

}

from "../../core/state/WorldState";









function processDecision(

    event

){



    const insight =

        WorldIntelligenceEngine.analyze(

            event

        );







    const decision =

        WorldDecisionEngine.decide(

            insight

        );









    const memory =

        createMemory({



            type:

                MemoryTypes.MILESTONE,



            message:

                `Decision created: ${decision.decision.action}`,



            data:{



                eventType:

                    event.type,



                decision



            }



        });









    const world =

        getWorldState();









    updateWorldState({





        memory:{



            ...(world.memory || {}),



            events:[



                ...(world.memory?.events || []),



                memory



            ]



        },







        decision:{





            ...(world.decision || {}),





            choices:[



                ...(world.decision?.choices || []),



                decision



            ],






            history:[



                ...(world.decision?.history || []),



                memory



            ]





        }





    });












    /*
    ======================================
    DECISION EVENT™

    Send decision
    to Action Layer™

    ======================================
    */



    emit(

        EventTypes.DECISION_CREATED,

        decision

    );









    console.log(



        "🧭 World Decision™",



        {



            insight,


            decision,


            memory



        }



    );









    return decision;



}














export function initializeDecisionListener(){





    subscribe(



        EventTypes.PORTAL_ENTERED,



        processDecision



    );









    subscribe(



        EventTypes.PORTAL_COMPLETED,



        processDecision



    );









    subscribe(



        EventTypes.WORLD_CREATED,



        processDecision



    );









    subscribe(



        EventTypes.WORLD_EVOLVED,



        processDecision



    );





}