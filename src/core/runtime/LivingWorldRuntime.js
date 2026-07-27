/*
==========================================

BLINKITA METHOD™

LIVING WORLD RUNTIME™

The heartbeat
of a Living World™

Version 1.0

==========================================
*/


import {

    enterWorldPortal,

    completeWorldPortal,

    getWorldState

}

from "../state/WorldState";



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









    getState(){



        return getWorldState();



    }




};