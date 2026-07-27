/*
==========================================

BLINKITA METHOD™

HARMONY ENGINE™

The relationship intelligence
of a Living World™

Version 1.1

==========================================
*/


import {

    HarmonyRules

}

from "./HarmonyRules";



import {

    MemoryTypes

}

from "../../core/memory/MemoryTypes";







export const HarmonyEngine = {



    process(


        world,


        harmonyType


    ){



        const rule =

            HarmonyRules[harmonyType];





        if(!rule){


            return world;


        }







        const effect =

            rule.effect || {};









        const event = {



            type:

                MemoryTypes.WORLD_HARMONY,



            harmonyType,



            message:

                effect.evolutionMessage || "",



            timestamp:

                new Date().toISOString()



        };









        const currentHarmony =

            world.harmony || {



                level: 0,


                connections: 0,


                collaborations: 0,


                resonance: 0,


                history: []



            };









        return {



            ...world,







            harmony:{





                ...currentHarmony,







                level:



                    (currentHarmony.level || 0)

                    +

                    (effect.harmonyIncrease || 0),







                connections:



                    (currentHarmony.connections || 0)

                    +

                    (effect.connections || 0),







                collaborations:



                    (currentHarmony.collaborations || 0)

                    +

                    (effect.collaborations || 0),







                resonance:



                    (currentHarmony.resonance || 0)

                    +

                    (effect.resonance || 0),







                history:


                [



                    ...(currentHarmony.history || []),



                    event



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