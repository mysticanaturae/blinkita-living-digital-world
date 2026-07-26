/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD PORTAL™

The gateway into
a Living World™

Version 1.0
==========================================
*/


export default function WorldPortal({

    world,

    resume,

    onContinue,

    onNurture

}) {


    if (!world) {

        return null;

    }



    return (

        <section className="world-portal">



            <header>


                <h1>

                    🌍 {world.name}

                </h1>



                <p>

                    Welcome back
                    World Builder™

                </p>


            </header>





            <section className="world-status">


                <h2>

                    World Status

                </h2>


                <p>

                    Stage:

                    {" "}

                    {world.status}

                </p>



                <p>

                    Progress:

                    {" "}

                    {world.progress}%

                </p>


            </section>





            <section className="world-memory">


                <h2>

                    Last Memory

                </h2>



                {

                    resume?.lastEvent


                    ?

                    <p>

                        {
                            resume.lastEvent.description
                        }

                    </p>


                    :


                    <p>

                        Your journey begins.

                    </p>

                }


            </section>






            <section className="world-actions">



                <button

                    onClick={onContinue}

                >

                    Continue Journey™

                </button>




                <button

                    onClick={onNurture}

                >

                    💚 Nurture World™

                </button>



            </section>



        </section>

    );

}