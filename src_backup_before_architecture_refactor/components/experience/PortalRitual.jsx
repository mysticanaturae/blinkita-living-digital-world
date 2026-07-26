export default function PortalRitual({ ritual }) {

    if (!ritual) return null;

    return (
        <p>
            {ritual}
        </p>
    );

}