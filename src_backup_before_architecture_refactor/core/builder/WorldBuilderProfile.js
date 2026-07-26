/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER PROFILE™

The identity layer
of a World Builder™

Version 1.0
==========================================
*/


export function createBuilderProfile(

    creator

) {


    return {


        id:

            creator.id,



        identity:


        {


            name:

                creator.identity.name,



            archetype:

                creator.identity.archetype



        },



        evolution:


        {


            level:

                creator.evolution.level,



            experience:

                creator.evolution.experience,



            stage:

                "explorer"



        },



        worlds:


        [],



        achievements:


        [],



        skills:


        [],



        journey:


        {


            portalsVisited:

                [],



            milestones:

                []

        }


    };


}