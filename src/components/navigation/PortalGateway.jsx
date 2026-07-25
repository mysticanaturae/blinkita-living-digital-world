/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL GATEWAY™

The transition point
between Living Worlds™

Version 1.4
==========================================
*/

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { TransitionEngine } from "../../core/transitions/TransitionEngine";
import { PortalRoutes } from "../../core/routes/PortalRoutes";

import {
    enterWorldPortal,
    completeWorldPortal
} from "../../core/state/WorldState";


export default function PortalGateway({

    currentPortalId,

    exposeAction,

}) {

    const navigate = useNavigate();

    const nextPortalId =
        TransitionEngine.getNextPortal(
            currentPortalId
        );

    const nextPortal =
        PortalRoutes.find(
            portal =>
                portal.id === nextPortalId
        );

    function enterNextPortal() {

        completeWorldPortal(
            currentPortalId
        );

        if (!nextPortal) {

            console.warn(
                "No next portal available."
            );

            return;

        }

        const updatedWorld =
            enterWorldPortal(
                nextPortal.id
            );

        console.log(
            "World State Updated:",
            updatedWorld
        );

        navigate(
            nextPortal.path
        );

    }

    useEffect(() => {

        if (
            exposeAction &&
            nextPortal
        ) {

            exposeAction(() => enterNextPortal);

        }

    }, [
        exposeAction,
        nextPortal
    ]);

    // Gateway ostane aktiven,
    // vendar nima več svojega gumba.

    return null;

}