/*
==========================================

BLINKITA METHOD™

LIVING WORLD EVENT ADAPTER™

The bridge between
LivingWorld™ and Living Events™

Version 1.0

==========================================
*/


import {

    createEvent

}

from "../../core/events/EventFactory";



import {

    EventTypes

}

from "../../core/events/EventTypes";



import {

    emit

}

from "../../core/events/EventBus";







export const LivingWorldEventAdapter = {




    worldCreated(world) {



        const event =

            createEvent({



                type:

                    EventTypes.WORLD_CREATED,



                source:

                    "LivingWorld",



                payload: {


                    worldId:

                        world.id,


                    identity:

                        world.identity,


                    createdAt:

                        world.createdAt



                }



            });






        emit(

            event.type,

            event

        );





        return event;


    },









    worldUpdated(world) {



        const event =

            createEvent({



                type:

                    EventTypes.WORLD_UPDATED,



                source:

                    "LivingWorld",



                payload: {


                    worldId:

                        world.id,


                    status:

                        world.status



                }



            });







        emit(

            event.type,

            event

        );





        return event;


    },









    worldEvolved(world) {



        const event =

            createEvent({



                type:

                    EventTypes.WORLD_EVOLVED,



                source:

                    "WorldEvolution",



               payload: {


    worldId:

        world.id,


    world,


    identity:

        world.identity,


    createdAt:

        world.createdAt



}



            });







        emit(

            event.type,

            event

        );





        return event;


    }




};