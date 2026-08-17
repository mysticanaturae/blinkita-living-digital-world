import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PortalRoutes } from "../core/routes/PortalRoutes";
import DynamicPortalPage from "../pages/DynamicPortalPage";
import BlinkitaGenesis from "../components/entry/BlinkitaGenesis";


// =================================
// BLINKITA OS  DASHBOARD
// =================================

import CreatorHouse from "../components/dashboard/CreatorHouse";


// =================================
// DASHBOARD MODULES
// =================================

import WorldResume from "../components/resume/WorldResume";
import WorldLifecycleDashboard from "../components/lifecycle/WorldLifecycleDashboard";
import WorldTimeline from "../components/timeline/WorldTimeline";
import BlinkitaTimeline from "../components/timeline/BlinkitaTimeline";
import WorldDashboard from "../components/world/WorldDashboard";
import WorldBuilderHome from "../components/builder/WorldBuilderHome";
import WorldUnderConstruction from "../components/world/WorldUnderConstruction";
import BlinkitaEcosystemMandala from "../components/ecosystem/BlinkitaEcosystemMandala";
import BlinkitaLivingEcosystem from "../components/ecosystem/BlinkitaLivingEcosystem";
import BlinkitaStudio from "../components/studio/BlinkitaStudio";
import BlinkitaAcademy from "../components/academy/BlinkitaAcademy";
import BlinkitaLivingWorlds from "../components/living-worlds/BlinkitaLivingWorlds";
import BlinkitaLibrary from "../components/library/BlinkitaLibrary";
import BlinkitaCommunity from "../components/community/BlinkitaCommunity";
import BlinkitaMethod from "../components/method/BlinkitaMethod";
import BlinkitaLivingMemory from "../components/living-memory/BlinkitaLivingMemory";
import BlinkitaAI from "../components/ai/BlinkitaAI";
import BlinkitaMarket from "../components/market/BlinkitaMarket";
import PremiumWorldShell from "../components/shared/PremiumWorldShell";
import BlinkitaOS from "../components/os/BlinkitaOS";





export default function AppRouter() {


    return (


        <BrowserRouter>


                     <Routes>

    <Route
        path="/ecosystem"
        element={<BlinkitaEcosystemMandala />}
    />
    <Route
    path="/world/ecosystem"
    element={
        <PremiumWorldShell>
            <BlinkitaLivingEcosystem />
        </PremiumWorldShell>
    }
/>


    <Route
        path="/"
        element={<BlinkitaGenesis />}
    />





                {/* =================================
                    LIVING PORTAL JOURNEY 
                    ================================= */}


                
                {/* =================================
                    LIVING WORLD ENTRY 
                    ================================= */}


                <Route
                    path="/"
                    element={<BlinkitaGenesis />}
                />



                {PortalRoutes.map((route) => {


                    const PageComponent = route.component;



                    return (


                        <Route


                            key={route.id}


                            path={route.path}


                            element={<PageComponent />}


                        />


                    );


                })}








                {/* =================================
                    DYNAMIC PORTALS
                    ================================= */}


                <Route


                    path="/portal/:portalId"


                    element={<DynamicPortalPage />}


                />










                {/* =================================
                    BLINKITA OS 
                    CREATOR HOUSE 
                    ================================= */}


                <Route


                    path="/creator"


                    element={<CreatorHouse />}


                />

                <Route

                    path="/world/creator"
                    element={<CreatorHouse />}
                />










                {/* =================================
                    SUPPORTING SPACES 
                    ================================= */}



                <Route


                    path="/world-dashboard"


                    element={<WorldDashboard />}


                />



                <Route


                    path="/world"


                    element={<WorldDashboard />}


                />







                <Route
    path="/builder"
    element={<WorldBuilderHome />}
/>

<Route
    path="/world/os"
    element={
        <PremiumWorldShell>
            <BlinkitaOS />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/world-builder"
    element={<WorldBuilderHome />}
/>

<Route
    path="/world/studio"
    element={
        <PremiumWorldShell>
            <BlinkitaStudio />
        </PremiumWorldShell>
    }
/>

<Route
    path="/world/academy"
    element={
        <PremiumWorldShell>
            <BlinkitaAcademy />
        </PremiumWorldShell>
    }
/>

<Route
    path="/world/ai"
    element={
        <PremiumWorldShell>
            <BlinkitaAI />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/market"
    element={
        <PremiumWorldShell>
            <BlinkitaMarket />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/living-memory"
    element={
        <PremiumWorldShell>
            <BlinkitaLivingMemory />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/living-worlds"
    element={
        <PremiumWorldShell>
            <BlinkitaLivingWorlds />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/timeline"
    element={
        <PremiumWorldShell>
            <BlinkitaTimeline />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/library"
    element={
        <PremiumWorldShell>
            <BlinkitaLibrary />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/community"
    element={
        <PremiumWorldShell>
            <BlinkitaCommunity />
        </PremiumWorldShell>
    }
/>
<Route
    path="/world/method"
    element={
        <PremiumWorldShell>
            <BlinkitaMethod />
        </PremiumWorldShell>
    }
/>

<Route
    path="/world/:worldId"
    element={<WorldUnderConstruction />}
/>







                <Route


                    path="/lifecycle"


                    element={<WorldLifecycleDashboard />}


                />







                <Route


                    path="/timeline"
                    element={<BlinkitaTimeline />}


                />







                <Route


                    path="/resume"


                    element={<WorldResume />}


                />






            </Routes>


        </BrowserRouter>


    );


}
















































