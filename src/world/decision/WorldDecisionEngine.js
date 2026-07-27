/*
==========================================

BLINKITA METHOD™

WORLD DECISION ENGINE™

The choice intelligence
of a Living World™

Version 3.0

==========================================
*/


import {

    DecisionRules

}

from "./DecisionRules";






export const WorldDecisionEngine = {



    decide(

        insight

    ){



        const rule =

            DecisionRules[insight.eventType]

            ||

            DecisionRules.default;







        return {



            trigger:

                insight.eventType,



            type:

                rule.type,



            decision:{

                action:

                    rule.action,



                reason:

                    rule.reason

            },



            timestamp:

                new Date().toISOString()



        };



    }



};