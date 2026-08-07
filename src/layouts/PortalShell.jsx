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

Version 3.3

==========================================
*/

import IdentityWidget
from "../components/auth/IdentityWidget";


export default function PortalShell({

    children,

}) {


return (

    <section className="living-page portal-layout">


        <IdentityWidget />


        <main className="portal-content">

            {children}

        </main>


    </section>

);


}