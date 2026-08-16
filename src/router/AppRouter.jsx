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
import BlinkitaStudio from "../components/studio/BlinkitaStudio";
import BlinkitaAcademy from "../components/academy/BlinkitaAcademy";
import BlinkitaLivingWorlds from "../components/living-worlds/BlinkitaLivingWorlds";
import BlinkitaLibrary from "../components/library/BlinkitaLibrary";
import BlinkitaCommunity from "../components/community/BlinkitaCommunity";
import BlinkitaMethod from "../components/method/BlinkitaMethod";
import BlinkitaLivingMemory from "../components/living-memory/BlinkitaLivingMemory";
import BlinkitaAI from "../components/ai/BlinkitaAI";
import BlinkitaMarket from "../components/market/BlinkitaMarket";





export default function AppRouter() {


    return (


        <BrowserRouter>


                     <Routes>

    <Route
        path="/ecosystem"
        element={<BlinkitaEcosystemMandala />}
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
    path="/world/world-builder"
    element={<WorldBuilderHome />}
/>

<Route
    path="/world/studio"
    element={<BlinkitaStudio />}
/>

<Route
    path="/world/academy"
    element={<BlinkitaAcademy />}
/>

<Route
    path="/world/ai"
    element={<BlinkitaAI />}
/>
<Route
    path="/world/market"
    element={<BlinkitaMarket />}
/>
<Route
    path="/world/living-memory"
    element={<BlinkitaLivingMemory />}
/>
<Route
    path="/world/living-worlds"
    element={<BlinkitaLivingWorlds />}
/>
<Route
    path="/world/timeline"
    element={<BlinkitaTimeline />}
/>
<Route
    path="/world/library"
    element={<BlinkitaLibrary />}
/>
<Route
    path="/world/community"
    element={<BlinkitaCommunity />}
/>
<Route
    path="/world/method"
    element={<BlinkitaMethod />}
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







































