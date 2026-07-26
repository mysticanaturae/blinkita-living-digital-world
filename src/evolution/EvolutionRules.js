/*
==========================================
BLINKITA METHOD™

EVOLUTION RULES™

The transformation language
of a Living World™

Version 1.0
==========================================
*/


import {

    EventTypes

}

from "../core/events/EventTypes";




export const EvolutionRules = {



    [EventTypes.PORTAL_COMPLETED]:


    {


        transformation:

        {


            type:

                "stage_change",



            from:

                "awakening",



            to:

                "growing",



            message:

                "Your world has started growing."

        }



    },







    [EventTypes.PORTAL_ENTERED]:


    {


        transformation:

        {


            type:

                "experience_gain",



            amount:

                1



        }



    }



};