/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

WORLD STATE™

The living condition
and memory foundation
of a Living World™

Version 3.0
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





    currentPortal:

        "arrival",



    visitedPortals:

        [

            "arrival"

        ],



    completedPortals:

        [],





    progress:

        0,





    status:

        "seed",





    evolution:

    {

        stage:

            "awakening",


        level:

            1,


        milestones:

            []

    },





    journey:

    {

        stage:

            "arrival",


        milestones:

            []

    },





    memory:

    {

        events:

            []

    },





    relationships:

        [],





    harmony:

    {

        level:

            0,


        connections:

            0,


        collaborations:

            0,


        resonance:

            0,


        history:

            []

    },


    /*
    ======================================
    DISCOVERY LAYER™

    The intelligence of exploration
    inside a Living World™

    ======================================
    */


    discovery:

    {


        level:

            0,


        curiosity:

            0,


        knowledge:

            0,


        possibilities:

            0,


        creations:

            0,


        history:

            []


    },


    creations:

        [],





    creator:

        VisitorProfile.createProfile(),




/*
======================================
AUTHENTICITY LAYER™

The identity essence
of a Living World™

======================================
*/


authenticity:

{

    level:

        0,

    history:

        []

},



/*
======================================
GOVERNANCE LAYER™

The wisdom balance
of a Living World™

======================================
*/


governance:

{

    decisions:

        0,

    evaluations:

        [],

    history:

        []

},





/*
======================================
INTELLIGENCE LAYER™

The awareness state
of a Living World™

======================================
*/


intelligence:

{

    level:

        0,

    insights:

        [],

    history:

        []

},






/*
======================================
DECISION LAYER™

The choice intelligence
of a Living World™

======================================
*/


decision:

{

    choices:

        [],

    history:

        []

},






/*
======================================
ACTION LAYER™

The execution state
of a Living World™

======================================
*/


action:

{

    executed:

        0,

    history:

        []

},





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

worldState.harmony ||= {

    level:0,

    connections:0,

    collaborations:0,

    resonance:0,

    history:[]

};


worldState.discovery ||= {


    level:0,


    curiosity:0,


    knowledge:0,


    possibilities:0,


    creations:0,


    history:[]


};


worldState.intelligence ||= {

    level:0,

    insights:[],

    history:[]

};



worldState.decision ||= {

    choices:[],

    history:[]

};



worldState.action ||= {

    executed:0,

    history:[]

};



worldState.authenticity ||= {

    level:0,

    history:[]

};



worldState.governance ||= {

    decisions:0,

    evaluations:[],

    history:[]

};



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

==========================================
*/


export function enterWorldPortal(

    portalId

){


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