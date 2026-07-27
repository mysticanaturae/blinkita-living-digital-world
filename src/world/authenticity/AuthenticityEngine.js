/*
==========================================

BLINKITA METHOD™

AUTHENTICITY ENGINE™

The identity intelligence
of a Living World™

Version 1.1

==========================================
*/


import {

    AuthenticityRules

}

from "./AuthenticityRules";



import {

    MemoryTypes

}

from "../../core/memory/MemoryTypes";









export const AuthenticityEngine = {



    strengthen(

        world,

        authenticityType

    ){



        const rule =

            AuthenticityRules[authenticityType];







        if(!rule){


            return world;


        }









        const event = {



            type:

                MemoryTypes.WORLD_AUTHENTICITY,



            authenticityType,



            message:

                rule.message,



            timestamp:

                new Date().toISOString()



        };









        return {



            ...world,







            authenticity:{



                ...(world.authenticity || {}),





                level:

                    (world.authenticity?.level || 0)

                    +

                    (rule.effect.authenticityIncrease || 0),







                history:



                [



                    ...(world.authenticity?.history || []),



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