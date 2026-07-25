/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

WORLD STATE™

The memory layer
of a Living World™

Version 1.2
==========================================
*/


import { VisitorProfile } from "../profile/VisitorProfile";



let worldState = {


    currentPortal: "arrival",


    visitedPortals: [

        "arrival"

    ],


    completedPortals: [],


    progress: 0,


    status: "awakening",



    creator: VisitorProfile.createProfile()


};






export function getWorldState() {


    return worldState;

}







export function updateWorldState(
    updates
) {


    worldState = {

        ...worldState,

        ...updates

    };


    return worldState;

}







export function completeWorldPortal(
    portalId
) {


    const alreadyCompleted =
        worldState.completedPortals.includes(
            portalId
        );



    if (alreadyCompleted) {

        return worldState;

    }



    const completedPortals = [

        ...worldState.completedPortals,

        portalId

    ];



    const progress =
        Math.round(
            (
                completedPortals.length / 9
            ) * 100
        );



    worldState = {


        ...worldState,


        completedPortals,


        progress


    };



    return worldState;

}







export function enterWorldPortal(
    portalId
) {


    const alreadyVisited =
        worldState.visitedPortals.includes(
            portalId
        );



    worldState = {


        ...worldState,


        currentPortal: portalId,



        visitedPortals:


            alreadyVisited


            ?


            worldState.visitedPortals


            :


            [


                ...worldState.visitedPortals,


                portalId


            ],



        creator:


            VisitorProfile.discoverPortal(


                worldState.creator,


                portalId


            )



    };



    return worldState;

}