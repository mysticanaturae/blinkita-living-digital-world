/*
==========================================

BLINKITA METHOD™

BLINKITA OS™

WORLD RESUME™

The return portal
for a Living World™

Version 2.1

Connected with:
- World State™
- World Memory™
- Living UI System™

==========================================
*/


import {

    getWorldState

}

from "../../core/state/WorldState";







export default function WorldResume(){



    const world =

        getWorldState();






    const lastMemory =


        world.memory?.events?.length > 0


        ?


        world.memory.events[

            world.memory.events.length - 1

        ]


        :


        null;







    return (



        <section className="living-page world-resume">






            <header className="living-header">



                <h1>

                    🌎 Welcome Back, World Builder™

                </h1>



                <p>

                    Your Living World™
                    was waiting for you.

                </p>



            </header>









            <div className="living-grid">







                <section className="living-card">


                    <h2>

                        🌱 Current World

                    </h2>



                    <p>

                        Status:

                        {" "}

                        {world.status}

                    </p>



                    <p>

                        Portal:

                        {" "}

                        {world.currentPortal}

                    </p>



                    <p>

                        Progress:

                        {" "}

                        {world.progress}%

                    </p>


                </section>









                <section className="living-card">


                    <h2>

                        🧭 Creator Journey

                    </h2>



                    <p>

                        Stage:

                        {" "}

                        {world.journey?.stage}

                    </p>



                    <p>

                        Milestones:

                        {" "}

                        {

                            world.journey?.milestones?.length || 0

                        }

                    </p>


                </section>









                <section className="living-card">


                    <h2>

                        🧠 World Intelligence™

                    </h2>



                    <p>

                        Awareness Level:

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









                <section className="living-card">


                    <h2>

                        ⚖️ Governance & Decisions™

                    </h2>



                    <p>

                        Decisions:

                        {" "}

                        {

                            world.governance?.decisions || 0

                        }

                    </p>



                    <p>

                        Choices:

                        {" "}

                        {

                            world.decision?.choices?.length || 0

                        }

                    </p>


                </section>









                <section className="living-card">


                    <h2>

                        🧠 Last Memory

                    </h2>





                    {


                        lastMemory


                        ?


                        <>


                            <p>

                                {

                                    lastMemory.message

                                }

                            </p>



                            <small>

                                {

                                    lastMemory.timestamp

                                }

                            </small>


                        </>



                        :



                        <p>

                            Your journey is just beginning.

                        </p>



                    }



                </section>






            </div>









            <button

                className="living-button"

            >

                ✨ Continue Creating™

            </button>






        </section>



    );

}