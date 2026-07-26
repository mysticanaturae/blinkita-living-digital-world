/*
==========================================

BLINKITA METHOD™

WORLD EVOLUTION ENGINE™

The growth intelligence
of a Living World™

Version 1.0

==========================================
*/


import { WorldLifecycle }

from "../../core/world/WorldLifecycle";




export const WorldEvolutionEngine = {



    evolve(world) {



        const stages = [

            "SEED",

            "GROWING",

            "LIVING",

            "THRIVING",

            "LEGACY"

        ];





        const currentStage =

            world.lifecycle?.id;





        const currentIndex =

            stages.findIndex(

                stage =>

                    WorldLifecycle.stages[stage].id === currentStage

            );







        const nextStage =

            stages[currentIndex + 1];








        if(!nextStage){


            return {


                ...world,


                evolution: {


                    ...world.evolution,


                    stage:

                        "legacy"



                }


            };


        }








        const lifecycle =

            WorldLifecycle.getStage(

                nextStage

            );








        return {


            ...world,



            lifecycle,



            evolution: {


                ...world.evolution,


                stage:

                    lifecycle.id,



                history:

                [


                    ...(world.evolution?.history || []),


                    {


                        from:

                            currentStage,


                        to:

                            lifecycle.id,



                        timestamp:

                            new Date().toISOString()


                    }


                ]



            }




        };



    }



};