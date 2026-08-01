import { Link } from "react-router-dom";

import { portals } from "../../core/data/portals";

import {
    t
}
from "../../core/i18n/LanguageSystem";

export default function PortalNavigation() {



    const sortedPortals = [...portals].sort(

        (a,b) => a.order - b.order

    );





    return (



        <nav className="portal-navigation">



            {

                sortedPortals.map((portal)=>(


                    <Link


                        key={portal.id}


                        to={portal.path}


                    >


                        {t("portal.pages." + portal.id + ".title") || portal.title}


                    </Link>


                ))

            }
</nav>


    );
}







