/*
====================================================
BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER™
Build What Wants to Become Alive

WORLD BUILDER HOME
====================================================
*/

import { useMemo, useState } from "react";

import LivingTimeHeader from "../shared/LivingTimeHeader";

import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";

import {
    getWorldBuilderDeck
} from "../../core/living-cards/WorldBuilderLivingCards";

import "../../styles/world-builder.css";


/*
====================================================
WORLD BUILDER — CORE SECTIONS
====================================================
*/

const WORLD_BUILDER_SECTIONS = [
    {
        id: "seed",
        number: "01",
        eyebrow: "BEGIN HERE",
        title: "WORLD SEED",
        subtitle: "What wants to become alive?",
        description:
            "Capture the original spark before turning it into structure. Your world begins with an idea, a question, a need, or something you feel wants to exist.",
        action: "Open World Seed",
        icon: "✦"
    },

    {
        id: "identity",
        number: "02",
        eyebrow: "DEFINE",
        title: "WORLD IDENTITY",
        subtitle: "What is this world?",
        description:
            "Give your Living World its name, essence, purpose, atmosphere and direction. Define what makes this world distinctly itself.",
        action: "Shape World Identity",
        icon: "◈"
    },

    {
        id: "structure",
        number: "03",
        eyebrow: "ARCHITECT",
        title: "WORLD STRUCTURE",
        subtitle: "How is this world built?",
        description:
            "Shape the architecture of your world. Define its spaces, pillars, pathways, layers and relationships.",
        action: "Build Structure",
        icon: "⌘"
    },

    {
        id: "content",
        number: "04",
        eyebrow: "CREATE",
        title: "WORLD CONTENT",
        subtitle: "What lives inside it?",
        description:
            "Develop the experiences, knowledge, resources, offerings, stories and other elements that give your world substance.",
        action: "Create World Content",
        icon: "◇"
    },

    {
        id: "intelligence",
        number: "05",
        eyebrow: "CONNECT",
        title: "WORLD INTELLIGENCE",
        subtitle: "How does this world work?",
        description:
            "Define the relationships, patterns, rules and intelligence that allow the elements of your world to work together.",
        action: "Develop Intelligence",
        icon: "∞"
    },

    {
        id: "memory",
        number: "06",
        eyebrow: "REMEMBER",
        title: "WORLD MEMORY",
        subtitle: "What has happened here?",
        description:
            "Keep the meaningful history of your world. Ideas, decisions, milestones, discoveries and moments become part of its living memory.",
        action: "Open World Memory",
        icon: "◌"
    },

    {
        id: "evolution",
        number: "07",
        eyebrow: "EVOLVE",
        title: "WORLD EVOLUTION",
        subtitle: "What wants to happen next?",
        description:
            "Observe what your world is becoming and choose the next movement, development or transformation.",
        action: "Continue Evolution",
        icon: "↗"
    }
];


/*
====================================================
WORLD BUILDER — DEFAULT WORLD
====================================================
*/

const DEFAULT_WORLD = {
    name: "",
    seed: "",
    essence: "",
    purpose: "",
    status: "awakening",
    lastUpdated: null
};


/*
====================================================
SMALL TIME CONTEXT
====================================================

Important:
World Builder does NOT calculate Tzolk'in.

Time context belongs to individual
world records / reflections / memories.

The shared LivingTimeHeader remains the
global Living Time experience.
====================================================
*/

function TimeContext({ record }) {

    if (!record?.timeContext) {
        return null;
    }

    return (
        <div className="world-builder-time-context">

            <span className="world-builder-time-context-symbol">
                {record.timeContext.symbol || "✦"}
            </span>

            <span>
                {record.timeContext.label}
            </span>

        </div>
    );
}


/*
====================================================
WORLD BUILDER HOME
====================================================
*/

