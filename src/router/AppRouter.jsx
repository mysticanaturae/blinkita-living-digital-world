import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PortalRoutes } from "../core/routes/PortalRoutes";
import DynamicPortalPage from "../pages/DynamicPortalPage";


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


            </Routes>

        </BrowserRouter>
    );
}