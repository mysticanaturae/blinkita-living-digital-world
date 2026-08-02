import React from "react";


export default function CreatorJourneyCard({

    creator,

    evolution,

    creatorStage,

    worldState,

}) {


    const creatorSymbol =
        creator?.identity?.avatar ||
        "🌱";


console.log(
    "CREATOR JOURNEY FULL:",
    JSON.stringify(
        creator,
        null,
        2
    )
);

    return (

        <section className="living-card living-section creator-journey-premium">


            <div className="creator-journey-header">


    <div className="creator-symbol-circle">

        {creatorSymbol}

    </div>


    <span className="creator-identity-eyebrow">

        CREATOR JOURNEY™

    </span>


                <h2>

                    Your Living Creation Path

                </h2>


                <p>

                    Your journey as a Creator becoming a World Builder™.

                    Every creation leaves a memory.

                </p>


            </div>



            <div className="living-grid">


                <article className="living-card">


                    <h3>

                        🌱 Current Evolution

                    </h3>


                    <p>

                        {

                            creatorStage ||

                            "Beginning"

                        }

                    </p>


                    <p>

                        Level:

                        {" "}

                        {

                            evolution?.level || 1

                        }

                    </p>


                </article>



                <article className="living-card">


                    <h3>

                        🌀 Journey Memory

                    </h3>


                    <div className="creator-journey-timeline">


                        <p>

                            ✨ Creator Identity Activated

                        </p>


                        <p>

                            🌙 Living Time Discovered

                        </p>


                        <p>

                            🌎 First Living World Connection

                        </p>


                        <p>

                            🌱 Creation Stage Reached

                        </p>


                    </div>


                </article>



                <article className="living-card">


                    <h3>

                        🌎 Current Position

                    </h3>


                    <p>

                        Seed → Awakening → Creation → Expansion → Legacy

                    </p>


                    <p>

                        Portal:

                        {" "}

                        {

                            worldState?.currentPortal ||

                            "arrival"

                        }

                    </p>


                </article>


            </div>


        </section>

    );

}