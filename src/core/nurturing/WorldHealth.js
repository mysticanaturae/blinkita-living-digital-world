/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD HEALTH™

The vitality indicator
of a Living World™

Version 1.0
==========================================
*/


export function calculateWorldHealth(

    world,

    nurturingHistory

) {


    let health = 0;



    if (world.progress) {

        health += world.progress;

    }



    const nurturingCount =

        nurturingHistory.filter(

            event =>

                event.worldId === world.id

        ).length;



    health +=

        nurturingCount * 5;



    if (health > 100) {

        health = 100;

    }



    return Math.round(

        health

    );


}