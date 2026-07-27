/*
==========================================

BLINKITA METHOD™

JOURNEY ENGINE™

The creator progression system

Version 1.1

Protected milestone system

==========================================
*/


import {

    getWorldState,

    updateWorldState

}

from "../core/state/WorldState";



import {

    JourneyRules

}

from "./JourneyRules";







export function processJourney(

    event

){



    const rule =

        JourneyRules[event.type];



    if(!rule){

        return getWorldState();

    }





    const world =

        getWorldState();





    const milestoneExists =

        (world.journey?.milestones || [])

        .some(

            milestone =>

                milestone.message === rule.message

        );







    const updatedJourney = {



        ...world.journey,



        stage:

            rule.nextStage,




        milestones:



            milestoneExists



            ?



            world.journey.milestones



            :



            [

                ...(world.journey?.milestones || []),


                {

                    message:

                        rule.message,


                    timestamp:

                        new Date().toISOString()

                }

            ]



    };







    return updateWorldState({



        journey:

            updatedJourney



    });



}