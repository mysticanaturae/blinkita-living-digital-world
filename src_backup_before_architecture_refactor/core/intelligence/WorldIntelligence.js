/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD INTELLIGENCE™

The guidance layer
of a Living World™

Version 1.0
==========================================
*/


export const WorldIntelligence = {



    analyze(world) {


        if (!world) {

            return null;

        }



        return {


            status:

                world.status,



            stage:

                world.creationStage || "dream",



            recommendation:

                this.getRecommendation(

                    world

                )

        };


    },






    getRecommendation(world) {



        if (

            world.status === "seed"

        ) {


            return {


                title:

                    "Awaken Vision",



                action:

                    "vision",



                message:

                    "Your world is waiting for its first vision."

            };


        }





        if (

            world.status === "growing"

        ) {


            return {


                title:

                    "Expand Creation",



                action:

                    "experience",



                message:

                    "Your world is ready to become an experience."

            };


        }





        if (

            world.status === "living"

        ) {


            return {


                title:

                    "Nurture Your World",



                action:

                    "nurture",



                message:

                    "Your world is alive and ready to evolve."

            };


        }





        return {


            title:

                "Continue Creating",



            action:

                "continue",



            message:

                "Your next possibility is waiting."

        };


    }



};