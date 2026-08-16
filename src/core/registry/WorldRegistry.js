/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD REGISTRY™

The living collection
of Living Worlds™

Version 1.0
==========================================
*/

const STORAGE_KEY =
    "blinkita_world_registry";


let worldRegistry = [];


function loadRegistry(){

    const savedRegistry =
        localStorage.getItem(
            STORAGE_KEY
        );


    if(!savedRegistry){

        worldRegistry = [];

        return worldRegistry;

    }


    try{

        worldRegistry =
            JSON.parse(
                savedRegistry
            );

    }catch(error){

        console.warn(
            "⚠️ World Registry could not be loaded:",
            error
        );

        worldRegistry = [];

    }


    return worldRegistry;

}


function saveRegistry(){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
            worldRegistry
        )
    );

}


loadRegistry();


export const WorldRegistry = {


    registerWorld(world){

        if(!world || !world.id){

            return null;

        }


        const existingIndex =
            worldRegistry.findIndex(
                existingWorld =>
                    existingWorld.id === world.id
            );


        if(existingIndex !== -1){

            worldRegistry[existingIndex] =
                world;

        }else{

            worldRegistry.push(
                world
            );

        }


        saveRegistry();


        return world;

    },


    getWorlds(){

        return [
            ...worldRegistry
        ];

    },


    getWorld(id){

        return worldRegistry.find(
            world =>
                world.id === id
        ) || null;

    },


    hasWorld(id){

        return worldRegistry.some(
            world =>
                world.id === id
        );

    },


    removeWorld(id){

        worldRegistry =
            worldRegistry.filter(
                world =>
                    world.id !== id
            );


        saveRegistry();


        return worldRegistry;

    },


    clear(){

        worldRegistry = [];


        localStorage.removeItem(
            STORAGE_KEY
        );

    },


    reload(){

        return loadRegistry();

    }

};
