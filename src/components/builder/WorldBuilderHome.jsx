/*
============================================================
BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER™
Who You Are as Creator

Living World Builder Foundation
============================================================
*/

import { useMemo, useState } from "react";

import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";


/*
============================================================
TZOLK'IN
============================================================
*/

const TZOLKIN_CORRELATION = 584283;

const TZOLKIN_SIGNS = [

    {
        index: 0,
        classic: "Imix",
        local: "Imox",
        symbol: "𓆈",
        element: "Water"
    },

    {
        index: 1,
        classic: "Ik'",
        local: "Iq'",
        symbol: "𓂀",
        element: "Wind"
    },

    {
        index: 2,
        classic: "Ak'b'al",
        local: "Aq'ab'al",
        symbol: "☽",
        element: "Dawn"
    },

    {
        index: 3,
        classic: "K'an",
        local: "K'at",
        symbol: "✦",
        element: "Seed"
    },

    {
        index: 4,
        classic: "Chikchan",
        local: "Kan",
        symbol: "𓆗",
        element: "Serpent"
    },

    {
        index: 5,
        classic: "Kimi",
        local: "Kame",
        symbol: "☠",
        element: "Transformation"
    },

    {
        index: 6,
        classic: "Manik'",
        local: "Kej",
        symbol: "🖐",
        element: "Hand"
    },

    {
        index: 7,
        classic: "Lamat",
        local: "Q'anil",
        symbol: "✺",
        element: "Seed of Life"
    },

    {
        index: 8,
        classic: "Muluk",
        local: "Toj",
        symbol: "💧",
        element: "Offering"
    },

    {
        index: 9,
        classic: "Ok",
        local: "Tz'i'",
        symbol: "🐕",
        element: "Path"
    },

    {
        index: 10,
        classic: "Chuwen",
        local: "B'atz'",
        symbol: "🌀",
        element: "Thread"
    },

    {
        index: 11,
        classic: "Eb'",
        local: "E",
        symbol: "🛤",
        element: "Road"
    },

    {
        index: 12,
        classic: "B'en",
        local: "Aj",
        symbol: "🌱",
        element: "Growth"
    },

    {
        index: 13,
        classic: "Ix",
        local: "Ix",
        symbol: "🐆",
        element: "Jaguar"
    },

    {
        index: 14,
        classic: "Men",
        local: "Tz'ikin",
        symbol: "🦅",
        element: "Eagle"
    },

    {
        index: 15,
        classic: "K'ib'",
        local: "Ajmaq",
        symbol: "🕯",
        element: "Wisdom"
    },

    {
        index: 16,
        classic: "Kab'an",
        local: "No'j",
        symbol: "🌎",
        element: "Earth"
    },

    {
        index: 17,
        classic: "Etz'nab'",
        local: "Tijax",
        symbol: "◈",
        element: "Flint"
    },

    {
        index: 18,
        classic: "Kawak",
        local: "Kawoq",
        symbol: "⚡",
        element: "Storm"
    },

    {
        index: 19,
        classic: "Ajaw",
        local: "Ajaw",
        symbol: "☀",
        element: "Sun"
    }

];


/*
============================================================
JULIAN DAY
============================================================
*/

function getJulianDayNumber(
    year,
    month,
    day
) {

    const a =
        Math.floor(
            (14 - month) / 12
        );

    const y =
        year +
        4800 -
        a;

    const m =
        month +
        (12 * a) -
        3;

    return (

        day +

        Math.floor(
            (153 * m + 2) / 5
        ) +

        (365 * y) +

        Math.floor(
            y / 4
        ) -

        Math.floor(
            y / 100
        ) +

        Math.floor(
            y / 400
        ) -

        32045

    );

}


/*
============================================================
TZOLK'IN CALCULATION
============================================================
*/

function calculateTzolkin(
    year,
    month,
    day
) {

    const jdn =
        getJulianDayNumber(
            year,
            month,
            day
        );

    const daysFromBase =
        jdn -
        TZOLKIN_CORRELATION;

    const tone =
        (
            (
                daysFromBase + 3
            ) % 13
            + 13
        ) % 13 + 1;

    const signIndex =
        (
            (
                daysFromBase + 19
            ) % 20
            + 20
        ) % 20;

    const kin =
        (
            (
                daysFromBase + 159
            ) % 260
            + 260
        ) % 260 + 1;

    return {

        tone,

        signIndex,

        sign:
            TZOLKIN_SIGNS[
                signIndex
            ],

        kin

    };

}


