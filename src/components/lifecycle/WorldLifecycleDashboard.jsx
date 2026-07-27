/*
==========================================

BLINKITA METHOD™

BLINKITA OS™

WORLD LIFECYCLE DASHBOARD™

The evolution path
of a Living World™

Version 2.1

Connected with:
- World State™
- World Lifecycle™
- Living UI System™

==========================================
*/


import {

    WorldLifecycle

}

from "../../core/world/WorldLifecycle";



import {

    getWorldState

}

from "../../core/state/WorldState";









export default function WorldLifecycleDashboard(){



    const world =

        getWorldState();





    const stages =

        Object.values(

            WorldLifecycle.stages

        );







    return (



        <section className="living-page world-lifecycle-dashboard">







            <header className="living-header">



                <h1>

                    🌱 World Evolution

                </h1>



                <p>

                    Every Living World™
                    has its own evolutionary journey.

                </p>



            </header>









            <div className="living-grid lifecycle-path">





                {

                    stages.map(


                        stage => (




                            <div



                                key={stage.id}




                                className={



                                    `living-card stage ${



                                        stage.id === world.status



                                        ?



                                        "active-stage"



                                        :



                                        ""



                                    }`



                                }



                            >






                                <h3>


                                    {

                                        stage.title

                                    }


                                </h3>






                                <p>


                                    {

                                        stage.description

                                    }


                                </p>






                            </div>




                        )



                    )



                }



            </div>













            <section className="living-card world-current-state living-section">






                <h2>

                    Current State

                </h2>






                <p>

                    Status:

                    {" "}

                    {

                        world.status

                    }


                </p>







                <p>

                    Evolution Level:

                    {" "}

                    {

                        world.evolution?.level || 1

                    }


                </p>







                <p>

                    Milestones:

                    {" "}

                    {

                        world.evolution?.milestones?.length || 0

                    }


                </p>






            </section>







        </section>



    );



}