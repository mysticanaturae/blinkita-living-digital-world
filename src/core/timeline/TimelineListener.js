/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

TIMELINE LISTENER™

Living World story recorder

Version 1.0

==========================================
*/


import { subscribe } from "../events/EventBus";

import { EventTypes } from "../events/EventTypes";

import { WorldTimeline } from "./WorldTimeline";





function handlePortalEntered(event){


    WorldTimeline.addEvent({

        type:
            "portal_entered",

        title:
            "🌱 Portal Entered",

        description:
            `Entered Living Portal™ ${event.payload.portalId}`

    });



    console.log(

        "📖 Timeline: Portal Entry Recorded",

        event.payload.portalId

    );


}






function handlePortalCompleted(event){


    WorldTimeline.addEvent({

        type:
            "portal_completed",

        title:
            "✨ Portal Awakened",

        description:
            `Completed Living Portal™ ${event.payload.portalId}`

    });



    console.log(

        "📖 Timeline: Portal Completion Recorded",

        event.payload.portalId

    );


}






function handleWorldCreated(event){


    WorldTimeline.addEvent({

        type:
            "world_created",

        title:
            "🌎 Living World Created",

        description:
            "A new Living World™ has been born."

    });



    console.log(

        "📖 Timeline: World Creation Recorded"

    );


}







export function initializeTimelineListener(){



    subscribe(

        EventTypes.PORTAL_ENTERED,

        handlePortalEntered

    );



    subscribe(

        EventTypes.PORTAL_COMPLETED,

        handlePortalCompleted

    );



    subscribe(

        EventTypes.WORLD_CREATED,

        handleWorldCreated

    );


}