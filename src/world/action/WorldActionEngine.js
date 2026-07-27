/*
==========================================

BLINKITA METHOD™

WORLD ACTION ENGINE™

The execution layer
of a Living World™

Version 2.0

==========================================
*/


import {

    updateWorldState,

    addWorldMemory

}

from "../../core/state/WorldState";


import {

    createMemory

}

from "../../core/memory/MemoryFactory";


import {

    MemoryTypes

}

from "../../core/memory/MemoryTypes";


import {

    ActionRules

}

from "./ActionRules";







export const WorldActionEngine = {





    execute(

        decision

    ){



        const rule =

            ActionRules[

                decision.decision.action

            ]

            ||

            ActionRules.default;





        return this[

            rule.method

        ](

            decision

        );



    },









    observeJourney(

        decision

    ){



        return this.createActionMemory(

            "Creator journey observed.",

            decision

        );



    },









    advanceEvolution(

        decision

    ){



        const world =

            updateWorldState({



                evolution:{

                    stage:

                        "growth",



                    level:

                        2

                }



            });





        this.createActionMemory(

            "World evolution advanced.",

            decision

        );





        return world;



    },









    nurtureWorld(

        decision

    ){



        return this.createActionMemory(

            "World nurturing started.",

            decision

        );



    },









    continueObservation(

        decision

    ){



        return this.createActionMemory(

            "World continues observing.",

            decision

        );



    },









    createActionMemory(

        message,

        decision

    ){



        const memory =

            createMemory({



                type:

                    MemoryTypes.CREATION,



                message,



                data:{

                    decision

                }



            });





        addWorldMemory(

            memory

        );





        return memory;



    }



};