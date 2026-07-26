/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PROFILE ENGINE™

The bridge between
Visitor and Living World™

Version 1.0
==========================================
*/


import { VisitorProfile } from "./VisitorProfile";



export const ProfileEngine = {


    initialize() {

        return VisitorProfile.createProfile();

    },



    discoverPortal(
        profile,
        portalId
    ) {


        return VisitorProfile.discoverPortal(
            profile,
            portalId
        );

    },



    completePortal(
        profile,
        portalId
    ) {


        return VisitorProfile.completePortal(
            profile,
            portalId
        );

    }



};