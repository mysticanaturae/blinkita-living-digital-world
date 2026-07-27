/*
==========================================

BLINKITA METHOD™

WORLD EVOLUTION ENGINE™

The consciousness growth
of a Living World™

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


    THRIVING:

        "thriving",


    LEGACY:

        "legacy"


};







export const WorldEvolutionEngine = {



    evolve(world, nextStage) {



        if (!world) {

            return null;

        }





        return {


            ...world,



            evolution: {


                stage:

                    nextStage,



                history:

                [

                    ...(world.evolution?.history || []),



                    {


                        from:

                            world.evolution?.stage || "seed",



                        to:

                            nextStage,



                        timestamp:

                            new Date().toISOString()


                    }


                ]

            },



            updatedAt:

                new Date().toISOString()


        };


    },







    getNextStage(currentStage) {



        const stages = [

            EvolutionStages.SEED,

            EvolutionStages.AWAKENING,

            EvolutionStages.GROWING,

            EvolutionStages.LIVING,

            EvolutionStages.THRIVING,

            EvolutionStages.LEGACY

        ];



        const index =

            stages.indexOf(currentStage);




        if (

            index === -1 ||

            index === stages.length - 1

        ) {

            return currentStage;

        }



        return stages[index + 1];


    }






};