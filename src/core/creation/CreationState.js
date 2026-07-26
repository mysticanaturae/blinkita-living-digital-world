/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATION STATE ENGINE™

The intelligence layer
between Creator and World

Version 1.0
==========================================
*/


export const CreationStages = {


    DREAM: "dream",

    VISION: "vision",

    STORY: "story",

    IDENTITY: "identity",

    EXPERIENCE: "experience",

    CREATION: "creation",

    PARTICIPATION: "participation",

    EVOLUTION: "evolution",

    NEXT: "next-possibility"


};





export function getCreationState(

    world

) {


    if (!world) {

        return null;

    }



    return {


        currentStage:

            world.creationStage ||


            CreationStages.DREAM,



        worldStatus:

            world.status,



        progress:

            world.progress,



        nextAction:

            determineNextAction(

                world

            )


    };


}







function determineNextAction(

    world

) {



    if (

        world.status === "seed"

    ) {


        return {

            title:

                "Discover Vision",


            action:

                "vision"


        };


    }





    if (

        world.status === "growing"

    ) {


        return {

            title:

                "Create Experience",


            action:

                "experience"


        };


    }






    if (

        world.status === "living"

    ) {


        return {

            title:

                "Nurture Your World",


            action:

                "nurture"


        };


    }





    return {


        title:

            "Continue Creating",


        action:

            "continue"


    };


}