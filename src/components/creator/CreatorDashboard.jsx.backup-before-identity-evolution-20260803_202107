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


import CreatorReflection
from "./CreatorReflection";

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


avatarOptions.map(
    (option) => (

        <button

            key={option.symbol}

            type="button"

            className={
                avatar === option.symbol
                ?
                "creator-avatar-option active"
                :
                "creator-avatar-option"
            }

            onClick={() =>
                setAvatar(option.symbol)
            }

            aria-label={
                option.name
            }

        >

            <span className="creator-avatar-symbol">

                {
                    option.symbol
                }

            </span>


            <span className="creator-avatar-name">

                {
                    option.name
                }

            </span>

        </button>

    )
)


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



            {

         /* ==========================================
                CREATOR IDENTITY™
            ========================================== */}

            <section className="living-card living-section creator-identity-card">

                <div className="creator-identity-heading">

                    <div>

                        <span className="creator-identity-eyebrow">

                            CREATOR IDENTITY™

                        </span>


                        <h2>

                            {
                                t(
                                    "dashboard.creatorIdentity"
                                )
                            }

                        </h2>


                        <p>

                            {
                                t(
                                    "dashboard.creatorIdentityPrompt"
                                )
                            }

                        </p>

                    </div>

                </div>


                <div className="creator-identity-layout">

                    <aside className="creator-portrait-panel">

                        <div className="creator-portrait-label">

                            {
                                identityLabels.portrait
                            }

                        </div>


                        <div className="creator-portrait-frame">

                            {

                                photo

                                    ?

                                <img

                                    src={photo}

                                    alt={
                                        identityLabels.portrait
                                    }

                                    className="creator-portrait-image"

                                />

                                    :

                                <div className="creator-avatar-display">

                                    {
                                        avatar
                                    }

                                </div>

                            }

                        </div>


                        <div className="creator-portrait-actions">

                            <button

                                type="button"

                                className="creator-secondary-button"

                                onClick={() =>
                                    fileInputRef.current?.click()
                                }

                            >

                                📷{" "}

                                {
                                    photo
                                        ? identityLabels.change
                                        : identityLabels.upload
                                }

                            </button>


                            {

                                photo && (

                                    <button

                                        type="button"

                                        className="creator-text-button"

                                        onClick={
                                            handleRemovePhoto
                                        }

                                    >

                                        {
                                            identityLabels.remove
                                        }

                                    </button>

                                )

                            }

                        </div>


                        <input

                            ref={fileInputRef}

                            type="file"

                            accept="image/*"

                            onChange={
                                handlePhotoChange
                            }

                            className="creator-photo-input"

                        />


                        <p className="creator-portrait-note">

                            {
                                identityLabels.identityNote
                            }

                        </p>


                        <div className="creator-avatar-section">

                            <span className="creator-field-label">

                                {
                                    identityLabels.avatar
                                }

                            </span>


                            <div className="creator-avatar-grid">

                               {


    avatarOptions.map(

        (option) => (

            <button

                key={option.symbol}

                type="button"

                className={

                    avatar === option.symbol

                        ?

                    "creator-avatar-option active"

                        :

                    "creator-avatar-option"

                }

                onClick={() =>
                    setAvatar(option.symbol)
                }

                aria-label={
                    option.name
                }

            >

                {
                    option.symbol
                }

            </button>

        )

    )

}

                            </div>

                        </div>


<div className="creator-symbol-preview">

    {

        (() => {

            const selectedSymbol =
                creatorSymbols.find(
                    item =>
                    item.symbol === avatar
                );


            if (!selectedSymbol)
                return null;


            return (

                <>

                    <div className="creator-symbol-large">

                        {
                            selectedSymbol.symbol
                        }

                    </div>


                    <h3>

                        {
                            selectedSymbol.name
                        }

                    </h3>


                    <p className="creator-symbol-meaning">

                        {
                            selectedSymbol.meaning
                        }

                    </p>


                    <p className="creator-symbol-message">

                        {
                            selectedSymbol.message
                        }

                    </p>


                </>

            );


        })()

    }