/*
============================================================
CREATOR AVATARS
============================================================
*/

const creatorSymbols = [

    {
        symbol: "🌱",
        name: "Seed Creator",
        meaning: "Creator of beginnings",
        message:
            "You plant the first seeds. Your ideas may still be small, but every Living World begins with intention."
    },

    {
        symbol: "🌿",
        name: "Nature Creator",
        meaning: "Creator connected with life",
        message:
            "You create through connection, harmony and natural rhythms."
    },

    {
        symbol: "🦋",
        name: "Explorer Creator",
        meaning: "Discoverer of possibilities",
        message:
            "Your gift is curiosity. You discover new paths by exploring possibilities."
    },

    {
        symbol: "🌙",
        name: "Dreamer Creator",
        meaning: "Creator of visions",
        message:
            "Your creations begin in imagination. Protect your visions and give them room to grow."
    },

    {
        symbol: "✨",
        name: "Vision Creator",
        meaning: "Creator of future possibilities",
        message:
            "You naturally see what could become. Every vision becomes real through a small act of creation."
    },

    {
        symbol: "☀️",
        name: "Light Creator",
        meaning: "Creator who brings clarity",
        message:
            "You bring clarity and new perspectives into the world."
    },

    {
        symbol: "🔥",
        name: "Fire Creator",
        meaning: "Creator of transformation",
        message:
            "You create through passion, courage and change."
    },

    {
        symbol: "🌊",
        name: "Flow Creator",
        meaning: "Creator who follows living rhythms",
        message:
            "Your strength comes from listening, adapting and moving with inspiration."
    },

    {
        symbol: "🌎",
        name: "World Creator",
        meaning: "Creator of Living Worlds",
        message:
            "You create spaces where ideas, experiences and people can meet."
    },

    {
        symbol: "🪶",
        name: "Wisdom Creator",
        meaning: "Creator carrying knowledge",
        message:
            "You transform experience, memory and wisdom into something meaningful."
    },

    {
        symbol: "🌀",
        name: "Spiral Creator",
        meaning: "Creator of evolution and cycles",
        message:
            "You understand that every creation continues to evolve."
    },

    {
        symbol: "🌺",
        name: "Beauty Creator",
        meaning: "Creator of harmony and expression",
        message:
            "You bring beauty, emotion and harmony into your creations."
    },

    {
        symbol: "🐚",
        name: "Ocean Creator",
        meaning: "Creator connected with depth and memory",
        message:
            "You create from deep inner places, where hidden possibilities wait."
    },

    {
        symbol: "⭐",
        name: "Star Creator",
        meaning: "Creator guided by inspiration",
        message:
            "You follow sparks of inspiration and moments of wonder."
    },

    {
        symbol: "🌈",
        name: "Rainbow Creator",
        meaning: "Creator of connection and diversity",
        message:
            "You bring different ideas and perspectives together."
    },

    {
        symbol: "🦅",
        name: "Freedom Creator",
        meaning: "Creator expanding beyond limits",
        message:
            "Your creations grow when you allow yourself to imagine without limits."
    },

    {
        symbol: "🐉",
        name: "Transformation Creator",
        meaning: "Creator of deep change",
        message:
            "Your creations can transform perspectives and experiences."
    },

    {
        symbol: "💎",
        name: "Crystal Creator",
        meaning: "Creator of clarity and value",
        message:
            "You see the essence hidden inside ideas and bring clarity to them."
    },

    {
        symbol: "🌳",
        name: "Guardian Creator",
        meaning: "Creator protecting wisdom",
        message:
            "You create with care, responsibility and patience."
    },

    {
        symbol: "🧭",
        name: "Navigator Creator",
        meaning: "Creator finding the path",
        message:
            "Your creations help reveal paths where others may see uncertainty."
    },

    {
        symbol: "🌌",
        name: "Cosmic Creator",
        meaning: "Creator connected with universal patterns",
        message:
            "You naturally see connections between ideas, moments and possibilities."
    },

    {
        symbol: "🌸",
        name: "Heart Creator",
        meaning: "Creator of beauty and connection",
        message:
            "You create through emotion, authenticity and connection."
    },

    {
        symbol: "🪨",
        name: "Foundation Creator",
        meaning: "Creator building strong roots",
        message:
            "You build patiently, creating strong foundations for what comes next."
    },

    {
        symbol: "🌬️",
        name: "Spirit Creator",
        meaning: "Creator guided by intuition and flow",
        message:
            "You listen to subtle inspiration and bring invisible ideas into visible form."
    }

];


