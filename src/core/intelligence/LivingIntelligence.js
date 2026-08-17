/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

LIVING INTELLIGENCE™
CONVERSATION CORE

The conversational awareness layer
of a Living World™

Version 1.0

Architecture:

Creator
↓
Question
↓
Living Intelligence
↓
World Context
↓
World Memory
↓
Intelligence
↓
Response
↓
Memory Decision
==========================================
*/

import { getWorldState } from "../state/WorldState";

import { WorldIntelligence } from "./WorldIntelligence";



function getMemory(world) {

    if (!world) {

        return [];

    }

    if (Array.isArray(world.memory)) {

        return world.memory;

    }

    if (Array.isArray(world.memory?.events)) {

        return world.memory.events;

    }

    return [];

}



function getIntelligence(world) {

    return {

        ...(world?.intelligence || {}),

        level:
            world?.intelligence?.level || 0,

        insights:
            world?.intelligence?.insights || [],

        history:
            world?.intelligence?.history || []

    };

}



function buildContext(world) {

    const memory =
        getMemory(world);

    const intelligence =
        getIntelligence(world);

    const guidance =
        WorldIntelligence.analyze(world);



    return {

       world: {

    id:
        world?.id || null,

    identity:
        world?.identity || null,

    status:
        world?.status || null,

    creationStage:
        world?.creationStage || null,

    lifecycle:
        world?.lifecycle || null,

    seed:
        world?.seed || null,

    creator:
        world?.creator || null,

    evolution:
        world?.evolution || null,

    journey:
        world?.journey || null,

    relationships:
        world?.relationships || [],

    harmony:
        world?.harmony || null,

    discovery:
        world?.discovery || null,

    creations:
        world?.creations || [],

    authenticity:
        world?.authenticity || null,

    governance:
        world?.governance || null,

    decision:
        world?.decision || null,

    action:
        world?.action || null,

    portalAnswers:
        world?.portalAnswers || {},

    portalResponses:
        world?.portalResponses || {}

},

        memory,

        intelligence,

        guidance

    };

}



export const LivingIntelligence = {



    getContext() {

        const world =
            getWorldState();

        return buildContext(
            world
        );

    },



    prepareConversation(

        message

    ) {

        const world =
            getWorldState();

        const context =
            buildContext(
                world
            );



        return {

            message,

            context,

            timestamp:
                new Date().toISOString()

        };

    },



    createResponse({

        message,

        response,

        remember = false,

        importance = 1

    }) {

        const world =
            getWorldState();



        return {

            message,

            response,

            remember,

            importance,

            worldId:
                world?.id || null,

            timestamp:
                new Date().toISOString()

        };

    }

};
