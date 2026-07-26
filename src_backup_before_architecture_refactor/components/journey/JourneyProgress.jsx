/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

JOURNEY PROGRESS™

The visible evolution layer

Version 1.1
==========================================
*/


import {
    getWorldState
} from "../../core/state/WorldState";

import {
    PortalStateEngine
} from "../../core/state/PortalStateEngine";



export default function JourneyProgress() {


    const state = getWorldState();


    const progress =
        PortalStateEngine.getProgress(
            state
        );



    return (

        <section className="journey-progress">


            <h3>
                🌌 Living Journey™
            </h3>



            <p>
                Current Portal:
                {" "}
                {state.currentPortal}
            </p>



            <p>
                Portals Discovered:
                {" "}
                {state.visitedPortals.length}
                {" / "}
                9
            </p>



            <p>
                Portals Completed:
                {" "}
                {state.completedPortals.length}
                {" / "}
                9
            </p>



            <p>
                Journey Progress:
                {" "}
                {progress}%
            </p>



            <p>
                Status:
                {" "}
                {state.status}
            </p>



        </section>

    );

}