/*
==========================================
BLINKITA METHOD™

WORLD MEMORY™

The living archive
of a Living World™

Version 3.0
==========================================
*/


import {

    addWorldMemory

}

from "../state/WorldState";



import {

    createMemory

}

from "./MemoryFactory";



import {

    MemoryTypes

}

from "./MemoryTypes";







export const WorldMemory = {







    rememberPortalVisit(

        portalId

    ){



        return this.storeMemory({



            type:

                MemoryTypes.PORTAL_VISIT,



            message:

                `Creator entered portal: ${portalId}`,



            data:{

                portalId

            }



        });



    },









    rememberPortalCompletion(

        portalId

    ){



        return this.storeMemory({



            type:

                MemoryTypes.PORTAL_COMPLETED,



            message:

                `Portal completed: ${portalId}`,



            data:{

                portalId

            }



        });



    },









    rememberWorldCreation(

        world

    ){



        return this.storeMemory({



            type:

                MemoryTypes.CREATION,



            message:

                "A new Living World™ was created.",



            data:{


                worldId:

                    world.id,



                identity:

                    world.identity



            },



            importance:

                5



        });



    },









    rememberEvolution(

        data

    ){



        return this.storeMemory({



            type:

                MemoryTypes.WORLD_EVOLUTION,



            message:

                "The Living World™ evolved.",



            data



        });



    },









    rememberHarmony(

        data

    ){



        return this.storeMemory({



            type:

                MemoryTypes.WORLD_HARMONY,



            message:

                "Harmony expanded inside the Living World™.",



            data



        });



    },









    rememberDiscovery(

        data

    ){



        return this.storeMemory({



            type:

                MemoryTypes.WORLD_DISCOVERY,



            message:

                "A new discovery awakened.",



            data



        });



    },









    rememberAction(

        data

    ){



        return this.storeMemory({



            type:

                MemoryTypes.WORLD_ACTION,



            message:

                "A Living World™ action was executed.",



            data



        });



    },









    rememberJourney(

        data

    ){



        return this.storeMemory({



            type:

                MemoryTypes.WORLD_JOURNEY,



            message:

                "Creator journey advanced.",



            data



        });



    },









    storeMemory(

        {

            type,

            message,

            data = {},

            importance = 1

        }

    ){



        const memory =

            createMemory({



                type,



                message,



                data,



                importance



            });





        addWorldMemory(

            memory

        );





        return memory;



    }







};