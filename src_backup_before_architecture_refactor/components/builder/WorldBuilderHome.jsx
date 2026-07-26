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

Version 2.0
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

            <section className="world-builder-home">

                <p>
                    🌱 Initializing World Builder™...
                </p>

            </section>

        );

    }







    return (



        <section className="world-builder-home">






            <CreatorIdentity

                builder={builder}

            />







            <CreatorEvolution

                builder={builder}

            />








            <BuilderWorlds

                worlds={builder.worlds || []}

            />









            <NextPossibility

                builder={builder}

            />







        </section>



    );


}