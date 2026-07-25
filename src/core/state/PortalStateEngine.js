/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL STATE ENGINE™

The memory layer
of a Living World™

Version 1.1
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

                ?

                state.visitedPortals

                :

                [

                    ...state.visitedPortals,

                    portalId

                ]

        };

    },



    completePortal(
        state,
        portalId
    ) {


        const completedPortals =

            state.completedPortals.includes(portalId)

            ?

            state.completedPortals

            :

            [

                ...state.completedPortals,

                portalId

            ];



        return {


            ...state,


            completedPortals,


            progress:

                Math.round(

                    (

                        completedPortals.length /

                        9

                    ) * 100

                )


        };

    },



    getProgress(
        state,
        totalPortals = 9
    ) {


        return Math.round(

            (

                state.completedPortals.length /

                totalPortals

            ) * 100

        );

    }


};