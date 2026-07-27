/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER HOME™

The home of a World Builder™

Connected with:
- Builder State™
- World State™
- Creator Evolution™

Connected with:
- Living UI System™

Version 3.0

==========================================
*/


import {

    getBuilderState

}

from "../../core/builder/BuilderState";



import CreatorIdentity

from "./CreatorIdentity";



import CreatorEvolution

from "./CreatorEvolution";



import BuilderWorlds

from "./BuilderWorlds";



import NextPossibility

from "./NextPossibility";









export default function WorldBuilderHome(){





    const builder =

        getBuilderState();








    if(!builder){



        return (



            <section className="living-page world-builder-home">



                <section className="living-card">


                    <p>

                        🌱 Initializing World Builder™

                    </p>


                </section>



            </section>



        );


    }










    return (





        <section className="living-page world-builder-home">





            <header className="living-header">



                <h1>

                    🌎 World Builder™

                </h1>



                <p>

                    The home of conscious creation
                    inside the Living World™

                </p>



            </header>









            <div className="living-grid">



                <section className="living-card">


                    <CreatorIdentity

                        builder={builder}

                    />


                </section>







                <section className="living-card">


                    <CreatorEvolution

                        builder={builder}

                    />


                </section>





            </div>









            <section className="living-card">


                <BuilderWorlds

                    worlds={builder.worlds || []}

                />


            </section>









            <section className="living-card">


                <NextPossibility

                    builder={builder}

                />


            </section>








        </section>





    );


}