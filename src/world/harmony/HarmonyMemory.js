/*
==========================================

BLINKITA METHOD™

HARMONY MEMORY™

The relationship archive
of a Living World™

Version 1.0

==========================================
*/


import {

    getWorldState,

    updateWorldState

}

from "../../core/state/WorldState";



import {

    HarmonyTypes

}

from "./HarmonyTypes";







export const HarmonyMemory = {



    remember(

        type,

        participants,

        message

    ){



        const harmonyEvent = {



            type,



            participants,



            message,



            timestamp:

                new Date().toISOString()



        };






        const world =

            getWorldState();







        return updateWorldState({



            relationships:


                [


                    ...(world.relationships || []),


                    harmonyEvent


                ]



        });



    },









    connect(

        participants

    ){



        return this.remember(



            HarmonyTypes.CONNECTION,



            participants,



            "A new connection was created"



        );



    }






};