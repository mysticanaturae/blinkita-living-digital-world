/*
==========================================

BLINKITA METHOD™

AUTHENTICITY LISTENER™

Automatic identity response

Version 1.2

==========================================
*/


import {

    subscribe

}

from "../../core/events/EventBus";



import {

    AuthenticityEngine

}

from "./AuthenticityEngine";



import {

    getWorldState,

    updateWorldState

}

from "../../core/state/WorldState";



import {

    EventTypes

}

from "../../core/events/EventTypes";









export function initializeAuthenticityListener(){







    subscribe(


        EventTypes.WORLD_CREATED,



        ()=>{






            const world =

                getWorldState();








            const updatedWorld =

                AuthenticityEngine.strengthen(

                    world,

                    "identity"

                );








            updateWorldState(

                {

                    authenticity:

                        updatedWorld.authenticity,


                    memory:

                        updatedWorld.memory

                }

            );





        }



    );









    subscribe(


        EventTypes.WORLD_EVOLVED,



        ()=>{






            const world =

                getWorldState();








            const updatedWorld =

                AuthenticityEngine.strengthen(

                    world,

                    "signature"

                );








            updateWorldState(

                {

                    authenticity:

                        updatedWorld.authenticity,


                    memory:

                        updatedWorld.memory

                }

            );





        }



    );









    subscribe(


        EventTypes.CREATOR_CREATED,



        ()=>{






            const world =

                getWorldState();








            const updatedWorld =

                AuthenticityEngine.strengthen(

                    world,

                    "purpose"

                );








            updateWorldState(

                {

                    authenticity:

                        updatedWorld.authenticity,


                    memory:

                        updatedWorld.memory

                }

            );





        }



    );









    subscribe(


        EventTypes.CREATOR_TRANSFORMED,



        ()=>{






            const world =

                getWorldState();








            const updatedWorld =

                AuthenticityEngine.strengthen(

                    world,

                    "essence"

                );








            updateWorldState(

                {

                    authenticity:

                        updatedWorld.authenticity,


                    memory:

                        updatedWorld.memory

                }

            );





        }



    );



}