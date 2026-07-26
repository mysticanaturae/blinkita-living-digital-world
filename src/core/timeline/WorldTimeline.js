/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD TIMELINE™

The memory trail
of a Living World™

Version 1.0
==========================================
*/


const TIMELINE_KEY =

    "blinkita_world_timeline";



export const WorldTimeline = {



    addEvent(event) {


        const timeline =

            this.getTimeline();



        const updatedTimeline = [


            ...timeline,


            {

                id:
                    Date.now(),


                timestamp:
                    new Date().toISOString(),


                ...event

            }


        ];



        localStorage.setItem(

            TIMELINE_KEY,

            JSON.stringify(

                updatedTimeline

            )

        );



        return updatedTimeline;


    },





    getTimeline() {


        const saved =

            localStorage.getItem(

                TIMELINE_KEY

            );



        if (!saved) {

            return [];

        }



        return JSON.parse(saved);


    },






    clear() {


        localStorage.removeItem(

            TIMELINE_KEY

        );


    }


};