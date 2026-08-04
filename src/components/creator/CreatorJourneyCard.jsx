/*
==========================================
BLINKITA OS™

MY LIVING CREATION PATH™

Creator evolution and creation journey

Version 2.1

Creator → World Builder™
==========================================
*/

import React from "react";


export default function CreatorJourneyCard({

    creator,

    evolution,

    creatorStage,

    worldState,

}) {


    /*
    ==========================================
    CREATOR SYMBOL
    ==========================================
    */

    const creatorSymbol =
        creator?.identity?.avatar ||
        "🌱";


    /*
    ==========================================
    CURRENT EVOLUTION
    ==========================================
    */

    const currentStage =
        creatorStage ||
        evolution?.stage ||
        "Awakening";


    const currentLevel =
        evolution?.level ||
        1;


    /*
    ==========================================
    CREATION ARC
    ==========================================
    */

    const creationStages = [

        {
            key: "seed",
            symbol: "🌱",
            label: "Seed"
        },

        {
            key: "awakening",
            symbol: "✨",
            label: "Awakening"
        },

        {
            key: "creation",
            symbol: "🌎",
            label: "Creation"
        },

        {
            key: "expansion",
            symbol: "🌌",
            label: "Expansion"
        },

        {
            key: "legacy",
            symbol: "♾",
            label: "Legacy"
        }

    ];


    const normalizedStage =
        String(currentStage)
            .toLowerCase();


    let currentStageKey =
        "awakening";


    if (
        normalizedStage.includes("begin")
        ||
        normalizedStage.includes("seed")
    ) {

        currentStageKey =
            "seed";

    }


    if (
        normalizedStage.includes("awak")
    ) {

        currentStageKey =
            "awakening";

    }


    if (
        normalizedStage.includes("creat")
    ) {

        currentStageKey =
            "creation";

    }


    if (
        normalizedStage.includes("expand")
    ) {

        currentStageKey =
            "expansion";

    }


    if (
        normalizedStage.includes("legacy")
    ) {

        currentStageKey =
            "legacy";

    }


    /*
    ==========================================
    CURRENT POSITION TEXT
    ==========================================
    */

    const positionMessages = {

        seed:
            "Something is beginning to take root. Your first task is not to build everything, but to notice what wants to become.",

        awakening:
            "You have begun to recognize what wants to be created through you. The next step is to give what is emerging enough space to become a Living World™.",

        creation:
            "Your intention is beginning to take form. You are moving from imagining what could exist to actively bringing a Living Creation™ into being.",

        expansion:
            "What you created is beginning to grow beyond its first form. Your journey now becomes one of nurturing, connecting and expanding what is alive.",

        legacy:
            "Your creations are becoming part of something larger than their beginning. You are entering the space where creation becomes continuity, memory and legacy."

    };


    const currentPositionMessage =
        positionMessages[
            currentStageKey
        ] ||
        positionMessages.awakening;


    /*
    ==========================================
    JOURNEY MEMORY
    ==========================================
    */

    const journeyMemory = [

        {
            symbol: "✨",
            text: "Creator Identity Activated"
        },

        {
            symbol: "🌙",
            text: "Living Time Discovered"
        },

        {
            symbol: "🌎",
            text: "First Living World Connection"
        },

        {
            symbol: "🌱",
            text: "Creation Stage Reached"
        }

    ];


    /*
    ==========================================
    RENDER
    ==========================================
    */

    return (

        <section
            className="living-card living-section creator-journey-premium"
        >


            {/* ==========================================
                HEADER
            ========================================== */}

            <div className="creator-journey-header">


                <div className="creator-symbol-circle">

                    {creatorSymbol}

                </div>


                <span className="creator-identity-eyebrow">

                    MY LIVING CREATION PATH™

                </span>


                <h2>

                    My Living Creation Path

                </h2>


                <p>

                    Your journey as a Creator becoming a World Builder™.

                    Every creation leaves a memory.

                </p>


            </div>



            {/* ==========================================
                CURRENT EVOLUTION + JOURNEY MEMORY
            ========================================== */}

            <div className="living-grid creator-journey-overview">


                <article className="living-card creator-journey-panel">


                    <span className="creator-identity-eyebrow">

                        CURRENT EVOLUTION

                    </span>


                    <div className="creator-journey-evolution-symbol">

                        🌱

                    </div>


                    <h3>

                        {currentStage}

                    </h3>


                    <p className="creator-journey-level">

                        Level: {currentLevel}

                    </p>


                </article>



                <article className="living-card creator-journey-panel">


                    <span className="creator-identity-eyebrow">

                        🌀 JOURNEY MEMORY™

                    </span>


                    <div className="creator-journey-memory">


                        {

                            journeyMemory.map(

                                (memory, index) => (

                                    <div
                                        key={index}
                                        className="creator-journey-memory-item"
                                    >

                                        <span>

                                            {memory.symbol}

                                        </span>


                                        <p>

                                            {memory.text}

                                        </p>

                                    </div>

                                )

                            )

                        }


                    </div>


                </article>


            </div>



            {/* ==========================================
                WHERE YOU ARE NOW
            ========================================== */}

            <div className="creator-journey-current-position">


                <div className="creator-journey-section-heading">


                    <span className="creator-identity-eyebrow">

                        🌎 WHERE YOU ARE NOW

                    </span>


                    <h3>

                        {

                            currentStageKey === "seed"

                                ? "Seed — The Beginning"

                                :

                            currentStageKey === "awakening"

                                ? "Awakening — The First Movement"

                                :

                            currentStageKey === "creation"

                                ? "Creation — Giving Form to Possibility"

                                :

                            currentStageKey === "expansion"

                                ? "Expansion — Growing What Is Alive"

                                :

                            "Legacy — What Continues Beyond You"

                        }

                    </h3>


                    <p>

                        {currentPositionMessage}

                    </p>


                </div>


            </div>



            {/* ==========================================
                CREATION ARC
            ========================================== */}

            <div className="creator-journey-arc">


                <div className="creator-journey-section-heading">


                    <span className="creator-identity-eyebrow">

                        YOUR CREATION ARC

                    </span>


                    <p>

                        Every Living Creation™ moves through its
                        own rhythm of becoming.

                    </p>


                </div>


                <div className="creator-journey-stages">


                    {

                        creationStages.map(

                            (stage, index) => {


                                const isCurrent =
                                    stage.key ===
                                    currentStageKey;


                                return (

                                    <React.Fragment
                                        key={stage.key}
                                    >


                                        <div
                                            className={
                                                isCurrent
                                                    ? "creator-journey-stage active"
                                                    : "creator-journey-stage"
                                            }
                                        >


                                            <div className="creator-journey-stage-symbol">

                                                {stage.symbol}

                                            </div>


                                            <span>

                                                {stage.label}

                                            </span>


                                            {

                                                isCurrent && (

                                                    <small>

                                                        You are here

                                                    </small>

                                                )

                                            }


                                        </div>


                                        {

                                            index <
                                            creationStages.length - 1 && (

                                                <div className="creator-journey-stage-arrow">

                                                    →

                                                </div>

                                            )

                                        }


                                    </React.Fragment>

                                );

                            }

                        )

                    }


                </div>


            </div>



            {/* ==========================================
                NEXT MOVEMENT
            ========================================== */}

            <div className="creator-journey-next-movement">


                <div className="creator-journey-next-symbol">

                    ✨

                </div>


                <div>


                    <span className="creator-identity-eyebrow">

                        YOUR NEXT MOVEMENT

                    </span>


                    <h3>

                        Choose what wants to become alive.

                    </h3>


                    <p>

                        Your next step is not about creating
                        everything at once. It is about recognizing
                        the kind of Living Creation™ that is ready
                        to emerge through you.

                    </p>


                </div>


            </div>


        </section>

    );

}
