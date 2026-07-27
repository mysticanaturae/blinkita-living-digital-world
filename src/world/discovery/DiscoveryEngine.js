/*
==========================================

BLINKITA METHOD™

DISCOVERY ENGINE™

The intelligence of discoveries
inside a Living World™

Version 1.1

==========================================
*/



import {

    DiscoveryRules

}

from "./DiscoveryRules";



import {

    MemoryTypes

}

from "../../core/memory/MemoryTypes";









export const DiscoveryEngine = {







    process(



        world,



        discoveryType



    ){







        const rule =

            DiscoveryRules[discoveryType];









        if(!rule){



            return world;



        }









        const effect =

            rule.effect || {};









        const event = {





            type:



                MemoryTypes.WORLD_DISCOVERY,





            discoveryType,





            message:



                effect.evolutionMessage || "",





            timestamp:



                new Date().toISOString()





        };












        return {







            ...world,









            discovery:{







                ...(world.discovery || {}),









                level:




                    (world.discovery?.level || 0)




                    +




                    (effect.discoveryIncrease || 0),









                curiosity:




                    (world.discovery?.curiosity || 0)




                    +




                    (effect.curiosity || 0),









                knowledge:




                    (world.discovery?.knowledge || 0)




                    +




                    (effect.knowledge || 0),









                possibilities:




                    (world.discovery?.possibilities || 0)




                    +




                    (effect.possibilities || 0),









                creations:




                    (world.discovery?.creations || 0)




                    +




                    (effect.creations || 0),









                history:




                [





                    ...(world.discovery?.history || []),





                    event





                ]





            },









            memory:{





                ...(world.memory || {}),





                events:





                [





                    ...(world.memory?.events || []),





                    event





                ]





            }







        };







    }







};