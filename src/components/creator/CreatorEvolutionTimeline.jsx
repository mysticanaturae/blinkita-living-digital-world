/*
==========================================
BLINKITA OS™

CREATOR EVOLUTION TIMELINE™

Identity transformation memory

==========================================
*/


export default function CreatorEvolutionTimeline({

    creator

}) {


const evolutionEvents =

creator?.identity?.evolutionTimeline ||

[

{

date:
"10.03.2026",

title:
"🌱 The Visionary Creator",

description:
"A moment when your creative vision expanded.",

livingTime:
"Living Time: 11 Eagle 🦅"

},


{

date:
"22.06.2026",

title:
"🔮 The Guardian of Ideas",

description:
"A moment when your creations found deeper structure.",

livingTime:
"Living Time: 4 Jaguar 🐆"

}

];



return (

<section className="living-card creator-evolution-card">


<div className="creator-identity-heading">


<span className="creator-identity-eyebrow">

✨ MY IDENTITY EVOLUTION™

</span>


<h2>

Your Becoming Timeline

</h2>


<p>

The moments when your creator identity awakened and transformed.

</p>


</div>



<div className="creator-evolution-timeline">


{

evolutionEvents.map(

(event,index)=>(


<article

key={index}

className="creator-evolution-event"

>


<div className="creator-evolution-date">

{event.date}

</div>



<div className="creator-evolution-content">


<h3>

{event.title}

</h3>


<p>

{event.description}

</p>


<span className="creator-evolution-living-time">

{event.livingTime}

</span>


</div>


</article>


)

)

}


</div>


</section>

);


}
