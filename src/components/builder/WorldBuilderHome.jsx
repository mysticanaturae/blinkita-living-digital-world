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

import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";

import LivingIntelligencePanel
    from "../intelligence/LivingIntelligencePanel";

import {
    getWorldBuilderDeck
} from "../../core/living-cards/WorldBuilderLivingCards";

import "../../styles/world-builder.css";


/*
====================================================
WORLD BUILDER EXPERIENCE
====================================================

The World Builder is not the place where the
technical construction happens.

It is the threshold between Creator and Living World.

Creator
   ↓
World Builder Experience
   ↓
Living Intelligence
   ↓
Living Worlds
   ↓
Studio

====================================================
*/


const WORLD_BUILDER_QUESTIONS = [

    {
        id: "arrival",
        number: "01",
        icon: "◉",
        eyebrow: "ARRIVAL",
        title: "What brings you here?",
        prompt:
            "Before you build anything, notice what brought you to this moment. What is moving you to create this world?",
        placeholder:
            "What brought you here? What has been asking for your attention?"
    },

    {
        id: "invitation",
        number: "02",
        icon: "✦",
        eyebrow: "INVITATION",
        title: "What keeps asking to exist?",
        prompt:
            "There may already be something inside you that keeps returning. Give it a place to speak.",
        placeholder:
            "What idea, possibility, need or vision keeps returning?"
    },

    {
        id: "seed",
        number: "03",
        icon: "🌱",
        eyebrow: "WORLD SEED",
        title: "What wants to exist?",
        prompt:
            "Capture the first seed of the world without needing to explain everything yet.",
        placeholder:
            "If you could bring one thing into existence through this world, what would it be?"
    },

    {
        id: "purpose",
        number: "04",
        icon: "◈",
        eyebrow: "PURPOSE",
        title: "Why does this world need to exist?",
        prompt:
            "A Living World has a reason for being. What becomes possible because this world exists?",
        placeholder:
            "Why does this world matter? What does it make possible?"
    },

    {
        id: "people",
        number: "05",
        icon: "◎",
        eyebrow: "PEOPLE",
        title: "Who is this world here for?",
        prompt:
            "Think beyond an audience list. Who is meant to enter, use, experience or benefit from this world?",
        placeholder:
            "Who is this world here for?"
    },

    {
        id: "experience",
        number: "06",
        icon: "◇",
        eyebrow: "EXPERIENCE",
        title: "What should someone experience here?",
        prompt:
            "Imagine someone entering your world for the first time. What do you want them to feel, discover, understand or become able to do?",
        placeholder:
            "What should someone experience when they enter this world?"
    },

    {
        id: "essence",
        number: "07",
        icon: "∞",
        eyebrow: "ESSENCE",
        title: "What must always remain true?",
        prompt:
            "As your world grows, some things may change. What is essential enough that it must remain part of the world?",
        placeholder:
            "What is the essential truth, quality or principle of this world?"
    },

    {
        id: "possibility",
        number: "08",
        icon: "✧",
        eyebrow: "POSSIBILITY",
        title: "What could this world become?",
        prompt:
            "Do not limit the world to what you can build today. Let yourself see its larger possibility.",
        placeholder:
            "If this world became everything it could become, what would it be?"
    },

    {
        id: "commitment",
        number: "09",
        icon: "↗",
        eyebrow: "COMMITMENT",
        title: "Are you ready to bring it into existence?",
        prompt:
            "A world becomes real through what you choose to bring into existence. What are you ready to begin?",
        placeholder:
            "What are you ready to bring into existence now?"
    }

];


const BUILDING_LAYERS = [

    {
        id: "seed",
        number: "01",
        icon: "✦",
        title: "WORLD SEED",
        question: "What wants to exist?"
    },

    {
        id: "identity",
        number: "02",
        icon: "◈",
        title: "WORLD IDENTITY",
        question: "Who is this world?"
    },

    {
        id: "structure",
        number: "03",
        icon: "⌘",
        title: "WORLD STRUCTURE",
        question: "How is this world built?"
    },

    {
        id: "content",
        number: "04",
        icon: "◇",
        title: "WORLD CONTENT",
        question: "What lives inside it?"
    },

    {
        id: "intelligence",
        number: "05",
        icon: "∞",
        title: "WORLD INTELLIGENCE",
        question: "How does it work?"
    },

    {
        id: "memory",
        number: "06",
        icon: "◌",
        title: "WORLD MEMORY",
        question: "What has happened here?"
    },

    {
        id: "evolution",
        number: "07",
        icon: "↗",
        title: "WORLD EVOLUTION",
        question: "How is it becoming?"
    }

];


