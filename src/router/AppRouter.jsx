import { BrowserRouter, Routes, Route } from "react-router-dom";

import ArrivalPage from "../pages/ArrivalPage";
import InvitationPage from "../pages/InvitationPage";
import PossibilityPage from "../pages/PossibilityPage";
import TheCallPage from "../pages/TheCallPage";
import WorldSeedPage from "../pages/WorldSeedPage";
import VisionPage from "../pages/VisionPage";
import EssencePage from "../pages/EssencePage";
import ExperiencePage from "../pages/ExperiencePage";
import LivingWorldPage from "../pages/LivingWorldPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<ArrivalPage />} />

                <Route
                    path="/invitation"
                    element={<InvitationPage />}
                />

                <Route
                    path="/possibility"
                    element={<PossibilityPage />}
                />

                <Route
                    path="/the-call"
                    element={<TheCallPage />}
                />

                <Route
                    path="/world-seed"
                    element={<WorldSeedPage />}
                />

                <Route
                    path="/vision"
                    element={<VisionPage />}
                />

                <Route
                    path="/essence"
                    element={<EssencePage />}
                />

                <Route
                    path="/experience"
                    element={<ExperiencePage />}
                />

                <Route
                    path="/world"
                    element={<LivingWorldPage />}
                />

            </Routes>
        </BrowserRouter>
    );
}