/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD NURTURING™

The care system
of a Living World™

Version 1.0
==========================================
*/


const NURTURING_KEY =

    "blinkita_world_nurturing";




export const WorldNurturing = {



    nurture(

        worldId,

        action

    ) {


        const history =

            this.getHistory();



        const event = {


            id:

                Date.now(),



            worldId,



            action,



            timestamp:

                new Date()
                .toISOString()



        };



        const updatedHistory = [


            ...history,


            event


        ];



        localStorage.setItem(

            NURTURING_KEY,

            JSON.stringify(

                updatedHistory

            )

        );



        return event;


    },






    getHistory() {


        const saved =

            localStorage.getItem(

                NURTURING_KEY

            );



        if (!saved) {


            return [];


        }



        return JSON.parse(saved);


    }



};