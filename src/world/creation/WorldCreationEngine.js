/*
==========================================

BLINKITA METHOD™

WORLD CREATION ENGINE™

The birth intelligence
of a Living World™

Version 1.0

==========================================
*/


import {

    CreationStages

}

from "./CreationStages";




export const WorldCreationEngine = {



    createSeed(seed = {}) {


        return {


            ...seed,


            creationStage:

                CreationStages.IMAGINE,


            createdAt:

                new Date().toISOString(),


            status:

                "creating"


        };


    },






    advance(world) {


        const stages = Object.values(

            CreationStages

        );



        const currentIndex =

            stages.indexOf(

                world.creationStage

            );



        const nextStage =

            stages[currentIndex + 1];




        if(!nextStage){


            return {


                ...world,


                status:

                    "complete"


            };


        }





        return {


            ...world,


            creationStage:

                nextStage



        };



    }




};