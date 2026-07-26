/*
==========================================
BLINKITA METHOD™

EVOLUTION ENGINE™

Transforms events into world evolution

Version 1.0
==========================================
*/


import { getWorldState, updateWorldState } from "../core/state/WorldState";



import {

    EvolutionRules

}

from "./EvolutionRules";







export function processEvolution(

    event

){



    const rule =

        EvolutionRules[event.type];





    if(!rule){


        return getWorldState();


    }







    const world =

        getWorldState();







    let updatedEvolution =

        {


            ...world.evolution


        };









    if(

        rule.transformation.type

        ===

        "stage_change"

    ){



        updatedEvolution = {


            ...updatedEvolution,


            stage:

                rule.transformation.to,



            level:

                updatedEvolution.level + 1,



            milestones:

            [

                ...updatedEvolution.milestones,


                {


                    message:

                    rule.transformation.message,


                    timestamp:

                    new Date().toISOString()


                }


            ]



        };



    }







    return updateWorldState({


        evolution:

            updatedEvolution



    });



}