export default function PortalIdentity({
    purpose,
    atmosphere,
    experience,
}) {
    return (
        <section className="portal-identity">

            <p>
                Purpose: {purpose}
            </p>

            <p>
                Atmosphere: {atmosphere}
            </p>

            <p>
                Experience: {experience}
            </p>

        </section>
    );
}