/*
==========================================

BLINKITA OS™

WORLD BUILDER EVOLUTION™

Evolution Logic System

Version 1.0

Connected with:
- WorldBuilderStages™
- WorldBuilderState™
- Living Creator™

==========================================
*/


import {

    WorldBuilderStages

}

from "../../core/worldbuilder/WorldBuilderStages";







/*
==========================================

GET CURRENT STAGE™

==========================================
*/


export function getCurrentStage(){



    const defaultLevel = 1;




    return (


        WorldBuilderStages.find(


            stage =>

            stage.level === defaultLevel


        )


        ||

        WorldBuilderStages[0]


    );


}









/*
==========================================

GET STAGE BY LEVEL™

==========================================
*/


export function getStageByLevel(level){



    return (


        WorldBuilderStages.find(


            stage =>

            stage.level === level


        )


        ||

        WorldBuilderStages[0]


    );


}









/*
==========================================

CALCULATE EVOLUTION STAGE™

==========================================
*/


export function calculateEvolutionStage(experience = 0){



    let currentStage =

        WorldBuilderStages[0];





    WorldBuilderStages.forEach(


        stage => {


            if(

                experience >= stage.level * 100

            ){

                currentStage = stage;

            }


        }


    );





    return currentStage;


}