const DEFAULT_WORLD_BUILDER = {
    answers: {},
    completed: false,
    analysis: null,
    startedAt: null,
    completedAt: null
};


function getStoredWorldBuilder() {

    try {

        const state =
            getWorldState() || {};

        return (
            state.worldBuilderExperience ||
            DEFAULT_WORLD_BUILDER
        );

    } catch {

        return DEFAULT_WORLD_BUILDER;

    }

}


function saveWorldBuilder(nextData) {

    updateWorldState({

        worldBuilderExperience:
            nextData

    });

}


function buildIntelligenceAnalysis(answers) {

    const values =
        WORLD_BUILDER_QUESTIONS.map(
            question =>
                String(
                    answers?.[question.id] || ""
                ).trim()
        );

    const filled =
        values.filter(Boolean);

    const combined =
        filled.join(" ").trim();

    const seed =
        String(
            answers?.seed ||
            answers?.invitation ||
            ""
        ).trim();

    const purpose =
        String(
            answers?.purpose ||
            ""
        ).trim();

    const people =
        String(
            answers?.people ||
            ""
        ).trim();

    const experience =
        String(
            answers?.experience ||
            ""
        ).trim();

    const essence =
        String(
            answers?.essence ||
            ""
        ).trim();

    const possibility =
        String(
            answers?.possibility ||
            ""
        ).trim();

    return {

        readiness:
            filled.length >= 7
                ? "emerging"
                : "forming",

        seed:
            seed ||
            "Your first seed is still revealing itself.",

        purpose:
            purpose ||
            "The purpose of this world is beginning to emerge.",

        people:
            people ||
            "The people this world serves are still becoming clear.",

        experience:
            experience ||
            "The experience of entering this world is still unfolding.",

        essence:
            essence ||
            "The essential quality of this world is still being discovered.",

        possibility:
            possibility ||
            "The larger possibility of this world has not yet been defined.",

        signal:
            combined
                ? "Your answers already contain the beginnings of a Living World."
                : "Begin with the first question and allow the world to reveal itself."

    };

}


