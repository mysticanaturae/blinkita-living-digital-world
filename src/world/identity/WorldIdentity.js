/*
==========================================

BLINKITA METHOD™

WORLD IDENTITY SYSTEM™

The living identity
of a Living World™

Version 1.1

==========================================
*/


export function createWorldIdentity({

    seed = {},

    lifecycle = {},

    record = {}

}) {


    return {


        id:

            record.id || crypto.randomUUID(),



        name:

            seed.name || "Unnamed World",



        essence:

            seed.essence || "",



        purpose:

            seed.purpose || "",



        transformation:

            seed.transformation || "",



        audience:

            seed.audience || "",



        lifecycle,


        status:

            record.status || "seed",



        evolutionStage:

            seed.evolutionStage || "Imagine",



        createdAt:

            record.createdAt || new Date().toISOString()


    };


}