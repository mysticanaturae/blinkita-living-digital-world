import { getPortal } from "../registry/PortalRegistry";


export const TransitionEngine = {


    getNextPortal(currentPortalId) {

        const portal = getPortal(currentPortalId);


        if (!portal) {
            return null;
        }


        return portal.experience?.transition || null;

    }


};