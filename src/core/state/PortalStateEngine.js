/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL STATE ENGINE™

The memory layer
of a Living World™

Version 1.0
==========================================
*/


export const PortalStateEngine = {


    createState() {

        return {

            currentPortal: "arrival",

            visitedPortals: [
                "arrival"
            ],

            progress: 0,

            completedPortals: [],

            status: "awakening"

        };

    },


    enterPortal(
        state,
        portalId
    ) {


        return {

            ...state,

            currentPortal: portalId,


            visitedPortals:
                state.visitedPortals.includes(portalId)

                ? state.visitedPortals

                : [
                    ...state.visitedPortals,
                    portalId
                ]

        };

    },


    completePortal(
        state,
        portalId
    ) {


        return {

            ...state,


            completedPortals:
                state.completedPortals.includes(portalId)

                ? state.completedPortals

                : [
                    ...state.completedPortals,
                    portalId
                ]

        };

    },


    getProgress(
        state,
        totalPortals = 9
    ) {


        return Math.round(
            (
                state.visitedPortals.length /
                totalPortals
            ) * 100
        );

    }


};