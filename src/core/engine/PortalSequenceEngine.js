import { portals } from "../data/portals";


export const PortalSequenceEngine = {


    getJourney() {

        return portals
            .sort((a, b) => a.order - b.order)
            .map(portal => portal.id);

    }


};