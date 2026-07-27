/*
==========================================
BLINKITA METHOD™

WORLD LIFECYCLE™

The evolution states
of a Living World™

Version 1.1
==========================================
*/



export const WorldLifecycle = {



    stages: {



        SEED: {


            id:

                "seed",


            order:

                1,


            title:

                "🌱 Seed",


            description:

                "A new Living World begins as a possibility."

        },







        GROWING: {


            id:

                "growing",


            order:

                2,


            title:

                "🌿 Growing",


            description:

                "The world takes form through conscious creation."

        },







        LIVING: {


            id:

                "living",


            order:

                3,


            title:

                "🌳 Living",


            description:

                "The world becomes alive through connection and interaction."

        },







        THRIVING: {


            id:

                "thriving",


            order:

                4,


            title:

                "🌸 Thriving",


            description:

                "The world expands, evolves and creates abundance."

        },







        LEGACY: {


            id:

                "legacy",


            order:

                5,


            title:

                "✨ Legacy",


            description:

                "The world becomes timeless and continues beyond its creator."

        }



    },









    getStage(stageId) {


        return this.stages[stageId];


    },









    getNextStage(stageId){



        const current =

            this.getStage(stageId);





        if(!current){


            return null;


        }






        return Object.values(this.stages)

            .find(

                stage =>

                    stage.order === current.order + 1

            );



    }






};