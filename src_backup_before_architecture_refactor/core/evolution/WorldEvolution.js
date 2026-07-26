/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD EVOLUTION™

The evolution engine
of Living Worlds™

Version 1.0
==========================================
*/


export const EvolutionStages = {


    SEED:

        "seed",


    AWAKENING:

        "awakening",


    GROWING:

        "growing",


    LIVING:

        "living",


    EVOLVING:

        "evolving",


    TRANSCENDING:

        "transcending"


};





export function evolveWorld(

    world

) {


    if (!world) {

        return null;

    }



    let nextStage =

        world.status;



    switch (

        world.status

    ) {



        case "seed":

            nextStage =
                EvolutionStages.AWAKENING;

            break;



        case "awakening":

            nextStage =
                EvolutionStages.GROWING;

            break;



        case "growing":

            nextStage =
                EvolutionStages.LIVING;

            break;



        case "living":

            nextStage =
                EvolutionStages.EVOLVING;

            break;



        case "evolving":

            nextStage =
                EvolutionStages.TRANSCENDING;

            break;



        default:

            nextStage =
                world.status;


    }



    return {


        ...world,


        status:

            nextStage,


        lastEvolution:

            new Date()
            .toISOString()


    };


}