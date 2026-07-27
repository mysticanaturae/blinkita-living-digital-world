/*
==========================================

BLINKITA METHOD™

ACTION RULES™

The execution logic
of a Living World™

Version 1.0

==========================================
*/

import {

    ActionTypes

}

from "./ActionTypes";



export const ActionRules = {



    observe_creator_journey:{

        type:

            ActionTypes.OBSERVE,



        method:

            "observeJourney"

    },





    advance_world_evolution:{

        type:

            ActionTypes.ADVANCE,



        method:

            "advanceEvolution"

    },





    begin_world_nurturing:{

        type:

            ActionTypes.NURTURE,



        method:

            "nurtureWorld"

    },





    default:{

        type:

            ActionTypes.CONTINUE,



        method:

            "continueObservation"

    }

};