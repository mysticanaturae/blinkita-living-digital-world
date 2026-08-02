/*
==========================================
BLINKITA OS™

MY IDENTITY EVOLUTION™

Creator Memory Layer

Version 1.0
==========================================
*/


const identityEvents = [

    {

        date: "10.03.2026",

        avatar: "🌱",

        title: "The Visionary Creator",

        tzolkin: "11 Orel 🦅",

        message:
            "A moment when your creative vision expanded."

    },

    {

        date: "22.06.2026",

        avatar: "🔮",

        title: "The Guardian of Ideas",

        tzolkin: "4 Jaguar 🐆",

        message:
            "A moment when your creations found deeper structure."

    }

];


export default function IdentityEvolutionTimeline() {


    return (

       <section className="identity-evolution-card">

            <span className="creator-identity-eyebrow">

                ✨ MY IDENTITY EVOLUTION™

            </span>


            <p>

                The moments when your creator identity
                awakened and transformed.

            </p>


            {

                identityEvents.map(

                    (event) => (

                        <article

                            key={event.date}

                            className="identity-event"

                        >

                            <h4>

                                {
                                    event.date
                                }

                            </h4>


                            <h3>

                                {
                                    event.avatar
                                }{" "}

                                {
                                    event.title
                                }

                            </h3>


                            <p>

                                {
                                    event.message
                                }

                            </p>


                            <strong>

                                Living Time:
                                {" "}
                                {
                                    event.tzolkin
                                }

                            </strong>


                        </article>

                    )

                )

            }


        </section>

    );

}
