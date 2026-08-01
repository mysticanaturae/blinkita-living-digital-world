/*
==========================================

BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL ROUTES™

The living journey map

Version 2.3

==========================================
*/


import ArrivalPage from "../../pages/ArrivalPage";
import InvitationPage from "../../pages/InvitationPage";
import PossibilityPage from "../../pages/PossibilityPage";
import TheCallPage from "../../pages/TheCallPage";
import WorldSeedPage from "../../pages/WorldSeedPage";
import VisionPage from "../../pages/VisionPage";
import EssencePage from "../../pages/EssencePage";
import ExperiencePage from "../../pages/ExperiencePage";
import LivingWorldPage from "../../pages/LivingWorldPage";




export const PortalRoutes = [


    {
        id: "arrival",

        path: "/arrival",

        component: ArrivalPage,

        order: 1,

        next: "invitation"

    },


    {
        id: "invitation",

        path: "/invitation",

        component: InvitationPage,

        order: 2,

        next: "possibility"

    },


    {
        id: "possibility",

        path: "/possibility",

        component: PossibilityPage,

        order: 3,

        next: "the-call"

    },


    {
        id: "the-call",

        path: "/the-call",

        component: TheCallPage,

        order: 4,

        next: "world-seed"

    },


    {
        id: "world-seed",

        path: "/world-seed",

        component: WorldSeedPage,

        order: 5,

        next: "vision"

    },


    {
        id: "vision",

        path: "/vision",

        component: VisionPage,

        order: 6,

        next: "essence"

    },


    {
        id: "essence",

        path: "/essence",

        component: EssencePage,

        order: 7,

        next: "experience"

    },


    {
        id: "experience",

        path: "/experience",

        component: ExperiencePage,

        order: 8,

        next: "living-world"

    },


    {
        id: "living-world",

        path: "/world",

        component: LivingWorldPage,

        order: 9,

        next: null

    }


];


