/*
==========================================

BLINKITA METHOD™

HARMONY EVOLUTION ENGINE™

Transforms relationships
into world evolution

Version 1.2

==========================================
*/


import {

    getWorldState,

    updateWorldState

}

from "../../../core/state/WorldState";



import {

    HarmonyRules

}

from "../rules/HarmonyRules";









export function processHarmony(

    event

){



    const rule =

        HarmonyRules[event.type];







    if(!rule){


        return getWorldState();


    }









    const world =

        getWorldState();









    const currentHarmony =

        world.harmony || {


            level: 0,

            connections: 0,

            collaborations: 0,

            resonance: 0,

            history: []


        };









    const effect =

        rule.effect || {};









    const harmony = {



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



            {

                type:

                    event.type,


                message:

                    effect.evolutionMessage || "",


                timestamp:

                    new Date().toISOString()


            }



        ]



    };












    const harmonyEvent = {



        type:

            "harmony_created",



        source:

            event.type,



        message:

            effect.evolutionMessage || "",



        timestamp:

            new Date().toISOString()



    };












    return updateWorldState({





        harmony,





        memory:{



            ...(world.memory || {}),



            events:[



                ...(world.memory?.events || []),



                harmonyEvent



            ]



        }






    });



}