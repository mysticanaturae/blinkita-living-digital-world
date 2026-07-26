export default function PortalWhisper({ whisper }) {

    if (!whisper) return null;

    return (
        <p>
            {whisper}
        </p>
    );

}