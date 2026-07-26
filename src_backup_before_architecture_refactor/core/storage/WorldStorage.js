/*
==========================================
BLINKITA METHOD™

WORLD STORAGE™

The persistence layer
of a Living World™

Version 1.0
==========================================
*/


const STORAGE_KEY =
    "blinkita_world_state";




export const WorldStorage = {



    save(worldState) {

console.log(
        "💾 SAVING WORLD",
        worldState
    );
    
        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(worldState)

        );


        return worldState;


    },





    load() {


        const savedWorld =

            localStorage.getItem(

                STORAGE_KEY

            );



        if (!savedWorld) {

            return null;

        }



        return JSON.parse(

            savedWorld

        );


    },





    clear() {


        localStorage.removeItem(

            STORAGE_KEY

        );


    }



};