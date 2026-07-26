/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

LEGACY SYSTEM™

The wisdom layer
of Living Worlds™

Version 1.0
==========================================
*/


const LEGACY_KEY =

    "blinkita_legacy";




export const LegacySystem = {



    record(event) {


        const legacy =

            this.getLegacy();



        const updatedLegacy = [


            ...legacy,


            {

                id:

                    Date.now(),


                createdAt:

                    new Date()
                    .toISOString(),


                ...event


            }


        ];



        localStorage.setItem(

            LEGACY_KEY,

            JSON.stringify(

                updatedLegacy

            )

        );



        return event;


    },






    getLegacy() {


        const saved =

            localStorage.getItem(

                LEGACY_KEY

            );



        if (!saved) {

            return [];

        }



        return JSON.parse(saved);


    }



};