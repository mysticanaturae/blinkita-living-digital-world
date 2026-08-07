/*
==========================================

BLINKITA METHOD™
LIVING DIGITAL WORLD™

LIVING PORTAL EXPERIENCE™

UX Refactor v1.2

Portal Identity
Portal Message
Portal Question
Creator Reflection

==========================================
*/


import {
    useState,
    useCallback
}
from "react";


import {
    BlinkitaEngine
}
from "../../core/engine/BlinkitaEngine";


import {
    updateWorldState
}
from "../../core/state/WorldState";


import PortalGateway
from "../navigation/PortalGateway";


import {
    t
}
from "../../core/i18n/LanguageSystem";





/*
==========================================
PORTAL RESPONSE SYSTEM™
==========================================
*/


const responseKeys = {


    arrival:
        "arrival",


    invitation:
        "invitation",


    possibility:
        "possibility",


    "the-call":
        "theCall",


    "world-seed":
        "worldSeed",


    vision:
        "vision",


    essence:
        "essence",


    experience:
        "experience",


    "living-world":
        "livingWorld"


};





/*
==========================================
PORTAL SEQUENCE SYSTEM™

The journey structure.

==========================================
*/


const portalMeta = {


    arrival: {


        number:
            "The First Portal",


        question:
            "The First Question"


    },



    invitation: {


        number:
            "The Second Portal",


        question:
            "The Second Question"


    },



    possibility: {


        number:
            "The Third Portal",


        question:
            "The Third Question"


    },



    "the-call": {


        number:
            "The Fourth Portal",


        question:
            "The Fourth Question"


    },



    "world-seed": {


        number:
            "The Fifth Portal",


        question:
            "The Fifth Question"


    },



    vision: {


        number:
            "The Sixth Portal",


        question:
            "The Sixth Question"


    },



    essence: {


        number:
            "The Seventh Portal",


        question:
            "The Seventh Question"


    },



    experience: {


        number:
            "The Eighth Portal",


        question:
            "The Eighth Question"


    },



    "living-world": {


        number:
            "The Ninth Portal",


        question:
            "The Ninth Question"


    }


};