/*
============================================================
LIVING CARD ORACLE
============================================================
*/

const livingCards = [

    {
        id: "vision",
        title: "VISION",
        symbol: "✨",
        essence: "See what is asking to emerge.",
        reading:
            "Look beyond what already exists. A new possibility may be waiting for your attention.",
        destination: "/builder"
    },

    {
        id: "evolution",
        title: "EVOLUTION",
        symbol: "🌀",
        essence: "Notice what is becoming.",
        reading:
            "Your creation does not need to be finished. Something within it may already be changing.",
        destination: "/lifecycle"
    },

    {
        id: "consciousness",
        title: "CONSCIOUSNESS",
        symbol: "◇",
        essence: "Become aware of what is moving within.",
        reading:
            "Pause before acting. Something important may become visible when you simply notice.",
        destination: "/ai"
    },

    {
        id: "guidance",
        title: "GUIDANCE",
        symbol: "🧭",
        essence: "Listen for the next direction.",
        reading:
            "You may not need the whole path. Sometimes the next step is enough.",
        destination: "/ai"
    },

    {
        id: "healing",
        title: "HEALING",
        symbol: "🌿",
        essence: "Give something space to restore.",
        reading:
            "Not everything needs to be solved today. Some things need attention, patience and space.",
        destination: "/ai"
    },

    {
        id: "protection",
        title: "PROTECTION",
        symbol: "🛡️",
        essence: "Protect what is becoming.",
        reading:
            "Something valuable may need stronger boundaries before it can grow.",
        destination: "/protection"
    },

    {
        id: "community",
        title: "COMMUNITY",
        symbol: "◎",
        essence: "Creation becomes richer through connection.",
        reading:
            "Look for the person, relationship or community that could help your creation breathe.",
        destination: "/community"
    },

    {
        id: "navigation",
        title: "NAVIGATION",
        symbol: "🧭",
        essence: "Find your next true direction.",
        reading:
            "You do not need certainty. Choose the direction that feels most alive.",
        destination: "/navigation"
    },

    {
        id: "growth",
        title: "GROWTH",
        symbol: "🌱",
        essence: "Something is taking root.",
        reading:
            "Small consistent movement may matter more than a dramatic leap right now.",
        destination: "/evolution"
    },

    {
        id: "alchemy",
        title: "ALCHEMY",
        symbol: "⚗️",
        essence: "Transform what you already have.",
        reading:
            "An old experience may contain a new possibility when seen from another angle.",
        destination: "/ai"
    },

    {
        id: "learning",
        title: "LEARNING",
        symbol: "◈",
        essence: "Let experience become intelligence.",
        reading:
            "Something you recently experienced may be teaching you more than you realize.",
        destination: "/academy"
    },

    {
        id: "creation",
        title: "CREATION",
        symbol: "✦",
        essence: "Bring one possibility into form.",
        reading:
            "Do not wait for the perfect moment. Give one small part of your idea a form today.",
        destination: "/studio"
    },

    {
        id: "time",
        title: "TIME",
        symbol: "◷",
        essence: "Notice the rhythm of becoming.",
        reading:
            "What you are creating has its own timing. Listen before forcing the next movement.",
        destination: "/living-time"
    },

    {
        id: "portal",
        title: "PORTAL",
        symbol: "◉",
        essence: "A doorway is opening.",
        reading:
            "You may be closer to a new experience than you think. Notice what invites you forward.",
        destination: "/portal"
    },

    {
        id: "energy",
        title: "ENERGY",
        symbol: "⚡",
        essence: "Notice where your energy wants to move.",
        reading:
            "Your attention is energy. Give more of it to what you want to become alive.",
        destination: "/ai"
    }

];


/*
============================================================
DYNAMIC WORLD BUILDER PORTAL CARDS
============================================================

These are intentionally distributed across the mosaic.
The PNG icons live in:

public/portal/icons/master/_brand_icons/
============================================================
*/

