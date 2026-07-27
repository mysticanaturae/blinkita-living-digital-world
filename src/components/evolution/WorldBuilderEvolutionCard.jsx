/*
==========================================

BLINKITA OS™

WORLD BUILDER EVOLUTION CARD™

The visible evolution space
of a World Builder™

Connected with:
- WorldBuilderState™
- WorldBuilderEvolution™
- WorldBuilderStages™

Version 1.1

==========================================
*/


import {

    useState

}

from "react";




import {

    getWorldBuilderState

}

from "../../core/worldbuilder/WorldBuilderState";




import {

    getCurrentStage

}

from "../../core/worldbuilder/WorldBuilderEvolution";




import {

    addExperience,

    addMilestone

}

from "../../core/worldbuilder/WorldBuilderActions";









export default function WorldBuilderEvolutionCard(){



    const [refresh,setRefresh] = useState(0);





    function handleCreationStep(){



        addExperience(100);



        addMilestone(

            "First World Builder Step"

        );




        setRefresh(

            refresh + 1

        );



    }






    const worldBuilderState =

        getWorldBuilderState();





    const evolution =

        worldBuilderState.evolution

        ||

        {};





    const stage =

        getCurrentStage();





    const milestones =

        evolution.milestones

        ||

        [];







    return (



        <section className="living-card">





            <h2>

                🌎 World Builder Evolution™

            </h2>







            <p>

                Current Stage:

            </p>







            <h3>

                ✨

                {" "}

                {stage?.name || "Dreamer™"}

            </h3>







            <p>

                Level:

                {" "}

                {stage?.level || 1}

            </p>







            <p>

                Experience:

                {" "}

                {evolution.experience || 0}

                {" "}

                XP

            </p>








            <button

                className="living-button"

                onClick={handleCreationStep}

            >

                🌱 Complete Creation Step

            </button>







            <p>

                Milestones:

                {" "}

                {milestones.length}

            </p>







            <p>

                {stage?.essence ||

                    "Your world is awakening."

                }

            </p>





        </section>


    );


}