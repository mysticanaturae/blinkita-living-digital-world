/*
==========================================

BLINKITA METHOD™

DISCOVERY ENGINE™

Transforms discoveries
into world evolution

Version 1.0

==========================================
*/


import {

    getWorldState,

    updateWorldState

}

from "../../../core/state/WorldState";



import {

    DiscoveryRules

}

from "../DiscoveryRules";







export function processDiscovery(

    event

){



    const rule =

        DiscoveryRules[event.type];





    if(!rule){


        return getWorldState();


    }







    const world =

        getWorldState();







    const discovery = {


        ...(world.discovery || {}),



        level:

            (world.discovery?.level || 0)

            +

            rule.effect.evolutionIncrease,




        discoveries:

        [


            ...(world.discovery?.discoveries || []),



            {


                type:

                    event.type,



                message:

                    rule.effect.message,



                timestamp:

                    new Date().toISOString()


            }



        ]



    };







    return updateWorldState({


        discovery



    });



}