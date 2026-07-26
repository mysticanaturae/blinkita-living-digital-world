/*
==========================================
BLINKITA METHOD™

JOURNEY RULES™

Version 1.0
==========================================
*/


import {

    EventTypes

}

from "../core/events/EventTypes";



import {

    JourneyStages

}

from "./JourneyStages";





export const JourneyRules = {



    [EventTypes.PORTAL_ENTERED]:


    {


        nextStage:

            JourneyStages.EXPLORATION,


        message:

            "The creator begins exploring the Living World."



    },





    [EventTypes.PORTAL_COMPLETED]:


    {


        nextStage:

            JourneyStages.CREATION,


        message:

            "The creator begins shaping reality."



    }



};