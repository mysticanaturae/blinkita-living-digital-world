/*
==========================================

BLINKITA METHOD™

HARMONY RULES™

The relationship intelligence
of a Living World™

Version 1.0

==========================================
*/


import {

    HarmonyTypes

}

from "./HarmonyTypes";





export const HarmonyRules = {



    [HarmonyTypes.CONNECTION]: {


        message:

            "New relationship connection created.",


        effect: {


            harmonyIncrease:

                1


        }


    },







    [HarmonyTypes.COLLABORATION]: {


        message:

            "Creation through collaboration strengthened.",


        effect: {


            harmonyIncrease:

                2


        }


    },







    [HarmonyTypes.SUPPORT]: {


        message:

            "Support energy increased within the world.",


        effect: {


            harmonyIncrease:

                1


        }


    },







    [HarmonyTypes.RESONANCE]: {


        message:

            "World elements entered resonance.",


        effect: {


            harmonyIncrease:

                2


        }


    },







    [HarmonyTypes.CONFLICT]: {


        message:

            "Conflict revealed a possibility for evolution.",


        effect: {


            harmonyIncrease:

                -1


        }


    },







    [HarmonyTypes.RECONCILIATION]: {


        message:

            "Relationship restored through understanding.",


        effect: {


            harmonyIncrease:

                3


        }


    }



};