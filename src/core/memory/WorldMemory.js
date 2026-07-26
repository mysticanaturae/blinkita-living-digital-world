/*
==========================================
BLINKITA METHOD™

WORLD MEMORY™

The living archive
of a Living World™

Version 2.0
==========================================
*/


import {

    getWorldState,

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



        const memory =


            createMemory({


                type:

                    MemoryTypes.PORTAL_VISIT,



                message:

                    `Creator entered portal: ${portalId}`,



                data:{


                    portalId


                }


            });






        addWorldMemory(

            memory

        );





        return memory;


    },









    rememberPortalCompletion(

        portalId

    ){



        const memory =


            createMemory({



                type:

                    MemoryTypes.PORTAL_COMPLETED,



                message:

                    `Portal completed: ${portalId}`,



                data:{


                    portalId


                }



            });





        addWorldMemory(

            memory

        );





        return memory;



    }







};