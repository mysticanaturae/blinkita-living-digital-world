/*
==========================================

BLINKITA METHOD™

DISCOVERY LISTENER™

Automatic discovery response

Version 1.2

==========================================
*/


import {

    subscribe

}

from "../../core/events/EventBus";



import {

    processDiscovery

}

from "./engine/DiscoveryEvolutionEngine";







export function initializeDiscoveryListener(){



    subscribe(


        "DISCOVERY_CREATED",


        (event)=>{


            const discovery =

                processDiscovery(

                    event

                );





            console.log(


                "✨ Discovery Response:",


                discovery


            );



        }


    );



}