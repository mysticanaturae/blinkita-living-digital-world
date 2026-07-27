/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

PORTAL SHELL™

Universal container
for Living Portals™

Connected with:
- Portal Navigation™
- Identity Layer™
- Living UI System™
- Portal Experience Engine™

Version 3.2

==========================================
*/


import PortalNavigation 
from "../components/navigation/PortalNavigation";


import IdentityWidget
from "../components/auth/IdentityWidget";





export default function PortalShell({


    title,

    subtitle,

    children,


}) {



    return (



        <section className="living-page portal-layout">







            <PortalNavigation />









            <section className="living-card identity-card">



                <IdentityWidget />



            </section>









            <header className="living-header portal-header">



                <h1>

                    {title}

                </h1>






                {

                    subtitle && (


                        <p>

                            {subtitle}

                        </p>


                    )

                }



            </header>









            <main className="portal-content">


                {children}


            </main>








        </section>


    );


}