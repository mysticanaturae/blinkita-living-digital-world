/*
==========================================

BLINKITA METHOD™

WORLD STORAGE™

The persistence layer
of a Living World™

Version 1.1

==========================================
*/


const STORAGE_KEY =
    "blinkita_world_state";




let lastSavedState = null;





export const WorldStorage = {




    save(worldState) {



        const currentState =

            JSON.stringify(worldState);






        if(

            currentState === lastSavedState

        ){

            return worldState;

        }






        console.log(

            "💾 SAVING WORLD",

            worldState

        );







        localStorage.setItem(

            STORAGE_KEY,

            currentState

        );





        lastSavedState = currentState;





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






        lastSavedState = savedWorld;






        return JSON.parse(

            savedWorld

        );



    },







    clear() {



        localStorage.removeItem(

            STORAGE_KEY

        );



        lastSavedState = null;



    }



};