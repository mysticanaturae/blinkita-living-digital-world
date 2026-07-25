/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™
PORTAL DATA SYSTEM

The living map of the first journey

Version 1.0
==========================================
*/


export const portals = [

{
    id: "arrival",

    type: "portal",

    title: "Arrival",

    subtitle: "Welcome to the Living Digital World™",

    purpose:
        "The first entrance into the journey.",


    experience: {

        identity:
            "The First Door",

        atmosphere:
            "Opening",

        message:
            "You have arrived.",

        interaction:
            "Begin your journey",

        transition:
            "invitation"

    },

    path: "/",

    order: 1
},


{
    id: "invitation",

    type: "portal",

    title: "Invitation",

    subtitle:
        "The first whisper of a new possibility.",


    purpose:
        "The first invitation into creation.",


    experience: {

        identity:
            "The First Whisper",

        atmosphere:
            "Opening possibility",

        message:
            "A new world begins with a single invitation.",

        interaction:
            "Accept the invitation",

        transition:
            "possibility"

    },

    path: "/invitation",

    order: 2
},


{
    id: "possibility",

    type: "portal",

    title: "Possibility",

    subtitle:
        "Where imagination becomes creation.",


    purpose:
        "The place where ideas begin to take form.",


    experience: {

        identity:
            "The Field of Possibility",

        atmosphere:
            "Expansion",

        message:
            "Every creation begins as a possibility.",

        interaction:
            "Explore what can become.",

        transition:
            "the-call"

    },

    path: "/possibility",

    order: 3
},


{
    id: "the-call",

    type: "portal",

    title: "The Call",

    subtitle:
        "The moment when the journey begins.",


    purpose:
        "The awakening moment where intention becomes movement.",


    experience: {

        identity:
            "The Inner Call",

        atmosphere:
            "Awakening",

        message:
            "Every journey begins when something within you responds.",

        interaction:
            "Listen to the call.",

        transition:
            "world-seed"

    },

    path: "/the-call",

    order: 4
},


{
    id: "world-seed",

    type: "portal",

    title: "World Seed",

    subtitle:
        "The seed of a world waiting to emerge.",


    purpose:
        "The moment where vision receives its first living form.",


    experience: {

        identity:
            "The Living Seed",

        atmosphere:
            "Potential",

        message:
            "Every world begins as a seed of possibility.",

        interaction:
            "Plant the seed of your world.",

        transition:
            "vision"

    },

    path: "/world-seed",

    order: 5
},


{
    id: "vision",

    type: "portal",

    title: "Vision",

    subtitle:
        "See the world before it exists.",


    purpose:
        "The moment where imagination becomes a clear direction.",


    experience: {

        identity:
            "The Living Vision",

        atmosphere:
            "Clarity",

        message:
            "Every living world begins with a vision held in consciousness.",

        interaction:
            "Reveal your vision.",

        transition:
            "essence"

    },

    path: "/vision",

    order: 6
},


{
    id: "essence",

    type: "portal",

    title: "Essence",

    subtitle:
        "Discover the living core.",


    purpose:
        "The discovery of the soul and identity of the world.",


    experience: {

        identity:
            "The Living Essence",

        atmosphere:
            "Recognition",

        message:
            "Every world carries a unique essence waiting to be expressed.",

        interaction:
            "Discover the core.",

        transition:
            "experience"

    },

    path: "/essence",

    order: 7
},


{
    id: "experience",

    type: "portal",

    title: "Experience",

    subtitle:
        "Enter the world through experience.",


    purpose:
        "The transformation of ideas into lived reality.",


    experience: {

        identity:
            "The Living Experience",

        atmosphere:
            "Embodiment",

        message:
            "A world becomes alive when it can be experienced.",

        interaction:
            "Enter the experience.",

        transition:
            "living-world"

    },

    path: "/experience",

    order: 8
},


{
    id: "living-world",

    type: "portal",

    title: "Living World",

    subtitle:
        "A world that evolves with you.",


    purpose:
        "The completion of the first Living Digital World™ cycle.",


    experience: {

        identity:
            "The Living World",

        atmosphere:
            "Evolution",

        message:
            "A living world never ends. It continues to evolve.",

        interaction:
            "Continue creating.",

        transition:
            null

    },

    path: "/world",

    order: 9
}

];