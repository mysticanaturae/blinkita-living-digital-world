import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LivingWorldEntry.css";


export default function LivingWorldEntry() {


    const navigate = useNavigate();


    const scenes = [

        {
            title: "Living World™",
            message: "The memory returns to you."
        },

        {
            title: "The doors are opening.",
            message: "A new world is waiting."
        },

        {
            title: "Welcome to Living World™",
            message: "A journey through 9 Living Portals."
        }

    ];


    const [scene, setScene] = useState(0);



    useEffect(()=>{


        const timer = setTimeout(()=>{


            if(scene < scenes.length - 1){

                setScene(scene + 1);

            }
            else {

                navigate("/arrival");

            }


        },4000);



        return ()=>clearTimeout(timer);


    },[scene,navigate]);




    return (

        <div className="living-world-entry">


            <div className="entry-inner">


                <h1>
                    {scenes[scene].title}
                </h1>


                <p className="entry-message">

                    {scenes[scene].message}

                </p>


                <div className="portal-opening">

                    <span>
                        ◌
                    </span>

                </div>


            </div>


        </div>

    );


}
