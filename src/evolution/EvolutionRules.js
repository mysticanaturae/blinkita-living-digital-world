/*
==========================================

BLINKITA METHOD™

EVOLUTION RULES™

The transformation language
of a Living World™

Version 1.2

==========================================
*/


import {

    EventTypes

}

from "../core/events/EventTypes";





function addMilestone(message, state) {


    if (!state.evolution) {

        state.evolution = {};

    }


    if (!state.evolution.milestones) {

        state.evolution.milestones = [];

    }



    const exists = state.evolution.milestones.some(

        milestone => milestone.message === message

    );



    if (!exists) {


        state.evolution.milestones.push({

            message,

            timestamp: new Date().toISOString()

        });


    }


    return state;


}






export {

    addMilestone

};







export const EvolutionRules = {





    [EventTypes.WORLD_CREATED]:

    {


        transformation:

        {

            type:

                "stage_change",


            from:

                "seed",


            to:

                "awakening",


            message:

                "A new Living World awakens into possibility."


        }


    },







    [EventTypes.PORTAL_ENTERED]:

    {


        transformation:

        {

            type:

                "experience_gain",


            amount:

                1,


            message:

                "Every portal experience expands awareness."


        }


    },







    [EventTypes.PORTAL_COMPLETED]:

    {


        transformation:

        {

            type:

                "stage_change",


            from:

                "awakening",


            to:

                "creation",


            message:

                "The creator begins shaping the Living World."


        }


    },







    [EventTypes.WORLD_EVOLVED]:

    {


        transformation:

        {

            type:

                "stage_change",


            from:

                "creation",


            to:

                "connection",


            message:

                "The world evolves through conscious relationships."


        }


    },







    [EventTypes.RELATIONSHIP_CREATED]:

    {


        transformation:

        {

            type:

                "stage_change",


            from:

                "connection",


            to:

                "civilization",


            message:

                "Connections become the foundation of a living civilization."


        }


    }





};