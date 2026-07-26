/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

PARTICIPATION SYSTEM™

The living connection
between world and participants

Version 1.0
==========================================
*/


export const ParticipationRoles = {


    VISITOR:

        "visitor",


    PARTICIPANT:

        "participant",


    CONTRIBUTOR:

        "contributor",


    MEMBER:

        "member",


    GUARDIAN:

        "guardian"


};





export function joinWorld(

    worldId,

    person

) {


    return {


        worldId,


        participant:


        {


            id:

                person.id,


            role:

                ParticipationRoles.PARTICIPANT,


            joinedAt:

                new Date()
                .toISOString()


        },



        contributions:

            [],



        experience:

        {


            completed:

                [],


            impact:

                0


        }


    };


}