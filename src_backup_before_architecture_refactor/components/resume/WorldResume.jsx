/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD RESUME™

The return portal
for a Living World™

Version 1.0
==========================================
*/


export default function WorldResume({

    world,

    timeline,

    onContinue

}) {


    if (!world) {

        return null;

    }



    const lastEvent =

        timeline && timeline.length > 0

        ?

        timeline[
            timeline.length - 1
        ]

        :

        null;



    return (

        <section className="world-resume">


            <header>


                <h1>

                    Welcome Back, World Builder™

                </h1>


                <p>

                    Your Living World™
                    was waiting for you.

                </p>


            </header>





            <section>


                <h2>

                    Current World

                </h2>


                <p>

                    Status:

                    {" "}

                    {world.status}

                </p>



                <p>

                    Progress:

                    {" "}

                    {world.progress}%

                </p>


            </section>






            <section>


                <h2>

                    Last Memory

                </h2>



                {

                    lastEvent


                    ?


                    <>

                        <h3>

                            {
                                lastEvent.title
                            }

                        </h3>


                        <p>

                            {
                                lastEvent.description
                            }

                        </p>

                    </>


                    :


                    <p>

                        Your journey is just beginning.

                    </p>


                }


            </section>





            <button

                onClick={onContinue}

            >

                Continue Creating™

            </button>



        </section>

    );

}