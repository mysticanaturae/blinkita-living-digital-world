/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

LIVING WORLDS DASHBOARD™

The space where
Living Worlds™ evolve

Version 1.0
==========================================
*/


export default function LivingWorldsDashboard({

    worldState,

    onContinueWorld,

    onCreateWorld

}) {


    if (!worldState) {

        return null;

    }



    return (

        <section className="living-worlds-dashboard">


            <header>


                <h1>

                    My Living Worlds™

                </h1>


                <p>

                    Worlds you created,
                    nurtured and evolved.

                </p>


            </header>




            <section className="world-card">


                <h2>

                    🌍 Current Living World™

                </h2>



                <div>


                    <strong>

                        Status

                    </strong>


                    <p>

                        {worldState.status}

                    </p>


                </div>




                <div>


                    <strong>

                        Lifecycle

                    </strong>


                    <p>

                        {
                            worldState.status
                        }

                    </p>


                </div>





                <div>


                    <strong>

                        Current Portal

                    </strong>


                    <p>

                        {
                            worldState.currentPortal
                        }

                    </p>


                </div>





                <div>


                    <strong>

                        Progress

                    </strong>


                    <p>

                        {
                            worldState.progress
                        }
                        %

                    </p>


                </div>




                <button

                    onClick={
                        onContinueWorld
                    }

                >

                    Continue Journey

                </button>



            </section>





            <section className="new-world">


                <h2>

                    Create Another World™

                </h2>


                <p>

                    Every World Builder™
                    can create infinite worlds.

                </p>



                <button

                    onClick={
                        onCreateWorld
                    }

                >

                    Begin New World

                </button>


            </section>


        </section>

    );

}