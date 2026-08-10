/*
BLINKITA METHOD™
BLINKITA OS™

WORLD BUILDER™
Who You Are as Creator

WORLD BUILDER HOME
*/

import { useMemo, useState } from "react";

import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";

import {
    getSignImage
} from "../../core/tzolkin/TzolkinImages";

import {
    getWorldBuilderDeck
} from "../../core/living-cards/WorldBuilderLivingCards";

import "../../styles/world-builder.css";

/*
====================================================
TZOLK'IN
====================================================
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
====================================================
TZOLK'IN VISUALS
====================================================
*/

function TzolkinSignVisual({ sign, className = "" }) {
    if (!sign) return null;

    return (
        <span className={`tzolkin-sign-visual ${className}`}>
            <img
                src={getSignImage(sign.classic)}
                alt={`${sign.classic} Tzolk'in sign`}
                onError={(event) => {
                    event.currentTarget.style.display = "none";

                    const fallback =
                        event.currentTarget.nextElementSibling;

                    if (fallback) {
                        fallback.style.opacity = "1";
                    }
                }}
            />

            <span className="tzolkin-sign-fallback">
                {sign.symbol}
            </span>
        </span>
    );
}

const birthEnergyMessages = [
    "Your birth energy carries a living pattern that can reveal how you naturally begin, move and respond.",
    "Your birth energy is a way of meeting the world. Notice what becomes easier when you create from it.",
    "Your birth energy carries a quality of perception. Today, notice what this quality helps you see.",
    "Your birth energy is not a label. It is a living pattern you can learn to recognize through experience.",
    "Today offers another way to experience your birth energy. Notice where it feels naturally expressed.",
    "Your birth energy can become a compass when you pay attention to what feels aligned rather than forced.",
    "There is a particular intelligence in your birth energy. Give it space to speak through today's experience.",
    "Your birth energy accompanies your creator journey. Notice what it brings forward when you make something real.",
    "The more consciously you meet your birth energy, the more clearly you may recognize your own creative rhythm.",
    "Your birth energy is part of your starting pattern. Today, notice how it meets what is happening around you.",
    "A living energy changes through experience without losing its essence. Observe what your birth energy is teaching you.",
    "Your birth energy can illuminate a quality you already carry. Today, look for it in your choices and creations.",
    "Your original energy is still present beneath everything you have become. Notice what remains unmistakably yours.",
    "Birth energy becomes meaningful through lived experience. Let today's encounters show you another facet of it.",
    "Your birth energy offers a particular doorway into creation. Notice what happens when you trust that doorway.",
    "Today can reveal a new layer of an energy you have carried since the beginning. Stay curious.",
    "Your birth energy is a foundation, not a limitation. Let it inform you without defining the whole of you.",
    "Something in today's rhythm may echo your original energy. Notice the resonance rather than searching for an answer.",
    "Your birth energy and today's energy meet as a living dialogue. Pay attention to what emerges between them.",
    "Your birth energy is part of the intelligence of your creator path. Today, let it become something you experience, not merely know."
];

/*
====================================================
JULIAN DAY
====================================================
*/

function getJulianDayNumber(year, month, day) {
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
        Math.floor(y / 4) -
        Math.floor(y / 100) +
        Math.floor(y / 400) -
        32045
    );
}

/*
====================================================
TZOLK'IN CALCULATION
====================================================
*/

function calculateTzolkin(year, month, day) {
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
            ) % 13 +
            13
        ) % 13 + 1;

    const signIndex =
        (
            (
                daysFromBase + 19
            ) % 20 +
            20
        ) % 20;

    const kin =
        (
            (
                daysFromBase + 159
            ) % 260 +
            260
        ) % 260 + 1;

    return {
        tone,
        signIndex,
        sign: TZOLKIN_SIGNS[signIndex],
        kin
    };
}

/*
====================================================
LIVING TIME CALCULATION
====================================================
*/

function calculateLivingTime(
    birthMatrix,
    todayTzolkin
) {
    if (!birthMatrix || !todayTzolkin) {
        return null;
    }

    const birthSignIndex =
        birthMatrix.signIndex != null
            ? birthMatrix.signIndex
            : TZOLKIN_SIGNS.findIndex(
                item =>
                    item.classic ===
                    birthMatrix.sign
            );

    if (birthSignIndex < 0) {
        return null;
    }

    const tone =
        (
            (
                birthMatrix.tone +
                todayTzolkin.tone -
                1
            ) % 13
        ) + 1;

    const signIndex =
    (
        birthSignIndex +
        todayTzolkin.signIndex +
        1
    ) % 20;

    const sign =
        TZOLKIN_SIGNS[signIndex];

    return {
        tone,
        signIndex,
        sign,
        kin:
            ((tone - 1) * 20) +
            signIndex +
            1
    };
}

