/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

WORLD STATE™

The living condition
and memory foundation
of a Living World™

Version 2.1
==========================================
*/


import { VisitorProfile }
from "../profile/VisitorProfile";


import { WorldLifecycle }
from "../world/WorldLifecycle";


import { WorldStorage }
from "../storage/WorldStorage";






const savedWorld =

    WorldStorage.load();








/*
==========================================
INITIAL WORLD STATE™

The first breath
of a Living World™

==========================================
*/


let worldState =


savedWorld


||


{


    id:

        Date.now(),



    createdAt:

        new Date().toISOString(),






    /*
    ======================================
    PORTAL JOURNEY
    ======================================
    */


    currentPortal:

        "arrival",



    visitedPortals:

        [

            "arrival"

        ],



    completedPortals:

        [],







    /*
    ======================================
    WORLD PROGRESS
    ======================================
    */


    progress:

        0,








    /*
    ======================================
    WORLD LIFECYCLE™

    seed
    growing
    living

    ======================================
    */


    status:

        "seed",








    /*
    ======================================
    EVOLUTION LAYER™

    awakening
    creation
    connection
    civilization

    ======================================
    */


    evolution:

    {


        stage:

            "awakening",



        level:

            1,



        milestones:

            []


    },









    /*
    ======================================
    JOURNEY LAYER™

    Creator path

    ======================================
    */


    journey:

    {


        stage:

            "arrival",



        milestones:

            []


    },









    /*
    ======================================
    MEMORY LAYER™

    History of meaning

    ======================================
    */


    memory:

    {


        events:

            []


    },









    /*
    ======================================
    RELATIONSHIP LAYER™

    Future collaboration system

    ======================================
    */


    relationships:

        [],









    /*
    ======================================
    CREATION LAYER™

    Things created
    inside the world

    ======================================
    */


    creations:

        [],







    /*
    ======================================
    CREATOR IDENTITY
    ======================================
    */


    creator:

        VisitorProfile.createProfile(),







    /*
    ======================================
    ACTIVITY
    ======================================
    */


    lastActive:

        new Date().toISOString()



};









/*
==========================================
STATE MIGRATION™

Protect older saved worlds

==========================================
*/


worldState.evolution ||= {

    stage:

        "awakening",

    level:

        1,

    milestones:

        []

};



worldState.journey ||= {

    stage:

        "arrival",

    milestones:

        []

};



worldState.memory ||= {

    events:

        []

};



worldState.relationships ||= [];

worldState.creations ||= [];









/*
==========================================
GET WORLD STATE™

==========================================
*/


export function getWorldState(){


    return worldState;


}









/*
==========================================
UPDATE WORLD STATE™

==========================================
*/


export function updateWorldState(

    updates

){


    worldState = {


        ...worldState,


        ...updates,


        lastActive:

            new Date().toISOString()



    };




    WorldStorage.save(

        worldState

    );




    return worldState;


}









/*
==========================================
ADD WORLD MEMORY™

Creates living history

==========================================
*/


export function addWorldMemory(

    event

){


    worldState = {


        ...worldState,


        memory:{


            ...worldState.memory,


            events:[


                ...worldState.memory.events,


                event


            ]


        },


        lastActive:

            new Date().toISOString()



    };





    WorldStorage.save(

        worldState

    );




    return worldState;


}









/*
==========================================
ADD JOURNEY MILESTONE™

Creator progression

==========================================
*/


export function addJourneyMilestone(

    milestone

){


    worldState = {


        ...worldState,


        journey:{


            ...worldState.journey,


            milestones:[


                ...worldState.journey.milestones,


                milestone


            ]


        },


        lastActive:

            new Date().toISOString()



    };





    WorldStorage.save(

        worldState

    );




    return worldState;


}









/*
==========================================
COMPLETE WORLD PORTAL™

==========================================
*/


export function completeWorldPortal(

    portalId

){



    const alreadyCompleted =

        worldState.completedPortals.includes(

            portalId

        );




    if(alreadyCompleted){


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


            )

            *

            100


        );







    worldState = {


        ...worldState,


        completedPortals,


        progress,


        lastActive:

            new Date().toISOString()


    };





    WorldStorage.save(

        worldState

    );




    return worldState;


}









/*
==========================================
ENTER WORLD PORTAL™

Portal transition

==========================================
*/


export function enterWorldPortal(

    portalId

){



    console.log(

        "✅ enterWorldPortal()",


        portalId

    );






    const alreadyVisited =


        worldState.visitedPortals.includes(

            portalId

        );







    let nextStatus =

        worldState.status;








    if(

        portalId === "world-seed"

    ){


        nextStatus =

            WorldLifecycle.stages.GROWING.id;


    }








    if(

        portalId === "living-world"

    ){


        nextStatus =

            WorldLifecycle.stages.LIVING.id;


    }









    worldState = {


        ...worldState,


        currentPortal:

            portalId,



        status:

            nextStatus,



        lastActive:

            new Date().toISOString(),




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






    WorldStorage.save(

        worldState

    );






    return worldState;


}