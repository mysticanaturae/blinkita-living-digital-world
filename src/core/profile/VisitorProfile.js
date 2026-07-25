/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

VISITOR PROFILE™

The identity layer
of a Living World™

Version 1.0
==========================================
*/


export const VisitorProfile = {


    createProfile() {

        return {

            id: null,


            identity: {

                name: null,

                archetype: "Explorer"

            },


            journey: {

                stage: "awakening",

                discoveredPortals: [],

                completedPortals: []

            },


            creations: [],


            evolution: {

                level: 1,

                experience: 0

            },


            status: "beginning"

        };

    },



    discoverPortal(
        profile,
        portalId
    ) {


        return {

            ...profile,


            journey: {

                ...profile.journey,


                discoveredPortals:

                    profile.journey.discoveredPortals.includes(portalId)

                    ? profile.journey.discoveredPortals

                    :

                    [

                        ...profile.journey.discoveredPortals,

                        portalId

                    ]

            }

        };

    },



    completePortal(
        profile,
        portalId
    ) {


        return {

            ...profile,


            journey: {

                ...profile.journey,


                completedPortals:

                    profile.journey.completedPortals.includes(portalId)

                    ?

                    profile.journey.completedPortals

                    :

                    [

                        ...profile.journey.completedPortals,

                        portalId

                    ]

            },


            evolution: {

                ...profile.evolution,


                experience:

                    profile.evolution.experience + 10

            }

        };

    }



};