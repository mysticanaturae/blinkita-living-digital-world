/*
==========================================

BLINKITA METHOD™

WORLD INTELLIGENCE ENGINE™

The awareness layer
of a Living World™

Version 2.0

==========================================
*/


import {

    IntelligenceRules

}

from "./IntelligenceRules";





export const WorldIntelligenceEngine = {



    analyze(

        event

    ){



        const rule =

            IntelligenceRules[event.type]

            ||

            IntelligenceRules.default;





        return {

            eventType:

                event.type,



            meaning:

                rule.meaning,



            suggestedAction:

                rule.suggestedAction,



            timestamp:

                new Date().toISOString()

        };



    }



};