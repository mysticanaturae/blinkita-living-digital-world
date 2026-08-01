/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

DASHBOARD SIDEBAR™

Living Ecosystem Navigation

Version 1.4

==========================================
*/

import LanguageSwitcher
from "../i18n/LanguageSwitcher";


export default function DashboardSidebar({

    activeSpace,

    setActiveSpace

}) {


    const items = [


        {
            id: "creator",
            label: "CREATOR SPACE™"
        },


        {
            id: "resume",
            label: "WORLD RESUME™"
        },


        {
            id: "timeline",
            label: "TIMELINE™"
        },


        {
            id: "builder",
            label: "WORLD BUILDER™"
        },


        {
            id: "academy",
            label: "ACADEMY™"
        },


        {
            id: "studio",
            label: "STUDIO™"
        },


        {
            id: "library",
            label: "LIBRARY™"
        },


        {
            id: "shop",
            label: "SHOP™"
        },


        {
            id: "ai",
            label: "BLINKITA AI™"
        }


    ];


    return (


        <aside className="dashboard-sidebar">


            <h2>

                🌱 BLINKITA OS™

            </h2>


            <div className="dashboard-language-switcher">

                <LanguageSwitcher />

            </div>


            {

                items.map(item => (


                    <button

                        key={item.id}

                        className={

                            activeSpace === item.id

                            ?

                            "active"

                            :

                            ""

                        }

                        onClick={() =>
                            setActiveSpace(item.id)
                        }

                    >

                        {item.label}

                    </button>


                ))

            }


        </aside>

    );

}
