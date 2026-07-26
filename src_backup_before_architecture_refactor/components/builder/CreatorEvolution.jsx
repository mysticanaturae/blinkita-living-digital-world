/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR EVOLUTION™

The evolution mirror
of a World Builder™

Version 1.0
==========================================
*/


export default function CreatorEvolution({

    builder

}) {


    return (

        <section className="creator-evolution">


            <h3>
                ✨ Creator Evolution
            </h3>



            <p>

                Level:

                {" "}

                {
                    builder?.evolution?.level
                    ||
                    1
                }

            </p>



            <p>

                Stage:

                {" "}

                {
                    builder?.evolution?.stage
                    ||
                    "awakening"
                }

            </p>



        </section>

    );

}
