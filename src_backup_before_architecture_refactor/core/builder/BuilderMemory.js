/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

BUILDER MEMORY™

The memory layer
of a World Builder™

Version 1.0
==========================================
*/


const MEMORY_KEY =

    "blinkita_builder_memory";




export const BuilderMemory = {



    remember(event) {


        const memories =

            this.getMemories();



        const updated = [


            ...memories,


            {

                id:

                    Date.now(),


                timestamp:

                    new Date()
                    .toISOString(),


                ...event


            }


        ];



        localStorage.setItem(

            MEMORY_KEY,

            JSON.stringify(

                updated

            )

        );



        return event;


    },






    getMemories() {


        const saved =

            localStorage.getItem(

                MEMORY_KEY

            );



        if (!saved) {

            return [];

        }



        return JSON.parse(saved);


    }



};