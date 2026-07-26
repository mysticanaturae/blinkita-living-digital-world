/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR STATE™

The identity bridge
between Creator and Living World™

Version 1.1
==========================================
*/


import {

    getWorldState

}

from "../state/WorldState";





export function getCreatorState(){



    const worldState =

        getWorldState()
        ||
        {};






    const creator =

        worldState.creator
        ||

        {

            id:null,


            identity:

            {

                name:null,

                archetype:"Explorer"

            },



            evolution:

            {

                level:1,

                experience:0,

                stage:"Beginning"

            },



            journey:

            {

                portalsVisited:[],

                milestones:[]

            },


            creations:[]

        };








    return {



        ...creator,





        identity:


            creator.identity
            ||

            {

                name:null,

                archetype:"Explorer"

            },






        worlds:


            worldState.creations
            ||

            creator.creations
            ||

            [],






        evolution:


            worldState.evolution
            ||

            creator.evolution
            ||

            {

                level:1,

                experience:0,

                stage:"Beginning"

            },







        journey:


            worldState.journey
            ||

            creator.journey
            ||

            {

                portalsVisited:[],

                milestones:[]

            },







        memory:


            worldState.memory
            ||

            {},






        worldState



    };


}