/*
==========================================

BLINKITA METHOD™

GOVERNANCE DECISION BRIDGE™

The wisdom gate
of a Living World™

Version 1.0

==========================================
*/


import {

    subscribe,

    emit

}

from "../../core/events/EventBus";


import {

    EventTypes

}

from "../../core/events/EventTypes";


import {

    WorldGovernanceEngine

}

from "./WorldGovernanceEngine";






function processGovernanceDecision(

    decision

){



    const evaluation =

        WorldGovernanceEngine.evaluate(

            decision

        );





    if(evaluation.approved){


        emit(

            EventTypes.GOVERNANCE_APPROVED,

            {

                decision,

                evaluation

            }

        );



    }

    else {


        emit(

            EventTypes.GOVERNANCE_REVIEW_REQUIRED,

            {

                decision,

                evaluation

            }

        );


    }







    console.log(

        "⚖️ Governance Gate™",

        evaluation

    );






    return evaluation;


}








export function initializeGovernanceDecisionBridge(){



    subscribe(

        EventTypes.DECISION_CREATED,

        processGovernanceDecision

    );


}