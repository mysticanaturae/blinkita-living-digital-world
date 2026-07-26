/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD DASHBOARD™

My Living Worlds™

Version 1.0
==========================================
*/


export default function WorldDashboard({

    worlds,

    onOpenWorld,

    onCreateWorld

}) {


    return (

        <section className="world-dashboard">


            <header>


                <h1>

                    My Living Worlds™

                </h1>


                <p>

                    Every world you create
                    continues to evolve.

                </p>


            </header>





            <button

                onClick={onCreateWorld}

            >

                ✨ Create New World™

            </button>





            <section className="world-list">


                {

                    worlds && worlds.length > 0


                    ?


                    worlds.map(

                        world => (


                            <article

                                key={
                                    world.id
                                }

                                className="world-card"

                            >


                                <h2>

                                    🌍

                                    {

                                        world.name

                                        ||

                                        "Unnamed World"

                                    }

                                </h2>



                                <p>

                                    Status:

                                    {" "}

                                    {

                                        world.status

                                    }

                                </p>




                                <p>

                                    Progress:

                                    {" "}

                                    {

                                        world.progress

                                    }

                                    %

                                </p>





                                <button

                                    onClick={() =>
                                        onOpenWorld(
                                            world.id
                                        )
                                    }

                                >

                                    Enter World™

                                </button>



                            </article>


                        )

                    )


                    :


                    <p>

                        Your first Living World™
                        is waiting.

                    </p>


                }


            </section>



        </section>

    );

}