</div>

                    </aside>



                    <div className="creator-identity-fields">

                        <div className="creator-field">

                            <label>

                                {
                                    t(
                                        "dashboard.name"
                                    )
                                }

                            </label>


                            <input

                                type="text"

                                value={name}

                                onChange={(event) =>
                                    setName(
                                        event.target.value
                                    )
                                }

                                placeholder={
                                    t(
                                        "dashboard.yourName"
                                    )
                                }

                            />

                        </div>


                        <div className="creator-field">

                            <label>

                                {
                                    t(
                                        "dashboard.archetype"
                                    )
                                }

                            </label>


                            <input

                                type="text"

                                value={archetype}

                                onChange={(event) =>
                                    setArchetype(
                                        event.target.value
                                    )
                                }

                                placeholder={
                                    t(
                                        "dashboard.archetypePlaceholder"
                                    )
                                }

                            />

                        </div>


                        <div className="creator-field creator-field-wide">

                            <label>

                                {
                                    t(
                                        "dashboard.aboutYou"
                                    )
                                }

                            </label>


                            <textarea

                                value={description}

                                onChange={(event) =>
                                    setDescription(
                                        event.target.value
                                    )
                                }

                                placeholder={
                                    t(
                                        "dashboard.aboutYouPlaceholder"
                                    )
                                }

                                rows="7"

                            />

                                               </div>


                        <div className="creator-identity-save-row">

                            <button

                                type="button"

                                className="journey-button creator-save-button"

                                onClick={
                                    handleSaveIdentity
                                }

                            >

                                {

                                    saved

                                        ?

                                    t(
                                        "dashboard.identitySaved"
                                    )

                                        :

                                    t(
                                        "dashboard.saveIdentity"
                                    )

                                }

                            </button>

                        </div>

                </div>

             </div>

            </section>{

         /* ==========================================
                YOUR BIRTH MATRIX™
            ========================================== */}

            <section className="living-card living-section creator-birth-matrix">

                {

             /* ==========================================
                    HEADER
                ========================================== */}

                <div className="creator-identity-heading creator-birth-matrix-heading">

                    <span className="creator-identity-eyebrow">

                        ⟡ YOUR BIRTH MATRIX™

                    </span>


                    <h2>

                        {
                            isSlovenian
                                ? "Odkrij svoj Živ Čas™"
                                : "Discover Your Living Time™"
                        }

                    </h2>


                    <p>

                        {
                            isSlovenian
                                ? "Tvoj datum rojstva odpre prvo plast tvojega Živega Časa."
                                : "Your birth date opens the first layer of your Living Time."
                        }

                    </p>

                </div>



                {

             /* ==========================================
                    PERMANENT IDENTITY LAYOUT
                ========================================== */}

                <div className="creator-identity-layout birth-matrix-layout">

                    {/* ==========================================
                        LEFT — BIRTH ENERGY
                    ========================================== */}

                    <div className="creator-portrait-panel birth-matrix-portrait-panel">

                        <span className="creator-portrait-label">

                            {
                                isSlovenian
                                    ? "Tvoja rojstna energija"
                                    : "Your Birth Energy"
                            }

                        </span>


                        <div className="creator-portrait-frame birth-matrix-symbol-frame">

                            {
                                birthMatrix?.sign

                                    ?

                                <img

                                    className="creator-portrait-image birth-matrix-sign-image"

                                    src={
                                        getSignImage(
                                            birthMatrix.sign
                                        )
                                    }

                                    alt={
                                        birthMatrix.sign
                                    }

                                />

                                    :

                                <div className="birth-matrix-empty-symbol">

                                    🌀

                                </div>

                            }

                        </div>


                        <p className="creator-portrait-note">

                            {
                                isSlovenian
                                    ? "Tvoj Tzolk'in znak rojstva"
                                    : "Your Tzolk'in birth sign"
                            }

                        </p>


                        <div className="birth-matrix-identity-values">

                            <span>

                                Kin{" "}

                                {
                                    birthMatrix?.kin ?? "—"
                                }

                            </span>


                            <strong>

                                {
                                    birthMatrix
                                        ? `${birthMatrix.tone} ${birthMatrix.sign}`
                                        : "—"
                                }

                            </strong>

                        </div>

                    </div>



                    {

                 /* ==========================================
                        RIGHT — DATE + IDENTITY
                    ========================================== */}

                    <div className="creator-identity-fields birth-matrix-fields">

                        {/* ==========================================
                            DATE OF BIRTH
                        ========================================== */}

                        <div className="creator-field">

                            <label>

                                {
                                    isSlovenian
                                        ? "DATUM ROJSTVA"
                                        : "DATE OF BIRTH"
                                }

                            </label>


                            <input

                                type="date"

                                value={birthDate}

                                onChange={(event) =>
                                    setBirthDate(
                                        event.target.value
                                    )
                                }

                            />

                        </div>


                        <div className="creator-field birth-matrix-action-field">

                            <label>

                                {
                                    isSlovenian
                                        ? "Tvoj Živ Čas"
                                        : "Your Living Time"
                                }

                            </label>


                            <button

                                type="button"

                                className="journey-button creator-birth-matrix-button"

                                onClick={
                                    handleCalculateBirthMatrix
                                }

                                disabled={!birthDate}

                            >

                                {
                                    birthMatrix

                                        ?

                                    (
                                        isSlovenian
                                            ? "Posodobi Birth Matrix™"
                                            : "Update Birth Matrix™"
                                    )

                                        :

                                    (
                                        isSlovenian
                                            ? "Izračunaj Birth Matrix™"
                                            : "Calculate Birth Matrix™"
                                    )
                                }

                            </button>

                        </div>



                        {
                     /* ==========================================
                            CALCULATED IDENTITY
                        ========================================== */}

                        {

                            birthMatrix && (

                                <>

                                    <div className="creator-field">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Tzolk'in identiteta"
                                                    : "Tzolk'in Identity"
                                            }

                                        </label>


                                        <div className="birth-matrix-value">

                                            {
                                                birthMatrix.tone
                                            }{" "}

                                            {
                                                birthMatrix.sign
                                            }

                                        </div>

                                    </div>


                                    <div className="creator-field">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Ime znaka"
                                                    : "Sign Name"
                                            }

                                        </label>


                                        <div className="birth-matrix-value birth-matrix-local-name">

                                            {
                                                birthMatrix.localSign
                                            }

                                        </div>

                                    </div>


                                    <div className="creator-field creator-field-wide">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Živ Čas rojstne energije"
                                                    : "Living Time of Birth Energy"
                                            }

                                        </label>


                                        <div className="birth-matrix-value birth-matrix-signature">

                                            {
                                                isSlovenian
                                                    ? "Tvoja rojstna energija nosi svoj lasten čas, ritem in način izražanja."
                                                    : "Your birth energy carries its own rhythm, timing and way of expressing itself."
                                            }

                                        </div>

                                    </div>



                                    {
  
                                 /* ==========================================
                                        TODAY'S MESSAGE
                                    ========================================== */}

                                    <div className="creator-field creator-field-wide birth-matrix-message">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Današnje sporočilo tvoje rojstne energije"
                                                    : "Today's Message from Your Birth Energy"
                                            }

                                        </label>


                                        <div className="birth-matrix-message-content">

                                            {
                                                currentBirthMessage
                                            }

                                        </div>

                                    </div>



                                    {

                                 /* ==========================================
                                        TODAY'S REFLECTION
                                    ========================================== */}

                                    <div className="creator-field creator-field-wide birth-matrix-reflection">

                                        <label>

                                            {
                                                isSlovenian
                                                    ? "Današnje vprašanje"
                                                    : "Today's Reflection"
                                            }

                                        </label>


                                        <h4>

                                            {

                                                isSlovenian

                                                    ?

                                                "Kaj želi tvoja rojstna energija danes videti, ustvariti ali spremeniti?"

                                                    :

                                                "What does your birth energy want to see, create or change today?"

                                            }

                                        </h4>


                                        <textarea

                                            value={
                                                birthReflection
                                            }

                                            onChange={(event) =>
                                                setBirthReflection(
                                                    event.target.value
                                                )
                                            }

                                            rows="5"

                                            placeholder={

                                                isSlovenian

                                                    ?

                                                "Zapiši svojo misel..."

                                                    :

                                                "Write what is arising for you..."

                                            }

                                        />


                                        <button

                                            type="button"

                                            className="journey-button creator-save-button birth-matrix-save-button"

                                            onClick={
                                                handleSaveReflection
                                            }

                                        >

                                            {

                                                reflectionSaved

                                                    ?

                                                (
                                                    isSlovenian
                                                        ? "Shranjeno ✓"
                                                        : "Saved ✓"
                                                )

                                                    :

                                                (
                                                    isSlovenian
                                                        ? "Shrani refleksijo"
                                                        : "Save Reflection"
                                                )

                                            }

                                        </button>

                                    </div>



                                    {

                                 /* ==========================================
                                        CHANGE DATE
                                    ========================================== */}

                                    <div className="creator-identity-save-row birth-matrix-change-date-row">

                                        <button

                                            type="button"

                                            className="creator-text-button"

                                            onClick={() => {

                                                setBirthMatrix(null);

                                            }}

                                        >

                                            {

                                                isSlovenian

                                                    ?

                                                "Spremeni datum rojstva"

                                                    :

                                                "Change birth date"

                                            }

                                        </button>

                                    </div>

                                </>

                            )

                        }

                    </div>

                </div>

            </section>


            {/* ==========================================
                CREATOR ESSENCE™
            ========================================== */}

            <CreatorEssenceCard
                creator={creator}
            />


            {/* ==========================================
                CREATOR INTELLIGENCE™
                
                First Mirror of the Creator
                Living Intelligence Layer™
            ========================================== */}

            <CreatorIntelligenceCard
                creator={creator}
            />


            {/* ==========================================
                YOUR LIVING REFLECTION™
                
                Second Mirror of the Creator
                Living Memory Mirror™
            ========================================== */}

            <CreatorReflection />



            {/* ==========================================
                CREATOR EVOLUTION™
            ========================================== */}

            <CreatorEvolutionTimeline
                creator={creator}
                evolution={evolution}
            />


    