/*
====================================================
CREATOR AVATARS
====================================================
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
====================================================
LIVING CARD ORACLE
====================================================
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
====================================================
FIVE WORLD BUILDER LIVING CARDS
====================================================
*/

const worldBuilderLivingCards =
    getWorldBuilderDeck();

/*
====================================================
DAILY CREATOR QUESTIONS
====================================================
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
====================================================
WORLD BUILDER HOME
====================================================
*/

export default function WorldBuilderHome() {

    /*
    ====================================================
    WORLD STATE
    ====================================================
    */

    const worldState =
        getWorldState() || {};

    const creator =
        worldState.creator || {};

    const identity =
        creator.identity || {};

    const evolution =
        creator.evolution || {};


    /*
    ====================================================
    BASIC CREATOR STATE
    ====================================================
    */

    const [name, setName] =
        useState(
            identity.name || ""
        );

    const archetype =
        identity.archetype ||
        "Explorer Creator";

    const [description, setDescription] =
        useState(
            identity.description || ""
        );

    const [selectedAvatar, setSelectedAvatar] =
        useState(
            identity.avatar ||
            "🦋"
        );


    /*
    ====================================================
    CREATOR MEMORY / PORTRAIT
    ====================================================
    */

    const [whoAmI, setWhoAmI] =
        useState(
            identity.whoAmI || ""
        );

    const [whoAmISaved, setWhoAmISaved] =
        useState(false);

    const [selfie, setSelfie] =
        useState(
            identity.selfie || ""
        );


    /*
    ====================================================
    CREATOR MEMORY
    ====================================================
    */

    const [creatorMemory, setCreatorMemory] =
        useState(
            identity.creatorMemory ||
            ""
        );

    const [memorySaved, setMemorySaved] =
        useState(false);


    /*
    ====================================================
    LIVING INTELLIGENCE
    ====================================================
    */

    const [livingIntelligence, setLivingIntelligence] =
        useState(
            identity.livingIntelligence ||
            ""
        );

    const [intelligenceSaved, setIntelligenceSaved] =
        useState(false);


    /*
    ====================================================
    DAILY QUESTION
    ====================================================
    */

    const [dailyAnswer, setDailyAnswer] =
        useState("");


    /*
    ====================================================
    IDENTITY SAVE
    ====================================================
    */

    const [saved, setSaved] =
        useState(false);


    /*
    ====================================================
    BIRTH MATRIX
    ====================================================
    */

    const existingBirthMatrix =
        identity.birthMatrix || null;

    const [birthDate, setBirthDate] =
        useState(
            existingBirthMatrix?.date ||
            ""
        );

    const [birthMatrix, setBirthMatrix] =
        useState(
            existingBirthMatrix
        );

    const [birthError, setBirthError] =
        useState("");


    /*
    ====================================================
    ORACLE
    ====================================================
    */

    const [selectedCard, setSelectedCard] =
        useState(null);

    const [readingPurpose, setReadingPurpose] =
        useState("today");

    const [question, setQuestion] =
        useState("");


    /*
    ====================================================
    TODAY
    ====================================================
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


    /*
    ====================================================
    MY LIVING TIME TODAY
    ====================================================
    */

    const livingTimeToday =
        useMemo(
            () =>
                calculateLivingTime(
                    birthMatrix,
                    todayTzolkin
                ),
            [
                birthMatrix,
                todayTzolkin
            ]
        );


    const birthEnergyMessage =
        useMemo(() => {

            if (!birthMatrix) {
                return "";
            }

            const birthSignIndex =
                birthMatrix.signIndex != null
                    ? birthMatrix.signIndex
                    : TZOLKIN_SIGNS.findIndex(
                        item =>
                            item.classic ===
                            birthMatrix.sign
                    );

            const messageIndex =
                (
                    todayTzolkin.signIndex +
                    todayTzolkin.tone +
                    birthSignIndex +
                    birthMatrix.tone
                ) %
                birthEnergyMessages.length;

            return birthEnergyMessages[
                messageIndex
            ];

        }, [
            birthMatrix,
            todayTzolkin
        ]);


    /*
    ====================================================
    DAILY CREATOR QUESTION
    ====================================================
    */

    const dailyQuestion =
        creatorQuestions[
            (
                todayTzolkin.signIndex +
                todayTzolkin.tone
            ) %
            creatorQuestions.length
        ];


    /*
    ====================================================
    SELECTED AVATAR DATA
    ====================================================
    */

    const selectedAvatarData =
        creatorSymbols.find(
            item =>
                item.symbol ===
                selectedAvatar
        ) ||
        creatorSymbols[0];


    /*
    ====================================================
    SAVE IDENTITY
    ====================================================
    */

    function handleSaveIdentity() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                name:
                    name.trim(),

                archetype:
                    selectedAvatarData.name ||
                    archetype ||
                    "Explorer Creator",

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
            () =>
                setSaved(false),
            2000
        );
    }


    /*
    ====================================================
    SAVE WHO AM I
    ====================================================
    */

    function handleSaveWhoAmI() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                whoAmI:
                    whoAmI.trim(),

                whoAmIUpdatedAt:
                    new Date().toISOString()

            }

        };

        updateWorldState({
            creator:
                updatedCreator
        });

        setWhoAmISaved(true);

        setTimeout(
            () =>
                setWhoAmISaved(false),
            2000
        );
    }


    /*
    ====================================================
    SAVE CREATOR MEMORY
    ====================================================
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
            () =>
                setMemorySaved(false),
            2000
        );
    }


    /*
    ====================================================
    SAVE LIVING INTELLIGENCE
    ====================================================
    */

    function handleSaveLivingIntelligence() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                livingIntelligence:
                    livingIntelligence.trim(),

                livingIntelligenceUpdatedAt:
                    new Date().toISOString()

            }

        };

        updateWorldState({
            creator:
                updatedCreator
        });

        setIntelligenceSaved(true);

        setTimeout(
            () =>
                setIntelligenceSaved(false),
            2000
        );
    }


    /*
    ====================================================
    SAVE DAILY QUESTION
    ====================================================
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
    ====================================================
    SELFIE
    ====================================================
    */

    function handleSelfieUpload(event) {

        const file =
            event.target.files?.[0];

        if (!file) return;

        const reader =
            new FileReader();

        reader.onload = () => {

            const dataUrl =
                String(
                    reader.result || ""
                );

            setSelfie(dataUrl);

            updateWorldState({

                creator: {

                    ...creator,

                    identity: {

                        ...identity,

                        selfie:
                            dataUrl

                    }

                }

            });

        };

        reader.readAsDataURL(file);
    }


    /*
    ====================================================
    AVATAR
    ====================================================
    */

    function handleAvatarSelect(avatar) {

        setSelectedAvatar(
            avatar.symbol
        );
    }


    /*
    ====================================================
    BIRTH MATRIX
    ====================================================
    */

    function handleCalculateBirthMatrix() {

        if (!birthDate) {

            setBirthError(
                "Please enter your birth date."
            );

            return;
        }

        const parts =
            birthDate.split("-");

        if (parts.length !== 3) {

            setBirthError(
                "Please enter a valid birth date."
            );

            return;
        }

        const year =
            Number(parts[0]);

        const month =
            Number(parts[1]);

        const day =
            Number(parts[2]);

        if (
            !year ||
            !month ||
            !day
        ) {

            setBirthError(
                "Please enter a valid birth date."
            );

            return;
        }

        const result =
            calculateTzolkin(
                year,
                month,
                day
            );

        const calculatedBirthMatrix = {

            date:
                birthDate,

            year,

            month,

            day,

            tone:
                result.tone,

            sign:
                result.sign.classic,

            signIndex:
                result.signIndex,

            localSign:
                result.sign.local,

            symbol:
                result.sign.symbol,

            element:
                result.sign.element,

            kin:
                result.kin,

            calculatedAt:
                new Date().toISOString()

        };

        setBirthMatrix(
            calculatedBirthMatrix
        );

        setBirthError("");

        const updatedCreator = {

            ...creator,

            identity: {

                ...identity,

                birthMatrix:
                    calculatedBirthMatrix

            }

        };

        updateWorldState({
            creator:
                updatedCreator
        });
    }


    /*
    ====================================================
    ORACLE — DRAW CARD
    ====================================================
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

        setSelectedCard(card);

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
    ====================================================
    CLOSE ORACLE
    ====================================================
    */

    function closeOracle() {

        setSelectedCard(null);

    }


    /*
    ====================================================
    ENTER LIVING CARD WORLD
    ====================================================
    */

    function enterLivingCard(card) {

        window.location.href =
            card.destination;
    }


    /*
    ====================================================
    RENDER
    ====================================================
    */

    return (

        <section
            className="
                living-page
                world-builder-page
            "
        >

            {/* =================================================
                HEADER
            ================================================= */}

            <header
                className="
                    living-header
                    world-builder-header
                "
            >

                <div
                    className="
                        world-builder-title-mark
                    "
                >
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
                TODAY'S LIVING TIME
            ================================================= */}

            <section
                className="
                    world-builder-day-energy
                "
            >

                <div
                    className="
                        world-builder-time-panel
                    "
                >

                    <div
                        className="
                            world-builder-day-symbol
                            calculated-tzolkin-symbol
                        "
                    >
                        <TzolkinSignVisual
                            sign={todayTzolkin.sign}
                        />
                    </div>

                    <div>

                        <span>
                            TODAY'S LIVING TIME
                        </span>

                        <small
                            className="
                                world-builder-gregorian-date
                            "
                        >
                            {today.toLocaleDateString(
                                "en-US",
                                {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric"
                                }
                            )}
                        </small>

                        <strong>
                            {todayTzolkin.tone}{" "}
                            {todayTzolkin.sign.classic}
                        </strong>

                        <small>
                            Kin {todayTzolkin.kin}
                            {" · "}
                            {todayTzolkin.sign.element}
                        </small>

                    </div>

                </div>


                <div
                    className="
                        world-builder-time-divider
                    "
                />


                <div
                    className="
                        world-builder-time-panel
                    "
                >

                    <div
                        className="
                            world-builder-day-symbol
                            calculated-tzolkin-symbol
                        "
                    >
                        {livingTimeToday ? (
                            <TzolkinSignVisual
                                sign={
                                    livingTimeToday.sign
                                }
                            />
                        ) : (
                            "☼"
                        )}
                    </div>

                    <div>

                        <span>
                            MY LIVING TIME TODAY
                        </span>

                        <strong>
                            {
                                livingTimeToday
                                    ? `${livingTimeToday.tone} ${livingTimeToday.sign.classic}`
                                    : "Not calculated yet"
                            }
                        </strong>

                        <small>
                         Kin {livingTimeToday.kin}
                           {" · "}
                            {livingTimeToday.sign.element}
                            </small>

                    </div>

                </div>

            </section>


            {/* =================================================
                ROW 1
                MY PORTRAIT
                MY BIRTH MATRIX
                MY LIVING INTELLIGENCE
            ================================================= */}

            <div
                className="
                    world-builder-row
                    world-builder-row-three
                "
            >

                {/* =================================================
                    MY PORTRAIT
                ================================================= */}

                <article
                    className="
                        world-builder-card
                        world-builder-portrait
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        MY PORTRAIT
                    </div>


                    <div
                        className="
                            world-builder-portrait-main
                        "
                    >

                        <div
                            className={`world-builder-avatar ${selfie ? "has-selfie" : ""}`}
                        >
                            {selfie ? (
                                <img
                                    src={selfie}
                                    alt="Creator selfie"
                                    className="world-builder-selfie"
                                />
                            ) : (
                                <span>
                                    {selectedAvatar}
                                </span>
                            )}
                        </div>

                        <div
                            className="
                                world-builder-portrait-info
                            "
                        >

                            <strong>
                                {name || "Your Name"}
                            </strong>

                            <span>
                                {selectedAvatarData.name}
                            </span>

                        </div>

                    </div>

                    <label className="world-builder-selfie-upload">
                        <span>
                            {
                                selfie
                                    ? "CHANGE SELFIE"
                                    : "UPLOAD SELFIE"
                            }
                        </span>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={
                                handleSelfieUpload
                            }
                        />
                    </label>


                    {/* AVATAR CHOICES */}

                    <div
                        className="
                            world-builder-avatar-grid
                        "
                    >

                        {creatorSymbols.map(
                            avatar => (

                                <button
                                    key={avatar.name}
                                    type="button"
                                    className={
                                        selectedAvatar ===
                                        avatar.symbol
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


                    {/* AVATAR EXPLANATION */}

                    <div
                        className="
                            world-builder-avatar-explanation
                        "
                    >

                        <strong
                            className="
                                avatar-explanation-title
                            "
                        >

                            <span>
                                {selectedAvatarData.symbol}
                            </span>

                            {selectedAvatarData.name}

                        </strong>

                        <span>
                            {selectedAvatarData.meaning}
                        </span>

                        <p>
                            {selectedAvatarData.message}
                        </p>

                    </div>


                    {/* IDENTITY · EVOLUTION
                        LIVES INSIDE PORTRAIT */}

                    <div
                        className="
                            world-builder-identity-inline
                        "
                    >

                        <div
                            className="
                                world-builder-inline-heading
                            "
                        >
                            MY IDENTITY · EVOLUTION
                        </div>


                        <div
                            className="
                                world-builder-field
                            "
                        >

                            <label>
                                NAME
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={event =>
                                    setName(
                                        event.target.value
                                    )
                                }
                                placeholder="Your name"
                            />

                        </div>


                        <div
                            className="
                                world-builder-field
                                world-builder-system-field
                            "
                        >

                            <label>
                                CREATOR ARCHETYPE · SYSTEM DETERMINED
                            </label>

                            <div
                                className="
                                    world-builder-archetype-display
                                "
                            >

                                <span
                                    className="
                                        archetype-symbol
                                    "
                                >
                                    {selectedAvatarData.symbol}
                                </span>

                                <div>

                                    <strong>
                                        {
                                            selectedAvatarData.name ||
                                            archetype ||
                                            "Explorer Creator"
                                        }
                                    </strong>

                                    <small>
                                        {
                                            selectedAvatarData.meaning
                                        }
                                    </small>

                                </div>

                            </div>

                        </div>


                        <div
                            className="
                                world-builder-field
                            "
                        >

                            <label>
                                SHORT DESCRIPTION
                            </label>

                            <textarea
                                value={description}
                                onChange={event =>
                                    setDescription(
                                        event.target.value
                                    )
                                }
                                placeholder="How do you describe yourself as a creator?"
                                rows="2"
                            />

                        </div>


                        <div
                            className="
                                world-builder-evolution
                                premium-evolution
                            "
                        >

                            <div
                                className="
                                    evolution-label
                                "
                            >
                                CREATOR EVOLUTION
                            </div>

                            <div
                                className="
                                    evolution-state
                                "
                            >

                                <div>

                                    <span>
                                        CURRENT STAGE
                                    </span>

                                    <strong>
                                        {
                                            evolution.stage ||
                                            "Beginning"
                                        }
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        LEVEL
                                    </span>

                                    <strong>
                                        {
                                            evolution.level ||
                                            1
                                        }
                                    </strong>

                                </div>

                            </div>

                        </div>


                        <button
                            type="button"
                            className="
                                world-builder-button
                            "
                            onClick={
                                handleSaveIdentity
                            }
                        >
                            {
                                saved
                                    ? "SAVED ✓"
                                    : "SAVE IDENTITY"
                            }
                        </button>

                    </div>

                </article>


                {/* =================================================
                    MY BIRTH MATRIX
                ================================================= */}

                <article
                    className="
                        world-builder-card
                        world-builder-birth
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        MY BIRTH MATRIX™
                    </div>


                    <div
                        className="
                            world-builder-birth-inner
                        "
                    >

                        {!birthMatrix ? (

                            <>

                                <div
                                    className="
                                        world-builder-birth-intro
                                    "
                                >

                                    <div
                                        className="
                                            world-builder-birth-symbol
                                        "
                                    >
                                        <TzolkinSignVisual
                                            sign={
                                                TZOLKIN_SIGNS[0]
                                            }
                                        />
                                    </div>

                                    <div>

                                        <h2>
                                            Your Living Starting Point
                                        </h2>

                                        <p>
                                            Your Birth Matrix reveals
                                            the Tzolk’in energy you
                                            entered this life with.
                                        </p>

                                    </div>

                                </div>


                                <div
                                    className="
                                        world-builder-birth-form
                                    "
                                >

                                    <label>
                                        YOUR DATE OF BIRTH
                                    </label>

                                    <input
                                        type="date"
                                        value={birthDate}
                                        onChange={event =>
                                            setBirthDate(
                                                event.target.value
                                            )
                                        }
                                    />

                                    {birthError && (

                                        <small
                                            className="
                                                world-builder-birth-error
                                            "
                                        >
                                            {birthError}
                                        </small>

                                    )}

                                    <button
                                        type="button"
                                        className="
                                            world-builder-button
                                        "
                                        onClick={
                                            handleCalculateBirthMatrix
                                        }
                                    >
                                        CALCULATE MY BIRTH MATRIX
                                    </button>

                                </div>

                            </>

                        ) : (

                            <>

                                <div
                                    className="
                                        world-builder-birth-result
                                        premium-birth-result
                                    "
                                >

                                    <div
                                        className="
                                            world-builder-birth-symbol
                                            calculated-tzolkin-symbol
                                        "
                                    >

                                        <TzolkinSignVisual
                                            sign={
                                                TZOLKIN_SIGNS[
                                                    birthMatrix.signIndex != null
                                                        ? birthMatrix.signIndex
                                                        : TZOLKIN_SIGNS.findIndex(
                                                            item =>
                                                                item.classic ===
                                                                birthMatrix.sign
                                                        )
                                                ]
                                            }
                                        />

                                    </div>


                                    <div
                                        className="
                                            birth-result-identity
                                        "
                                    >

                                        <span>
                                            YOUR BIRTH ENERGY
                                        </span>

                                        <h2>
                                            {birthMatrix.tone}{" "}
                                            {birthMatrix.sign}
                                        </h2>

                                        <p>
                                            {birthMatrix.localSign}
                                            {" · "}
                                            {birthMatrix.element}
                                        </p>

                                        <strong>
                                            Kin {birthMatrix.kin}
                                        </strong>

                                    </div>

                                </div>


                                <div
                                    className="
                                        world-builder-birth-reading
                                        premium-birth-reading
                                    "
                                >

                                    <p
                                        className="
                                            birth-reading-main
                                        "
                                    >
                                        Your birth energy is{" "}
                                        <strong>
                                            {birthMatrix.tone}{" "}
                                            {birthMatrix.sign}
                                        </strong>
                                        {" — "}
                                        {birthMatrix.localSign},{" "}
                                        {birthMatrix.element}.
                                    </p>

                                    <p
                                        className="
                                            birth-reading-description
                                        "
                                    >
                                        It is the living pattern you
                                        entered this life with and a
                                        foundational reference for
                                        the way Blinkita understands
                                        your creator journey.
                                    </p>


                                    <div
                                        className="
                                            birth-energy-daily-message
                                            world-builder-birth-daily-message
                                        "
                                    >

                                        <span>
                                            TODAY'S MESSAGE FOR YOUR BIRTH ENERGY
                                        </span>

                                        <p>
                                            {birthEnergyMessage}
                                        </p>

                                    </div>

                                </div>


                                <div
                                    className="
                                        world-builder-birth-form
                                        world-builder-birth-form-result
                                    "
                                >

                                    <label>
                                        CHANGE BIRTH DATE
                                    </label>

                                    <input
                                        type="date"
                                        value={birthDate}
                                        onChange={event =>
                                            setBirthDate(
                                                event.target.value
                                            )
                                        }
                                    />

                                    <button
                                        type="button"
                                        className="
                                            world-builder-button
                                        "
                                        onClick={
                                            handleCalculateBirthMatrix
                                        }
                                    >
                                        RECALCULATE
                                    </button>

                                </div>

                            </>

                        )}

                    </div>

                </article>


                {/* =================================================
                    MY LIVING INTELLIGENCE
                ================================================= */}

                <article
                    className="
                        world-builder-card
                        world-builder-intelligence
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        MY LIVING INTELLIGENCE
                    </div>


                    <div
                        className="
                            world-builder-intelligence-symbol
                        "
                    >
                        ◇
                    </div>


                    <h2>
                        Your Living Intelligence
                    </h2>

                    <p>
                        This is where you can begin telling
                        Blinkita how you think, notice,
                        understand and make meaning.
                    </p>


                    <textarea
                        className="
                            world-builder-intelligence-input
                        "
                        value={livingIntelligence}
                        onChange={event =>
                            setLivingIntelligence(
                                event.target.value
                            )
                        }
                        placeholder="Tell Blinkita how you think, what you notice, what matters to you, or how you want to be understood..."
                        rows="6"
                    />


                    <button
                        type="button"
                        className="
                            world-builder-button
                        "
                        onClick={
                            handleSaveLivingIntelligence
                        }
                    >
                        {
                            intelligenceSaved
                                ? "INTELLIGENCE SAVED ✓"
                                : "SAVE TO LIVING INTELLIGENCE"
                        }
                    </button>

                </article>

            </div>


            {/* =================================================
                ROW 2
                MY ACHIEVEMENTS
                MY CREATOR ESSENCE
                WHERE ARE YOU CREATING FROM?
            ================================================= */}

            <div
                className="
                    world-builder-row
                    world-builder-row-three
                    world-builder-row-secondary
                "
            >

                {/* MY ACHIEVEMENTS */}

                <article
                    className="
                        world-builder-card
                        world-builder-achievements
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        MY ACHIEVEMENTS
                    </div>

                    <div
                        className="
                            world-builder-secondary-content
                        "
                    >

                        <div
                            className="
                                world-builder-achievement-symbol
                            "
                        >
                            ✦
                        </div>

                        <div>

                            <h2>
                                Your creation is becoming real.
                            </h2>

                            <p>
                                Your achievements will appear
                                here as your Living World evolves.
                            </p>

                        </div>

                        <div
                            className="
                                world-builder-achievement-count
                            "
                        >
                            0
                        </div>

                    </div>

                </article>


                {/* MY CREATOR ESSENCE */}

                <article
                    className="
                        world-builder-card
                        world-builder-essence
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        MY CREATOR ESSENCE
                    </div>

                    <div
                        className="
                            world-builder-essence-content
                        "
                    >

                        <div
                            className="
                                world-builder-memory-visual
                            "
                        >
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                        <div>

                            <h2>
                                The essence of your creation.
                            </h2>

                            <p>
                                Your Living World begins with
                                the creator who brings it into being.
                            </p>

                        </div>

                        <div
                            className="
                                world-builder-essence-line
                            "
                        >
                            {selectedAvatarData.name}
                        </div>

                    </div>

                </article>


                {/* WHERE ARE YOU CREATING FROM? */}

                <article
                    className="
                        world-builder-card
                        world-builder-creation
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        WHERE ARE YOU CREATING FROM?
                    </div>

                    <div
                        className="
                            world-builder-creation-content
                        "
                    >

                        <div
                            className="
                                world-builder-path-symbol
                            "
                        >
                            ➜
                        </div>

                        <div>

                            <h2>
                                Your Creation Path
                            </h2>

                            <p>
                                Your creation path will evolve
                                as your ideas become Living Worlds.
                            </p>

                        </div>

                        <div
                            className="
                                world-builder-path-stage
                            "
                        >

                            <span>
                                CURRENT STAGE
                            </span>

                            <strong>
                                {
                                    evolution.stage ||
                                    "Beginning"
                                }
                            </strong>

                        </div>

                    </div>

                </article>

            </div>


            {/* =================================================
                FIVE LIVING CARDS
            ================================================= */}

            <section
                className="
                    world-builder-living-cards-section
                "
            >

                <div className="world-builder-section-heading">

                    <div
                        className="
                            world-builder-section-heading-inner
                        "
                    >

                        <span>
                            LIVING WORLDS
                        </span>

                        <small>
                            Choose a doorway into your living ecosystem.
                        </small>

                    </div>

                </div>


                <div
                    className="
                        world-builder-living-cards
                    "
                >

                    {worldBuilderLivingCards.map(
                        card => (

                            <button
                                key={card.id}
                                type="button"
                                className="
                                    world-builder-living-card
                                "
                                onClick={() =>
                                    enterLivingCard(
                                        card
                                    )
                                }
                            >

                                <div
                                    className="
                                        world-builder-living-card-art
                                    "
                                >

                                    {card.image ? (

                                        <img
                                            src={card.image}
                                            alt={card.title}
                                        />

                                    ) : (

                                        <span>
                                            {card.symbol}
                                        </span>

                                    )}

                                </div>

                                <strong>
                                    {card.title}
                                </strong>

                                <small>
                                    ENTER WORLD
                                </small>

                            </button>

                        )
                    )}

                </div>

            </section>


            {/* =================================================
                TODAY + CREATOR MEMORY
            ================================================= */}

            <div
                className="
                    world-builder-row
                    world-builder-row-two
                    world-builder-reflection-row
                "
            >

                {/* TODAY'S CREATOR QUESTION */}

                <article
                    className="
                        world-builder-card
                        world-builder-daily-question
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        TODAY'S CREATOR QUESTION
                    </div>


                    <div
                        className="
                            daily-question-energy
                        "
                    >

                        <span
                            className="
                                daily-question-symbol
                            "
                        >
                            {todayTzolkin.sign.symbol}
                        </span>

                        <span>
                            {todayTzolkin.tone}{" "}
                            {todayTzolkin.sign.classic}
                        </span>

                    </div>


                    <h2>
                        {dailyQuestion}
                    </h2>


                    <textarea
                        value={dailyAnswer}
                        onChange={event =>
                            setDailyAnswer(
                                event.target.value
                            )
                        }
                        placeholder="Write a few words..."
                        rows="4"
                    />


                    <button
                        type="button"
                        className="
                            world-builder-button
                        "
                        onClick={
                            handleSaveDailyAnswer
                        }
                    >
                        SAVE TODAY'S REFLECTION
                    </button>

                </article>


                {/* MY CREATOR MEMORY */}

                <article
                    className="
                        world-builder-card
                        world-builder-creator-memory
                    "
                >

                    <div
                        className="
                            world-builder-card-label
                        "
                    >
                        MY CREATOR MEMORY
                    </div>

                    <p
                        className="
                            world-builder-memory-intro
                        "
                    >
                        Tell Blinkita something you want remembered.
                    </p>


                    <textarea
                        value={creatorMemory}
                        onChange={event =>
                            setCreatorMemory(
                                event.target.value
                            )
                        }
                        placeholder="Add something you want your Living World — and Blinkita AI — to remember about you..."
                        rows="6"
                    />


                    <button
                        type="button"
                        className="
                            world-builder-button
                        "
                        onClick={
                            handleSaveCreatorMemory
                        }
                    >
                        {
                            memorySaved
                                ? "MEMORY SAVED ✓"
                                : "SAVE TO CREATOR MEMORY"
                        }
                    </button>

                </article>

            </div>


            {/* =================================================
                LIVING CARD ORACLE
            ================================================= */}

            <section
                className="
                    living-card-oracle
                "
            >

                <header
                    className="
                        living-card-oracle-header
                    "
                >

                    <div>

                        <span>
                            BLINKITA LIVING CARD ORACLE™
                        </span>

                        <h2>
                            Listen. Choose. Receive.
                        </h2>

                    </div>


                    <div
                        className="
                            living-card-oracle-energy
                        "
                    >

                        {todayTzolkin.sign.symbol}

                        <small>
                            {todayTzolkin.tone}{" "}
                            {todayTzolkin.sign.classic}
                        </small>

                    </div>

                </header>


                <div
                    className="
                        living-card-oracle-grid
                    "
                >

                    {/* =================================================
                        DECK
                    ================================================= */}

                    <div
                        className="
                            living-card-deck
                        "
                    >

                        <div
                            className="
                                oracle-section-label
                            "
                        >
                            YOUR DECK
                        </div>


                        <div
                            className="
                                living-card-stack
                            "
                        >

                            {livingCards
                                .slice(0, 7)
                                .map(
                                    (
                                        card,
                                        index
                                    ) => (

                                        <div
                                            key={card.id}
                                            className="
                                                living-card-stack-card
                                            "
                                            style={{
                                                "--card-index":
                                                    index
                                            }}
                                        >

                                            <div
                                                className="
                                                    living-card-back
                                                "
                                            >

                                                <div
                                                    className="
                                                        living-card-back-symbol
                                                    "
                                                >
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

                                    )
                                )}

                        </div>


                        <p
                            className="
                                oracle-deck-note
                            "
                        >
                            50+ Living Cards will live here.
                        </p>


                        <button
                            type="button"
                            className="
                                world-builder-oracle-button
                            "
                            onClick={drawCard}
                        >
                            DRAW A CARD
                        </button>

                    </div>


                    {/* =================================================
                        READING
                    ================================================= */}

                    <div
                        className="
                            living-card-reading
                        "
                    >

                        <div
                            className="
                                oracle-section-label
                            "
                        >
                            YOUR READING
                        </div>


                        <h3>
                            What would you like guidance for?
                        </h3>


                        <div
                            className="
                                oracle-options
                            "
                        >

                            <label>

                                <input
                                    type="radio"
                                    name="oracle-purpose"
                                    value="today"
                                    checked={
                                        readingPurpose ===
                                        "today"
                                    }
                                    onChange={event =>
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
                                        readingPurpose ===
                                        "creation"
                                    }
                                    onChange={event =>
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
                                        readingPurpose ===
                                        "question"
                                    }
                                    onChange={event =>
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
                            onChange={event =>
                                setQuestion(
                                    event.target.value
                                )
                            }
                            placeholder="Ask your question..."
                            rows="5"
                        />


                        <button
                            type="button"
                            className="
                                world-builder-oracle-button
                            "
                            onClick={drawCard}
                        >
                            REVEAL MY CARD
                        </button>

                    </div>

                </div>

            </section>


            {/* =================================================
                ORACLE RESULT
                PREMIUM INNER PANEL — NO CLOSE BUTTON
            ================================================= */}

            {selectedCard && (

                <section
                    className="
                        living-card-result-section
                    "
                >

                    <div
                        className="
                            living-card-result-inner
                        "
                    >

                        <div
                            className="
                                living-card-result-heading
                            "
                        >

                            <span>
                                YOUR LIVING CARD
                            </span>

                            <small>
                                {todayTzolkin.tone}{" "}
                                {todayTzolkin.sign.classic}
                            </small>

                        </div>


                        <div
                            className="
                                living-card-result-card
                            "
                        >

                            <div
                                className="
                                    living-card-result-symbol
                                "
                            >
                                {selectedCard.symbol}
                            </div>


                            <span
                                className="
                                    living-card-result-kicker
                                "
                            >
                                BLINKITA LIVING CARD ORACLE™
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
                                className="
                                    world-builder-oracle-button
                                "
                                onClick={() =>
                                    window.location.href =
                                        selectedCard.destination
                                }
                            >
                                ENTER THIS WORLD
                            </button>

                        </div>

                    </div>

                </section>

            )}

        </section>
    );
}