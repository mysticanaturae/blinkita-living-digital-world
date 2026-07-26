import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PortalRoutes } from "../core/routes/PortalRoutes";
import DynamicPortalPage from "../pages/DynamicPortalPage";


// Dashboards
import CreatorDashboard from "../components/creator/CreatorDashboard";
import WorldDashboard from "../components/world/WorldDashboard";
import WorldBuilderHome from "../components/builder/WorldBuilderHome";
import WorldLifecycleDashboard from "../components/lifecycle/WorldLifecycleDashboard";
import WorldTimeline from "../components/timeline/WorldTimeline";
import WorldResume from "../components/resume/WorldResume";



export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>


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




                <Route

                    path="/portal/:portalId"

                    element={<DynamicPortalPage />}

                />





                {/* =================================
                    CREATOR OS™
                    ================================= */}


                <Route

                    path="/creator"

                    element={<CreatorDashboard />}

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