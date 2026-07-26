/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR EVOLUTION™

The evolution engine
of a World Builder™

Version 1.0
==========================================
*/


export const CreatorStages = {


    EXPLORER:

        "explorer",


    DREAMER:

        "dreamer",


    CREATOR:

        "creator",


    BUILDER:

        "builder",


    WORLD_BUILDER:

        "world-builder",


    VISIONARY:

        "visionary"


};







export function gainCreatorExperience(

    creator,

    amount

) {


    const experience =

        creator.evolution.experience

        +

        amount;



    let level =

        creator.evolution.level;



    if (

        experience >= level * 100

    ) {


        level++;

    }



    return {


        ...creator,



        evolution: {


            ...creator.evolution,


            experience,


            level


        }



    };


}









export function discoverCreatorStage(

    creator

) {


    const level =

        creator.evolution.level;



    if (level >= 10) {

        return CreatorStages.VISIONARY;

    }



    if (level >= 7) {

        return CreatorStages.WORLD_BUILDER;

    }



    if (level >= 5) {

        return CreatorStages.BUILDER;

    }



    if (level >= 3) {

        return CreatorStages.CREATOR;

    }



    if (level >= 2) {

        return CreatorStages.DREAMER;

    }



    return CreatorStages.EXPLORER;


}