const worldBuilderPortalCards = [

    {
        ...livingCards.find(
            card => card.id === "consciousness"
        ),
        title: "CONSCIOUSNESS",
        icon:
            "/portal/icons/master/_brand_icons/blinkita_consciousness.png",
        position: "portal-card-top-right"
    },

    {
        ...livingCards.find(
            card => card.id === "evolution"
        ),
        title: "EVOLUTION",
        icon:
            "/portal/icons/master/_brand_icons/blinkita_evolution_transform_evolve.png",
        position: "portal-card-center"
    },

    {
        ...livingCards.find(
            card => card.id === "guidance"
        ),
        title: "GUIDANCE",
        icon:
            "/portal/icons/master/_brand_icons/blinkita_guidance_wisdom_insight.png",
        position: "portal-card-bottom-left"
    }

];


/*
============================================================
DAILY CREATOR QUESTIONS
============================================================
*/

const creatorQuestions = [

    "What wants to become more alive in you today?",

    "What are you noticing about yourself today?",

    "What part of your creation feels most alive right now?",

    "What are you ready to see differently?",

    "What is asking for your attention today?",

    "What have you learned about yourself recently?",

    "What would you create if you trusted yourself more?",

    "What is changing inside your way of creating?",

    "What do you want your Living World to remember about today?",

    "What possibility keeps returning to you?"

];


/*
============================================================
WORLD BUILDER HOME
============================================================
*/

