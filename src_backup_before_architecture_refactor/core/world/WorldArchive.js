/*
==========================================
BLINKITA METHOD™

WORLD ARCHIVE™

The memory of created Living Worlds™

Version 1.0
==========================================
*/


let worldArchive = [];



export const WorldArchive = {


    createWorldRecord(worldState) {


        const world = {


            id:
                Date.now(),


            createdAt:
                new Date().toISOString(),


            birthPortal:
                worldState.currentPortal,


            visitedPortals:
                [
                    ...worldState.visitedPortals
                ],


            completedPortals:
                [
                    ...worldState.completedPortals
                ],


            progress:
                worldState.progress,


            status:
                worldState.status



        };



        worldArchive.push(world);



        return world;


    },



    getWorlds() {


        return worldArchive;


    },



    getWorld(id) {


        return worldArchive.find(

            world =>
                world.id === id

        );


    }



};