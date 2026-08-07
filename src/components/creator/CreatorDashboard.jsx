import MyLivingNavigation from "./MyLivingNavigation";

import CreatorLivingWorlds from "./CreatorLivingWorlds";

import CreatorBirthMatrix from "./CreatorBirthMatrix";

import CreatorIdentityCard from "./CreatorIdentityCard";
/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR DASHBOARD™

Creator identity and evolution space

Version 5.0

Birth Matrix™
Living Time™ foundation
==========================================
*/

import {
    useRef,
    useState
} from "react";


import {
    useLanguage
} from "../../core/i18n/LanguageState";


import {
    t
} from "../../core/i18n/LanguageSystem";


import {
    getCreatorState
} from "../../core/creator/CreatorState";


import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";


import WorldBuilderEvolutionCard
from "../evolution/WorldBuilderEvolutionCard";


import WorldBuilderDomainCard
from "../worldbuilder/WorldBuilderDomainCard";


import CreatorJourneyCard
from "./CreatorJourneyCard";


import LivingMemoryStatus
from "./LivingMemoryStatus";


import CreatorIntelligenceCard
from "./CreatorIntelligenceCard";

import CreatorAnalysisCard from "./CreatorAnalysisCard";

import CreatorEssenceCard
from "./CreatorEssenceCard";


import CreatorEvolutionTimeline
from "./CreatorEvolutionTimeline";


import {
    getToneImage,
    getSignImage
} from "../../core/tzolkin/TzolkinImages";



/*
==========================================
TZOLK'IN CONFIGURATION
==========================================
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
==========================================
BIRTH MATRIX™ DAILY MESSAGES
==========================================
*/

const BIRTH_MESSAGES_EN = [

    "Your birth energy reminds you that becoming is not a destination. Something in you is always becoming more fully itself.",

    "Today your Living Time invites you to notice what feels quietly alive within you.",

    "Your birth energy carries a particular way of seeing. Trust the perspective that only you can bring.",

    "There is wisdom in the rhythm of your own becoming. You do not need to move at someone else's pace.",

    "Something you once considered a weakness may hold an overlooked part of your creative power.",

    "Your Living Time is not asking you to become someone else. It is inviting you to become more completely yourself.",

    "Notice what repeatedly calls your attention today. Repetition can be a doorway into meaning.",

    "Your birth energy is a beginning, not a limitation. What you create with it is yours to discover.",

    "There may be more possibility in your present moment than your mind is currently able to see.",

    "Today is an invitation to listen before deciding. Sometimes the deeper answer arrives quietly.",

    "Your creative path becomes clearer when you stop measuring it against someone else's journey.",

    "Something inside you already knows the direction. Give it enough silence to be heard.",

    "Your Living Time carries memory, movement and possibility. Notice which one is asking for you today.",

    "A small decision made consciously can become the beginning of a much larger transformation.",

    "Your birth energy does not define your future. It gives you another lens through which to discover it.",

    "What feels natural to you may be precisely what makes your creation different.",

    "Today, protect one moment in which you can simply be present with yourself.",

    "Your story is still unfolding. Do not mistake an unfinished chapter for an unfinished self.",

    "The world you create begins with the way you meet the world within you.",

    "Your Living Time is alive. What will you notice today that you did not notice yesterday?"

];


