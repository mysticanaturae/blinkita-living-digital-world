/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

WORLD STATE™

The living memory container

Version 1.0
==========================================
*/


import { PortalStateEngine } from "./PortalStateEngine";


export let worldState =
    PortalStateEngine.createState();



export function updateWorldState(
    newState
) {

    worldState = newState;

}



export function getWorldState() {

    return worldState;

}