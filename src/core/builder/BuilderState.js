/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

BUILDER STATE™

The identity bridge
between Creator and Living World™

Version 1.0
==========================================
*/


import {

    getWorldState

}

from "../state/WorldState";




import {

    createBuilderProfile

}

from "./WorldBuilderProfile";







export function getBuilderState(){



    const worldState =

        getWorldState();





    const creator =

        worldState.creator;







    const builderProfile =


        createBuilderProfile(

            creator

        );








    return {



        ...builderProfile,



        worlds:


            worldState.creations
            ||
            [],




        evolution:


            worldState.evolution
            ||
            builderProfile.evolution,





        possibilities:


            [],





        worldState



    };



}