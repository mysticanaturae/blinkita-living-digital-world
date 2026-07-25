export default function PortalExperience({
    identity,
    atmosphere,
    message,
    interaction,
}) {

    return (
        <section className="portal-experience">

            <h2>
                {identity}
            </h2>


            <p>
                {atmosphere}
            </p>


            <p>
                {message}
            </p>


            <p>
                {interaction}
            </p>

        </section>
    );
}