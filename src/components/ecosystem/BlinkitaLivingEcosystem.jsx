import React from "react";
import "./BlinkitaLivingEcosystem.css";

const ecosystemPaths = [
    {
        id: "method",
        icon: "∞",
        title: "BLINKITA METHOD™",
        description:
            "The evolving methodology behind the Blinkita ecosystem, its principles, frameworks and ways of creating."
    },
    {
        id: "os",
        icon: "◉",
        title: "BLINKITA OS™",
        description:
            "The operating system connecting Living Worlds, creators, journeys, memory and living time."
    },
    {
        id: "creator",
        icon: "✦",
        title: "CREATOR SPACE™",
        description:
            "The space where creators develop ideas, shape worlds and bring new possibilities into existence."
    },
    {
        id: "world-builder",
        icon: "✧",
        title: "WORLD BUILDER™",
        description:
            "The living creation system through which ideas become worlds, identities, structures and experiences."
    },
    {
        id: "worlds",
        icon: "◌",
        title: "LIVING WORLDS™",
        description:
            "A growing field of worlds created, explored and brought to life by their creators and communities."
    },
    {
        id: "time",
        icon: "◷",
        title: "LIVING TIME™",
        description:
            "Time as a living intelligence, revealing cycles, patterns, moments and the quality of now."
    },
    {
        id: "memory",
        icon: "◇",
        title: "LIVING MEMORY™",
        description:
            "The memory layer through which worlds remember, learn from experience and evolve."
    },
    {
        id: "cards",
        icon: "✧",
        title: "LIVING CARDS™",
        description:
            "A living system of cards, symbols, questions and insights designed to activate exploration and creation."
    },
    {
        id: "academy",
        icon: "△",
        title: "BLINKITA ACADEMY™",
        description:
            "A learning environment for exploring the ideas, tools, practices and creative possibilities of Blinkita."
    },
    {
        id: "studio",
        icon: "◇",
        title: "BLINKITA STUDIO™",
        description:
            "The creative space where ideas become visual, written, digital and living creations."
    },
    {
        id: "ai",
        icon: "✺",
        title: "BLINKITA AI™",
        description:
            "An intelligent layer designed to help creators explore, build, connect and evolve their Living Worlds."
    },
    {
        id: "market",
        icon: "◈",
        title: "MARKET™",
        description:
            "The living marketplace where creations, experiences, services and possibilities can meet the people looking for them."
    },
    {
        id: "community",
        icon: "◎",
        title: "COMMUNITY™",
        description:
            "The human field of the ecosystem, where creators, explorers and Living Worlds can connect."
    },
    {
        id: "membership",
        icon: "∞",
        title: "BLINKITA MEMBERSHIP™",
        description:
            "A way to enter the ecosystem, access its evolving worlds and become part of what is being created."
    }
];

export default function BlinkitaLivingEcosystem() {

    return (
        <main className="blinkita-living-ecosystem">

            <section className="living-ecosystem-header">

                <div className="living-ecosystem-kicker">
                    BLINKITA ECOSYSTEM™
                </div>

                <h1>
                    A LIVING ECOSYSTEM
                </h1>

                <p>
                    The Blinkita Ecosystem is a living system of worlds,
                    creators, knowledge, time, memory, tools, experiences
                    and possibilities designed to evolve together.
                </p>

            </section>


            <section
                className="living-ecosystem-paths"
                aria-label="Blinkita Ecosystem paths"
            >

                {ecosystemPaths.map((path) => (

                    <button
                        key={path.id}
                        type="button"
                        className="living-ecosystem-card"
                    >

                        <span
                            className="living-ecosystem-icon"
                            aria-hidden="true"
                        >
                            {path.icon}
                        </span>

                        <span className="living-ecosystem-title">
                            {path.title}
                        </span>

                        <span className="living-ecosystem-description">
                            {path.description}
                        </span>

                    </button>

                ))}

            </section>


            <section className="living-ecosystem-statement">

                <div className="living-ecosystem-statement-label">
                    THE BLINKITA ECOSYSTEM PRINCIPLE
                </div>

                <p>
                    A Living Ecosystem is not a collection of separate parts.
                    It is a living relationship between them.
                </p>

            </section>

        </main>
    );
}

