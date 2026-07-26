/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

COLLABORATION SYSTEM™

The connection layer
of collective creation

Version 1.0
==========================================
*/


export const CollaborationRoles = {


    FOUNDER:

        "founder",


    CO_CREATOR:

        "co_creator",


    CONTRIBUTOR:

        "contributor",


    PARTICIPANT:

        "participant",


    GUARDIAN:

        "guardian"


};





export function createCollaboration(

    worldId,

    creator

) {


    return {


        worldId,



        members: [


            {

                creatorId:

                    creator.id,


                role:

                    CollaborationRoles.FOUNDER,


                joinedAt:

                    new Date()
                    .toISOString()


            }


        ],



        contributions: [],



        evolution:

        {


            sharedExperience:

                0


        }



    };


}