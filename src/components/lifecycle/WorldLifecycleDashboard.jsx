/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD LIFECYCLE DASHBOARD™

The evolution path
of a Living World™

Version 1.0
==========================================
*/


import { WorldLifecycle } from "../../core/world/WorldLifecycle";


export default function WorldLifecycleDashboard({

    world

}) {


    if (!world) {

        return null;

    }



    const stages =

        Object.values(

            WorldLifecycle.stages

        );




    return (

        <section className="world-lifecycle-dashboard">


            <header>


                <h1>

                    World Evolution

                </h1>


                <p>

                    Every Living World™
                    has its own journey.

                </p>


            </header>





            <div className="lifecycle-path">


                {
                    stages.map(

                        stage => (


                            <div

                                key={
                                    stage.id
                                }

                                className={

                                    stage.id === world.status

                                    ?

                                    "active-stage"

                                    :

                                    "stage"

                                }

                            >


                                <h3>

                                    {
                                        stage.name
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




            <section className="world-current-state">


                <h2>

                    Current State

                </h2>


                <p>

                    {
                        world.status
                    }

                </p>


            </section>



        </section>

    );

}