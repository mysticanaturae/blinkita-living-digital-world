/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

LIVING INTELLIGENCE™
CONVERSATION CORE

The conversational layer
of a Living World™

Version 1.0

Purpose:

Creator
↓
Question
↓
World Context
↓
Memory
↓
Intelligence
↓
AI Response
↓
Memory Decision
==========================================
*/

import {
    LivingIntelligence
}
from "./LivingIntelligence";



function normalizeMessage(message) {

    if (
        typeof message !== "string"
    ) {

        return "";

    }

    return message.trim();

}



function createConversationId() {

    return (
        Date.now().toString()
        +
        "-"
        +
        Math.random()
            .toString(36)
            .slice(2, 9)
    );

}



function buildSystemContext(
    context
) {

    return {

        world:
            context?.world || {},

        memory:
            context?.memory || [],

        intelligence:
            context?.intelligence || {},

        guidance:
            context?.guidance || null

    };

}



export const LivingIntelligenceConversation = {



    prepare(

        message

    ) {

        const cleanMessage =
            normalizeMessage(
                message
            );



        if (!cleanMessage) {

            return {

                ok: false,

                error:
                    "Living Intelligence needs a message."

            };

        }



        const prepared =
            LivingIntelligence
                .prepareConversation(
                    cleanMessage
                );



        return {

            ok: true,

            conversationId:
                createConversationId(),

            message:
                cleanMessage,

            context:
                buildSystemContext(
                    prepared.context
                ),

            timestamp:
                prepared.timestamp

        };

    },



    buildRequest(

        message

    ) {

        const conversation =
            this.prepare(
                message
            );



        if (!conversation.ok) {

            return conversation;

        }



        return {

            ok: true,

            conversationId:
                conversation.conversationId,

            message:
                conversation.message,

            context:
                conversation.context,

            request: {

                role:
                    "creator",

                message:
                    conversation.message,

                world:
                    conversation.context.world,

                memory:
                    conversation.context.memory,

                intelligence:
                    conversation.context.intelligence,

                guidance:
                    conversation.context.guidance

            },

            timestamp:
                conversation.timestamp

        };

    },



    async send(

        message

    ) {

        const request =
            this.buildRequest(
                message
            );



        if (!request.ok) {

            return request;

        }



        const response =
            await fetch(
                "/api/living-intelligence",
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(
                            request.request
                        )

                }

            );



        if (!response.ok) {

            throw new Error(
                "Living Intelligence could not respond."
            );

        }



        const data =
            await response.json();



        return {

            ok: true,

            conversationId:
                request.conversationId,

            message:
                request.message,

            response:
                data.response || "",

            memory:
                data.memory || null,

            timestamp:
                data.timestamp ||
                new Date().toISOString()

        };

    }

};
