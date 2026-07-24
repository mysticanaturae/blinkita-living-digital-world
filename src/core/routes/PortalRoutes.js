import ArrivalPage from "../../pages/ArrivalPage";
import InvitationPage from "../../pages/InvitationPage";
import PossibilityPage from "../../pages/PossibilityPage";
import TheCallPage from "../../pages/TheCallPage";
import WorldSeedPage from "../../pages/WorldSeedPage";
import VisionPage from "../../pages/VisionPage";
import EssencePage from "../../pages/EssencePage";
import ExperiencePage from "../../pages/ExperiencePage";
import LivingWorldPage from "../../pages/LivingWorldPage";


export const portalRoutes = [

    {
        id: "arrival",
        path: "/",
        component: ArrivalPage,
    },

    {
        id: "invitation",
        path: "/invitation",
        component: InvitationPage,
    },

    {
        id: "possibility",
        path: "/possibility",
        component: PossibilityPage,
    },

    {
        id: "the-call",
        path: "/the-call",
        component: TheCallPage,
    },

    {
        id: "world-seed",
        path: "/world-seed",
        component: WorldSeedPage,
    },

    {
        id: "vision",
        path: "/vision",
        component: VisionPage,
    },

    {
        id: "essence",
        path: "/essence",
        component: EssencePage,
    },

    {
        id: "experience",
        path: "/experience",
        component: ExperiencePage,
    },

    {
        id: "living-world",
        path: "/world",
        component: LivingWorldPage,
    },

];