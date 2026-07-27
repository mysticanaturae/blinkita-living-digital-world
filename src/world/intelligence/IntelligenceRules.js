/*
==========================================

BLINKITA METHOD™

INTELLIGENCE RULES™

The awareness logic
of a Living World™

Version 1.0

==========================================
*/

import {

    EventTypes

}

from "../../core/events/EventTypes";





export const IntelligenceRules = {



    [EventTypes.PORTAL_ENTERED]: {

        meaning:

            "A creator entered a new experience portal.",

        suggestedAction:

            "Observe and create memory."

    },





    [EventTypes.PORTAL_COMPLETED]: {

        meaning:

            "A creator completed a world experience.",

        suggestedAction:

            "Reward evolution and progression."

    },





    [EventTypes.WORLD_CREATED]: {

        meaning:

            "A new Living World has been born.",

        suggestedAction:

            "Begin nurturing the world identity."

    },





    [EventTypes.WORLD_EVOLVED]: {

        meaning:

            "The Living World reached a new evolutionary state.",

        suggestedAction:

            "Expand consciousness and guide the next evolution."

    },





    default: {

        meaning:

            "The Living World received a new signal.",

        suggestedAction:

            "Continue observing the living system."

    }

};