const BIRTH_MESSAGES_SL = [

    "Tvoja rojstna energija te spominja, da postajanje ni cilj. Nekaj v tebi se vedno razkriva bolj popolno.",

    "Danes te tvoj Živ Čas vabi, da opaziš, kaj v tebi tiho živi.",

    "Tvoja rojstna energija nosi poseben način gledanja. Zaupaj pogledu, ki ga lahko prineseš samo ti.",

    "V ritmu tvojega lastnega razvoja je modrost. Ni ti treba hoditi v ritmu nekoga drugega.",

    "Nekaj, kar si nekoč videl kot šibkost, morda skriva del tvoje ustvarjalne moči.",

    "Tvoj Živ Čas od tebe ne zahteva, da postaneš nekdo drug. Vabi te, da postaneš bolj popolnoma ti.",

    "Opazi, kaj danes znova in znova pritegne tvojo pozornost. Ponavljanje je lahko vrata v pomen.",

    "Tvoja rojstna energija je začetek, ne omejitev. Kaj boš z njo ustvaril, moraš odkriti sam.",

    "V sedanjem trenutku je morda več možnosti, kot jih tvoj um trenutno lahko vidi.",

    "Danes si vzemi čas za poslušanje, preden se odločiš. Včasih globlji odgovor pride tiho.",

    "Tvoja ustvarjalna pot postane jasnejša, ko je nehaš primerjati s potjo nekoga drugega.",

    "Nekaj v tebi že pozna smer. Daj temu dovolj tišine, da lahko spregovori.",

    "Tvoj Živ Čas nosi spomin, gibanje in možnost. Opazi, kateri od njih te danes kliče.",

    "Majhna zavestna odločitev lahko postane začetek veliko večje preobrazbe.",

    "Tvoja rojstna energija ne določa tvoje prihodnosti. Daje ti le še en pogled, skozi katerega jo lahko odkriješ.",

    "Kar je tebi naravno, je morda prav tisto, zaradi česar je tvoja stvaritev drugačna.",

    "Danes zaščiti en trenutek, v katerem lahko samo obstajaš in si prisoten s seboj.",

    "Tvoja zgodba se še vedno piše. Ne zamenjaj nedokončanega poglavja za nedokončanega sebe.",

    "Svet, ki ga ustvarjaš, se začne z načinom, kako srečaš svet v sebi.",

    "Tvoj Živ Čas je živ. Kaj boš danes opazil, česar včeraj nisi?"

];



/*
==========================================
JULIAN DAY NUMBER
==========================================
*/

function getJulianDayNumber(
    year,
    month,
    day
) {

    let a =
        Math.floor(
            (14 - month) / 12
        );


    let y =
        year +
        4800 -
        a;


    let m =
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
==========================================
TZOLK'IN CALCULATION
==========================================
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


    const sign =
        TZOLKIN_SIGNS[
            signIndex
        ];


    return {

        tone,

        signIndex,

        sign,

        kin,

        jdn,

        daysFromBase

    };

}



/*
==========================================
CREATOR DASHBOARD
==========================================
*/

