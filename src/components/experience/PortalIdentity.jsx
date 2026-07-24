export default function PortalIdentity({
    purpose,
    experience,
}) {
    return (
        <section className="portal-identity">

            <p>
                Purpose: {purpose}
            </p>

            <p>
    Atmosphere: {experience.atmosphere}
</p>

            <p>
                Identity: {experience.identity}
            </p>

            <p>
                Message: {experience.message}
            </p>

            <p>
                Interaction: {experience.interaction}
            </p>

            <p>
                Transition: {experience.transition}
            </p>

        </section>
    );
}