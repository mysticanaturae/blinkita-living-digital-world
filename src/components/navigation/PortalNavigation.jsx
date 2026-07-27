/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

PORTAL NAVIGATION™

Living World navigation layer

Connected with:
- Portal Routes™
- Living UI System™

Version 1.1

==========================================
*/


import { Link } from "react-router-dom";

import { portals } from "../../core/data/portals";





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


                        {portal.title}


                    </Link>


                ))


            }



        </nav>


    );


}