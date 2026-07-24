import { BrowserRouter, Routes, Route } from "react-router-dom";

import { portalRoutes } from "../core/routes/PortalRoutes";


export default function AppRouter() {

    return (
        <BrowserRouter>

            <Routes>

                {portalRoutes.map((route) => {

                    const PageComponent = route.component;

                    return (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={<PageComponent />}
                        />
                    );

                })}

            </Routes>

        </BrowserRouter>
    );
}