/*
==========================================
BLINKITA METHOD™

JOURNEY ENGINE™

The creator progression system

Version 1.0
==========================================
*/


import { getWorldState, updateWorldState } from "../core/state/WorldState";



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





    const updatedJourney = {


        ...world.journey,


        stage:

            rule.nextStage,



        milestones:

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