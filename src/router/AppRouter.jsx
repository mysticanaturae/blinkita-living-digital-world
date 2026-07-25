import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PortalRoutes } from "../core/routes/PortalRoutes";


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

            </Routes>

        </BrowserRouter>
    );
}