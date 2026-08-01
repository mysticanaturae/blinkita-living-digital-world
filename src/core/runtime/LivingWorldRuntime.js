/*
==========================================

BLINKITA METHOD™

LIVING WORLD RUNTIME™

The heartbeat
of a Living World™

Version 1.1

==========================================
*/


import {

    enterWorldPortal,

    completeWorldPortal,

    getWorldState,

    updateWorldState

}

from "../state/WorldState";



import {

    createLivingWorld

}

from "../../world/LivingWorld";



import {

    createEvent

}

from "../events/EventFactory";



import {

    emit

}

from "../events/EventBus";



import {

    EventTypes

}

from "../events/EventTypes";





export const LivingWorldRuntime = {




    /*
    ==========================================
    CREATE LIVING WORLD™

    Creates a new Living World
    and connects it with WorldState.

    ==========================================
    */


    createWorld(

        seed = {}

    ){


        const world =

            createLivingWorld(

                seed

            );




        const state =

            updateWorldState({

                livingWorld:

                    world,

                currentPortal:

                    "world-seed",

                status:

                    "seed",

                lastActive:

                    new Date().toISOString()

            });





        console.log(

            "🌱 Living World created:",

            world

        );





        return {

            world,

            state

        };


    },





    /*
    ==========================================
    ENTER PORTAL
    ==========================================
    */


    enterPortal(

        portalId

    ){



        const state =

            enterWorldPortal(

                portalId

            );





        const event =

            createEvent({



                type:

                    EventTypes.PORTAL_ENTERED,



                source:

                    "LivingWorldRuntime",



                payload: {


                    portalId,


                    worldId:

                        state.id



                }



            });





        emit(

            event.type,

            event

        );







        return state;


    },







    /*
    ==========================================
    COMPLETE PORTAL
    ==========================================
    */


    completePortal(

        portalId

    ){



        const state =

            completeWorldPortal(

                portalId

            );





        const event =

            createEvent({



                type:

                    EventTypes.PORTAL_COMPLETED,



                source:

                    "LivingWorldRuntime",



                payload: {


                    portalId,


                    worldId:

                        state.id



                }



            });





        emit(

            event.type,

            event

        );







        return state;


    },







    /*
    ==========================================
    GET WORLD STATE
    ==========================================
    */


    getState(){



        return getWorldState();



    }




};