export default function WorldBuilderHome() {

    const [world, setWorld] =
        useState(() => {

            const state =
                getWorldState() || {};

            return (
                state.worldBuilder ||
                DEFAULT_WORLD
            );

        });


    const [activeSection, setActiveSection] =
        useState(null);


    const [editingSeed, setEditingSeed] =
        useState(false);


    const [seedDraft, setSeedDraft] =
        useState("");


    /*
    ====================================================
    WORLD BUILDER DECK
    ====================================================
    */

    const livingCards =
        useMemo(
            () => {

                try {

                    return (
                        getWorldBuilderDeck() ||
                        []
                    );

                } catch {

                    return [];

                }

            },
            []
        );


    /*
    ====================================================
    SAVE WORLD
    ====================================================
    */

    function saveWorld(nextWorld) {

        setWorld(nextWorld);

        updateWorldState({

            worldBuilder:
                nextWorld

        });

    }


    /*
    ====================================================
    WORLD SEED
    ====================================================
    */

    function openSeedEditor() {

        setSeedDraft(
            world.seed || ""
        );

        setEditingSeed(true);

    }


    function saveSeed() {

        saveWorld({

            ...world,

            seed:
                seedDraft.trim(),

            lastUpdated:
                new Date().toISOString()

        });

        setEditingSeed(false);

    }


    /*
    ====================================================
    WORLD PROGRESS
    ====================================================
    */

    const completedSections =
        WORLD_BUILDER_SECTIONS.filter(
            section => {

                if (section.id === "seed") {
                    return Boolean(
                        world.seed?.trim()
                    );
                }

                if (section.id === "identity") {
                    return Boolean(
                        world.name?.trim() &&
                        world.essence?.trim()
                    );
                }

                return false;

            }
        ).length;


    const progress =
        Math.round(
            (
                completedSections /
                WORLD_BUILDER_SECTIONS.length
            ) *
            100
        );


    /*
    ====================================================
    RENDER
    ====================================================
    */

    return (

        <main
            className="
                world-builder
                world-builder-home
            "
        >

            {/* =================================================
                LIVING TIME
            ================================================= */}

            <LivingTimeHeader />


            {/* =================================================
                HERO
            ================================================= */}

            <section
                className="
                    world-builder-hero
                    world-builder-premium-section
                "
            >

                <div
                    className="
                        world-builder-hero-content
                    "
                >

                    <div
                        className="
                            world-builder-eyebrow
                        "
                    >
                        WORLD BUILDER™
                    </div>


                    <h1>
                        Build What Wants
                        <br />
                        to Become Alive
                    </h1>


                    <p
                        className="
                            world-builder-hero-description
                        "
                    >
                        Your Living World does not begin
                        with a finished plan.
                        It begins with a seed.
                    </p>


                    <div
                        className="
                            world-builder-hero-line
                        "
                    />


                    <p
                        className="
                            world-builder-hero-support
                        "
                    >
                        World Builder is your creative
                        workspace for turning an idea
                        into a living digital world.
                    </p>

                </div>


                <div
                    className="
                        world-builder-hero-orbit
                    "
                >

                    <div
                        className="
                            world-builder-orbit-core
                        "
                    >
                        <span>WORLD</span>
                        <strong>∞</strong>
                        <small>IN BECOMING</small>
                    </div>

                </div>

            </section>


            {/* =================================================
                WORLD STATUS
            ================================================= */}

            <section
                className="
                    world-builder-status-card
                    world-builder-premium-card
                "
            >

                <div>

                    <span
                        className="
                            world-builder-card-eyebrow
                        "
                    >
                        MY LIVING WORLD
                    </span>


                    <h2>
                        {world.name ||
                            "Your World is Waiting for a Name"}
                    </h2>


                    <p>

                        {world.seed
                            ? world.seed
                            : "The first spark has not yet been captured."}

                    </p>

                </div>


                <div
                    className="
                        world-builder-progress
                    "
                >

                    <span>
                        WORLD DEVELOPMENT
                    </span>

                    <strong>
                        {progress}%
                    </strong>

                </div>

            </section>


            {/* =================================================
                WORLD SEED
            ================================================= */}

            <section
                className="
                    world-builder-seed-card
                    world-builder-premium-card
                "
            >

                <div
                    className="
                        world-builder-section-mark
                    "
                >
                    01
                </div>


                <div
                    className="
                        world-builder-seed-content
                    "
                >

                    <span
                        className="
                            world-builder-card-eyebrow
                        "
                    >
                        BEGIN HERE
                    </span>


                    <h2>
                        WORLD SEED
                    </h2>


                    <p
                        className="
                            world-builder-card-subtitle
                        "
                    >
                        What wants to become alive?
                    </p>


                    {!editingSeed ? (

                        <>

                            <div
                                className="
                                    world-builder-seed-display
                                "
                            >

                                {world.seed ? (

                                    <p>
                                        {world.seed}
                                    </p>

                                ) : (

                                    <p
                                        className="
                                            world-builder-empty
                                        "
                                    >
                                        Every Living World begins
                                        with something you cannot
                                        yet fully explain.
                                    </p>

                                )}

                            </div>


                            <button
                                type="button"
                                className="
                                    world-builder-primary-button
                                "
                                onClick={
                                    openSeedEditor
                                }
                            >
                                {world.seed
                                    ? "Refine World Seed"
                                    : "Capture World Seed"}
                            </button>

                        </>

                    ) : (

                        <div
                            className="
                                world-builder-editor
                            "
                        >

                            <textarea
                                value={seedDraft}
                                onChange={
                                    event =>
                                        setSeedDraft(
                                            event.target.value
                                        )
                                }
                                placeholder="
                                    What wants to exist?
                                    What keeps returning?
                                    What are you here to bring alive?
                                "
                                rows={7}
                            />


                            <div
                                className="
                                    world-builder-editor-actions
                                "
                            >

                                <button
                                    type="button"
                                    className="
                                        world-builder-secondary-button
                                    "
                                    onClick={() =>
                                        setEditingSeed(
                                            false
                                        )
                                    }
                                >
                                    Cancel
                                </button>


                                <button
                                    type="button"
                                    className="
                                        world-builder-primary-button
                                    "
                                    onClick={
                                        saveSeed
                                    }
                                >
                                    Save World Seed
                                </button>

                            </div>

                        </div>

                    )}

                </div>


                <TimeContext
                    record={world}
                />

            </section>


            {/* =================================================
                WORLD ARCHITECTURE
            ================================================= */}

            <section
                className="
                    world-builder-architecture
                "
            >

                <div
                    className="
                        world-builder-section-heading
                    "
                >

                    <span
                        className="
                            world-builder-card-eyebrow
                        "
                    >
                        THE BUILDING PATH
                    </span>


                    <h2>
                        From Seed to Living World
                    </h2>


                    <p>
                        Build the world layer by layer.
                        Nothing needs to be complete before
                        the next thing can emerge.
                    </p>

                </div>


                <div
                    className="
                        world-builder-section-grid
                    "
                >

                    {WORLD_BUILDER_SECTIONS.map(
                        section => {

                            const isActive =
                                activeSection ===
                                section.id;


                            return (

                                <article
                                    key={
                                        section.id
                                    }
                                    className={`
                                        world-builder-section-card
                                        world-builder-premium-card
                                        ${
                                            isActive
                                                ? "is-active"
                                                : ""
                                        }
                                    `}
                                    onClick={() =>
                                        setActiveSection(
                                            isActive
                                                ? null
                                                : section.id
                                        )
                                    }
                                >

                                    <div
                                        className="
                                            world-builder-section-card-top
                                        "
                                    >

                                        <span
                                            className="
                                                world-builder-section-number
                                            "
                                        >
                                            {section.number}
                                        </span>


                                        <span
                                            className="
                                                world-builder-section-icon
                                            "
                                        >
                                            {section.icon}
                                        </span>

                                    </div>


                                    <span
                                        className="
                                            world-builder-card-eyebrow
                                        "
                                    >
                                        {section.eyebrow}
                                    </span>


                                    <h3>
                                        {section.title}
                                    </h3>


                                    <strong>
                                        {section.subtitle}
                                    </strong>


                                    <p>
                                        {section.description}
                                    </p>


                                    <div
                                        className="
                                            world-builder-section-card-footer
                                        "
                                    >

                                        <span>
                                            {section.action}
                                        </span>

                                        <span>
                                            →
                                        </span>

                                    </div>


                                    {isActive && (

                                        <div
                                            className="
                                                world-builder-section-preview
                                            "
                                        >

                                            <span>
                                                WORKSPACE
                                            </span>

                                            <p>
                                                This space will
                                                become the dedicated
                                                {` ${section.title.toLowerCase()} `}
                                                workspace of your
                                                Living World.
                                            </p>

                                        </div>

                                    )}

                                </article>

                            );

                        }
                    )}

                </div>

            </section>


            {/* =================================================
                LIVING CARDS
            ================================================= */}

            <section
                className="
                    world-builder-cards-section
                    world-builder-premium-section
                "
            >

                <div
                    className="
                        world-builder-section-heading
                    "
                >

                    <span
                        className="
                            world-builder-card-eyebrow
                        "
                    >
                        LIVING CARDS™
                    </span>


                    <h2>
                        Materials for Your World
                    </h2>


                    <p>
                        Living Cards are creative building
                        elements. They are here to help you
                        discover, connect and develop what
                        your world wants to contain.
                    </p>

                </div>


                <div
                    className="
                        world-builder-card-deck-preview
                    "
                >

                    {livingCards
                        .slice(0, 5)
                        .map(
                            (card, index) => (

                                <div
                                    key={
                                        card.id ||
                                        index
                                    }
                                    className="
                                        world-builder-living-card
                                    "
                                >

                                    <span>
                                        {card.icon ||
                                            "✦"}
                                    </span>


                                    <strong>
                                        {card.title ||
                                            card.name ||
                                            "Living Card"}
                                    </strong>


                                </div>

                            )
                        )}

                </div>

            </section>


            {/* =================================================
                WORLD MEMORY
            ================================================= */}

            <section
                className="
                    world-builder-memory-card
                    world-builder-premium-card
                "
            >

                <div>

                    <span
                        className="
                            world-builder-card-eyebrow
                        "
                    >
                        WORLD MEMORY™
                    </span>


                    <h2>
                        Let the World Remember
                    </h2>


                    <p>
                        Important reflections, decisions,
                        discoveries and milestones will become
                        part of your Living World’s memory.
                    </p>

                </div>


                <div
                    className="
                        world-builder-memory-symbol
                    "
                >
                    ◌
                </div>

            </section>


            {/* =================================================
                EVOLUTION
            ================================================= */}

            <section
                className="
                    world-builder-evolution
                "
            >

                <div
                    className="
                        world-builder-evolution-inner
                    "
                >

                    <span
                        className="
                            world-builder-card-eyebrow
                        "
                    >
                        WORLD EVOLUTION™
                    </span>


                    <h2>
                        A Living World Is Never Finished.
                    </h2>


                    <p>
                        The purpose is not to complete
                        everything. The purpose is to create
                        the conditions in which the world can
                        continue becoming.
                    </p>


                    <div
                        className="
                            world-builder-evolution-line
                        "
                    />

                </div>

            </section>


        </main>

    );

}