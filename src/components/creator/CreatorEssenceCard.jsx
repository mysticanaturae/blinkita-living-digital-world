/*
==========================================
BLINKITA OS™

CREATOR ESSENCE CARD™

Living Creator Identity Layer

==========================================
*/

export default function CreatorEssenceCard({

    creator

}) {


const essence =
    creator?.identity?.essence ||
    {

        title:
            "Seed Creator",

        subtitle:
            "The essence your Living World recognizes in you.",

        gifts:
        [
            "Visionary Sight",
            "Story Weaving",
            "Connection",
            "Creation Energy"
        ],

        frequency:
            "∞ Expanding",

        evolution:
        [
            "Creator",
            "World Builder™",
            "Civilization Architect™"
        ]

    };



return (

<section className="living-card creator-essence-card">


<div className="creator-identity-heading">


<span className="creator-identity-eyebrow">

✨ YOUR CREATOR ESSENCE™

</span>


<h2>

{essence.title}

</h2>


<p>

{essence.subtitle}

</p>


</div>



<div className="creator-essence-content">


<div className="creator-essence-block">


<h3>

Your Creator Gifts

</h3>


<div className="creator-gifts">

{

essence.gifts.map(

(gift,index)=>(

<span

key={index}

className="creator-gift"

>

✨ {gift}

</span>

)

)

}

</div>


</div>



<div className="creator-essence-block">


<h3>

Your Creation Frequency

</h3>


<div className="creator-frequency">

{essence.frequency}

</div>


</div>



<div className="creator-essence-block">


<h3>

Your Next Evolution

</h3>


<div className="creator-evolution-path">


{

essence.evolution.map(

(stage,index)=>(

<div

key={index}

className="creator-evolution-step"

>


{stage}


{

index <
essence.evolution.length - 1

&&

<span>

↓

</span>

}


</div>

)

)

}


</div>


</div>


</div>


</section>

);


}
