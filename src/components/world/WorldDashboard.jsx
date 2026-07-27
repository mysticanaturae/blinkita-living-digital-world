/*
==========================================
BLINKITA METHOD™

BLINKITA OS™

WORLD DASHBOARD™

Living World Control Center™

Version 2.0
==========================================
*/


import {

    getWorldState

}

from "../../core/state/WorldState";





export default function WorldDashboard(){



    const world =

        getWorldState();






    return (


        <section className="world-dashboard">



            <header>


                <h1>

                    🌎 My Living World™

                </h1>



                <p>

                    Every Living World™ remembers,
                    evolves and responds.

                </p>


            </header>






            <section className="world-card">



                <h2>

                    🌱 Current World

                </h2>



                <p>

                    Status:

                    {" "}

                    {world.status}

                </p>





                <p>

                    Current Portal:

                    {" "}

                    {world.currentPortal}

                </p>






                <p>

                    Progress:

                    {" "}

                    {world.progress}

                    %

                </p>





            </section>









            <section className="world-card">


                <h2>

                    🧠 Intelligence

                </h2>



                <p>

                    Level:

                    {" "}

                    {

                    world.intelligence?.level || 0

                    }


                </p>



                <p>

                    Insights:

                    {" "}

                    {

                    world.intelligence?.insights?.length || 0

                    }


                </p>



            </section>









            <section className="world-card">


                <h2>

                    🧭 Journey

                </h2>



                <p>

                    Stage:

                    {" "}

                    {

                    world.journey?.stage

                    }

                </p>



                <p>

                    Milestones:

                    {" "}

                    {

                    world.journey?.milestones?.length || 0

                    }

                </p>


            </section>









            <section className="world-card">


                <h2>

                    ⚖️ Governance

                </h2>



                <p>

                    Decisions:

                    {" "}

                    {

                    world.governance?.decisions || 0

                    }

                </p>


            </section>









            <section className="world-card">


                <h2>

                    🌱 Memory

                </h2>



                <p>

                    Memories:

                    {" "}

                    {

                    world.memory?.events?.length || 0

                    }

                </p>


            </section>





        </section>


    );


}