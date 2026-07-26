/*
==========================================
BLINKITA METHOD™

WORLD LIFECYCLE™

The evolution states
of a Living World™

Version 1.0
==========================================
*/


export const WorldLifecycle = {


    stages: {


        SEED: {

            id: "seed",

            title:
                "🌱 Seed",

            description:
                "A new world has begun."

        },


        GROWING: {

            id: "growing",

            title:
                "🌿 Growing",

            description:
                "The world is taking form."

        },


        LIVING: {

            id: "living",

            title:
                "🌳 Living",

            description:
                "The world is alive."

        },


        THRIVING: {

            id: "thriving",

            title:
                "🌸 Thriving",

            description:
                "The world is expanding."

        },


        LEGACY: {

            id: "legacy",

            title:
                "✨ Legacy",

            description:
                "The world becomes timeless."

        }


    },


    getStage(stageId) {

        return this.stages[stageId];

    }


};