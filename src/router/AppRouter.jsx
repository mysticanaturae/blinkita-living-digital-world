import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PortalRoutes } from "../core/routes/PortalRoutes";
import DynamicPortalPage from "../pages/DynamicPortalPage";
import LivingWorldEntry from "../components/entry/LivingWorldEntry";


// =================================
// BLINKITA OS™ DASHBOARD
// =================================

import CreatorHouse from "../components/dashboard/CreatorHouse";


// =================================
// DASHBOARD MODULES
// =================================

import WorldDashboard from "../components/world/WorldDashboard";
import WorldBuilderHome from "../components/builder/WorldBuilderHome";
import WorldLifecycleDashboard from "../components/lifecycle/WorldLifecycleDashboard";
import WorldTimeline from "../components/timeline/WorldTimeline";
import WorldResume from "../components/resume/WorldResume";






export default function AppRouter() {


    return (


        <BrowserRouter>


            <Routes>





                {/* =================================
                    LIVING PORTAL JOURNEY™
                    ================================= */}


                
                {/* =================================
                    LIVING WORLD ENTRY™
                    ================================= */}


                <Route
                    path="/"
                    element={<LivingWorldEntry />}
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
                    BLINKITA OS™
                    CREATOR HOUSE™
                    ================================= */}


                <Route


                    path="/creator"


                    element={<CreatorHouse />}


                />










                {/* =================================
                    SUPPORTING SPACES™
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


                    path="/lifecycle"


                    element={<WorldLifecycleDashboard />}


                />







                <Route


                    path="/timeline"


                    element={<WorldTimeline />}


                />







                <Route


                    path="/resume"


                    element={<WorldResume />}


                />






            </Routes>


        </BrowserRouter>


    );


}



