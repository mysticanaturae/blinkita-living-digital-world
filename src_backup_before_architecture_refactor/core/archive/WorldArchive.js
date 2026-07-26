/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD ARCHIVE™

The memory layer
of all Living Worlds™

Version 1.0
==========================================
*/


const ARCHIVE_KEY =

    "blinkita_world_archive";




export const WorldArchive = {



    saveWorld(world) {


        const worlds =

            this.getWorlds();



        const existing =

            worlds.find(

                item =>

                    item.id === world.id

            );



        const updatedWorlds =

            existing


            ?


            worlds.map(

                item =>

                    item.id === world.id

                    ? world

                    : item

            )


            :


            [

                ...worlds,

                world

            ];




        localStorage.setItem(

            ARCHIVE_KEY,

            JSON.stringify(

                updatedWorlds

            )

        );



        return updatedWorlds;


    },






    getWorlds() {


        const saved =

            localStorage.getItem(

                ARCHIVE_KEY

            );



        if (!saved) {

            return [];

        }



        return JSON.parse(saved);


    },







    getWorld(id) {


        const worlds =

            this.getWorlds();



        return worlds.find(

            world =>

                world.id === id

        );


    },







    removeWorld(id) {


        const worlds =

            this.getWorlds();



        const updated =

            worlds.filter(

                world =>

                    world.id !== id

            );



        localStorage.setItem(

            ARCHIVE_KEY,

            JSON.stringify(updated)

        );



        return updated;


    }



};