/*
==========================================

BLINKITA METHOD™

WORLD EVOLUTION LISTENER™

The awareness system
of a Living World™

Version 1.0

==========================================
*/


import {

    WorldEvolutionEngine

}

from "./WorldEvolutionEngine";





export function evolveFromEvent(

    world,

    event

) {


    if (!world || !event) {

        return world;

    }






    let nextStage = null;





    switch(event.type) {



        case "WORLD_CREATED":


            nextStage =

                "awakening";


            break;






        case "PORTAL_COMPLETED":


            nextStage =

                WorldEvolutionEngine.getNextStage(

                    world.evolution?.stage

                );


            break;







        case "MILESTONE_REACHED":


            nextStage =

                WorldEvolutionEngine.getNextStage(

                    world.evolution?.stage

                );


            break;








        default:


            return world;



    }







    if (!nextStage) {


        return world;


    }








    return WorldEvolutionEngine.evolve(

        world,

        nextStage

    );



}