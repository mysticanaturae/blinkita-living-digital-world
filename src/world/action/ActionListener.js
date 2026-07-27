/*
==========================================

BLINKITA METHOD™

ACTION LISTENER™

Automatic world action response

Version 3.1

Connected with:

- World Governance™
- World Action Engine™
- World Memory™

==========================================
*/


import {

    subscribe

}

from "../../core/events/EventBus";


import {

    EventTypes

}

from "../../core/events/EventTypes";


import {

    WorldActionEngine

}

from "./WorldActionEngine";










function processAction(

    decision

){



    const result =

        WorldActionEngine.execute(

            decision

        );






    console.log(


        "🌱 World Action™",

        {

            decision,

            result

        }


    );






    return result;



}









export function initializeActionListener(){





    /*
    ======================================
    GOVERNANCE APPROVED EVENT™

    Action happens only after
    wisdom verification

    ======================================
    */






    subscribe(

        EventTypes.GOVERNANCE_APPROVED,

        processAction

    );



}