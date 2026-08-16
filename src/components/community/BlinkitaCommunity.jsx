import React from "react";
import "./BlinkitaCommunity.css";

const communityPaths = [
    {
        id: "people",
        icon: "◉",
        title: "PEOPLE",
        description:
            "Discover the people who are part of the Living World and the relationships forming between them."
    },
    {
        id: "connections",
        icon: "∞",
        title: "CONNECTIONS",
        description:
            "Explore meaningful connections between people, creations, ideas and Living Worlds."
    },
    {
        id: "world-builders",
        icon: "✦",
        title: "WORLD BUILDERS",
        description:
            "Meet the creators who are bringing new Living Worlds into existence."
    },
    {
        id: "shared-worlds",
        icon: "◌",
        title: "SHARED WORLDS",
        description:
            "Discover Living Worlds that are growing through collaboration and shared creation."
    },
    {
        id: "belonging",
        icon: "◇",
        title: "BELONGING",
        description:
            "Find the places, people and worlds where your presence can become part of something larger."
    },
    {
        id: "contribution",
        icon: "✧",
        title: "CONTRIBUTION",
        description:
            "Explore how your ideas, presence and creations can contribute to the Living World."
    }
];

export default function BlinkitaCommunity() {
    return (
        <main className="blinkita-community">

            <section className="community-header">

                <div className="community-kicker">
                    BLINKITA COMMUNITY™
                </div>

                <h1>
                    A LIVING COMMUNITY
                </h1>

                <p>
                    A living field of people, relationships,
                    creations and worlds becoming together.
                </p>

            </section>

            <section
                className="community-paths"
                aria-label="Blinkita Community paths"
            >

                {communityPaths.map((path) => (

                    <button
                        key={path.id}
                        type="button"
                        className="community-path-card"
                    >

                        <span
                            className="community-path-icon"
                            aria-hidden="true"
                        >
                            {path.icon}
                        </span>

                        <span className="community-path-title">
                            {path.title}
                        </span>

                        <span className="community-path-description">
                            {path.description}
                        </span>

                    </button>

                ))}

            </section>

            <section className="community-principle">

                <div className="community-principle-label">
                    THE BLINKITA COMMUNITY PRINCIPLE
                </div>

                <p>
                    Community is not a place we join.
                    It is a living field we create together.
                </p>

            </section>

        </main>
    );
}
