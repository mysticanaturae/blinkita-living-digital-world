/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

WORLD TIMELINE™

The story of evolution

Connected with:
- World Timeline™
- World Memory™
- Living UI System™

Version 2.0

==========================================
*/


import { WorldTimeline }

from "../../core/timeline/WorldTimeline";





export default function WorldTimelineView(){



    const timeline =

        WorldTimeline.getTimeline();







    return (



        <section className="living-page world-timeline">






            <header className="living-header">



                <h1>

                    🌎 World Timeline™

                </h1>





                <p>

                    The journey of your
                    Living World™

                </p>



            </header>









            {

                timeline.length === 0 ?



                (


                    <section className="living-card">


                        <p>

                            Your world story
                            has not begun yet.

                        </p>


                    </section>



                )



                :




                <div className="living-grid">



                    {


                        timeline.map(


                            event => (



                                <article


                                    key={
                                        event.id
                                    }



                                    className="living-card timeline-event"



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



                </div>



            }






        </section>


    );


}