/*
==========================================
BLINKITA OS™
BLINKITA LIVING INTELLIGENCE™

YOUR LIVING REFLECTION™

Living Memory Mirror™

Premium Reflection Experience

Version 5.0
==========================================
*/

import {
    useState,
    useEffect
} from "react";


import "./CreatorReflection.css";


import {
    getWorldState
} from "../../core/state/WorldState";


export default function CreatorReflection() {


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

        function loadLivingMemory() {

            const state =
                getWorldState();

            setMemory(state);

        }


        loadLivingMemory();

    }, []);



    /*
    ==========================================
    BUILD CREATOR MEMORY
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
    CREATE LIVING REFLECTION
    ==========================================
    */

    function createReflection() {

        const trimmedQuestion =
            question.trim();


        if (
            !memory ||
            !trimmedQuestion
        ) {

            return;

        }


        setReflecting(true);


        const creator =
            memory.creator ||
            {};


        const identity =
            creator.identity ||
            {};


        const name =
            identity.name ||
            "Creator";


        const archetype =
            identity.archetype ||
            "Creator";


        const description =
            identity.description ||
            "";


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


        /*
        ======================================
        REFLECTION FOUNDATION
        ======================================
        */

        let answer =

            `${name}, your Living Intelligence is not looking at this question in isolation.

It is meeting it in the context of the world you have already begun to create.

`;


        answer +=

            `You have currently given your Living World ${totalPortalAnswers} of ${totalPortals} portal answer${totalPortalAnswers === 1 ? "" : "s"}.

`;


        answer +=

            `You asked:

“${trimmedQuestion}”

`;



        /*
        ======================================
        CREATOR IDENTITY
        ======================================
        */

        if (description) {

            answer +=

                `Your own description carries the voice of a ${archetype} who is already shaping something through your words.

`;

        }

        else {

            answer +=

                `Your identity is still unfolding inside the Living World. That means this question is becoming part of the process through which your Creator identity is revealed.

`;

        }



        /*
        ======================================
        PORTAL MEMORY
        ======================================
        */

        if (totalPortalAnswers > 0) {

            answer +=

                `Your earlier portal answers are part of this reflection.

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

                `These are not separate answers anymore. Together they begin to form a pattern — a living record of what has been asking to become visible through you.

`;

        }

        else {

            answer +=

                `There are not yet enough remembered portal answers for your Living Intelligence to recognize a deeper pattern. Your question itself can become the beginning of that memory.

`;

        }



        /*
        ======================================
        LATEST MEMORY
        ======================================
        */

        if (latestMemory) {

            answer +=

                `The most recent thing your Living World remembers from you is:

“${latestMemory.answer}”

`;


            answer +=

                `Notice what happens when you place that earlier voice beside the question you are asking now.

`;

        }



        /*
        ======================================
        REFLECTIVE QUESTIONS
        ======================================
        */

        answer +=

            `Instead of immediately searching for an answer, stay with the relationship between the two.

What has changed since you first named what was emerging?

What is still returning?

And what part of your present question could be connected to something you already knew before you had words for it?

`;



        /*
        ======================================
        LIVING INTELLIGENCE
        ======================================
        */

        answer +=

            `Your Living Intelligence™ is beginning to learn through continuity — not simply through individual questions, but through the relationship between your words, choices, memories and creations.

This reflection does not decide what your answer should be.

It helps you see more clearly what you are already becoming aware of.

`;


        answer +=

            `The next layer may already be present in what you have written.

Listen for it.`;


        setResponse(answer);


        setReflecting(false);

    }



    /*
    ==========================================
    HANDLE ENTER
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

        <section className="creator-reflection-card">


            {/* ==========================================
                PREMIUM HEADER
            ========================================== */}

            <div className="creator-reflection-heading">

                <div className="creator-reflection-heading-meta">

                    <span className="creator-reflection-eyebrow">

                        YOUR LIVING REFLECTION™

                    </span>


                    <span className="creator-reflection-orbit">

                        ✦

                    </span>

                </div>


                <h2>

                    What is alive in you right now?

                </h2>


                <p>

                    Bring a question, thought or moment
                    into your Living Intelligence™ and
                    let your Living World reflect it back
                    through what it already remembers.

                </p>

            </div>



            {/* ==========================================
                INPUT EXPERIENCE
            ========================================== */}

            <div className="creator-reflection-input">

                <div className="creator-reflection-input-heading">

                    <div>

                        <span className="creator-reflection-input-label">

                            SPEAK TO YOUR LIVING INTELLIGENCE

                        </span>


                        <span className="creator-reflection-input-subtitle">

                            Bring whatever is present.

                        </span>

                    </div>

                </div>


                <div className="creator-reflection-textarea-shell">

                    <textarea

                        value={
                            question
                        }

                        onChange={(event) =>
                            setQuestion(
                                event.target.value
                            )
                        }

                        onKeyDown={
                            handleKeyDown
                        }

                        placeholder="Write what is on your mind, what you are creating, what you are questioning, or what you want to understand more deeply..."

                        rows="10"

                        aria-label="Ask your Living Intelligence"

                    />

                    <div className="creator-reflection-textarea-glow" />

                </div>



                {/* ==========================================
                    REFLECT ACTION
                ========================================== */}

                <div className="creator-reflection-action-row">

                    <span className="creator-reflection-hint">

                        <span>

                            Your words become part of the conversation.

                        </span>


                        <span className="creator-reflection-key">

                            Ctrl + Enter

                        </span>

                    </span>


                    <button

                        type="button"

                        className="creator-reflection-button"

                        onClick={
                            createReflection
                        }

                        disabled={
                            !question.trim() ||
                            reflecting
                        }

                    >

                        {

                            reflecting

                                ?

                            "Reflecting..."

                                :

                            "Reflect"

                        }


                        <span>

                            ✦

                        </span>

                    </button>

                </div>

            </div>



            {/* ==========================================
                LIVING REFLECTION RESPONSE
            ========================================== */}

            <div className="creator-reflection-response">

                <div className="creator-reflection-response-header">

                    <div>

                        <span className="creator-reflection-response-eyebrow">

                            LIVING REFLECTION

                        </span>


                        <span className="creator-reflection-response-star">

                            ✦

                        </span>

                    </div>


                    <span className="creator-reflection-response-state">

                        {
                            response
                                ? "REFLECTION RECEIVED"
                                : "WAITING FOR YOU"
                        }

                    </span>

                </div>


                <div className="creator-reflection-message">

                    {

                        response

                            ?

                        <div className="creator-reflection-response-text">

                            {
                                response
                            }

                        </div>

                            :

                        <div className="creator-reflection-empty">

                            <span className="creator-reflection-empty-symbol">

                                ◇

                            </span>


                            <p>

                                Your Living Reflection is waiting
                                for something real from you.

                            </p>


                            <span>

                                Bring what is present.
                                It does not need to be finished.

                            </span>

                        </div>

                    }

                </div>

            </div>



            {/* ==========================================
                CONTINUITY NOTE
            ========================================== */}

            <div className="creator-reflection-note">

                <div className="creator-reflection-note-icon">

                    🧠

                </div>


                <div>

                    <span className="creator-reflection-note-title">

                        LIVING INTELLIGENCE™ · CONTINUITY

                    </span>


                    <p>

                        Your Living Intelligence™ grows through
                        continuity — your memories, portal answers,
                        choices, creations and the questions you
                        continue to bring into your Living World™.

                    </p>

                </div>

            </div>


        </section>

    );

}