export default function WorldBuilderHome() {

    const worldState =
        getWorldState() || {};

    const creator =
        worldState.creator || {};

    const identity =
        creator.identity || {};

    const evolution =
        creator.evolution || {};

    const [name, setName] =
        useState(
            identity.name || ""
        );

    const [archetype, setArchetype] =
        useState(
            identity.archetype ||
            "Seed Creator"
        );

    const [description, setDescription] =
        useState(
            identity.description ||
            ""
        );

    const [creatorMemory, setCreatorMemory] =
        useState(
            identity.creatorMemory ||
            ""
        );

    const [dailyAnswer, setDailyAnswer] =
        useState("");

    const [saved, setSaved] =
        useState(false);

    const [memorySaved, setMemorySaved] =
        useState(false);

    const [selectedAvatar, setSelectedAvatar] =
        useState(
            identity.avatar ||
            "🌱"
        );

    const [selectedCard, setSelectedCard] =
        useState(null);

    const [readingPurpose, setReadingPurpose] =
        useState("today");

    const [question, setQuestion] =
        useState("");


    /*
    ========================================================
    TODAY
    ========================================================
    */

    const today =
        new Date();

    const todayTzolkin =
        useMemo(
            () =>
                calculateTzolkin(
                    today.getUTCFullYear(),
                    today.getUTCMonth() + 1,
                    today.getUTCDate()
                ),
            [
                today.getUTCFullYear(),
                today.getUTCMonth(),
                today.getUTCDate()
            ]
        );


    const dailyQuestion =
        creatorQuestions[
            (
                todayTzolkin.signIndex +
                todayTzolkin.tone
            ) %
            creatorQuestions.length
        ];


    /*
    ========================================================
    SAVE IDENTITY
    ========================================================
    */

    function handleSaveIdentity() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                name:
                    name.trim(),

                archetype:
                    archetype.trim() ||
                    "Seed Creator",

                description:
                    description.trim(),

                avatar:
                    selectedAvatar

            }

        };

        updateWorldState({

            creator:
                updatedCreator

        });

        setSaved(true);

        setTimeout(
            () => setSaved(false),
            2000
        );

    }


    /*
    ========================================================
    SAVE CREATOR MEMORY
    ========================================================
    */

    function handleSaveCreatorMemory() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                creatorMemory:
                    creatorMemory.trim(),

                creatorMemoryUpdatedAt:
                    new Date().toISOString()

            }

        };

        updateWorldState({

            creator:
                updatedCreator

        });

        setMemorySaved(true);

        setTimeout(
            () => setMemorySaved(false),
            2000
        );

    }


    /*
    ========================================================
    SAVE DAILY QUESTION
    ========================================================
    */

    function handleSaveDailyAnswer() {

        if (!dailyAnswer.trim()) {
            return;
        }

        const history =
            identity.creatorQuestionHistory ||
            [];

        const entry = {

            date:
                new Date().toISOString(),

            question:
                dailyQuestion,

            answer:
                dailyAnswer.trim(),

            tone:
                todayTzolkin.tone,

            sign:
                todayTzolkin.sign.classic,

            kin:
                todayTzolkin.kin

        };

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                creatorQuestionHistory: [

                    ...history,

                    entry

                ]

            }

        };

        updateWorldState({

            creator:
                updatedCreator

        });

        setDailyAnswer("");

    }


    /*
    ========================================================
    AVATAR
    ========================================================
    */

    function handleAvatarSelect(
        avatar
    ) {

        setSelectedAvatar(
            avatar.symbol
        );

    }


    /*
    ========================================================
    ORACLE
    ========================================================
    */

    function drawCard() {

        const seed =
            todayTzolkin.kin +
            todayTzolkin.signIndex +
            Date.now();

        const index =
            Math.abs(seed) %
            livingCards.length;

        const card =
            livingCards[index];

        setSelectedCard(
            card
        );

        const oracleHistory =
            identity.oracleHistory ||
            [];

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                oracleHistory: [

                    ...oracleHistory,

                    {

                        cardId:
                            card.id,

                        title:
                            card.title,

                        date:
                            new Date().toISOString(),

                        purpose:
                            readingPurpose,

                        question:
                            question.trim(),

                        tone:
                            todayTzolkin.tone,

                        sign:
                            todayTzolkin.sign.classic,

                        kin:
                            todayTzolkin.kin

                    }

                ]

            }

        };

        updateWorldState({

            creator:
                updatedCreator

        });

    }


    /*
    ========================================================
    SELECTED AVATAR DATA
    ========================================================
    */

    const selectedAvatarData =
        creatorSymbols.find(
            item =>
                item.symbol ===
                selectedAvatar
        ) ||
        creatorSymbols[0];


    /*
    ========================================================
    RENDER
    ========================================================
    */

    return (

        <section className="living-page world-builder-page">


            {/* =================================================
                HEADER
            ================================================= */}

            <header className="living-header world-builder-header">

                <div className="world-builder-title-mark">
                    🌱
                </div>

                <div>

                    <h1>
                        WORLD BUILDER™
                    </h1>

                    <p>
                        Who You Are as Creator
                    </p>

                </div>

            </header>



            {/* =================================================
                TZO L K'IN DAY
            ================================================= */}

           <section className="world-builder-day-energy">

    {/* TODAY */}
    <div className="world-builder-time-panel">

        <div className="world-builder-day-symbol">
            {todayTzolkin.sign.symbol}
        </div>

        <div>
            <span>
                TODAY'S LIVING TIME
            </span>

            <small className="world-builder-gregorian-date">
                {today.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                })}
            </small>

            <strong>
                {todayTzolkin.tone} {todayTzolkin.sign.classic}
            </strong>

            <small>
                Kin {todayTzolkin.kin} · {todayTzolkin.sign.element}
            </small>
        </div>

    </div>


    <div className="world-builder-time-divider" />


    {/* YOUR LIVING TIME */}
    <div className="world-builder-time-panel">

        <div className="world-builder-day-symbol">
            {identity.birthMatrix?.symbol || "☼"}
        </div>

        <div>
            <span>
                YOUR LIVING TIME TODAY
            </span>

            <strong>
                {identity.birthMatrix?.tone || "—"}{" "}
                {identity.birthMatrix?.sign || "Not calculated yet"}
            </strong>

            <small>
                Your birth energy · Today's energy
            </small>
        </div>

    </div>

