import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./BlinkitaEcosystemMandala.css";


export default function BlinkitaEcosystemMandala() {


    const navigate = useNavigate();


    const [selectedWorld, setSelectedWorld] = useState(null);

    const [ecosystemOpened, setEcosystemOpened] = useState(false);



    const worlds = [

        {
            id:"method",
            name:"BLINKITA METHOD™",
            icon:"blinkita-method.png"
        },

        {
            id:"os",
            name:"BLINKITA OS™",
            icon:"blinkita-os.png"
        },

        {
            id:"world-builder",
            name:"WORLD BUILDER™",
            icon:"blinkita-worldbuilder.png"
        },

        {
            id:"academy",
            name:"BLINKITA ACADEMY™",
            icon:"blinkita-academy.png"
        },

        {
            id:"ai",
            name:"BLINKITA AI™",
            icon:"blinkita-ai.png"
        },

        {
            id:"studio",
            name:"BLINKITA STUDIO™",
            icon:"blinkita-studio.png"
        },

        {
            id:"living-worlds",
            name:"LIVING WORLDS™",
            icon:"blinkita-livingworlds.png"
        },

        {
            id:"living-memory",
            name:"LIVING MEMORY™",
            icon:"blinkita_living_memory_remember_integrate.png"
        },

        {
            id:"market",
            name:"MARKET™",
            icon:"blinkita_market_exchange_grow.png"
        },

        {
            id:"timeline",
            name:"TIMELINE™",
            icon:"blinkita_timeline_journey_in_time.png"
        },

        {
            id:"library",
            name:"LIBRARY™",
            icon:"blinkita_library.png"
        },

        {
            id:"community",
            name:"COMMUNITY™",
            icon:"blinkita_community_connect_belong.png"
        }

    ];



    const ecosystem = {

        id:"ecosystem",

        name:"BLINKITA ECOSYSTEM™",

    };




    function handleWorldClick(world){


        if(selectedWorld?.id === world.id){


            navigate(`/world/${world.id}`);


        }
        else {


            setSelectedWorld(world);


        }

    }




    function handleEcosystemClick(){


        if(ecosystemOpened){


            navigate("/world/ecosystem");


        }
        else {


            setEcosystemOpened(true);


        }

    }




    return (


        <div className="ecosystem-mandala">



            <div className="ecosystem-orbit">



                {worlds.map((world,index)=>(


                    <div


                        key={world.id}


                        className={
                            `ecosystem-world
                            ${selectedWorld?.id === world.id ? "selected" : ""}`
                        }


                        style={{

                            "--x":
                            `${Math.sin(index * Math.PI / 6) * 380}px`,

                            "--y":
                            `${Math.cos(index * Math.PI / 6) * -380}px`

                        }}



                        onClick={() => handleWorldClick(world)}


                    >



                        <img


                            src={
                                `/portal/icons/master_brand_icons/${world.icon}`
                            }


                            alt={world.name}


                        />



                    </div>


                ))}



            </div>






            <div


                className={
                    `ecosystem-core
                    ${ecosystemOpened ? "opened" : ""}`
                }



                onClick={handleEcosystemClick}


            >



                <img


                    src={

                        ecosystemOpened

                        ?

                        "/portal/icons/master_brand_icons/blinkita_ecosystem_explore.png"

                        :

                        "/portal/icons/master_brand_icons/blinkita-ecosystem-clean.png"

                    }


                    alt={ecosystem.name}


                />



            </div>




        </div>


    );


}