export default function WorldBuilderHome() {

    const stored =
        useMemo(
            () =>
                getStoredWorldBuilder(),
            []
        );


    const [answers, setAnswers] =
        useState(
            stored.answers || {}
        );


    const [activeQuestion, setActiveQuestion] =
        useState(
            0
        );


    const [analysis, setAnalysis] =
        useState(
            stored.analysis || null
        );


    const [isComplete, setIsComplete] =
        useState(
            Boolean(
                stored.completed
            )
        );


    const [search, setSearch] =
        useState("");


    const [statusFilter, setStatusFilter] =
        useState("all");


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


    const currentQuestion =
        WORLD_BUILDER_QUESTIONS[
            activeQuestion
        ];


    const answeredCount =
        WORLD_BUILDER_QUESTIONS.filter(
            question =>
                String(
                    answers?.[question.id] || ""
                ).trim()
        ).length;


    const progress =
        Math.round(
            (
                answeredCount /
                WORLD_BUILDER_QUESTIONS.length
            ) * 100
        );


    function updateAnswer(
        questionId,
        value
    ) {

        const nextAnswers = {

            ...answers,

            [questionId]:
                value

        };

        setAnswers(
            nextAnswers
        );

        saveWorldBuilder({

            ...stored,

            answers:
                nextAnswers,

            completed:
                false,

            analysis:
                null,

            startedAt:
                stored.startedAt ||
                new Date().toISOString()

        });

        setAnalysis(
            null
        );

        setIsComplete(
            false
        );

    }


    function nextQuestion() {

        if (
            activeQuestion <
            WORLD_BUILDER_QUESTIONS.length - 1
        ) {

            setActiveQuestion(
                activeQuestion + 1
            );

            return;

        }

        completeExperience();

    }


    function previousQuestion() {

        if (
            activeQuestion > 0
        ) {

            setActiveQuestion(
                activeQuestion - 1
            );

        }

    }


    function completeExperience() {

        const result =
            buildIntelligenceAnalysis(
                answers
            );

        setAnalysis(
            result
        );

        setIsComplete(
            true
        );

        saveWorldBuilder({

            ...stored,

            answers,

            completed:
                true,

            analysis:
                result,

            completedAt:
                new Date().toISOString(),

            startedAt:
                stored.startedAt ||
                new Date().toISOString()

        });

    }


    function startAgain() {

        setAnswers({});

        setAnalysis(null);

        setIsComplete(false);

        setActiveQuestion(0);

        saveWorldBuilder({

            ...DEFAULT_WORLD_BUILDER,

            startedAt:
                new Date().toISOString()

        });

    }


    function goToLivingWorlds() {

        window.location.href =
            "/world/living-worlds";

    }


    const visibleStatusFilters = [

        {
            id: "seed",
            icon: "🌱",
            label: "SEED"
        },

        {
            id: "growing",
            icon: "🌿",
            label: "GROWING"
        },

        {
            id: "living",
            icon: "🌎",
            label: "LIVING"
        },

        {
            id: "completed",
            icon: "✦",
            label: "COMPLETED"
        },

        {
            id: "all",
            icon: "🌀",
            label: "ALL WORLDS"
        }

    ];


    return (

        <main
            className="living-page world-builder-page world-builder-home"
        >


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
                        Your Living World begins as a possibility —
                        and becomes alive through what you choose
                        to bring into existence.
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
                        Before you build your world,
                        discover what wants to become one.
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

                        <span>
                            WORLD
                        </span>

                        <strong>
                            ∞
                        </strong>

                        <small>
                            IN BECOMING
                        </small>

                    </div>

                </div>

            </section>

            <section
                id="world-builder-experience"
                className="
                    world-builder-experience
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
                        THE WORLD BUILDER EXPERIENCE
                    </span>

                    <h2>
                        From Seed to Living World
                    </h2>

                    <p>
                        Before you build, take the time to discover
                        what your world is asking to become.
                    </p>

                </div>


                {!isComplete ? (

                    <div
                        className="
                            world-builder-question-layout
                        "
                    >

                        <aside
                            className="
                                world-builder-question-index
                            "
                        >

                            <span>
                                WORLD BUILDER™
                            </span>

                            <strong>
                                {String(
                                    activeQuestion + 1
                                ).padStart(
                                    2,
                                    "0"
                                )}
                            </strong>

                            <small>
                                OF
                                {" "}
                                {String(
                                    WORLD_BUILDER_QUESTIONS.length
                                ).padStart(
                                    2,
                                    "0"
                                )}
                            </small>


                            <div
                                className="
                                    world-builder-question-progress
                                "
                            >

                                <div
                                    style={{
                                        width:
                                            `${progress}%`
                                    }}
                                />

                            </div>


                            <div
                                className="
                                    world-builder-question-navigation
                                "
                            >

                                {WORLD_BUILDER_QUESTIONS.map(
                                    (
                                        question,
                                        index
                                    ) => (

                                        <button
                                            key={
                                                question.id
                                            }
                                            type="button"
                                            className={`
                                                ${
                                                    index ===
                                                    activeQuestion
                                                        ? "is-active"
                                                        : ""
                                                }
                                                ${
                                                    answers?.[
                                                        question.id
                                                    ]
                                                        ? "is-answered"
                                                        : ""
                                                }
                                            `}
                                            onClick={() =>
                                                setActiveQuestion(
                                                    index
                                                )
                                            }
                                        >

                                            <span>
                                                {
                                                    question.number
                                                }
                                            </span>

                                            <small>
                                                {
                                                    question.eyebrow
                                                }
                                            </small>

                                        </button>

                                    )
                                )}

                            </div>

                        </aside>


                        <div
                            className="
                                world-builder-question-card
                                world-builder-premium-card
                            "
                        >

                            <div
                                className="
                                    world-builder-question-symbol
                                "
                            >
                                {
                                    currentQuestion.icon
                                }
                            </div>


                            <span
                                className="
                                    world-builder-card-eyebrow
                                "
                            >
                                {
                                    currentQuestion.eyebrow
                                }
                            </span>


                            <h3>
                                {
                                    currentQuestion.title
                                }
                            </h3>


                            <p
                                className="
                                    world-builder-question-prompt
                                "
                            >
                                {
                                    currentQuestion.prompt
                                }
                            </p>


                            <textarea
                                value={
                                    answers?.[
                                        currentQuestion.id
                                    ] || ""
                                }
                                onChange={
                                    event =>
                                        updateAnswer(
                                            currentQuestion.id,
                                            event.target.value
                                        )
                                }
                                placeholder={
                                    currentQuestion.placeholder
                                }
                                rows={8}
                            />


                            <div
                                className="
                                    world-builder-question-actions
                                "
                            >

                                <button
                                    type="button"
                                    className="
                                        world-builder-secondary-button
                                    "
                                    onClick={
                                        previousQuestion
                                    }
                                    disabled={
                                        activeQuestion === 0
                                    }
                                >
                                    ← Previous
                                </button>


                                <button
                                    type="button"
                                    className="
                                        world-builder-primary-button
                                    "
                                    onClick={
                                        nextQuestion
                                    }
                                >
                                    {
                                        activeQuestion ===
                                        WORLD_BUILDER_QUESTIONS.length - 1
                                            ? "Reveal My World"
                                            : "Continue"
                                    }

                                    <span>
                                        →
                                    </span>

                                </button>

                            </div>

                        </div>

                    </div>

                ) : (

                    <div
                        className="
                            world-builder-intelligence-result
                            world-builder-premium-card
                        "
                    >

                        <div
                            className="
                                world-builder-intelligence-symbol
                            "
                        >
                            ∞
                        </div>


                        <span
                            className="
                                world-builder-card-eyebrow
                            "
                        >
                            WORLD BUILDER INTELLIGENCE™
                        </span>


                        <h3>
                            Your World Is Beginning
                            <br />
                            to Reveal Itself
                        </h3>


                        <p>
                            Your answers already contain
                            the beginnings of a Living World.
                            This first reading is not a final definition.
                            It is a starting map.
                        </p>


                        {analysis && (

                            <div
                                className="
                                    world-builder-analysis-grid
                                "
                            >

                                <article>

                                    <span>
                                        WORLD SEED
                                    </span>

                                    <p>
                                        {
                                            analysis.seed
                                        }
                                    </p>

                                </article>


                                <article>

                                    <span>
                                        PURPOSE
                                    </span>

                                    <p>
                                        {
                                            analysis.purpose
                                        }
                                    </p>

                                </article>


                                <article>

                                    <span>
                                        WHO IT SERVES
                                    </span>

                                    <p>
                                        {
                                            analysis.people
                                        }
                                    </p>

                                </article>


                                <article>

                                    <span>
                                        EXPERIENCE
                                    </span>

                                    <p>
                                        {
                                            analysis.experience
                                        }
                                    </p>

                                </article>


                                <article>

                                    <span>
                                        ESSENCE
                                    </span>

                                    <p>
                                        {
                                            analysis.essence
                                        }
                                    </p>

                                </article>


                                <article>

                                    <span>
                                        POSSIBILITY
                                    </span>

                                    <p>
                                        {
                                            analysis.possibility
                                        }
                                    </p>

                                </article>

                            </div>

                        )}


                        <div
                            className="
                                world-builder-intelligence-signal
                            "
                        >

                            <span>
                                LIVING INTELLIGENCE
                            </span>

                            <strong>
                                {
                                    analysis?.signal ||
                                    "Your world is beginning to reveal itself."
                                }
                            </strong>

                        </div>


                        <div
                            className="
                                world-builder-question-actions
                            "
                        >

                            <button
                                type="button"
                                className="
                                    world-builder-secondary-button
                                "
                                onClick={
                                    startAgain
                                }
                            >
                                Revisit Questions
                            </button>


                            <button
                                type="button"
                                className="
                                    world-builder-primary-button
                                "
                                onClick={
                                    goToLivingWorlds
                                }
                            >
                                Enter Living Worlds
                                <span>
                                    →
                                </span>
                            </button>

                        </div>

                    </div>

                )}

            </section>

                        <LivingIntelligencePanel />
<section
                className="
                    world-builder-building-path
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
                        THE BUILDING PATH
                    </span>

                    <h2>
                        From Seed to Living World
                    </h2>

                    <p>
                        Once your world has a beginning,
                        these are the layers through which
                        it can grow.
                    </p>

                </div>


                <div
                    className="
                        world-builder-section-grid
                    "
                >

                    {BUILDING_LAYERS.map(
                        layer => (

                            <article
                                key={
                                    layer.id
                                }
                                className="
                                    world-builder-section-card
                                    world-builder-premium-card
                                "
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
                                        {
                                            layer.number
                                        }
                                    </span>

                                    <span
                                        className="
                                            world-builder-section-icon
                                        "
                                    >
                                        {
                                            layer.icon
                                        }
                                    </span>

                                </div>


                                <span
                                    className="
                                        world-builder-card-eyebrow
                                    "
                                >
                                    {
                                        layer.number === "01"
                                            ? "BEGIN HERE"
                                            : "WORLD LAYER"
                                    }
                                </span>


                                <h3>
                                    {
                                        layer.title
                                    }
                                </h3>


                                <strong>
                                    {
                                        layer.question
                                    }
                                </strong>


                                <div
                                    className="
                                        world-builder-section-card-footer
                                    "
                                >

                                    <span>
                                        Explore
                                    </span>

                                    <span>
                                        →
                                    </span>

                                </div>

                            </article>

                        )
                    )}

                </div>

            </section>

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
                        Living Cards become creative materials
                        you can bring into the architecture
                        of your world.
                    </p>

                </div>


                <div
                    className="
                        world-builder-card-deck-preview
                    "
                >

                    {livingCards
                        .slice(
                            0,
                            5
                        )
                        .map(
                            (
                                card,
                                index
                            ) => (

                                <div
                                    key={
                                        card.id ||
                                        index
                                    }
                                    className="
                                        world-builder-living-card
                                    "
                                >

                                    <div
                                        className="
                                            world-builder-living-card-image
                                        "
                                    >
                                        {card.image ? (
                                            <img
                                                src={card.image}
                                                alt={card.title || "Living Card"}
                                            />
                                        ) : (
                                            <span>
                                                {card.symbol || "✦"}
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        className="
                                            world-builder-living-card-info
                                        "
                                    >
                                        <small>
                                            {String(card.number).padStart(3, "0")}
                                        </small>

                                        <strong>
                                            {card.title || "Living Card"}
                                        </strong>
                                    </div>

                                </div>

                            )
                        )}

                </div>

            </section>

            <section
                className="
                    world-builder-living-worlds
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
                        MY LIVING WORLDS
                    </span>

                    <h2>
                        Your Living Worlds
                    </h2>

                    <p>
                        Your Living Worlds — from first seed
                        to living creation.
                    </p>

                </div>


                <div
                    className="
                        world-builder-world-search
                    "
                >

                    <span>
                        ◯
                    </span>

                    <input
                        type="search"
                        value={search}
                        onChange={
                            event =>
                                setSearch(
                                    event.target.value
                                )
                        }
                        placeholder="Search your Living Worlds"
                    />

                </div>


                <div
                    className="
                        world-builder-status-filters
                    "
                >

                    {visibleStatusFilters.map(
                        filter => (

                            <button
                                key={
                                    filter.id
                                }
                                type="button"
                                className={
                                    statusFilter ===
                                    filter.id
                                        ? "is-active"
                                        : ""
                                }
                                onClick={() =>
                                    setStatusFilter(
                                        filter.id
                                    )
                                }
                            >

                                <span>
                                    {
                                        filter.icon
                                    }
                                </span>

                                <strong>
                                    {
                                        filter.label
                                    }
                                </strong>

                                <small>
                                    0
                                </small>

                            </button>

                        )
                    )}

                </div>


                <div
                    className="
                        world-builder-empty-worlds
                    "
                >

                    <div
                        className="
                            world-builder-empty-worlds-symbol
                        "
                    >
                        ◌
                    </div>

                    <h3>
                        No Living Worlds yet.
                    </h3>

                    <p>
                        Your first Living World will appear
                        here when you begin creating.
                    </p>


                    <button
                        type="button"
                        className="
                            world-builder-primary-button
                        "
                        onClick={
                            () =>
                                document
                                    .getElementById(
                                        "world-builder-experience"
                                    )
                                    ?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                        }
                    >
                        Begin Your World
                        <span>
                            →
                        </span>
                    </button>

                </div>

            </section>

            <section
                className="
                    world-builder-evolution
                    world-builder-premium-section
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
                        WORLD BUILDER™
                    </span>


                    <h2>
                        Bring Your World to Life.
                    </h2>


                    <p>
                        Begin with what wants to exist.
                        Then give it a place to become.
                    </p>


                    <div
                        className="
                            world-builder-evolution-line
                        "
                    />


                    <button
                        type="button"
                        className="
                            world-builder-primary-button
                        "
                        onClick={
                            goToLivingWorlds
                        }
                    >
                        Start Building
                        <span>
                            →
                        </span>
                    </button>

                </div>

            </section>


        </main>

    );

}










