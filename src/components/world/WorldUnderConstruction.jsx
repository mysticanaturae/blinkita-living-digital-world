import { useParams } from "react-router-dom";

const WORLD_NAMES = {
    method: "BLINKITA METHOD™",
    os: "BLINKITA OS™",
    academy: "BLINKITA ACADEMY™",
    ai: "BLINKITA AI™",
    studio: "BLINKITA STUDIO™",
    "living-worlds": "LIVING WORLDS™",
    "living-memory": "LIVING MEMORY™",
    market: "MARKET™",
    timeline: "TIMELINE™",
    library: "LIBRARY™",
    community: "COMMUNITY™",
    ecosystem: "BLINKITA ECOSYSTEM™"
};

export default function WorldUnderConstruction() {
    const { worldId } = useParams();

    const worldName =
        WORLD_NAMES[worldId] ||
        "THIS LIVING WORLD™";

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",
                padding: "40px 24px",
                boxSizing: "border-box",
                background: "#091119",
                color: "#f4f7f8",
                textAlign: "center"
            }}
        >
            <section style={{ maxWidth: "720px" }}>
                <p
                    style={{
                        margin: "0 0 18px",
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: ".18em",
                        opacity: .65
                    }}
                >
                    {worldName}
                </p>

                <h1
                    style={{
                        margin: "0 0 14px",
                        fontSize: "clamp(24px, 5vw, 42px)",
                        lineHeight: 1.15,
                        letterSpacing: ".03em"
                    }}
                >
                    THIS LIVING WORLD IS BEING BUILT.
                </h1>

                <p
                    style={{
                        margin: 0,
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "#9eabb5"
                    }}
                >
                    More is coming soon.
                </p>
            </section>
        </main>
    );
}
