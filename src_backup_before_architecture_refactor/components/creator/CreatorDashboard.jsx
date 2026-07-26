/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR DASHBOARD™

The evolution space
of a World Builder™

Connected with:
- Creator State™
- World State™
- Evolution System™

Version 2.1
==========================================
*/


import {

    getCreatorState

}

from "../../core/creator/CreatorState";





export default function CreatorDashboard(){



    const creatorState =

        getCreatorState()

        ||

        {};





    const creator =

        creatorState.creator

        ||

        {

            identity: {

                name: "Anonymous Creator",

                archetype: "Explorer"

            },


            evolution: {

                level: 1,

                experience: 0,

                stage: "Beginning"

            }

        };





    const worlds =

        creatorState.worlds

        ||

        [];





    const evolution =

        creatorState.evolution

        ||

        creator.evolution;







    return (


        <section className="creator-dashboard">



            <header>


                <h1>

                    Welcome Creator™

                </h1>


                <p>

                    Your evolution space inside
                    the Living World™

                </p>


            </header>






            <section className="creator-identity">


                <h2>

                    Creator Identity

                </h2>



                <p>

                    Name:

                    {" "}

                    {creator.identity?.name}


                </p>



                <p>

                    Archetype:

                    {" "}

                    {creator.identity?.archetype}


                </p>


            </section>







            <section className="creator-evolution">


                <h2>

                    Evolution

                </h2>



                <p>

                    Level:

                    {" "}

                    {evolution?.level || 1}

                </p>



                <p>

                    Experience:

                    {" "}

                    {evolution?.experience || 0}

                    {" "}

                    XP

                </p>



                <p>

                    Stage:

                    {" "}

                    {evolution?.stage || "Beginning"}

                </p>


            </section>







            <section className="creator-worlds">


                <h2>

                    My Living Worlds™

                </h2>



                {

                    worlds.length > 0

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

                        Your first Living World™
                        is waiting.

                    </p>


                }


            </section>







            <section className="creator-achievements">


                <h2>

                    Achievements

                </h2>



                <p>

                    Your evolution milestones
                    will appear here.

                </p>


            </section>






        </section>


    );


}