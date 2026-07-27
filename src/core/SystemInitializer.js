/*
==========================================
BLINKITA METHOD™

SYSTEM INITIALIZER™

The birth sequence
of Living Systems™

Version 2.9
==========================================
*/



import {

    initializeMemoryListener

}

from "./memory/MemoryListener";



import {

    initializeEvolutionListener

}

from "../evolution/EvolutionListener";



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



import { initializeRuntime }

from "./runtime/RuntimeInitializer";



import {

    initializeGovernanceDecisionBridge

}

from "../world/governance/GovernanceDecisionBridge";







export function initializeSystems(){



    const world =

        initializeRuntime();







    /*
    ======================================
    ACTIVATE LIVING SYSTEMS™

    Each layer awakens

    ======================================
    */






    initializeMemoryListener();




    initializeEvolutionListener();




    initializeJourneyListener();





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


    initializeGovernanceDecisionBridge();






    console.log(


        "🌱 Living Systems Initialized"


    );









    return world;



}