</section>



            {/* =================================================
                CREATOR GRID
            ================================================= */}

            <div className="world-builder-creator-grid">


                {/* =============================================
                    PORTRAIT
                ============================================= */}

                <article className="world-builder-card world-builder-portrait">

                    <div className="world-builder-card-label">
                        YOUR PORTRAIT
                    </div>

                    <div className="world-builder-portrait-visual">

                        <div className="world-builder-avatar">

                            {selectedAvatar}

                        </div>

                    </div>

                    <div className="world-builder-portrait-info">

                        <strong>
                            {name || "Your Name"}
                        </strong>

                        <span>
                            {archetype || "Seed Creator"}
                        </span>

                    </div>

                    <div className="world-builder-avatar-grid">

                        {creatorSymbols.map(
                            avatar => (

                                <button
                                    key={avatar.name}
                                    type="button"
                                    className={
                                        selectedAvatar === avatar.symbol
                                            ? "avatar-choice active"
                                            : "avatar-choice"
                                    }
                                    onClick={() =>
                                        handleAvatarSelect(
                                            avatar
                                        )
                                    }
                                    title={avatar.name}
                                    aria-label={avatar.name}
                                >
                                    {avatar.symbol}
                                </button>

                            )
                        )}

                    </div>

                    <div className="world-builder-avatar-explanation">

                        <strong>
                            {selectedAvatarData.name}
                        </strong>

                        <span>
                            {selectedAvatarData.meaning}
                        </span>

                        <p>
                            {selectedAvatarData.message}
                        </p>

                    </div>

                </article>



                {/* =============================================
                    IDENTITY + EVOLUTION
                ============================================= */}

                <article className="world-builder-card world-builder-identity">

                    <div className="world-builder-card-label">
                        IDENTITY + EVOLUTION
                    </div>

                    <div className="world-builder-field">

                        <label>
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={
                                event =>
                                    setName(
                                        event.target.value
                                    )
                            }
                            placeholder="Your name"
                        />

                    </div>

                    <div className="world-builder-field">

                        <label>
                            Archetype
                        </label>

                        <input
                            type="text"
                            value={archetype}
                            onChange={
                                event =>
                                    setArchetype(
                                        event.target.value
                                    )
                            }
                            placeholder="Your creator archetype"
                        />

                    </div>

                  

                    <div className="world-builder-evolution">

                        <span>
                            EVOLUTION
                        </span>

                        <strong>
                            {evolution.stage || "Beginning"}
                        </strong>

                        <small>
                            Level {evolution.level || 1}
                        </small>

                    </div>

                    <button
                        type="button"
                        className="world-builder-button"
                        onClick={handleSaveIdentity}
                    >
                        {saved
                            ? "SAVED ✓"
                            : "SAVE IDENTITY"
                        }
                    </button>

                </article>



                {/* =============================================
                    PORTAL CARD 1 — CONSCIOUSNESS
                ============================================= */}

                <article
    className="world-builder-card dynamic-portal-card portal-card-top-right"
    onClick={() =>
        window.location.href =
            worldBuilderPortalCards[0].destination
    }
>
    <img
        src="/portal/icons/master_brand_icons/blinkita_consciousness.png"
        alt="Consciousness"
        className="world-builder-portal-card-image"
    />
</article>



                {/* =============================================
                    CREATOR ESSENCE
                ============================================= */}

                <article className="world-builder-card world-builder-essence">

                    <div className="world-builder-card-label">
                        YOUR CREATOR ESSENCE
                    </div>

                    <div className="world-builder-memory-visual">

                        <span />
                        <span />
                        <span />
                        <span />
                        <span />

                    </div>

                    <h2>
                        The essence of your creation.
                    </h2>

                    <p>
                        Your Living World begins with
                        the creator who brings it into being.
                    </p>

                    <div className="world-builder-essence-line">
                        {archetype || "Seed Creator"}
                    </div>

                </article>



                {/* =============================================
                    ACHIEVEMENTS
                ============================================= */}

                <article className="world-builder-card world-builder-achievements">

                    <div className="world-builder-card-label">
                        ACHIEVEMENTS
                    </div>

                    <div className="world-builder-achievement-symbol">
                        ✦
                    </div>

                    <h2>
                        Your creation is becoming real.
                    </h2>

                    <p>
                        Your achievements will appear here
                        as your Living World evolves.
                    </p>

                    <div className="world-builder-achievement-count">
                        0
                    </div>

                </article>



                {/* =============================================
                    PORTAL CARD 2 — EVOLUTION
                ============================================= */}

                <article
    className="world-builder-card dynamic-portal-card portal-card-center"
    onClick={() =>
        window.location.href =
            worldBuilderPortalCards[1].destination
    }
>
    <img
        src="/portal/icons/master_brand_icons/blinkita_evolution_transform_evolve.png"
        alt="Evolution"
        className="world-builder-portal-card-image"
    />
