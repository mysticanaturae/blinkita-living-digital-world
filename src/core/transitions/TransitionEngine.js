/*
==========================================

BLINKITA METHOD™
LIVING DIGITAL WORLD™

TRANSITION ENGINE™

The living path between portals

Version 2.0

==========================================
*/


import { PortalRoutes } from "../routes/PortalRoutes";


export const TransitionEngine = {


    getNextPortal(currentPortalId){


        const portal = PortalRoutes.find(

            p => p.id === currentPortalId

        );


        if(!portal){

            return null;

        }


        return portal.next || null;


    }


};