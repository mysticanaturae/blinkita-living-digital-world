/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

VISITOR PROFILE™

The identity layer
of a Living World™

Version 1.1
==========================================
*/


export const VisitorProfile = {


    createProfile() {

        return {

            id: null,


            identity: {

                name: "",

                archetype: "Explorer",

                description: ""

            },


            journey: {

                stage: "awakening",

                discoveredPortals: [],

                completedPortals: []

            },


            creations: [],


            evolution: {

                level: 1,

                experience: 0,

                stage: "Beginning"

            },


            status: "beginning"

        };

    },



    discoverPortal(

        profile,

        portalId

    ) {


        const safeProfile =

            profile || this.createProfile();


        const safeJourney = {

            stage:
                "awakening",

            discoveredPortals:
                [],

            completedPortals:
                [],

            ...(safeProfile.journey || {})

        };


        const discoveredPortals =

            Array.isArray(
                safeJourney.discoveredPortals
            )

                ? safeJourney.discoveredPortals

                : [];



        return {

            ...safeProfile,


            journey: {

                ...safeJourney,


                discoveredPortals:

                    discoveredPortals.includes(
                        portalId
                    )

                        ?

                        discoveredPortals

                        :

                        [

                            ...discoveredPortals,

                            portalId

                        ]

            }

        };

    },



    completePortal(

        profile,

        portalId

    ) {


        const safeProfile =

            profile || this.createProfile();


        const safeJourney = {

            stage:
                "awakening",

            discoveredPortals:
                [],

            completedPortals:
                [],

            ...(safeProfile.journey || {})

        };


        const completedPortals =

            Array.isArray(
                safeJourney.completedPortals
            )

                ? safeJourney.completedPortals

                : [];


        const evolution = {

            level:
                1,

            experience:
                0,

            stage:
                "Beginning",

            ...(safeProfile.evolution || {})

        };



        return {

            ...safeProfile,


            journey: {

                ...safeJourney,


                completedPortals:

                    completedPortals.includes(
                        portalId
                    )

                        ?

                        completedPortals

                        :

                        [

                            ...completedPortals,

                            portalId

                        ]

            },


            evolution: {

                ...evolution,


                experience:

                    (evolution.experience || 0) + 10

            }

        };

    }



};
