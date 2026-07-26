/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

BUILDER WORLDS™

World portfolio layer

Version 1.0
==========================================
*/


export default function BuilderWorlds({

    worlds = []

}) {


    return (

        <section className="builder-worlds">


            <h3>
                🌱 Living Worlds
            </h3>



            {

                worlds.length === 0

                ?

                <p>
                    No worlds created yet.
                    The first seed is waiting.
                </p>


                :


                worlds.map((world)=>


                    <div key={world.id}>


                        {world.name}


                    </div>


                )


            }


        </section>

    );

}