/*
==========================================

BLINKITA METHOD™

HARMONY EVALUATION ENGINE™

The relationship intelligence
of a Living World™

Version 1.0

==========================================
*/


import {

    HarmonyTypes

}

from "../HarmonyTypes";





export const HarmonyEvaluationEngine = {


    evaluate(

        relationship

    ){



        if(!relationship){

            return {

                level:

                    "unknown"

            };

        }






        switch(

            relationship.type

        ){



            case HarmonyTypes.CONNECTION:



                return {


                    level:

                        "beginning",


                    message:

                        "A new connection is awakening."


                };







            case HarmonyTypes.COLLABORATION:



                return {


                    level:

                        "growth",


                    message:

                        "Creation is amplified through collaboration."


                };







            case HarmonyTypes.RESONANCE:



                return {


                    level:

                        "harmony",


                    message:

                        "The world is moving in resonance."


                };







            case HarmonyTypes.CONFLICT:



                return {


                    level:

                        "transformation",


                    message:

                        "A conflict creates an opportunity for evolution."


                };







            default:



                return {


                    level:

                        "neutral",


                    message:

                        "The relationship is forming."


                };



        }



    }



};