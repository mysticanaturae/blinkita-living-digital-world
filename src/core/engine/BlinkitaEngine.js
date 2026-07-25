/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™
CORE ENGINE

The first digital foundation
of a Living World™

Version 1.0
==========================================
*/


import { JourneyEngine } from "./JourneyEngine";
import { TransitionEngine } from "../transitions/TransitionEngine";


export const BlinkitaEngine = {

    name: "BLINKITA METHOD™ Living Digital World™",

    version: "1.0",

    philosophy: "Create Living Worlds™",


    layers: [
        "Foundation",
        "Thinking",
        "Design",
        "Creation",
        "Execution",
        "Ecosystem",
        "Evolution"
    ],


    status: "awakening",



    getJourney() {

        return JourneyEngine.getJourney();

    },


    getNextPortal(currentPortalId) {

        return TransitionEngine.getNextPortal(currentPortalId);

    }


};