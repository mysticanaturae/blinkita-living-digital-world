/*
==========================================
BLINKITA OS™

MY LIVING WORLDS™

Modular Creator Dashboard component
==========================================
*/

export default function CreatorLivingWorlds({

    worlds,
    t

}) {

    return (

        <section className="living-card living-section">

            <h2>

                {
                    t(
                        "dashboard.myLivingWorlds"
                    )
                }

            </h2>


            <div className="living-grid">

                {

                    worlds.length > 0

                        ?

                    worlds.map(
                        (world) => (

                            <article

                                key={world.id}

                                className="living-card"

                            >

                                <h3>

                                    🌎{" "}
                                    {
                                        world.id
                                    }

                                </h3>


                                <p>

                                    {
                                        t(
                                            "dashboard.worldStatus"
                                        )
                                    }:

                                    {" "}

                                    {
                                        world.status
                                    }

                                </p>

                            </article>

                        )
                    )

                        :

                    <p>

                        {
                            t(
                                "dashboard.firstLivingWorldWaiting"
                            )
                        }

                    </p>

                }

            </div>

        </section>

    );

}
