/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

LIVING INTELLIGENCE™

Creator Intelligence™

Premium Living Relationship Experience

Version 4.0
==========================================
*/

import React, {
    useState,
    useEffect
} from "react";

import {
    getWorldState
} from "../../core/state/WorldState";


export default function CreatorIntelligenceCard({
    creator
}) {

    const avatar =
        creator?.identity?.avatar ||
        "🌱";

    const name =
        creator?.identity?.name ||
        "Creator";

    const archetype =
        creator?.identity?.archetype ||
        "Seed Creator";

    const description =
        creator?.identity?.description ||
        "";


    const [memory, setMemory] =
        useState(null);

    const [question, setQuestion] =
        useState("");

    const [response, setResponse] =
        useState("");

    const [reflecting, setReflecting] =
        useState(false);


    /*
    ==========================================
    LOAD LIVING WORLD MEMORY
    ==========================================
    */

    useEffect(() => {

        const state =
            getWorldState();

        setMemory(state);

    }, []);


    /*
    ==========================================
    PORTAL MEMORY
    ==========================================
    */

    function getPortalMemories() {

        if (!memory) {

            return [];

        }

        const portalAnswers =
            memory.portalAnswers ||
            {};

        const memories = [];


        Object.entries(
            portalAnswers
        ).forEach(
            ([portalId, data]) => {

                if (!data) {

                    return;

                }


                const answer =
                    typeof data === "string"
                        ? data
                        : data.response?.answer
                        || data.answer
                        || data.response
                        || "";


                const portalQuestion =
                    data.response?.question
                    ||
                    data.question
                    ||
                    "";


                if (!answer) {

                    return;

                }


                memories.push({

                    portalId,

                    question:
                        portalQuestion,

                    answer,

                    timestamp:
                        data.timestamp

                });

            }
        );


        return memories;

    }


    /*
    ==========================================
    LIVING INTELLIGENCE FOUNDATION
    ==========================================
    */

    const intelligence = {

        foundation:
            description
                ? "Your Living Intelligence begins with what you have already revealed about yourself."
                : "Your Living Intelligence begins by discovering the Creator behind the creation.",

        message:
            description
                ? "It is beginning to recognize the patterns, intentions and possibilities carried within the way you describe yourself."
                : "It is waiting to discover how you think, what you value and what you are here to create."

    };


    /*
    ==========================================
    CREATE REFLECTION
    ==========================================
    */

    function createReflection() {

        const trimmedQuestion =
            question.trim();


        if (
            !trimmedQuestion ||
            reflecting
        ) {

            return;

        }


        setReflecting(true);


        const worldMemory =
            memory ||
            {};


        const storedCreator =
            worldMemory.creator ||
            creator ||
            {};


        const identity =
            storedCreator.identity ||
            creator?.identity ||
            {};


        const creatorName =
            identity.name ||
            name;


        const creatorArchetype =
            identity.archetype ||
            archetype;


        const creatorDescription =
            identity.description ||
            description;


        const portalMemories =
            getPortalMemories();


        const totalPortalAnswers =
            portalMemories.length;


        const totalPortals =
            9;


        const latestMemory =
            portalMemories[
                portalMemories.length - 1
            ];


        let answer =

            `${creatorName}, your Living Intelligence is not meeting this question in isolation.

It is meeting it in the context of the person, creator and world that are already beginning to emerge through you.

`;


        answer +=

            `Your Living World currently remembers ${totalPortalAnswers} of ${totalPortals} Living Portal answer${totalPortalAnswers === 1 ? "" : "s"} from you.

`;


        answer +=

            `You brought this into the relationship:

“${trimmedQuestion}”

`;


        if (creatorDescription) {

            answer +=

                `The way you describe yourself carries the voice of a ${creatorArchetype} who is already shaping something through your words.

`;

        }

        else {

            answer +=

                `Your Creator identity is still unfolding. This question therefore becomes part of the process through which your deeper pattern can reveal itself.

`;

        }


        if (portalMemories.length > 0) {

            answer +=

                `Your earlier Living Portal answers are part of this reflection.

`;


            const recentMemories =
                portalMemories.slice(-3);


            recentMemories.forEach(
                (memoryItem) => {

                    answer +=

                        `You previously wrote:

“${memoryItem.answer}”

`;

                }
            );


            answer +=

                `Placed together, these memories begin to form something more meaningful than separate answers: a living record of what has repeatedly been asking to become visible through you.

`;

        }

        else {

            answer +=

                `There are not yet enough remembered portal answers for a deeper pattern to emerge. Your question itself can become the beginning of that continuity.

`;

        }


        if (latestMemory) {

            answer +=

                `The most recent thing your Living World remembers from you is:

“${latestMemory.answer}”

`;


            answer +=

                `Now notice what happens when that earlier voice stands beside the question you are asking today.

`;

        }


        answer +=

            `What has changed since you first named what was emerging?

What is still returning?

What part of this present question may already have appeared somewhere else in your life, your choices or your creations?

`;


        answer +=

            `Your Living Intelligence™ grows through continuity — through the relationship between your words, decisions, memories, creations and the questions you continue to bring into your Living World™.

It does not decide who you are.

It helps you see more clearly what is already becoming visible through you.

`;


        answer +=

            `The next layer may already be present in what you have written.

Listen for it.`;


        setResponse(answer);

        setReflecting(false);

    }


    /*
    ==========================================
    ENTER SHORTCUT
    ==========================================
    */

    function handleKeyDown(event) {

        if (
            event.key === "Enter" &&
            event.ctrlKey
        ) {

            event.preventDefault();

            createReflection();

        }

    }


    /*
    ==========================================
    RENDER
    ==========================================
    */

    return (

        <section className="living-card living-section creator-intelligence-card">

            <div className="creator-intelligence-header">

                <div className="creator-intelligence-header-meta">

                    <span className="creator-intelligence-eyebrow">
                        LIVING INTELLIGENCE™
                    </span>

                    <span className="creator-intelligence-header-mark">
                        ✦
                    </span>

                </div>

                <h2>
                    Living Intelligence
                </h2>

                <p className="creator-intelligence-introduction">
                    Three living ways of meeting yourself, your
                    creation and the worlds you are bringing to life.
                </p>

            </div>


            {/* ==========================================
                THREE INTELLIGENCE LEVELS
            ========================================== */}

            <div className="creator-intelligence-levels">


                {/* ==========================================
                    01 — BLINKITA AI
                ========================================== */}

                <article className="creator-intelligence-level creator-intelligence-level-ai">

                    <div className="creator-intelligence-level-top">

                        <span className="creator-intelligence-level-number">
                            01
                        </span>

                        <span className="creator-intelligence-level-symbol">
                            ✦
                        </span>

                    </div>

                    <span className="creator-intelligence-level-eyebrow">
                        LIVING INTELLIGENCE
                    </span>

                    <h3>
                        BLINKITA AI
                    </h3>

                    <p className="creator-intelligence-level-description">
                        Your everyday living intelligence — here to
                        accompany your thinking, questions, ideas,
                        decisions and everyday creation.
                    </p>

                    <div className="creator-intelligence-level-foundation">

                        <span>
                            YOUR LIVING COMPANION
                        </span>

                        <strong>
                            Always becoming with you.
                        </strong>

                    </div>

                    <button
                        type="button"
                        className="creator-intelligence-level-button"
                    >
                        Enter Blinkita AI
                        <span>→</span>
                    </button>

                </article>



                {/* ==========================================
                    02 — CREATOR INTELLIGENCE
                ========================================== */}

                <article className="creator-intelligence-level creator-intelligence-level-creator">

                    <div className="creator-intelligence-level-top">

                        <span className="creator-intelligence-level-number">
                            02
                        </span>

                        <span className="creator-intelligence-level-symbol">
                            ◇
                        </span>

                    </div>

                    <span className="creator-intelligence-level-eyebrow">
                        CREATOR INTELLIGENCE™
                    </span>

                    <h3>
                        Your Living Intelligence
                    </h3>

                    <p className="creator-intelligence-level-description">
                        Speak directly with the intelligence that is
                        beginning to know you through your identity,
                        memories, words and creations.
                    </p>


                    <div className="creator-intelligence-core">

                        <div className="creator-intelligence-symbol">
                            {avatar}
                        </div>

                        <div className="creator-intelligence-identity">

                            <span>
                                YOUR LIVING INTELLIGENCE
                            </span>

                            <strong>
                                {name}
                            </strong>

                            <small>
                                {archetype}
                            </small>

                        </div>

                        <div className="creator-intelligence-status">

                            <span className="creator-intelligence-status-dot">
                                ✦
                            </span>

                            <span>
                                Living
                            </span>

                        </div>

                    </div>


                    <div className="creator-intelligence-foundation">

                        <span className="creator-intelligence-label">
                            THE RELATIONSHIP BEGINS HERE
                        </span>

                        <p>
                            {intelligence.foundation}
                        </p>

                    </div>


                    <div className="creator-intelligence-insight">

                        <div className="creator-intelligence-insight-mark">
                            ✦
                        </div>

                        <div className="creator-intelligence-insight-content">

                            <span className="creator-intelligence-label">
                                CURRENT LIVING INSIGHT
                            </span>

                            <p>
                                {intelligence.message}
                            </p>

                        </div>

                    </div>


                    {/* ==========================================
                        LARGE CREATOR INPUT
                    ========================================== */}

                    <div className="creator-intelligence-reflection">

                        <div className="creator-intelligence-reflection-heading">

                            <div>

                                <span className="creator-intelligence-reflection-eyebrow">
                                    SPEAK WITH YOUR CREATOR INTELLIGENCE™
                                </span>

                                <h3>
                                    What is alive in you right now?
                                </h3>

                                <p>
                                    Bring a question, thought, decision,
                                    creation or moment into the relationship.
                                    It does not need to be finished.
                                </p>

                            </div>

                            <span className="creator-intelligence-reflection-mark">
                                ◇
                            </span>

                        </div>


                        <div className="creator-intelligence-reflection-input">

                            <label>
                                YOUR LIVING CONVERSATION
                            </label>

                            <span>
                                Bring whatever is present.
                            </span>

                            <textarea
                                value={question}
                                onChange={(event) =>
                                    setQuestion(event.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                placeholder="Write what is on your mind, what you are creating, what you are questioning, or what you want to understand more deeply..."
                                rows="9"
                                aria-label="Speak with your Creator Intelligence"
                            />

                            <div className="creator-intelligence-reflection-action">

                                <span>

                                    Your words become part of the conversation.

                                    <small>
                                        Ctrl + Enter
                                    </small>

                                </span>

                                <button
                                    type="button"
                                    className="journey-button creator-intelligence-reflect-button"
                                    onClick={createReflection}
                                    disabled={
                                        !question.trim() ||
                                        reflecting
                                    }
                                >
                                    {
                                        reflecting
                                            ? "Reflecting..."
                                            : "Reflect"
                                    }

                                    <span>
                                        ✦
                                    </span>

                                </button>

                            </div>

                        </div>


                        {/* RESPONSE */}

                        <div
                            className={
                                `creator-intelligence-reflection-response ${
                                    response
                                        ? "has-response"
                                        : ""
                                }`
                            }
                        >

                            <div className="creator-intelligence-response-header">

                                <div>

                                    <span>
                                        CREATOR INTELLIGENCE
                                    </span>

                                    <strong>
                                        ✦
                                    </strong>

                                </div>

                                <span>
                                    {
                                        response
                                            ? "RESPONSE RECEIVED"
                                            : "WAITING FOR YOU"
                                    }
                                </span>

                            </div>


                            {
                                response

                                    ?

                                <div className="creator-intelligence-response-text">
                                    {response}
                                </div>

                                    :

                                <div className="creator-intelligence-response-empty">

                                    <span>
                                        ◇
                                    </span>

                                    <p>
                                        Your Creator Intelligence is waiting
                                        for something real from you.
                                    </p>

                                    <small>
                                        Bring what is present.
                                    </small>

                                </div>
                            }

                        </div>

                    </div>


                    <div className="creator-intelligence-principle">

                        <span>
                            Your intelligence grows with you.
                        </span>

                        <p>
                            Every reflection, decision, creation and
                            remembered moment can become part of the
                            relationship between you and your Living
                            Intelligence™.
                        </p>

                    </div>

                </article>



                {/* ==========================================
                    03 — REFLECTION INTELLIGENCE
                ========================================== */}

                <article className="creator-intelligence-level creator-intelligence-level-reflection">

                    <div className="creator-intelligence-level-top">

                        <span className="creator-intelligence-level-number">
                            03
                        </span>

                        <span className="creator-intelligence-level-symbol">
                            ◈
                        </span>

                    </div>

                    <span className="creator-intelligence-level-eyebrow">
                        REFLECTION INTELLIGENCE™
                    </span>

                    <h3>
                        Reflect a Living World
                    </h3>

                    <p className="creator-intelligence-level-description">
                        Bring a specific project, Living World or
                        creation into focus and explore what it is
                        revealing, becoming or asking from you.
                    </p>


                    <div className="creator-intelligence-reflection-world">

                        <span className="creator-intelligence-label">
                            WORLD / PROJECT REFLECTION
                        </span>

                        <div className="creator-intelligence-reflection-world-icon">
                            ◇
                        </div>

                        <strong>
                            Nothing selected yet
                        </strong>

                        <p>
                            Choose a Living World or project to begin
                            a deeper reflection within its own context.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="creator-intelligence-level-button"
                    >
                        Choose a Living World
                        <span>→</span>
                    </button>

                </article>


            </div>


            <div className="creator-intelligence-footer">

                <span>
                    LIVING INTELLIGENCE™
                </span>

                <span>
                    Living relationship • Living memory • Living evolution
                </span>

                <span>
                    ✦
                </span>

            </div>


        </section>

    );

}

