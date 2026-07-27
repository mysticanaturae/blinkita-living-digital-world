/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

CREATOR DASHBOARD™

The evolution space
of a World Builder™

Connected with:
- Creator State™
- World State™
- Evolution System™

Version 3.0

Connected with:
- Living UI System™

==========================================
*/


import {

    getCreatorState

}

from "../../core/creator/CreatorState";



import {

    getWorldState

}

from "../../core/state/WorldState";







export default function CreatorDashboard(){



    const creatorState =

        getCreatorState()

        ||

        {};




    const worldState =

        getWorldState()

        ||

        {};





    const creator =

        creatorState.creator

        ||

        {

            identity: {

                name: "Anonymous Creator",

                archetype: "Explorer"

            },


            evolution: {

                level:1,

                experience:0,

                stage:"Beginning"

            }

        };





    const worlds =

        creatorState.worlds

        ||

        [];





    const evolution =

        creatorState.evolution

        ||

        creator.evolution;





    const worldEvolution =

        worldState.evolution

        ||

        {};




    const worldGovernance =

        worldState.governance

        ||

        {};




    const worldDecision =

        worldState.decision

        ||

        {};




    const worldAction =

        worldState.action

        ||

        {};








return (



<section className="living-page creator-dashboard">






<header className="living-header">


<h1>

🌱 Welcome Creator™

</h1>



<p>

Your evolution space inside
the Living World™

</p>


</header>









<div className="living-grid">







<section className="living-card">


<h2>

Creator Identity

</h2>



<p>

Name:

{" "}

{creator.identity?.name}

</p>




<p>

Archetype:

{" "}

{creator.identity?.archetype}

</p>



</section>









<section className="living-card">


<h2>

Evolution

</h2>



<p>

Level:

{" "}

{evolution?.level || 1}

</p>



<p>

Experience:

{" "}

{evolution?.experience || 0}

XP

</p>



<p>

Stage:

{" "}

{evolution?.stage || "Beginning"}

</p>


</section>







<section className="living-card">


<h2>

Living World™ Status

</h2>



<p>

Current Portal:

{" "}

{worldState.currentPortal}

</p>




<p>

Evolution:

{" "}

{worldEvolution.stage}

</p>



<p>

Decisions:

{" "}

{worldDecision.choices?.length || 0}

</p>




<p>

Governance:

{" "}

{worldGovernance.decisions || 0}

evaluations

</p>




<p>

Actions:

{" "}

{worldAction.executed || 0}

</p>



</section>





</div>









<section className="living-card living-section">


<h2>

My Living Worlds™

</h2>



<div className="living-grid">



{


worlds.length > 0


?


worlds.map(


world => (


<article

key={world.id}

className="living-card"


>


<h3>

🌎 {world.id}

</h3>



<p>

Status:

{" "}

{world.status}

</p>



</article>


)


)



:


<p>

Your first Living World™
is waiting.

</p>


}



</div>



</section>









<section className="living-card living-section">


<h2>

Achievements

</h2>



<p>

Your evolution milestones
will appear here.

</p>



</section>








</section>



);



}