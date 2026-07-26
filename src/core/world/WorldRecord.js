/*
==========================================

BLINKITA METHOD™

WORLD RECORD SYSTEM™

The memory record
of a Living World™

Version 1.1

==========================================
*/


let worldRecords = [];



export const WorldRecord = {


    createWorldRecord(worldState = {}) {


        const world = {


            id:

                Date.now(),



            createdAt:

                new Date().toISOString(),



            birthPortal:

                worldState.currentPortal || null,



            visitedPortals:

                worldState.visitedPortals || [],



            completedPortals:

                worldState.completedPortals || [],



            progress:

                worldState.progress || 0,



            status:

                worldState.status || "seed"



        };



        worldRecords.push(world);



        return world;


    },




    getWorlds() {


        return worldRecords;


    },




    getWorld(id) {


        return worldRecords.find(

            world =>

                world.id === id

        );


    }


};