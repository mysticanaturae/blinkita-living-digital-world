/*
==========================================
BLINKITA OS™

LIVING MEMORY STATUS™

The memory layer of a Living World™

==========================================
*/


import {
    useEffect,
    useState
} from "react";



export default function LivingMemoryStatus() {


const [memory,setMemory] =
useState({

    portals:0,

    timeline:0,

    decisions:0,

    lastActivity:null

});



useEffect(()=>{


function loadMemory(){


let worldTimeline = [];

let worldState = null;



try {


worldTimeline =
JSON.parse(

localStorage.getItem(
"blinkita_world_timeline"
)

)

|| [];



worldState =
JSON.parse(

localStorage.getItem(
"blinkita_world_state"
)

)

|| {};



}

catch(error){

console.log(
"Living Memory loading error",
error
);

}



setMemory({

    portals:
        worldState.completedPortals?.length
        ||
        worldState.visitedPortals?.length
        ||
        0,


    timeline:
        worldTimeline.length,


    decisions:
        worldState.decisions?.length
        ||
        0,


    lastActivity:
        worldTimeline.length
        ?
        worldTimeline[
            worldTimeline.length - 1
        ]
        :
        null

});


}



loadMemory();



const interval =
setInterval(
loadMemory,
5000
);



return ()=>clearInterval(interval);



},[]);



return (

<section className="living-card living-memory-card">


<div className="creator-identity-heading">


<span className="creator-identity-eyebrow">

🧠 LIVING MEMORY™

</span>


<h2>

Your Living World remembers.

</h2>


<p>

Every portal, reflection and decision becomes part of your evolving creation journey.

</p>


</div>




<div className="living-memory-grid">



<div className="living-memory-item">

<strong>

{memory.portals}

</strong>

<span>

Portals Experienced

</span>

</div>



<div className="living-memory-item">

<strong>

{memory.timeline}

</strong>

<span>

Memories Collected

</span>

</div>



<div className="living-memory-item">

<strong>

{memory.decisions}

</strong>

<span>

Decisions Recorded

</span>

</div>



</div>




<div className="living-memory-status">


<span className="memory-indicator">

●

</span>


Living Memory Active


</div>



{

memory.lastActivity &&

<div className="living-memory-last">


Last remembered moment:

<br/>


<strong>

{

memory.lastActivity.description

||

"Portal experience recorded"

}

</strong>


</div>

}



</section>

);


}
