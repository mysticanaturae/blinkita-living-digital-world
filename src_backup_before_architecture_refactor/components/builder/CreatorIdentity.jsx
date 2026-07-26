/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR IDENTITY™

The identity layer
of a World Builder™

Version 1.0
==========================================
*/


export default function CreatorIdentity({

    builder

}) {


    return (

        <section className="creator-identity">


            <h2>
                🌎 World Builder™
            </h2>



            <p>

                Creator:

                {" "}

                {
                    builder?.identity?.name
                    ||
                    "Awakening Creator"
                }

            </p>



            <p>

                Archetype:

                {" "}

                {
                    builder?.identity?.archetype
                    ||
                    "Explorer"
                }

            </p>


        </section>

    );

}