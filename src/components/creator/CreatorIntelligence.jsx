/*
==========================================
BLINKITA OS™

CREATOR INTELLIGENCE™

Living Reflection Layer™

The first mirror of the Creator

==========================================
*/


import {

useState,

useEffect

} from "react";



export default function CreatorIntelligence(){



const [memory,setMemory] =

useState(null);



const [question,setQuestion] =

useState("");



const [response,setResponse] =

useState("");





useEffect(()=>{


function loadLivingMemory(){


let state = {};

let timeline = [];



try{


state =

JSON.parse(

localStorage.getItem(
"blinkita_world_state"
)

)

|| {};



timeline =

JSON.parse(

localStorage.getItem(
"blinkita_world_timeline"
)

)

|| [];



}

catch(error){


console.log(
"Creator Intelligence memory error",
error
);


}



setMemory({

state,

timeline

});


}



loadLivingMemory();



},[]);





function createReflection(){


if(!memory){

return;

}



const creator =

memory.state?.creator
||
{};



const identity =

creator.identity
||
{};



const name =

identity.name
||
"Creator";



const memories =

memory.timeline.length;



let answer =

`${name}, your Living World is reflecting what you have already created.

You have entered ${memories} remembered moments of your journey.

`;





if(identity.description){


answer +=

`

Your own words reveal a creator who carries:

${identity.description}

`;

}





answer +=


`

Your next evolution is not about becoming someone else.

It is about discovering the next layer of what is already alive inside you.

Your Living World is listening.

`;



setResponse(answer);



}





return (


<section className="living-card creator-intelligence-card">


<div className="creator-identity-heading">


<span className="creator-identity-eyebrow">

✨ CREATOR INTELLIGENCE™

</span>



<h2>

Your Living Reflection

</h2>



<p>

A reflection created from your journey, memories and evolving identity.

</p>



</div>





<div className="creator-intelligence-message">


{

response

?

response

:

"Your Living Reflection is waiting for your first question."

}



</div>





<div className="creator-intelligence-input">


<textarea


value={question}


onChange={(e)=>

setQuestion(

e.target.value

)

}


placeholder=

"Ask your Living Reflection..."



rows="4"



/>




<button


className="journey-button"


onClick={createReflection}


>

Reflect


</button>



</div>





<div className="creator-intelligence-note">


🧠

This reflection grows through your Living Memory™, decisions and creation journey.


</div>



</section>


);


}
