/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

CREATOR HOUSE™

The home of the World Builder™

Living Ecosystem Interface

Version 1.4

Connected with:
- Creator State™
- World State™
- Living UI System™
- BLINKITA Ecosystem™

==========================================
*/


import { useState } from "react";


import DashboardSidebar from "./DashboardSidebar";


import CreatorDashboard from "../creator/CreatorDashboard";

import WorldResume from "../resume/WorldResume";

import WorldTimeline from "../timeline/WorldTimeline";







export default function CreatorHouse(){



    const [activeSpace,setActiveSpace] = useState(

        "creator"

    );









    function renderContent(){



        switch(activeSpace){







            case "creator":



                return (

                    <CreatorDashboard />

                );









            case "resume":



                return (

                    <WorldResume />

                );









            case "timeline":



                return (

                    <WorldTimeline />

                );









            case "academy":



                return (


                    <section className="living-card">



                        <h2>

                            🎓 Academy™

                        </h2>




                        <p>

                            The World Builder™
                            learning path is awakening.

                        </p>



                    </section>


                );









            case "studio":



                return (


                    <section className="living-card">



                        <h2>

                            🎨 Studio™

                        </h2>




                        <p>

                            Your creative universe
                            is waiting to be created.

                        </p>



                    </section>


                );









            case "library":



                return (


                    <section className="living-card">



                        <h2>

                            📚 Library™

                        </h2>




                        <p>

                            A living archive of knowledge,
                            wisdom and free resources.

                        </p>



                    </section>


                );









            case "shop":



                return (


                    <section className="living-card">



                        <h2>

                            🛒 Shop™

                        </h2>




                        <p>

                            Premium journeys, books,
                            audio experiences and services.

                        </p>



                    </section>


                );









            case "ai":



                return (


                    <section className="living-card">



                        <h2>

                            🤖 BLINKITA AI™

                        </h2>




                        <p>

                            Intelligence layer
                            of the Living World™.

                        </p>



                    </section>


                );









            case "builder":



                return (


                    <section className="living-card">



                        <h2>

                            🌎 World Builder™

                        </h2>




                        <p>

                            The creation architecture
                            of Living Worlds™ is awakening.

                        </p>



                    </section>


                );









            default:



                return (


                    <section className="living-card">



                        <h2>

                            Coming Soon™

                        </h2>




                        <p>

                            This space is awakening.

                        </p>



                    </section>


                );


        }


    }









    return (




        <section className="creator-house">





            <DashboardSidebar



                activeSpace={activeSpace}



                setActiveSpace={setActiveSpace}



            />









            <main className="creator-house-content">



                {renderContent()}



            </main>





        </section>



    );


}
