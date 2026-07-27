/*
==========================================

BLINKITA METHOD™

GOVERNANCE LISTENER™

Automatic wisdom response
of a Living World™

Version 2.1

Connected with:

- World Decision™
- World Governance Engine™
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

    WorldGovernanceEngine

}

from "./WorldGovernanceEngine";



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









function processGovernance(

    decision

){



    const evaluation =

        WorldGovernanceEngine.evaluate(

            decision

        );









    const memory =

        createMemory({



            type:

                MemoryTypes.WORLD_HARMONY,



            message:

                evaluation.wisdom,



            data:{



                decision,


                evaluation



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







        governance:{





            ...(world.governance || {}),





            decisions:

                (world.governance?.decisions || 0)

                + 1,







            evaluations:[



                ...(world.governance?.evaluations || []),



                evaluation



            ],






            history:[



                ...(world.governance?.history || []),



                memory



            ]





        }





    });









    console.log(



        "⚖️ Governance Evaluation™",



        {



            decision,


            evaluation,


            memory



        }



    );









    return evaluation;



}














export function initializeGovernanceListener(){





    /*
    ======================================
    DECISION EVENTS

    Governance awakens
    after decisions

    ======================================
    */






    subscribe(



        EventTypes.DECISION_CREATED,



        processGovernance



    );





}