export default function CreatorDashboard() {

    const language =
        useLanguage();


    const creatorState =
        getCreatorState() || {};


    const worldState =
        getWorldState() || {};


    const creator =
        creatorState.creator || {

            id: null,

            identity: {

                name: "",
                archetype: "Explorer",
                description: "",
                photo: "",
                avatar: "🌱"

            },

            evolution: {

                level: 1,
                experience: 0,
                stage: "Beginning"

            }

        };


    const worlds =
        creatorState.worlds || [];


    const evolution =
        creatorState.evolution ||
        creator.evolution;


    const worldEvolution =
        worldState.evolution || {};


    const worldGovernance =
        worldState.governance || {};


    const worldDecision =
        worldState.decision || {};


    const worldAction =
        worldState.action || {};


const creatorArchetype =
    evolution?.archetype ||
    creator.identity?.archetype ||
    "Seed Creator";


const normalizedArchetype =
    creatorArchetype.toLowerCase();


    const translatedArchetype =

        normalizedArchetype === "explorer"

            ?

        t(
            "archetypes.explorer"
        )

            :

        creatorArchetype;


    const creatorStage =
        evolution?.stage || "";


    const translatedCreatorStage =

        creatorStage.toLowerCase() === "beginning"

            ?

        t(
            "creatorStages.beginning"
        )

            :

        creatorStage.toLowerCase() === "creation"

            ?

        t(
            "creatorStages.creation"
        )

            :

        creatorStage;



    /*
    ==========================================
    CREATOR IDENTITY STATE
    ==========================================
    */

    const [name, setName] =
    useState(
        creator.identity?.name || ""
    );


    const [archetype, setArchetype] =
    useState(
        creator.identity?.archetype ||
        evolution?.archetype ||
        "Seed Creator"
    );


        const [description, setDescription] =
        useState(
            creator.identity?.description ||
            ""
        );


    const [photo, setPhoto] =
        useState(
            creator.identity?.photo ||
            ""
        );


    const [avatar, setAvatar] =
        useState(
            creator.identity?.avatar ||
            "🌱"
        );


    const [saved, setSaved] =
        useState(false);


    const fileInputRef =
        useRef(null);



    /*
    ==========================================
    BIRTH MATRIX STATE
    ==========================================
    */

    const existingBirthMatrix =
        creator.identity?.birthMatrix || null;


    const [birthDate, setBirthDate] =
        useState(
            existingBirthMatrix?.birthDate ||
            ""
        );


    const [birthMatrix, setBirthMatrix] =
        useState(
            existingBirthMatrix || null
        );


    const [birthReflection, setBirthReflection] =
        useState(
            existingBirthMatrix?.reflection ||
            ""
        );


    const [reflectionSaved, setReflectionSaved] =
        useState(false);


    const isSlovenian =
        language === "sl";


    const identityLabels = {

        portrait:
            isSlovenian
                ? "Tvoj portret"
                : "Your Portrait",

        upload:
            isSlovenian
                ? "Naloži fotografijo"
                : "Upload Photo",

        change:
            isSlovenian
                ? "Spremeni fotografijo"
                : "Change Photo",

        avatar:
            isSlovenian
                ? "Izberi svoj avatar"
                : "Choose Your Avatar",

        identityNote:
            isSlovenian
                ? "Tvoja vizualna identiteta v Living World™."
                : "Your visual identity inside your Living World™",

        remove:
            isSlovenian
                ? "Odstrani fotografijo"
                : "Remove Photo"

    };


const creatorSymbols = [

{
    symbol: "🌱",
    name: "Seed Creator",
    meaning: "Creator of beginnings",
    message:
    "You are planting the first seeds of creation. Your ideas may still be small, but every Living World begins with a single intention. Give them time, space and care. Blinkita sees the first roots of something meaningful growing within you."
},

{
    symbol: "🌿",
    name: "Nature Creator",
    meaning: "Creator connected with life",
    message:
    "You create through connection, harmony and natural rhythms. Your ideas need room to grow in their own way. Trust the seasons within yourself and allow your creations to unfold naturally."
},

{
    symbol: "🦋",
    name: "Explorer Creator",
    meaning: "Discoverer of possibilities",
    message:
    "Your gift is curiosity. You discover new paths by asking questions and exploring possibilities. Blinkita sees a creator who turns discovery into new worlds."
},

{
    symbol: "🌙",
    name: "Dreamer Creator",
    meaning: "Creator of visions",
    message:
    "Your creations begin in the world of imagination. Your dreams carry messages from possibilities that are waiting to become real. Protect your visions and give them a place to grow."
},

{
    symbol: "✨",
    name: "Vision Creator",
    meaning: "Creator of future possibilities",
    message:
    "You naturally see what could become. Your imagination reaches beyond the present moment. Blinkita reminds you that every vision becomes real through one small step of creation."
},

{
    symbol: "☀️",
    name: "Light Creator",
    meaning: "Creator who brings clarity",
    message:
    "You bring light, understanding and new perspectives into the world. Your creations help others see things differently and discover new possibilities."
},

{
    symbol: "🔥",
    name: "Fire Creator",
    meaning: "Creator of transformation",
    message:
    "You create through passion, courage and change. Your energy transforms ideas into movement and inspires new beginnings."
},

{
    symbol: "🌊",
    name: "Flow Creator",
    meaning: "Creator who follows living rhythms",
    message:
    "You understand that creation has its own rhythm. Your strength comes from listening, adapting and moving with inspiration as it arrives."
},

{
    symbol: "🌎",
    name: "World Creator",
    meaning: "Creator of Living Worlds",
    message:
    "You are drawn to creating places where ideas, experiences and people can meet. Your creations have the potential to become living spaces for connection."
},

{
    symbol: "🪶",
    name: "Wisdom Creator",
    meaning: "Creator carrying knowledge",
    message:
    "You create by collecting experiences, memories and wisdom. Your gift is transforming what you learn into something that can guide others."
},

{
    symbol: "🌀",
    name: "Spiral Creator",
    meaning: "Creator of evolution and cycles",
    message:
    "You understand that every creation continues to evolve. Your journey is not about reaching an ending, but discovering new layers of possibility."
},

{
    symbol: "🌺",
    name: "Beauty Creator",
    meaning: "Creator of harmony and expression",
    message:
    "You bring beauty, emotion and harmony into your creations. Your work reminds others that beauty can also be a way of connecting."
},

{
    symbol: "🐚",
    name: "Ocean Creator",
    meaning: "Creator connected with depth and memory",
    message:
    "You create from deep inner places. Like the ocean, your imagination carries hidden treasures and memories waiting to be discovered."
},

{
    symbol: "⭐",
    name: "Star Creator",
    meaning: "Creator guided by inspiration",
    message:
    "You follow sparks of inspiration and moments of wonder. Your creations become points of light that can inspire others."
},

{
    symbol: "🌈",
    name: "Rainbow Creator",
    meaning: "Creator of connection and diversity",
    message:
    "You bring different colors, ideas and perspectives together. Your gift is creating harmony through diversity."
},

{
    symbol: "🦅",
    name: "Freedom Creator",
    meaning: "Creator expanding beyond limits",
    message:
    "You are here to explore beyond familiar boundaries. Your creations grow when you allow yourself to imagine without limits."
},

{
    symbol: "🐉",
    name: "Transformation Creator",
    meaning: "Creator of deep change",
    message:
    "You carry the energy of transformation. Your creations help change perspectives, experiences and the way people see possibilities."
},

{
    symbol: "💎",
    name: "Crystal Creator",
    meaning: "Creator of clarity and value",
    message:
    "You see the essence hidden inside ideas. Your gift is bringing clarity, structure and value into what you create."
},

{
    symbol: "🌳",
    name: "Guardian Creator",
    meaning: "Creator protecting wisdom",
    message:
    "You create with care and responsibility. Your role is to protect what matters and nurture what continues to grow."
},

{
    symbol: "🧭",
    name: "Navigator Creator",
    meaning: "Creator finding the path",
    message:
    "You are guided by exploration and direction. Your creations help reveal paths where others may see uncertainty."
},

{
    symbol: "🌌",
    name: "Cosmic Creator",
    meaning: "Creator connected with universal patterns",
    message:
    "You see connections between ideas, moments and possibilities. Your creations are inspired by a bigger picture."
},

{
    symbol: "🌸",
    name: "Heart Creator",
    meaning: "Creator of beauty and connection",
    message:
    "You create through emotion, authenticity and connection. Your creations remind people that they are seen and valued."
},

{
    symbol: "🪨",
    name: "Foundation Creator",
    meaning: "Creator building strong roots",
    message:
    "You build with patience and intention. Your creations are designed to grow from strong foundations and support the future."
},

{
    symbol: "🌬️",
    name: "Spirit Creator",
    meaning: "Creator guided by intuition and flow",
    message:
    "You listen to subtle inspiration and inner guidance. Your creations bring invisible ideas into visible form."
}

];


const avatarOptions = creatorSymbols;


/*
    ==========================================
    PHOTO
    ==========================================
    */

    function handlePhotoChange(
        event
    ) {

        const file =
            event.target.files?.[0];


        if (!file) {

            return;

        }


        if (
            !file.type.startsWith(
                "image/"
            )
        ) {

            return;

        }


        const reader =
            new FileReader();


        reader.onload = () => {

            setPhoto(
                reader.result
            );

        };


        reader.readAsDataURL(
            file
        );

    }



    function handleRemovePhoto() {

        setPhoto("");

    }



    /*
    ==========================================
    SAVE CREATOR IDENTITY
    ==========================================
    */

    function handleSaveIdentity() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...creator.identity,

                name:
                    name.trim() ||
                    t(
                        "dashboard.anonymousCreator"
                    ),

               archetype:
    archetype.trim() ||
    "Seed Creator",

                description:
                    description.trim(),

                photo:
                    photo || "",

                avatar:
                    avatar || "🌱",

                birthMatrix:
                    birthMatrix || existingBirthMatrix || null

            }

        };


        updateWorldState({

            creator:
                updatedCreator

        });


        setSaved(true);


        console.log(

            "🌱 Creator Identity Saved:",

            updatedCreator.identity

        );


        setTimeout(
            () => {

                setSaved(false);

            },
            2500
        );

    }



    /*
    ==========================================
    BIRTH MATRIX CALCULATION
    ==========================================
    */

    function handleCalculateBirthMatrix() {

        if (!birthDate) {

            return;

        }


        const parts =
            birthDate.split("-");


        if (parts.length !== 3) {

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

            return;

        }


        const result =
            calculateTzolkin(
                year,
                month,
                day
            );


        const today =
            new Date();


        const dayOfYear =
            Math.floor(

                (
                    Date.UTC(
                        today.getUTCFullYear(),
                        today.getUTCMonth(),
                        today.getUTCDate()
                    )

                    -

                    Date.UTC(
                        today.getUTCFullYear(),
                        0,
                        0
                    )

                )

                /

                86400000

            );


        const messageIndex =
            (
                result.signIndex +
                result.tone +
                dayOfYear
            ) % 20;


        const messages =
            isSlovenian
                ? BIRTH_MESSAGES_SL
                : BIRTH_MESSAGES_EN;


        const message =
            messages[
                messageIndex
            ];


        const newBirthMatrix = {

            birthDate,

            tone:
                result.tone,

            sign:
                result.sign.classic,

            localSign:
                result.sign.local,

            symbol:
                result.sign.symbol,

            element:
                result.sign.element,

            kin:
                result.kin,

            signIndex:
                result.signIndex,

            dailyMessage:
                message,

            reflection:
                birthReflection || "",

            calculatedAt:
                new Date().toISOString()

        };


        setBirthMatrix(
            newBirthMatrix
        );


        const updatedCreator = {

            ...creator,

            identity: {

                ...creator.identity,

                birthMatrix:
                    newBirthMatrix

            }

        };


        updateWorldState({

            creator:
                updatedCreator

        });


        console.log(

            "🌀 Birth Matrix™ Calculated:",

            newBirthMatrix

        );

    }



    /*
    ==========================================
    SAVE REFLECTION
    ==========================================
    */

    function handleSaveReflection() {

        if (!birthMatrix) {

            return;

        }


        const updatedBirthMatrix = {

            ...birthMatrix,

            reflection:
                birthReflection,

            reflectionSavedAt:
                new Date().toISOString()

        };


        const updatedCreator = {

            ...creator,

            identity: {

                ...creator.identity,

                birthMatrix:
                    updatedBirthMatrix

            }

        };


        updateWorldState({

            creator:
                updatedCreator

        });


        setBirthMatrix(
            updatedBirthMatrix
        );


        setReflectionSaved(
            true
        );


        setTimeout(
            () => {

                setReflectionSaved(
                    false
                );

            },
            2500
        );

    }



    /*
    ==========================================
    BIRTH MATRIX DAILY MESSAGE
    ==========================================
    */

    function getDailyBirthMessage() {

        if (!birthMatrix) {

            return "";

        }


        const today =
            new Date();


        const dayOfYear =
            Math.floor(

                (
                    Date.UTC(
                        today.getUTCFullYear(),
                        today.getUTCMonth(),
                        today.getUTCDate()
                    )

                    -

                    Date.UTC(
                        today.getUTCFullYear(),
                        0,
                        0
                    )

                )

                /

                86400000

            );


        const messages =
            isSlovenian
                ? BIRTH_MESSAGES_SL
                : BIRTH_MESSAGES_EN;


        const index =
            (
                birthMatrix.signIndex +
                birthMatrix.tone +
                dayOfYear
            ) % messages.length;


        return messages[index];

    }



    const currentBirthMessage =
        getDailyBirthMessage();



    /*
    ==========================================
    RENDER
    ==========================================
    */

    return (

        <section className="living-page creator-dashboard">

            <header className="living-header">

                <h1>

                    🌱{" "}

                    {
                        t(
                            "dashboard.creatorWelcome"
                        )
                    }

                </h1>


                <p>

                    {
                        t(
                            "dashboard.creatorIntroduction"
                        )
                    }

                </p>

            </header>

{/* ==========================================
                MY LIVING NAVIGATION™
            ========================================== */}

            <MyLivingNavigation />


{/* ==========================================
    MY LIVING SPACES™

    01 ANALYSIS
    02 IDENTITY
    03 TIME
    04 INTELLIGENCE
    05 CREATION PATH
    06 WORLDS
========================================== */}



<div className="my-living-layout">

    {/* ==================================================
        01 · MY LIVING ANALYSIS
    ================================================== */}

    <section
        id="living-analysis"
        className="my-living-section my-living-section-analysis"
    >

        <div className="my-living-section-header">

            <div className="my-living-section-mark">
                ✦
            </div>

            <div>
                <span className="my-living-section-number">
                    01
                </span>

                <span className="my-living-section-label">
                    MY LIVING ANALYSIS
                </span>

                <p>
                    See what your creation is revealing.
                </p>
            </div>

            <div className="my-living-section-logo">
                ✧
            </div>

        </div>


        <div className="my-living-premium-grid my-living-analysis-grid">

            {/* BLINKITA ANALYSIS™ */}

            <article className="my-living-premium-card my-living-analysis-primary">

                <div className="my-living-card-symbol">
                    ✦
                </div>

                <div className="my-living-card-header">
                    <span>BLINKITA ANALYSIS™</span>
                    <small>01</small>
                </div>

                <h3>
                    Your Living Analysis
                </h3>

                <p>
                    A living synthesis of what your 9 Living Portals reveal about the Creator behind your creation.
                </p>

                <div className="my-living-analysis-body">

                    <CreatorAnalysisCard />

                </div>

            </article>


            {/* DEEPENING ANALYSIS */}

            <article className="my-living-premium-card my-living-analysis-secondary">

                <div className="my-living-card-symbol">
                    ◇
                </div>

                <div className="my-living-card-header">
                    <span>DEEPENING ANALYSIS</span>
                    <small>02</small>
                </div>

                <h3>
                    Go Deeper
                </h3>

                <p>
                    Add anything that has emerged since
                    your first Living Portal reflection.
                </p>

                <textarea
                    className="my-living-reflection-input"
                    placeholder="What else would you like to reveal, add or explore?"
                    rows="8"
                />

                <button
                    type="button"
                    className="my-living-premium-button"
                >
                    DEEPEN MY ANALYSIS
                </button>

            </article>


            {/* WORLD ANALYSIS */}

            <article className="my-living-premium-card my-living-analysis-world">

                <div className="my-living-card-symbol">
                    ◈
                </div>

                <div className="my-living-card-header">
                    <span>WORLD ANALYSIS</span>
                    <small>03</small>
                </div>

                <h3>
                    Analyze a Living World
                </h3>

                <p>
                    Choose one of your Living Worlds
                    and explore what is alive within it.
                </p>

                <div className="my-living-world-selector">

                    <div className="my-living-placeholder-visual">
                        <span>◉</span>
                        <small>
                            YOUR LIVING WORLD
                        </small>
                    </div>

                    <select
                        className="my-living-premium-select"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Choose a Living World
                        </option>

                        {worlds?.map((world, index) => (
                            <option
                                key={world?.id || index}
                                value={world?.id || index}
                            >
                                {
                                    world?.name ||
                                    world?.title ||
                                    `Living World ${index + 1}`
                                }
                            </option>
                        ))}

                    </select>

                </div>

            </article>

        </div>

    </section>



    {/* ==================================================
        02 · MY LIVING IDENTITY
    ================================================== */}

    <section
        id="living-identity"
        className="my-living-section my-living-section-identity"
    >

        <div className="my-living-section-header">

            <div className="my-living-section-mark">
                ◎
            </div>

            <div>
                <span className="my-living-section-number">
                    02
                </span>

                <span className="my-living-section-label">
                    MY LIVING IDENTITY
                </span>

                <p>
                    Meet the Creator behind the creation.
                </p>
            </div>

            <div className="my-living-section-logo">
                ✧
            </div>

        </div>


        <div className="my-living-premium-grid my-living-identity-grid">

            {/* YOUR PORTRAIT */}

            <article className="my-living-premium-card my-living-portrait-card">

                <div className="my-living-card-header">
                    <span>YOUR PORTRAIT</span>
                    <small>01</small>
                </div>

                <div className="my-living-portrait-inner">

                    <CreatorIdentityCard
                        creator={creator}
                        t={t}
                        identityLabels={identityLabels}
                        photo={photo}
                        avatar={avatar}
                        setAvatar={setAvatar}
                        avatarOptions={avatarOptions}
                        creatorSymbols={creatorSymbols}
                        fileInputRef={fileInputRef}
                        handlePhotoChange={handlePhotoChange}
                        handleRemovePhoto={handleRemovePhoto}
                        name={name}
                        setName={setName}
                        archetype={archetype}
                        setArchetype={setArchetype}
                        description={description}
                        setDescription={setDescription}
                        saved={saved}
                        handleSaveIdentity={handleSaveIdentity}
                    />

                </div>

            </article>


            {/* IDENTITY EVOLUTION + ESSENCE */}

            <article className="my-living-premium-card my-living-evolution-card">

                <div className="my-living-card-header">
                    <span>MY IDENTITY EVOLUTION</span>
                    <small>02</small>
                </div>

                <div className="my-living-inner-module">

                    <div className="my-living-inner-module-title">
                        <span>✦</span>
                        My Identity Evolution
                    </div>

                    <CreatorEvolutionTimeline
                        creator={creator}
                        evolution={evolution}
                    />

                </div>


                <div className="my-living-inner-module my-living-essence-module">

                    <div className="my-living-inner-module-title">
                        <span>◇</span>
                        My Living Essence
                    </div>

                    <CreatorEssenceCard
                        creator={creator}
                    />

                </div>

            </article>


            {/* ACHIEVEMENTS */}

            <article className="my-living-premium-card my-living-achievements-card">

                <div className="my-living-card-header">
                    <span>MY ACHIEVEMENTS</span>
                    <small>03</small>
                </div>

                <div className="my-living-achievements-visual">
                    <div className="my-living-achievement-orbit">
                        ✦
                    </div>

                    <span>
                        YOUR CREATION IS BECOMING REAL
                    </span>
                </div>

                <div className="my-living-achievements-content">

                    <h3>
                        {
                            t(
                                "dashboard.achievements"
                            )
                        }
                    </h3>

                    <p>
                        {
                            t(
                                "dashboard.achievementsDescription"
                            )
                        }
                    </p>

                </div>

            </article>

        </div>

    </section>



    {/* ==================================================
        03 · MY LIVING TIME
    ================================================== */}

    <section
        id="living-time"
        className="my-living-section my-living-section-time"
    >

        <div className="my-living-section-header">

            <div className="my-living-section-mark">
                ◌
            </div>

            <div>
                <span className="my-living-section-number">
                    03
                </span>

                <span className="my-living-section-label">
                    MY LIVING TIME
                </span>

                <p>
                    Your personal journey through Living Time.
                </p>
            </div>

            <div className="my-living-section-logo">
                ∞
            </div>

        </div>


        <div className="my-living-premium-grid my-living-time-grid">

            {/* BIRTH MATRIX */}

            <article className="my-living-premium-card my-living-birth-card">

                <div className="my-living-card-header">
                    <span>YOUR BIRTH MATRIX™</span>
                    <small>01</small>
                </div>

                <div className="my-living-time-modules">

                    <div className="my-living-time-module">
                        <span className="my-living-module-symbol">
                            ☼
                        </span>

                        <strong>
                            Birth Tzolk’in
                        </strong>

                        <small>
                            Your birth energy
                        </small>
                    </div>

                    <div className="my-living-time-module">
                        <span className="my-living-module-symbol">
                            ◌
                        </span>

                        <strong>
                            Daily Tzolk’in
                        </strong>

                        <small>
                            Today’s energy
                        </small>
                    </div>

                    <div className="my-living-time-module">
                        <span className="my-living-module-symbol">
                            ✧
                        </span>

                        <strong>
                            Personal Daily Energy
                        </strong>

                        <small>
                            Birth + today
                        </small>
                    </div>

                </div>

                <CreatorBirthMatrix
                    birthMatrix={birthMatrix}
                    birthDate={birthDate}
                    setBirthDate={setBirthDate}
                    handleCalculateBirthMatrix={
                        handleCalculateBirthMatrix
                    }
                    isSlovenian={isSlovenian}
                    getSignImage={getSignImage}
                />

            </article>


            {/* ORAKELJ AI */}

            <article className="my-living-premium-card my-living-orakelj-card">

                <div className="my-living-card-header">
                    <span>BLINKITA ORAKELJ AI</span>
                    <small>02</small>
                </div>

                <div className="my-living-orakelj-visual">
                    <div className="my-living-orakelj-symbol">
                        ◉
                    </div>

                    <span>
                        LIVING GUIDANCE
                    </span>

                    <small>
                        Your personal portal of reflection.
                    </small>
                </div>

                <div className="my-living-orakelj-space">
                    <span>
                        Your Orakelj AI space
                    </span>
                </div>

            </article>


            {/* TIME TRAVEL HISTORY */}

            <article className="my-living-premium-card my-living-history-card">

                <div className="my-living-card-header">
                    <span>YOUR TIME TRAVEL HISTORY™</span>
                    <small>03</small>
                </div>

                <p className="my-living-card-intro">
                    Your living record of what you created,
                    discovered, reflected upon and moved
                    through — together with the Tzolk’in energy
                    that accompanied it.
                </p>

                <div className="my-living-history-space">

                    <div className="my-living-history-empty">
                        <span>◌</span>
                        <strong>
                            Your journey will appear here.
                        </strong>
                        <small>
                            Creation · Reflection · Movement · Time
                        </small>
                    </div>

                </div>

                <textarea
                    className="my-living-history-input"
                    placeholder="Add something from your journey through time..."
                    rows="4"
                />

                <button
                    type="button"
                    className="my-living-premium-button"
                >
                    ADD TO MY HISTORY
                </button>

            </article>

        </div>

    </section>



    {/* ==================================================
        04 · LIVING INTELLIGENCE
    ================================================== */}

    <section
        id="living-intelligence"
        className="my-living-section my-living-section-intelligence"
    >

        <div className="my-living-section-header">

            <div className="my-living-section-mark">
                ✧
            </div>

            <div>
                <span className="my-living-section-number">
                    04
                </span>

                <span className="my-living-section-label">
                    LIVING INTELLIGENCE
                </span>

                <p>
                    Think, reflect and evolve with your living intelligence.
                </p>
            </div>

            <div className="my-living-section-logo">
                ◇
            </div>

        </div>

        <div className="my-living-single-module">

            <CreatorIntelligenceCard
                creator={creator}
            />

        </div>

    </section>



    {/* ==================================================
        05 · MY LIVING CREATION PATH
    ================================================== */}

    <section
        id="living-creation-path"
        className="my-living-section my-living-section-creation"
    >

        <div className="my-living-section-header">

            <div className="my-living-section-mark">
                ➜
            </div>

            <div>
                <span className="my-living-section-number">
                    05
                </span>

                <span className="my-living-section-label">
                    MY LIVING CREATION PATH
                </span>

                <p>
                    See where your creation is moving now.
                </p>
            </div>

            <div className="my-living-section-logo">
                ✦
            </div>

        </div>

        <div className="my-living-premium-grid my-living-creation-grid">

            <div className="my-living-single-module">

                <CreatorJourneyCard
                    creator={creator}
                    evolution={evolution}
                    creatorStage={translatedCreatorStage}
                    worldState={worldState}
                />

            </div>

            <div className="my-living-single-module">

                <WorldBuilderDomainCard />

            </div>

        </div>

    </section>



    {/* ==================================================
        06 · CHOOSE YOUR LIVING PATH
    ================================================== */}

    <section
        id="living-path"
        className="my-living-section my-living-section-path"
    >

        <div className="my-living-section-header">

            <div className="my-living-section-mark">
                ⟡
            </div>

            <div>
                <span className="my-living-section-number">
                    06
                </span>

                <span className="my-living-section-label">
                    CHOOSE YOUR LIVING PATH
                </span>

                <p>
                    Choose where your creation wants to go next.
                </p>
            </div>

            <div className="my-living-section-logo">
                ∞
            </div>

        </div>

    </section>

</div>


        </section>

    );

}




























