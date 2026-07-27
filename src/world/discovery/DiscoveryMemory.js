/*
==========================================

BLINKITA METHOD™

DISCOVERY MEMORY™

The archive of discoveries
inside a Living World™

Version 1.2

==========================================
*/


import {

    getWorldState,

    updateWorldState

}

from "../../core/state/WorldState";



import {

    DiscoveryTypes

}

from "./DiscoveryTypes";









export const DiscoveryMemory = {







    remember(


        type,


        source,


        message


    ){





        const discoveryEvent = {




            type,



            source,



            message,



            timestamp:



                new Date().toISOString()



        };









        const world =

            getWorldState();









        const discovery =

        {


            ...(world.discovery || {}),



            history:



            [



                ...(world.discovery?.history || []),



                discoveryEvent



            ]



        };









        return updateWorldState({






            discovery,






            memory:{



                ...(world.memory || {}),



                events:[



                    ...(world.memory?.events || []),



                    discoveryEvent



                ]



            }





        });







    },













    reveal(


        source


    ){



        return this.remember(




            DiscoveryTypes.REVELATION,



            source,



            "A new revelation has entered the living memory."




        );



    }






};