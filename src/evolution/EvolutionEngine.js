/*
==========================================

BLINKITA METHOD™

EVOLUTION ENGINE™

Transforms events into world evolution

Version 1.2

==========================================
*/


import {

    getWorldState,

    updateWorldState

}

from "../core/state/WorldState";



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









    let updatedEvolution = {


        ...world.evolution


    };









    if(


        rule.transformation.type

        ===

        "stage_change"


    ){





        const milestoneExists =

            (updatedEvolution.milestones || [])

            .some(

                milestone =>

                    milestone.message ===

                    rule.transformation.message

            );







        updatedEvolution = {


            ...updatedEvolution,



            stage:

                rule.transformation.to,



            level:

                milestoneExists

                ?

                updatedEvolution.level


                :

                (updatedEvolution.level || 0) + 1,



            milestones:


                milestoneExists

                ?


                updatedEvolution.milestones



                :



                [

                    ...(updatedEvolution.milestones || []),



                    {


                        message:

                            rule.transformation.message,



                        timestamp:

                            new Date().toISOString()


                    }



                ]



        };



    }














    const evolutionEvent = {


        type:

            "world_evolution",



        source:

            event.type,



        stage:

            updatedEvolution.stage,



        message:

            rule.transformation.message,



        timestamp:

            new Date().toISOString()



    };









    const eventExists =


        (world.memory?.events || [])

        .some(

            existing =>

                existing.type === "world_evolution"

                &&

                existing.source === event.type

                &&

                existing.message === rule.transformation.message

        );









    return updateWorldState({





        evolution:

            updatedEvolution,







        memory:{



            ...(world.memory || {}),



            events:

                eventExists


                ?


                world.memory.events



                :



                [

                    ...(world.memory?.events || []),



                    evolutionEvent



                ]



        }







    });



}