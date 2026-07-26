/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR DASHBOARD™

The evolution space
of a World Builder™

Connected with:
- Builder State™
- World State™
- Creator Evolution™

Version 2.0
==========================================
*/


import {

    getBuilderState

}

from "../../core/builder/BuilderState";





export default function CreatorDashboard(){



    const builder =

        getBuilderState();





    const creator =

        builder;



    const worlds =

        builder.worlds;







    return (


        <section className="creator-dashboard">





            <header>


                <h1>

                    Welcome,
                    World Builder™

                </h1>



                <p>

                    Your creative evolution space.

                </p>


            </header>







            <section className="creator-identity">


                <h2>

                    Creator Identity

                </h2>



                <p>

                    Archetype:

                    {" "}

                    {

                        creator.identity.archetype

                    }


                </p>


            </section>









            <section className="creator-evolution">


                <h2>

                    Evolution

                </h2>



                <p>

                    Level:

                    {" "}

                    {

                        creator.evolution.level

                    }


                </p>



                <p>

                    Experience:

                    {" "}

                    {

                        creator.evolution.experience

                    }

                    XP


                </p>



            </section>









            <section className="creator-worlds">


                <h2>

                    Your Living Worlds™

                </h2>





                {


                    worlds && worlds.length > 0



                    ?



                    worlds.map(


                        world => (


                            <article

                                key={world.id}

                            >


                                <h3>

                                    {world.id}

                                </h3>


                                <p>

                                    Status:

                                    {" "}

                                    {world.status}


                                </p>



                            </article>


                        )


                    )



                    :



                    <p>

                        Your first world
                        is waiting.

                    </p>


                }



            </section>






            <button>


                Continue Creating™

            </button>





        </section>


    );


}