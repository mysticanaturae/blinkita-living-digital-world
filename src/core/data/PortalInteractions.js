/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL INTERACTION™

The Living Choice Layer™

Version 1.1
==========================================
*/


import { portalInteractions } from "../../core/data/PortalInteractions";


export default function PortalInteraction({

    portalId,

    onActivate,

}) {


    const interaction =
        portalInteractions[portalId];


    if (!interaction) return null;



    return (

        <section className="portal-interaction">


            <button

                onClick={onActivate}

            >

                {interaction}


            </button>


        </section>

    );

}