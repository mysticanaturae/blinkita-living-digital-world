/*
==========================================

BLINKITA METHOD™

DECISION RULES™

The decision logic
of a Living World™

Version 2.0

==========================================
*/

import {

    DecisionTypes

}

from "./DecisionTypes";


import {

    EventTypes

}

from "../../core/events/EventTypes";





export const DecisionRules = {



    [EventTypes.PORTAL_ENTERED]: {

        type:

            DecisionTypes.OBSERVE,



        action:

            "observe_creator_journey",



        reason:

            "A new experience has begun."

    },





    [EventTypes.PORTAL_COMPLETED]: {

        type:

            DecisionTypes.ADVANCE,



        action:

            "advance_world_evolution",



        reason:

            "A milestone was achieved."

    },





    [EventTypes.WORLD_CREATED]: {

        type:

            DecisionTypes.NURTURE,



        action:

            "begin_world_nurturing",



        reason:

            "A new Living World was born."

    },





    default: {

        type:

            DecisionTypes.CONTINUE,



        action:

            "continue_observation",



        reason:

            "No special transition required."

    }

};