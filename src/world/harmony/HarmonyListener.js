/*
==========================================

BLINKITA METHOD™

HARMONY LISTENER™

Automatic relationship response

Version 1.2

==========================================
*/



import {

    subscribe

}

from "../../core/events/EventBus";



import {

    EventTypes

}

from "../../core/events/EventTypes";



import {

    processHarmony

}

from "./engine/HarmonyEvolutionEngine";









export function initializeHarmonyListener(){







    subscribe(


        EventTypes.RELATIONSHIP_CREATED,



        (event)=>{






            const harmony =

                processHarmony(

                    event

                );








            console.log(



                "🌱 Harmony Response™",



                harmony



            );







        }



    );








    subscribe(


        EventTypes.CONNECTION_CREATED,



        (event)=>{






            const harmony =

                processHarmony({

                    ...event,

                    type:

                        "connection"

                });








            console.log(



                "🌱 Harmony Connection™",



                harmony



            );







        }



    );







}