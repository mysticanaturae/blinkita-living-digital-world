/*
==========================================

BLINKITA METHOD™

LIVING DIGITAL WORLD™

PORTAL TEMPLATE™

Living portal experience container

Connected with:
- Experience Engine™
- Journey System™
- Gateway System™
- Identity Layer™

Version 2.4

==========================================
*/


import { useState } from "react";


import PortalIdentity from "../experience/PortalIdentity";

import ExperienceEngine from "../experience/ExperienceEngine";

import PortalGateway from "../navigation/PortalGateway";

import JourneyProgress from "../journey/JourneyProgress";






export default function PortalTemplate({


    portal,


}) {



    const [gatewayAction, setGatewayAction] = useState(
    null
);









    function handlePortalActivate(){


        console.log(
            "🌱 Portal interaction clicked:",
            portal.id
        );



        if(typeof gatewayAction === "function"){


            console.log(
                "✨ Executing gateway transition"
            );


            gatewayAction();


        }
        else{


            console.log(
                "⏳ Gateway not ready"
            );


        }


    }









    return (



        <section className="living-page portal-template">










            <header className="living-header">



                <PortalIdentity


                    identity={

                        portal.experience.identity

                    }


                />



            </header>









            <div className="portal-grid">







                <section className="living-card portal-main-card">



                    <ExperienceEngine



                        experience={

                            portal.experience

                        }



                        onActivate={

                            handlePortalActivate

                        }



                    />


                </section>









                <section className="living-card portal-progress-card">



                    <JourneyProgress />



                </section>





            </div>











            <PortalGateway



                currentPortalId={

                    portal.id

                }



                exposeAction={

                    setGatewayAction

                }



            />









        </section>



    );


}