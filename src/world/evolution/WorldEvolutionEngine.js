/*
==========================================

BLINKITA METHOD™

WORLD EVOLUTION ENGINE™

The consciousness growth
of a Living World™

Version 2.0

==========================================
*/


/*
==========================================
CANONICAL EVOLUTION STAGES™
==========================================

These stages are aligned with
WorldLifecycle™.

There is one canonical evolution
language for the Living World™.

==========================================
*/


export const EvolutionStages = {


    SEED:

        "seed",


    GROWING:

        "growing",


    LIVING:

        "living",


    THRIVING:

        "thriving",


    LEGACY:

        "legacy"


};





/*
==========================================
WORLD EVOLUTION ENGINE™
==========================================
*/


export const WorldEvolutionEngine = {


    /*
    ======================================
    EXPOSE CANONICAL STAGES
    ======================================

    Kept on the engine as well as exported
    separately for compatibility with
    existing LivingWorld™ code.

    ======================================
    */


    EvolutionStages,





    /*
    ======================================
    EVOLVE WORLD™
    ======================================
    */


    evolve(

        world,

        nextStage

    ){


        if(!world){

            return null;

        }



        const currentStage =

            world.evolution?.stage

            ||

            world.status

            ||

            EvolutionStages.SEED;




        const targetStage =

            nextStage

            ||

            this.getNextStage(

                currentStage

            );




        if(!targetStage){

            return world;

        }




        const previousHistory =

            world.evolution?.history

            ||

            [];




        const historyEntry = {


            from:

                currentStage,


            to:

                targetStage,


            timestamp:

                new Date().toISOString()


        };




        const currentLevel =

            world.evolution?.level

            ??

            0;




        const milestones =

            world.evolution?.milestones

            ||

            [];




        const evolvedWorld = {


            ...world,



            /*
            ==================================
            WORLD STATUS
            ==================================
            */


            status:

                targetStage,



            /*
            ==================================
            EVOLUTION STATE
            ==================================
            */


            evolution: {


                ...(world.evolution || {}),


                stage:

                    targetStage,


                history: [

                    ...previousHistory,

                    historyEntry

                ],


                milestones,


                level:

                    currentLevel + 1


            },



            /*
            ==================================
            TIMESTAMPS
            ==================================
            */


            updatedAt:

                new Date().toISOString(),


            lastEvolution:

                new Date().toISOString()


        };




        return evolvedWorld;


    },





    /*
    ======================================
    GET NEXT STAGE™
    ======================================
    */


    getNextStage(

        currentStage

    ){



        const stages = [


            EvolutionStages.SEED,


            EvolutionStages.GROWING,


            EvolutionStages.LIVING,


            EvolutionStages.THRIVING,


            EvolutionStages.LEGACY


        ];




        const index =

            stages.indexOf(

                currentStage

            );




        if(

            index === -1

            ||

            index === stages.length - 1

        ){

            return currentStage;

        }




        return stages[

            index + 1

        ];


    },





    /*
    ======================================
    GET STAGE ORDER™
    ======================================
    */


    getStageOrder(

        stage

    ){



        const stages = [


            EvolutionStages.SEED,


            EvolutionStages.GROWING,


            EvolutionStages.LIVING,


            EvolutionStages.THRIVING,


            EvolutionStages.LEGACY


        ];




        return stages.indexOf(

            stage

        ) + 1;


    },





    /*
    ======================================
    IS FINAL STAGE™
    ======================================
    */


    isFinalStage(

        stage

    ){



        return (

            stage ===

            EvolutionStages.LEGACY

        );


    }


};




export default WorldEvolutionEngine;
