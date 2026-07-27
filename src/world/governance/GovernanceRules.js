/*
==========================================

BLINKITA METHOD™

GOVERNANCE RULES™

The wisdom logic
of a Living World™

Version 1.1

==========================================
*/


import {

    WorldValues

}

from "./WorldValues";









export const GovernanceRules = {





    ALIGN_WITH_PURPOSE:{



        value:

            WorldValues.PURPOSE,



        check(

            decision

        ){



            return {

                approved:

                    decision != null,



                reason:

                    "Every action should serve the world's purpose."

            };



        }



    },









    PROTECT_HARMONY:{



        value:

            WorldValues.HARMONY,



        check(

            decision

        ){



            const approved =

                decision?.decision?.action

                !==

                "destroy_world";



            return {

                approved,



                reason:

                    approved

                        ? "The decision protects harmony."

                        : "The decision would damage harmony."

            };



        }



    },









    SUPPORT_EVOLUTION:{



        value:

            WorldValues.EVOLUTION,



        check(

            decision

        ){



            return {

                approved:

                    true,



                reason:

                    "Every conscious experience supports evolution."

            };



        }



    }







};