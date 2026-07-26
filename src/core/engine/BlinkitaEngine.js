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


import { PortalSequenceEngine } from "./PortalSequenceEngine";
import { TransitionEngine } from "../transitions/TransitionEngine";
import { PortalStateEngine } from "../state/PortalStateEngine";



export const BlinkitaEngine = {


    name:
        "BLINKITA METHOD™ Living Digital World™",


    version:
        "1.0",


    philosophy:
        "Create Living Worlds™",



    layers: [

        "Foundation",
        "Thinking",
        "Design",
        "Creation",
        "Execution",
        "Ecosystem",
        "Evolution"

    ],



    status:
        "awakening",




    /*
    ==========================================
    JOURNEY SYSTEM
    ==========================================
    */


    getJourney() {

        return PortalSequenceEngine.getJourney();

    },





    /*
    ==========================================
    TRANSITION SYSTEM
    ==========================================
    */


    getNextPortal(currentPortalId) {

        return TransitionEngine.getNextPortal(
            currentPortalId
        );

    },






    /*
    ==========================================
    WORLD STATE SYSTEM
    ==========================================
    */


    createState() {

        return PortalStateEngine.createState();

    }


};