{/* ==========================================
                
CREATOR JOURNEY™
========================================== */}


          <CreatorJourneyCard

    creator={creator}

    evolution={evolution}

    creatorStage={translatedCreatorStage}

    worldState={worldState}

/>


            <WorldBuilderDomainCard />

            


            {/* ==========================================
                MY LIVING WORLDS
            ========================================== */}
            <section className="living-card living-section">

                <h2>

                    {
                        t(
                            "dashboard.myLivingWorlds"
                        )
                    }

                </h2>


                <div className="living-grid">

                    {

                        worlds.length > 0

                            ?

                        worlds.map(
                            (world) => (

                                <article

                                    key={world.id}

                                    className="living-card"

                                >

                                    <h3>

                                        🌎{" "}
                                        {
                                            world.id
                                        }

                                    </h3>


                                    <p>

                                        {
                                            t(
                                                "dashboard.worldStatus"
                                            )
                                        }:

                                        {" "}

                                        {
                                            world.status
                                        }

                                    </p>

                                </article>

                            )
                        )

                            :

                        <p>

                            {
                                t(
                                    "dashboard.firstLivingWorldWaiting"
                                )
                            }

                        </p>

                    }

                </div>

            </section>



            {/* ==========================================
                ACHIEVEMENTS
            ========================================== */}

            <section className="living-card living-section">

                <h2>

                    {
                        t(
                            "dashboard.achievements"
                        )
                    }

                </h2>


                <p>

                    {
                        t(
                            "dashboard.achievementsDescription"
                        )
                    }

                </p>

            </section>

        </section>

    );

}