</article>



                {/* =============================================
                    BIRTH MATRIX
                ============================================= */}

                <article className="world-builder-card world-builder-birth">

                    <div className="world-builder-card-label">
                        YOUR BIRTH MATRIX™
                    </div>

                    <div className="world-builder-birth-content">

                        <div className="world-builder-birth-symbol">

                            {identity.birthMatrix
                                ? identity.birthMatrix.symbol
                                : "☼"
                            }

                        </div>

                        <div>

                            <h2>
                                Your birth energy
                            </h2>

                            <p>
                                Your personal Tzolk’in
                                starting point.
                            </p>

                        </div>

                    </div>

                    <div className="world-builder-birth-status">

                        <span>
                            BIRTH MATRIX
                        </span>

                        <strong>

                            {identity.birthMatrix

                                ? `${identity.birthMatrix.tone || ""} ${identity.birthMatrix.sign || ""}`

                                : "Not calculated yet"

                            }

                        </strong>

                    </div>

                </article>



                {/* =============================================
                    LIVING INTELLIGENCE
                ============================================= */}

                <article className="world-builder-card world-builder-intelligence">

                    <div className="world-builder-card-label">
                        LIVING INTELLIGENCE
                    </div>

                    <div className="world-builder-intelligence-symbol">
                        ◇
                    </div>

                    <h2>
                        Your Living Intelligence
                    </h2>

                    <p>
                        The intelligence layer that helps
                        you understand, reflect and evolve
                        as a World Builder.
                    </p>

                    <button
                        type="button"
                        className="world-builder-button secondary"
                        onClick={() =>
                            window.location.href = "/ai"
                        }
                    >
                        ENTER INTELLIGENCE
                    </button>

                </article>



                {/* =============================================
                    CREATION PATH
                ============================================= */}

                <article className="world-builder-card world-builder-creation">

                    <div className="world-builder-card-label">
                        YOUR CREATION PATH
                    </div>

                    <div className="world-builder-path-symbol">
                        ➜
                    </div>

                    <h2>
                        Where are you creating from?
                    </h2>

                    <p>
                        Your creation path will evolve as
                        your ideas become Living Worlds.
                    </p>

                    <div className="world-builder-path-stage">

                        <span>
                            CURRENT STAGE
                        </span>

                        <strong>
                            {evolution.stage || "Beginning"}
                        </strong>

                    </div>

                </article>



                {/* =============================================
                    PORTAL CARD 3 — GUIDANCE
                ============================================= */}

               <article
    className="world-builder-card dynamic-portal-card portal-card-bottom-left"
    onClick={() =>
        window.location.href =
            worldBuilderPortalCards[2].destination
    }
>
    <img
        src="/portal/icons/master_brand_icons/blinkita_guidance_wisdom_insight.png"
        alt="Guidance"
        className="world-builder-portal-card-image"
    />
