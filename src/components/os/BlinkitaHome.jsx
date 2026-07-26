/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

BLINKITA HOME™

The entrance layer
of the Living Operating System™

Version 1.0
==========================================
*/


import WorldResume from "../resume/WorldResume";


export default function BlinkitaHome({

    onContinueJourney,

    onNewWorld,

    onOpenCreator,

    onOpenCreation,

    onOpenWorlds

}) {


    return (

        <section className="blinkita-home">


            <header>


                <h1>

                    BLINKITA OS™

                </h1>


                <p>

                    Welcome back,
                    World Builder™

                </p>


            </header>



            <WorldResume

                onContinue={
                    onContinueJourney
                }


                onNewWorld={
                    onNewWorld
                }

            />




            <section className="os-spaces">


                <h2>

                    Enter Your Spaces

                </h2>



                <button

                    onClick={
                        onOpenCreator
                    }

                >

                    🌟 Creator Space

                </button>




                <button

                    onClick={
                        onOpenCreation
                    }

                >

                    🌀 Creation Studio

                </button>




                <button

                    onClick={
                        onOpenWorlds
                    }

                >

                    🌍 Living Worlds

                </button>



            </section>


        </section>

    );

}