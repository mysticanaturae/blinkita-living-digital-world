export default function PortalInteraction({

    interaction,

    onActivate,

}) {


    if (!interaction) return null;



    return (

        <section className="portal-interaction">

            <button
                onClick={onActivate}
            >

                {interaction}

            </button>

        </section>

    );

}