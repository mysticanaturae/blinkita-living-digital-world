/*
==========================================

BLINKITA METHOD™

LIVING DIGITAL WORLD™

PORTAL INTERACTION™

User activation layer

Version 1.2

==========================================
*/


export default function PortalInteraction({

    interaction,

    onActivate,

}) {



    function handleClick(){


        console.log(
            "🟢 USER ACTIVATED PORTAL"
        );


        if(onActivate){

            onActivate();

        }


    }





    return (

        <section className="portal-interaction">


            <button

                type="button"

                onClick={handleClick}

            >

                {interaction}


            </button>


        </section>

    );


}