</article>



                {/* =============================================
                    DAILY CREATOR QUESTION
                ============================================= */}

                <article className="world-builder-card world-builder-daily-question">

                    <div className="world-builder-card-label">
                        TODAY'S CREATOR QUESTION
                    </div>

                    <div className="daily-question-energy">

                        {todayTzolkin.sign.symbol}

                        <span>
                            {todayTzolkin.tone} {todayTzolkin.sign.classic}
                        </span>

                    </div>

                    <h2>
                        {dailyQuestion}
                    </h2>

                    <textarea
                        value={dailyAnswer}
                        onChange={
                            event =>
                                setDailyAnswer(
                                    event.target.value
                                )
                        }
                        placeholder="Write a few words..."
                        rows="3"
                    />

                    <button
                        type="button"
                        className="world-builder-button"
                        onClick={
                            handleSaveDailyAnswer
                        }
                    >
                        SAVE TODAY'S REFLECTION
                    </button>

                </article>

            </div>



            {/* =================================================
                CREATOR MEMORY
            ================================================= */}

            <section className="world-builder-description">

                <div className="world-builder-description-header">

                    <span>
                        YOUR CREATOR MEMORY
                    </span>

                    <small>
                        Tell Blinkita something about you.
                    </small>

                </div>

                <textarea
                    value={creatorMemory}
                    onChange={
                        event =>
                            setCreatorMemory(
                                event.target.value
                            )
                    }
                    placeholder="Add something you want your Living World — and Blinkita AI — to remember about you..."
                    rows="5"
                />

                <button
                    type="button"
                    className="world-builder-button"
                    onClick={
                        handleSaveCreatorMemory
                    }
                >
                    {memorySaved
                        ? "MEMORY SAVED ✓"
                        : "SAVE TO CREATOR MEMORY"
                    }
                </button>

            </section>



            {/* =================================================
                BLINKITA LIVING CARD ORACLE™
            ================================================= */}

            <section className="living-card-oracle">

                <header className="living-card-oracle-header">

                    <div>

                        <span>
                            BLINKITA LIVING CARD ORACLE™
                        </span>

                        <h2>
                            Listen. Choose. Receive.
                        </h2>

                    </div>

                    <div className="living-card-oracle-energy">

                        {todayTzolkin.sign.symbol}

                        <small>
                            {todayTzolkin.tone} {todayTzolkin.sign.classic}
                        </small>

                    </div>

                </header>



                <div className="living-card-oracle-grid">


                    {/* =========================================
                        DECK
                    ========================================= */}

                 <div className="living-card-deck">

    <div className="oracle-section-label">
        YOUR DECK
    </div>

    <div className="living-card-stack">

        {livingCards.slice(0, 7).map((card, index) => (

            <div
                key={card.id}
                className={
                    selectedCard?.id === card.id
                        ? "living-card-stack-card selected"
                        : "living-card-stack-card"
                }
                style={{
                    "--card-index": index
                }}
            >

                <div className="living-card-back">

                    <div className="living-card-back-symbol">
                        ✦
                    </div>

                    <span>
                        BLINKITA
                    </span>

                    <small>
                        LIVING CARD ORACLE™
                    </small>

                </div>

            </div>

        ))}

    </div>

    <p className="oracle-deck-note">
        50+ Living Cards will live here.
    </p>

    <button
        type="button"
        className="world-builder-button"
        onClick={drawCard}
    >
        DRAW A CARD
    </button>

</div>



                    {/* =========================================
                        READING
                    ========================================= */}

                    <div className="living-card-reading">

                        <div className="oracle-section-label">
                            YOUR READING
                        </div>

                        <h3>
                            What would you like guidance for?
                        </h3>

                        <div className="oracle-options">

                            <label>

                                <input
                                    type="radio"
                                    name="oracle-purpose"
                                    value="today"
                                    checked={
                                        readingPurpose === "today"
                                    }
                                    onChange={
                                        event =>
                                            setReadingPurpose(
                                                event.target.value
                                            )
                                    }
                                />

                                Today

                            </label>

                            <label>

                                <input
                                    type="radio"
                                    name="oracle-purpose"
                                    value="creation"
                                    checked={
                                        readingPurpose === "creation"
                                    }
                                    onChange={
                                        event =>
                                            setReadingPurpose(
                                                event.target.value
                                            )
                                    }
                                />

                                My Creation

                            </label>

                            <label>

                                <input
                                    type="radio"
                                    name="oracle-purpose"
                                    value="question"
                                    checked={
                                        readingPurpose === "question"
                                    }
                                    onChange={
                                        event =>
                                            setReadingPurpose(
                                                event.target.value
                                            )
                                    }
                                />

                                My Question

                            </label>

                        </div>

                        <textarea
                            value={question}
                            onChange={
                                event =>
                                    setQuestion(
                                        event.target.value
                                    )
                            }
                            placeholder="Ask your question..."
                            rows="3"
                        />

                        <button
                            type="button"
                            className="world-builder-oracle-button"
                            onClick={drawCard}
                        >
                            REVEAL
                        </button>

                    </div>

                </div>



                {/* =============================================
                    RESULT
                ============================================= */}

                {selectedCard && (

                    <div className="living-card-result">

                        <div className="living-card-result-symbol">

                            {selectedCard.symbol}

                        </div>

                        <span>
                            YOUR CARD
                        </span>

                        <h2>
                            {selectedCard.title}
                        </h2>

                        <strong>
                            {selectedCard.essence}
                        </strong>

                        <p>
                            {selectedCard.reading}
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                window.location.href =
                                    selectedCard.destination
                            }
                        >
                            ENTER THIS WORLD
                        </button>

                    </div>

                )}

            </section>

        </section>

    );

}