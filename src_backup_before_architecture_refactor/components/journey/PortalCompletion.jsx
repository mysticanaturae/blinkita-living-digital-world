/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL COMPLETION™

The completion moment
of a Living Portal™

Version 1.0
==========================================
*/


export default function PortalCompletion({

    portal,

    onContinue

}) {


    if (!portal) return null;



    return (

        <section className="portal-completion">


            <h3>
                ✨ Portal Completed
            </h3>



            <p>
                You have completed:
            </p>



            <strong>
                {portal.title}
            </strong>



            <button

                onClick={
                    onContinue
                }

            >

                Continue Journey

            </button>


        </section>

    );

}