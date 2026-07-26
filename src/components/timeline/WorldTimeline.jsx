/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

WORLD TIMELINE™

The story of evolution

Version 1.0
==========================================
*/


import { WorldTimeline }
from "../../core/timeline/WorldTimeline";


export default function WorldTimelineView() {


    const timeline =

        WorldTimeline.getTimeline();



    return (

        <section className="world-timeline">


            <header>

                <h1>

                    World Timeline™

                </h1>


                <p>

                    The journey of your
                    Living World™

                </p>

            </header>



            {

                timeline.length === 0 ?


                (

                    <p>

                        Your world story
                        has not begun yet.

                    </p>

                )


                :


                timeline.map(

                    event => (


                        <article

                            key={
                                event.id
                            }

                            className="timeline-event"

                        >


                            <h3>

                                {
                                    event.title
                                }

                            </h3>


                            <p>

                                {
                                    event.description
                                }

                            </p>


                            <small>

                                {
                                    new Date(
                                        event.timestamp
                                    )
                                    .toLocaleString()

                                }

                            </small>


                        </article>


                    )

                )


            }


        </section>

    );

}