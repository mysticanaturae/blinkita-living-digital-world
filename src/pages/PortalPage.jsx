import { useEffect, useRef } from "react";

import PortalShell from "../layouts/PortalShell";
import { t } from "../core/i18n/LanguageSystem";

import { getPortal } from "../core/registry/PortalRegistry";
import { validatePortal } from "../core/utils/validatePortal";

import { BlinkitaEngine } from "../core/engine/BlinkitaEngine";

import LivingPortalExperience from "../components/portal/LivingPortalExperience";



export default function PortalPage({ portalId }) {


    const portalExecuted = useRef(false);


    const portal = getPortal(portalId);



    if (!portal) {

        return <h1>Portal not found</h1>;

    }




    const validation = validatePortal(portal);



    console.log(

        `${portalId} validation:`,

        validation

    );





    useEffect(()=>{


        if(portalExecuted.current){

            return;

        }



        portalExecuted.current = true;




        console.log(

            "Ă„â€ÄąĹźÄąĹˇÄąËť Entering Living PortalÄ‚ËĂ˘â‚¬ĹľĂ‹Â",

            portalId

        );





        const state =

            BlinkitaEngine.enterPortal(

                portalId

            );





        console.log(

            "Ă„â€ÄąĹźÄąĹˇĂ‚Â± Living World Response",

            state

        );



    },[portalId]);






    return (



        <PortalShell


            title={t(`portal.experiences.${portal.id}.title`) || portal.title}


            subtitle={t(`portal.experiences.${portal.id}.subtitle`) || portal.subtitle}


        >



            <LivingPortalExperience

                portal={portal}

            />



        </PortalShell>



    );


}
