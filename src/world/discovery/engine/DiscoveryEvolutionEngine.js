/*
==========================================

BLINKITA METHOD™

DISCOVERY EVOLUTION ENGINE™

Transforms discoveries
into world evolution

Version 1.1

==========================================
*/


import {

    getWorldState,

    updateWorldState

}

from "../../../core/state/WorldState";



import {

    DiscoveryRules

}

from "../DiscoveryRules";







export function processDiscovery(

    event

){



    const rule =

        DiscoveryRules[event.discoveryType];





    if(!rule){


        return getWorldState();


    }







    const world =

        getWorldState();







    const currentDiscovery =

        world.discovery || {


            level: 0,

            curiosity: 0,

            knowledge: 0,

            possibilities: 0,

            creations: 0,

            history: []


        };









    const effect =

        rule.effect || {};









    const discoveryEvent = {



        type:

            event.discoveryType,



        source:

            event.source || "Unknown",



        message:

            effect.evolutionMessage || "",



        timestamp:

            new Date().toISOString()


    };









    const discovery = {



        ...currentDiscovery,





        level:

            (currentDiscovery.level || 0)

            +

            (effect.discoveryIncrease || 0),






        curiosity:

            (currentDiscovery.curiosity || 0)

            +

            (effect.curiosity || 0),






        knowledge:

            (currentDiscovery.knowledge || 0)

            +

            (effect.knowledge || 0),






        possibilities:

            (currentDiscovery.possibilities || 0)

            +

            (effect.possibilities || 0),






        creations:

            (currentDiscovery.creations || 0)

            +

            (effect.creations || 0),






        history:

        [

            ...(currentDiscovery.history || []),


            discoveryEvent


        ]



    };









    return updateWorldState({



        discovery,





        memory:{


            ...(world.memory || {}),



            events:[



                ...(world.memory?.events || []),



                discoveryEvent



            ]


        }





    });



}