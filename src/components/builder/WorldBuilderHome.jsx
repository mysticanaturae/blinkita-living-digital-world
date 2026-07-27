/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER HOME™


The central operating space
of a World Builder™

Connected with:
- Creator Identity™
- Living World™
- BLINKITA Ecosystem™
- Academy™
- Studio™
- Publishing™
- AI™

Version 2.0

==========================================
*/


import { useState } from "react";

import {
    getWorldState
}
from "../../core/state/WorldState";





export default function WorldBuilderHome(){



    const [activeSpace, setActiveSpace] = useState("home");



    const world =

        getWorldState()

        ||

        {};






    const spaces = [


        {
            id:"creator",
            title:"🌱 Creator Space™",
            description:
            "Your identity, evolution and creative journey."
        },


        {
            id:"world",
            title:"🌎 Living World™",
            description:
            "The worlds you create, nurture and evolve."
        },


        {
            id:"creation",
            title:"🌀 Creation Studio™",
            description:
            "Design new experiences and living systems."
        },


        {
            id:"timeline",
            title:"📖 World Timeline™",
            description:
            "The memory trail of your Living World™."
        },


        {
            id:"academy",
            title:"🎓 Academy™",
            description:
            "Learn the architecture of Living Digital Worlds™."
        },


        {
            id:"studio",
            title:"🎨 Studio™",
            description:
            "Create art, music, stories and experiences."
        },


        {
            id:"publishing",
            title:"📚 Publishing™",
            description:
            "Transform knowledge into living wisdom."
        },


        {
            id:"ai",
            title:"🤖 BLINKITA AI™",
            description:
            "Intelligence that supports creation."
        }



    ];








    const selected =

        spaces.find(

            space => space.id === activeSpace

        );









    return (



        <section className="living-page world-builder-home">






            <header className="living-header">


                <h1>

                    🌎 Welcome Back,
                    World Builder™

                </h1>



                <p>

                    Your Living Creation Space™

                </p>


            </header>









            <div className="world-builder-layout">







                <aside className="world-builder-menu">



                    <section className="living-card">


                        <h2>

                            BLINKITA ECOSYSTEM™

                        </h2>




                        {

                            spaces.map(

                                space => (


                                    <button

                                        key={space.id}

                                        className="living-button"

                                        onClick={

                                            () => setActiveSpace(space.id)

                                        }

                                    >

                                        {space.title}


                                    </button>


                                )

                            )


                        }



                    </section>




                </aside>









                <main className="world-builder-content">





                    {


                    activeSpace === "home"


                    ?


                    (


                        <section className="living-card">


                            <h2>

                                ✨ Your World Builder Home™

                            </h2>



                            <p>

                                Welcome to the operating center
                                of your Living World™.

                            </p>



                            <p>

                                Choose a space from the left
                                to begin your journey.

                            </p>



                        </section>


                    )



                    :



                    (



                        <section className="living-card">


                            <h2>

                                {selected.title}

                            </h2>



                            <p>

                                {selected.description}

                            </p>





                            <hr />





                            {

                                activeSpace === "creator" &&

                                <>

                                    <h3>

                                        Creator Identity™

                                    </h3>


                                    <p>

                                        Your evolution as a
                                        World Builder™ begins here.

                                    </p>

                                </>

                            }





                            {

                                activeSpace === "world" &&

                                <>

                                    <h3>

                                        Current Living World™

                                    </h3>


                                    <p>

                                        Status:

                                        {" "}

                                        {world.status || "Growing"}

                                    </p>


                                    <p>

                                        Portal:

                                        {" "}

                                        {world.currentPortal || "Arrival"}

                                    </p>


                                </>

                            }






                            {

                                activeSpace === "academy" &&

                                <>

                                    <h3>

                                        Academy™ Path

                                    </h3>


                                    <p>

                                        Foundations → Frameworks →
                                        Blueprints → Standards →
                                        Playbooks → Case Studies

                                    </p>

                                </>

                            }







                            {

                                activeSpace === "studio" &&

                                <>

                                    <h3>

                                        Creative Laboratory™

                                    </h3>


                                    <p>

                                        Where ideas become Living Experiences™.

                                    </p>


                                </>

                            }






                            {

                                activeSpace === "ai" &&

                                <>

                                    <h3>

                                        Living Intelligence™

                                    </h3>


                                    <p>

                                        AI as a creative companion
                                        inside your world.

                                    </p>


                                </>

                            }





                        </section>


                    )


                    }






                </main>






            </div>






        </section>



    );


}