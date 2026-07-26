/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD NURTURING SYSTEM™

The care layer
of a Living World™

Version 1.0
==========================================
*/


export default function WorldNurturing({

    world,

    onNurture,

    onExpandStory,

    onCreateExperience,

    onEvolve

}) {


    if (!world) {

        return null;

    }



    return (

        <section className="world-nurturing">


            <header>


                <h1>

                    Nurture Your World™

                </h1>


                <p>

                    Every Living World™
                    needs attention,
                    care and evolution.

                </p>


            </header>





            <section className="nurturing-actions">


                <button

                    onClick={onNurture}

                >

                    💚 Nurture World

                </button>




                <button

                    onClick={onExpandStory}

                >

                    📖 Expand Story

                </button>




                <button

                    onClick={onCreateExperience}

                >

                    ✨ Create Experience

                </button>




                <button

                    onClick={onEvolve}

                >

                    🌟 Evolve World

                </button>



            </section>



        </section>

    );

}