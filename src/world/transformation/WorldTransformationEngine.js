/*
==========================================

BLINKITA METHOD™

WORLD TRANSFORMATION ENGINE™

The change intelligence
of a Living World™

Version 1.0

==========================================
*/


import { MemoryTypes }

from "../../core/memory/MemoryTypes";




export const WorldTransformationEngine = {



    transform(

        world,

        transformation

    ) {



        const event = {



            type:

                MemoryTypes.WORLD_TRANSFORMATION,



            transformation,



            timestamp:

                new Date().toISOString()



        };








        return {



            ...world,



            status:

                "transformed",






            evolution: {


                ...world.evolution,



                history:

                [


                    ...(world.evolution?.history || []),



                    {


                        type:

                            "transformation",



                        transformation,



                        timestamp:

                            event.timestamp


                    }


                ]



            },







            events:

            [


                ...(world.events || []),


                event


            ]



        };



    }



};