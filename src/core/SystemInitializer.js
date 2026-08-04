/*
==========================================

BLINKITA METHOD™

SYSTEM INITIALIZER™

The birth sequence
of Living Systems™

Version 3.1

==========================================
*/


import {

    initializeMemoryListener

}

from "./memory/MemoryListener";


import {

    initializeTimelineListener

}

from "./timeline/TimelineListener";


import {

    initializeJourneyListener

}

from "../journey/JourneyListener";


import {

    initializeIntelligenceListener

}

from "../world/intelligence/IntelligenceListener";


import {

    initializeDecisionListener

}

from "../world/decision/DecisionListener";


import {

    initializeActionListener

}

from "../world/action/ActionListener";


import {

    initializeGovernanceListener

}

from "../world/governance/GovernanceListener";


import {

    initializeHarmonyListener

}

from "../world/harmony/HarmonyListener";


import {

    initializeDiscoveryListener

}

from "../world/discovery/DiscoveryListener";


import {

    initializeAuthenticityListener

}

from "../world/authenticity/AuthenticityListener";


import {

    initializeRuntime

}

from "./runtime/RuntimeInitializer";


import {

    initializeWorldEvolutionListener

}

from "../world/evolution/WorldEvolutionListener";


import {

    initializeGovernanceDecisionBridge

}

from "../world/governance/GovernanceDecisionBridge";





export function initializeSystems(){

    /*
    ======================================
    ACTIVATE LIVING SYSTEMS™

    Listener registration MUST happen
    before runtime bootstrap.

    This guarantees that the canonical
    WORLD_CREATED event is observed by
    the complete Living World system.

    ======================================
    */

    initializeMemoryListener();

    initializeTimelineListener();

    initializeJourneyListener();

    initializeWorldEvolutionListener();

    /*
    ======================================
    CONSCIOUS WORLD FLOW™

    Intelligence
        ↓
    Decision
        ↓
    Action

    ======================================
    */

    initializeIntelligenceListener();

    initializeDecisionListener();

    initializeActionListener();

    initializeHarmonyListener();

    initializeDiscoveryListener();

    initializeAuthenticityListener();

    initializeGovernanceListener();

    /*
    ======================================
    GOVERNANCE DECISION BRIDGE™

    Connects governance decisions
    with the living world action flow.

    ======================================
    */

    initializeGovernanceDecisionBridge();

    /*
    ======================================
    RUNTIME BOOTSTRAP™

    The world is created or resumed
    only AFTER all listeners are
    registered.

    ======================================
    */

    const world =
        initializeRuntime();

    return world;

}




