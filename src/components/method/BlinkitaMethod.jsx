import React from "react";
import "./BlinkitaMethod.css";
import LivingIntelligencePanel from "../intelligence/LivingIntelligencePanel";

const methodDomains = [
    {
        id: "foundations",
        number: "01",
        title: "FOUNDATIONS",
        description:
            "The philosophical and conceptual foundations upon which the Blinkita Method™ is built."
    },
    {
        id: "frameworks",
        number: "02",
        title: "FRAMEWORKS",
        description:
            "The thinking structures that help creators understand Living Worlds and their evolution."
    },
    {
        id: "blueprints",
        number: "03",
        title: "BLUEPRINTS",
        description:
            "Architectural maps that transform vision into coherent living structures."
    },
    {
        id: "standards",
        number: "04",
        title: "STANDARDS",
        description:
            "Principles that protect coherence, ethics, quality and evolution within the system."
    },
    {
        id: "playbooks",
        number: "05",
        title: "PLAYBOOKS",
        description:
            "Practical pathways for applying the Blinkita Method™ in real creation."
    },
    {
        id: "research",
        number: "06",
        title: "RESEARCH",
        description:
            "Questions, hypotheses, evidence and emerging insights shaping the evolution of the Method."
    },
    {
        id: "case-studies",
        number: "07",
        title: "CASE STUDIES",
        description:
            "Living examples through which the Method can be observed, tested and understood."
    },
    {
        id: "glossary",
        number: "08",
        title: "GLOSSARY",
        description:
            "The evolving language and vocabulary of the Blinkita Method™."
    },
    {
        id: "library",
        number: "09",
        title: "LIBRARY",
        description:
            "The knowledge architecture through which the Method continues to grow."
    },
    {
        id: "academy",
        number: "10",
        title: "ACADEMY",
        description:
            "The learning layer of the Blinkita Method™."
    },
    {
        id: "architecture",
        number: "11",
        title: "ARCHITECTURE",
        description:
            "The architectural decisions and principles behind the Living Digital World."
    },
    {
        id: "validation",
        number: "12",
        title: "VALIDATION",
        description:
            "Reviews, examinations and validation processes that challenge and strengthen the system."
    },
    {
        id: "os-architecture",
        number: "13",
        title: "OS ARCHITECTURE",
        description:
            "The deeper architecture of Blinkita OS™ and its living systems."
    },
    {
        id: "founding-support",
        number: "14",
        title: "FOUNDING SUPPORT",
        description:
            "The material foundation supporting the development and evolution of the Blinkita ecosystem."
    }
];

export default function BlinkitaMethod() {
    return (
        <main className="blinkita-method">

            <section className="method-hero">

                <div className="method-kicker">
                    BLINKITA METHOD™
                </div>

                <h1>
                    THE LIVING METHOD
                </h1>

                <p>
                    A living system for creating, understanding
                    and evolving Living Worlds.
                </p>

            </section>


            <section
                className="method-introduction"
                aria-label="Blinkita Method introduction"
            >

                <div className="method-introduction-label">
                    THE METHOD
                </div>

                <p>
                    The Blinkita Method™ is not a fixed instruction manual.
                    It is an evolving body of knowledge, principles,
                    frameworks, architectures and practices.
                </p>

            </section>


            <section
                className="method-domains"
                aria-label="Blinkita Method domains"
            >

                {methodDomains.map((domain) => (

                    <button
                        key={domain.id}
                        type="button"
                        className="method-domain-card"
                    >

                        <span className="method-domain-number">
                            {domain.number}
                        </span>

                        <span className="method-domain-title">
                            {domain.title}
                        </span>

                        <span className="method-domain-description">
                            {domain.description}
                        </span>

                        <span className="method-domain-arrow">
                            →
                        </span>

                    </button>

                ))}

            </section>


            <LivingIntelligencePanel worldId="method" />            <section className="method-principle">

                <div className="method-principle-label">
                    THE BLINKITA METHOD PRINCIPLE
                </div>

                <p>
                    A method does not exist to control creation.
                    It exists to help creation become conscious.
                </p>

            </section>

        </main>
    );
}




