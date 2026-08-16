import React from "react";
import "./BlinkitaLibrary.css";

const libraryPaths = [
    {
        id: "explore",
        icon: "✦",
        title: "EXPLORE",
        description:
            "Enter the living field of knowledge and discover what is waiting for you."
    },
    {
        id: "method",
        icon: "∞",
        title: "BLINKITA METHOD™",
        description:
            "Explore the principles, frameworks and evolving knowledge of the Blinkita Method™."
    },
    {
        id: "cards",
        icon: "◇",
        title: "LIVING CARDS™",
        description:
            "Explore the Living Card system, its meanings, categories and connections."
    },
    {
        id: "worlds",
        icon: "◌",
        title: "LIVING WORLDS™",
        description:
            "Discover knowledge emerging from the worlds created by World Builders."
    },
    {
        id: "time",
        icon: "◷",
        title: "TIME & TZOLK'IN",
        description:
            "Explore living time, cycles, Tzolk'in and the intelligence of the day."
    },
    {
        id: "creations",
        icon: "✧",
        title: "CREATIONS",
        description:
            "Discover books, writings, guides, works and other creations entering the living world."
    }
];

export default function BlinkitaLibrary() {
    return (
        <main className="blinkita-library">

            <section className="library-header">

                <div className="library-kicker">
                    BLINKITA LIBRARY™
                </div>

                <h1>
                    A LIVING LIBRARY
                </h1>

                <p>
                    A living field of knowledge, creations, ideas,
                    systems and possibilities.
                </p>

            </section>


            <section
                className="library-paths"
                aria-label="Blinkita Library paths"
            >

                {libraryPaths.map((path) => (

                    <button
                        key={path.id}
                        type="button"
                        className="library-path-card"
                    >

                        <span
                            className="library-path-icon"
                            aria-hidden="true"
                        >
                            {path.icon}
                        </span>

                        <span className="library-path-title">
                            {path.title}
                        </span>

                        <span className="library-path-description">
                            {path.description}
                        </span>

                    </button>

                ))}

            </section>


            <section className="library-principle">

                <div className="library-principle-label">
                    THE BLINKITA LIBRARY PRINCIPLE
                </div>

                <p>
                    Knowledge is not something we store.
                    It is something we keep alive.
                </p>

            </section>

        </main>
    );
}