export default function LivingPortalExperience({ portal }) {


    const [activated, setActivated] =
        useState(false);


    const [showFullReading, setShowFullReading] =
        useState(false);


    const [awakeningMessage, setAwakeningMessage] =
        useState(null);


    const [continueJourney, setContinueJourney] =
        useState(null);


    const [answer, setAnswer] =
        useState("");





    /*
    ======================================
    PORTAL GATEWAY ACTION™
    ======================================
    */


    const handleGatewayAction =
        useCallback(

            (action) => {

                setContinueJourney(
                    () => action
                );

            },

            []

        );





    if (!portal) {

        return null;

    }





    const experience =
        portal.experience
        ||
        {};


console.log(
    "ICON CHECK:",
    portal.id,
    portal.icon
);


    const portalInfo =
        portalMeta[portal.id]
        ||
        {};





    const portalQuestion =
        experience.question;





    const portalPlaceholder =
        experience.placeholder
        ||
        t("portal.placeholder");


/*
======================================
RESPONSE
======================================
*/


const responseKey =

    responseKeys[portal.id]

    ||

    "remembered";





const response = {


    title:

        t(

        `portal.responses.${responseKey}.title`

        ),



    message:

        t(

        `portal.responses.${responseKey}.message`

        )


};









/*
======================================
SAVE CREATOR ANSWER™

Living Intelligence Memory
======================================
*/


function savePortalAnswer() {


    if (

        !portalQuestion

        ||

        !answer.trim()

    ) {

        return;

    }





    const currentState =

        BlinkitaEngine.getWorldState();





    const existingAnswers =

        currentState.portalAnswers

        ||

        {};





    const updatedAnswers = {


        ...existingAnswers,



        [portal.id]: {


            question:

                portalQuestion,



            answer:

                answer.trim(),



            answeredAt:

                new Date().toISOString()


        }


    };





    updateWorldState({


        portalAnswers:

            updatedAnswers


    });


}









/*
======================================
COMPLETE PORTAL™

======================================
*/


function handleJourney() {


    savePortalAnswer();





    const state =

        BlinkitaEngine.completePortal(

            portal.id

        );





    console.log(

        "Living World Updated:",

        state

    );





    setAwakeningMessage({


        title:

            response.title,



        text:

            response.message


    });





    setActivated(true);


}









/*
======================================
REVEAL DEEPER MEANING™

======================================
*/


function revealDeeperMeaning() {


    setShowFullReading(true);


}









/*
======================================
CONTINUE JOURNEY™

======================================
*/


function handleContinue() {


    if (!continueJourney) {


        console.warn(

            "No Gateway transition available."

        );


        return;


    }





    continueJourney();


}









const answerMissing =

    Boolean(portalQuestion)

    &&

    !answer.trim();









/*
======================================
RENDER
======================================
*/


return (

<section className="living-portal-experience">







{/* ======================================
    PORTAL IMAGE
    Living Portal Atmosphere
====================================== */}

{
    portal.icon
    &&
    <div className="portal-image-window">

        <img

            src={portal.icon}

            alt={portal.id}

            className="portal-hero-image"

        />

    </div>
}


{/* ======================================
PORTAL IDENTITY
====================================== */}


<div className="portal-identity-window">


    <h3>

        {
            portal.id === "arrival"
            ? "The Quest"
            : experience.identity
        }

    </h3>



    <h2>

        {
            portalInfo.number
        }

    </h2>



    {

        experience.identityMessage

        &&

        <p>

            {
                t(
                    `portal.experiences.${portal.id}.identityMessage`
                )
                ||
                experience.identityMessage
            }

        </p>

    }


</div>











{/* ======================================
    PORTAL QUESTION

====================================== */}



{

portalQuestion

&&


<div className="portal-question-window">



<h3>


{

portalInfo.question

}


</h3>







<p>


{


t(

`portal.experiences.${portal.id}.question`

)

||

portalQuestion


}



</p>








<textarea



value={answer}




onChange={


(event) =>


setAnswer(

event.target.value

)


}




placeholder={


t(

`portal.experiences.${portal.id}.placeholder`

)

||

portalPlaceholder


}




rows="8"




disabled={activated}



/>



</div>


}












{

!activated

&&


<button


className="journey-button"



onClick={handleJourney}



disabled={answerMissing}



>


{

experience.interaction

||

t("portal.beginJourney")


}


</button>


}






{/* ======================================
    AFTER ACTIVATION CHOICE

    User chooses:
    - Reveal deeper meaning
    - Continue journey

====================================== */}



{

activated

&&

!showFullReading

&&


<div className="portal-choice-window">



<button


className="reveal-button"



onClick={revealDeeperMeaning}



>


✨ {t("portal.revealMeaning") || "Reveal the deeper meaning"}


</button>





<button


className="journey-button"



onClick={handleContinue}



disabled={!continueJourney}



>


→ {t("portal.continueJourney") || "Continue Journey"}


</button>



</div>


}









{

showFullReading

&&


<div className="portal-deeper-reading-window">







{/* ATMOSPHERE */}



{

experience.atmosphere

&&


<div className="portal-atmosphere-window">


<h3>


{

t("portal.atmosphere")

}


</h3>




<p>


{

t(

`portal.experiences.${portal.id}.atmosphere`

)

||

experience.atmosphere


}



</p>



</div>


}









{/* WHISPER */}



{

experience.whisper

&&


<div className="portal-whisper-window">


<h3>


{

t("portal.whisper")

}


</h3>




<p>


{

t(

`portal.experiences.${portal.id}.whisper`

)

||

experience.whisper


}



</p>



</div>


}









{/* MESSAGE */}



{

experience.message

&&


<div className="portal-message-window">


<h3>


{

t("portal.message")

}


</h3>




<p>


{

t(

`portal.experiences.${portal.id}.message`

)

||

experience.message


}



</p>



</div>


}









{/* RITUAL */}



{

experience.ritual

&&


<div className="portal-ritual-window">


<h3>


{

t("portal.ritual")

}


</h3>




<p>


{

t(

`portal.experiences.${portal.id}.ritual`

)

||

experience.ritual


}



</p>



</div>


}









{/* AWAKENING RESPONSE */}



{

awakeningMessage

&&


<div className="portal-awakening-window">


<h3>


{

awakeningMessage.title


}


</h3>




<p>


{

awakeningMessage.text


}


</p>



</div>


}



</div>


}













{/* ======================================
    CONTINUE AFTER READING

====================================== */}



{

showFullReading

&&


<button


className="journey-button"



onClick={handleContinue}



disabled={!continueJourney}



>


→ {t("portal.continueJourney") || "Continue Journey"}


</button>


}













{/* ======================================
    PORTAL GATEWAY

====================================== */}



<PortalGateway


currentPortalId={portal.id}



exposeAction={handleGatewayAction}



/>



</section>


);


}
