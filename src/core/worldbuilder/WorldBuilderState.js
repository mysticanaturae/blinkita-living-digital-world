/*
==========================================

BLINKITA OS™

WORLD BUILDER STATE™

Personal evolution state
of the Living Creator™

Version 1.1

Connected with:
- World Builder Stages™
- Creator Journey™
- Living Worlds™
- Time Matrix™
- Resonance Matrix™

==========================================
*/


export const defaultWorldBuilderState = {


    identity:{


        name:"",


        title:"Dreamer™"


    },





    evolution:{


        currentStage:"dreamer",


        experience:0,


        milestones:[]


    },





    creations:{


        worlds:[],


        portals:[],


        memories:[]


    },


    domains:[],


    journey:{


        started:null,


        lastCreation:null,


        completedSteps:[]


    },





    /*
    ======================================
    TIME MATRIX™

    Every creation has a moment
    ======================================
    */


    timeMatrix:{


        birthSignature:null,


        creationEvents:[]


    },





    /*
    ======================================
    CREATION TIMELINE™

    History of becoming
    ======================================
    */


    creationTimeline:[],





    /*
    ======================================
    RESONANCE MATRIX™

    Connection with other creators
    ======================================
    */


    resonances:{


        creators:[],


        combinedEnergies:[]


    }



};









let WorldBuilderState = {


    ...defaultWorldBuilderState


};









export function getWorldBuilderState(){


    return WorldBuilderState;


}









export function updateWorldBuilderState(update){



    WorldBuilderState = {


        ...WorldBuilderState,


        ...update


    };



    return WorldBuilderState;


}









export function resetWorldBuilderState(){



    WorldBuilderState = {


        ...defaultWorldBuilderState


    };



    return WorldBuilderState;


}
