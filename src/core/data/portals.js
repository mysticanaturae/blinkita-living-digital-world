/*
==========================================
BLINKITA METHOD™
LIVING DIGITAL WORLD™

PORTAL DATA SYSTEM™

The Living Experience Layer™

Version 3.0
==========================================
*/

export const portals = [

    {
        id: "arrival",
        type: "portal",
        icon:
              "/portal/icons/arrival.png",
        subtitle: "Welcome to the Living Digital World™",
        purpose: "The first entrance into the journey.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Beginning",

            identityMessage:
                "Welcome to Living World™.\n\nA journey through 9 Living Portals.\n\nNot a path to follow.\nA world to enter.",

            atmosphere: "Opening",

            atmosphereMessage:
                "There is nothing you need to know yet.\n\nYou only need to arrive.\n\nThis is the first step into your Living World™ journey.",

            whisper:
                "Time has been waiting for your arrival.\n\nPerhaps you have been waiting for this moment too.",

            message:
                "You have arrived.\n\nThis is the beginning of your Living World™ journey.",

            ritual:
                "Pause for one conscious breath before taking your first step.\n\nLeave everything else outside for a moment.\nBe here.",

            question:
                "Who are you, and what brings you here?",

            placeholder:
                "Tell your Living World™ something about yourself.\nThere is no right answer. This is simply the first memory it will have of you.",

            interaction:
                "Begin your journey",

            next: "invitation"
        },

        path: "/",
        order: 1
    },


    {
        id: "invitation",
        type: "portal",
         invitation:
        "/portal/icons/invitation.png",
        subtitle: "The first whisper of a new possibility.",
        purpose: "The first invitation into creation.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The First Whisper",

            identityMessage:
                "Something has brought you here.\n\nYou may not know yet what it is.\nYou do not need to.",

            atmosphere: "Opening Possibility",

            atmosphereMessage:
                "There is something waiting to be discovered.\n\nNot outside you.\nNot somewhere far away.\n\nPerhaps it has been waiting quietly within you.",

            whisper:
                "Every new world begins with a single invitation.\n\nYou do not have to know where it will lead.\nYou only have to decide whether you are willing to open the door.",

            message:
                "You have been invited.\n\nNot to follow someone else's path.\n\nBut to discover what becomes possible when you begin creating your own.",

            ritual:
                "Pause for a moment.\n\nLet the question arrive before the answer:\n\nWhat would you create if you allowed yourself to begin?",

            question:
                "What are you being called to explore?",

            placeholder:
                "Tell your Living World™ what is quietly asking for your attention.\n\nA thought, a feeling, a dream or even a single word is enough.",

            interaction:
                "Accept the invitation",

            transition: "possibility"
        },

        path: "/invitation",
        order: 2
    },


    {
        id: "possibility",
        type: "portal",
        possibility:
        "/portal/icons/possibility.png",
        subtitle: "Where imagination becomes creation.",
        purpose: "The place where ideas begin to take form.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Field of Possibility",

            identityMessage:
                "Before something becomes real, it exists as a possibility.\n\nA thought.\nA feeling.\nA strange little idea that refuses to disappear.",

            atmosphere: "Expansion",

            atmosphereMessage:
                "For a moment, forget what is supposed to be possible.\n\nImagine what could be possible if you were not limited by what already exists.",

            whisper:
                "Every possibility is waiting for someone to believe in it.\n\nSome possibilities arrive quietly.\n\nOthers feel almost impossible.\n\nPay attention to the one that keeps returning.",

            message:
                "Every creation begins as a possibility.\n\nThe world you are about to create does not need to exist anywhere yet.\n\nIt only needs somewhere to begin.",

            ritual:
                "Close your eyes for a moment.\n\nAllow one idea to appear that feels a little too big,\na little too strange,\nor a little too impossible.\n\nDo not judge it.\n\nJust let it be seen.",

            question:
                "What could become possible through your world?",

            placeholder:
                "Describe the possibility you would love to bring into existence.\n\nIt does not have to be realistic yet.",

            interaction:
                "Explore what can become.",

            transition: "the-call"
        },

        path: "/possibility",
        order: 3
    },


    {
        id: "the-call",
        type: "portal",
        "the-call":
        "/portal/icons/the-call.png",
        subtitle: "The moment when the journey begins.",
        purpose: "The awakening moment where intention becomes movement.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Inner Call",

            identityMessage:
                "There is a difference between having an idea\nand feeling called to bring it into the world.",

            atmosphere: "Awakening",

            atmosphereMessage:
                "Something has already started moving.\n\nPerhaps you felt it before you arrived here.\n\nPerhaps you are only noticing it now.",

            whisper:
                "Something within you has already answered.\n\nThe question is no longer whether the call exists.\n\nThe question is whether you are willing to listen.",

            message:
                "Every journey begins when something within you responds.\n\nYou do not need to know the whole path.\n\nYou only need to recognize the next step.",

            ritual:
                "Be still for a moment.\n\nListen beneath the noise,\nbeneath expectations,\nbeneath everything you think you should do.\n\nWhat remains?",

            question:
                "What is calling you forward?",

            placeholder:
                "Write the thing you feel ready to explore, create, change or become.\n\nLet your answer be honest rather than impressive.",

            interaction:
                "Listen to the call.",

            transition: "world-seed"
        },

        path: "/the-call",
        order: 4
    },


    {
        id: "world-seed",
        type: "portal",
        
        subtitle: "The seed of a world waiting to emerge.",
        purpose: "The moment where vision receives its first living form.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Living Seed",

            identityMessage:
                "Every living world begins small.\n\nSometimes with an idea.\nSometimes with a memory.\nSometimes with a feeling that there should be something more.",

            atmosphere: "Potential",

            atmosphereMessage:
                "A seed contains something that cannot yet be seen.\n\nIt does not reveal the whole tree.\n\nIt simply carries the possibility of becoming one.",

            whisper:
                "Every living world begins as a single seed.\n\nWhat you place here today may grow into something you cannot yet imagine.",

            message:
                "Your world begins here.\n\nNot as a finished creation.\n\nAs something alive enough to grow.",

            ritual:
                "Imagine holding the smallest possible version of your world in your hands.\n\nIf you could plant only one thing,\nwhat would it be?",

            question:
                "What is the seed of your world?",

            placeholder:
                "Give your world its first form.\n\nIt might be a place, an idea, a purpose, a feeling, a story, a community, a creation — anything that wants to become more.",

            interaction:
                "Plant the seed of your world.",

            transition: "vision"
        },

        path: "/world-seed",
        order: 5
    },


    {
        id: "vision",
        type: "portal",
        
        subtitle: "See the world before it exists.",
        purpose: "The moment where imagination becomes a clear direction.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Living Vision",

            identityMessage:
                "Before a world can be built,\nsomeone has to see it.\n\nNot perfectly.\nNot completely.\n\nJust clearly enough to recognize what it wants to become.",

            atmosphere: "Clarity",

            atmosphereMessage:
                "Let the noise fall away.\n\nFor a moment, do not ask how.\n\nFirst, allow yourself to see what.",

            whisper:
                "Every great creation is first seen within.\n\nThe clearer your inner picture becomes,\nthe easier it becomes to recognize the next step.",

            message:
                "Your world begins with a vision held in consciousness.\n\nWhat you see here may change.\n\nThat is not a failure.\n\nLiving things are allowed to evolve.",

            ritual:
                "Imagine that your world already exists.\n\nWalk through it.\n\nWhat do you see?\nWho is there?\nWhat does it feel like to be inside it?",

            question:
                "What does your world look like when it is alive?",

            placeholder:
                "Describe the world you see.\n\nYou can write about its people, places, purpose, experiences, atmosphere or anything else that appears.",

            interaction:
                "Reveal your vision.",

            transition: "essence"
        },

        path: "/vision",
        order: 6
    },


    {
        id: "essence",
        type: "portal",
        
        subtitle: "Discover the living core.",
        purpose: "The discovery of the soul and identity of the world.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Living Essence",

            identityMessage:
                "Every world has something at its center.\n\nSomething that makes it different from every other world.\n\nIts reason for existing.\nIts feeling.\nIts heartbeat.\n\nThis is its essence.",

            atmosphere: "Recognition",

            atmosphereMessage:
                "You may not need to invent the essence of your world.\n\nYou may simply need to recognize it.",

            whisper:
                "Every world has a soul waiting to be remembered.\n\nLook beneath the ideas.\n\nBeneath the features.\n\nBeneath the appearance.\n\nWhat is still there?",

            message:
                "Every world carries a unique essence waiting to be expressed.\n\nThe essence becomes the thread that connects everything your world may one day become.",

            ritual:
                "Ask yourself quietly:\n\nIf everything else disappeared, what would still need to remain?\n\nStay with the first honest answer.",

            question:
                "What is the heart of your world?",

            placeholder:
                "Describe the quality, purpose, feeling or truth that you want your world to carry wherever it grows.",

            interaction:
                "Discover the core.",

            transition: "experience"
        },

        path: "/essence",
        order: 7
    },


    {
        id: "experience",
        type: "portal",
        
        subtitle: "Enter the world through experience.",
        purpose: "The transformation of ideas into lived reality.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Living Experience",

            identityMessage:
                "A world becomes more than an idea\nwhen someone can experience it.\n\nWhen it can be entered.\nTouched.\nExplored.\nRemembered.\nShared.",

            atmosphere: "Embodiment",

            atmosphereMessage:
                "You have imagined your world.\n\nNow step inside it.\n\nDo not look at it from the outside.\n\nExperience it from within.",

            whisper:
                "A world becomes real when it can be lived.\n\nWhat would someone actually experience when they enter your world?",

            message:
                "A world becomes alive when it can be experienced.\n\nYour world is not only what it contains.\n\nIt is what happens inside it.",

            ritual:
                "Imagine yourself entering your world for the very first time.\n\nWhat is the first thing you notice?\n\nWhat do you feel?\n\nWhat makes you want to stay?",

            question:
                "What should someone experience inside your world?",

            placeholder:
                "Describe the feeling, transformation, discovery or experience you want your world to create.",

            interaction:
                "Enter the experience.",

            transition: "living-world"
        },

        path: "/experience",
        order: 8
    },


    {
        id: "living-world",
        type: "portal",
        
        subtitle: "A world that evolves with you.",
        purpose: "The completion of the first Living Digital World™ cycle.",

        experience: {

            sequence: [
                "atmosphere",
                "whisper",
                "identity",
                "message",
                "ritual",
                "question",
                "interaction"
            ],

            identity: "The Living World",

            identityMessage:
                "You have arrived with an idea.\n\nYou listened to a possibility.\nYou heard a call.\nYou planted a seed.\nYou shaped a vision.\nYou discovered an essence.\n\nAnd now you have entered the world.",

            atmosphere: "Evolution",

            atmosphereMessage:
                "A living world is never finished.\n\nIt changes as you discover more.\nIt grows as you create.\nIt remembers what matters.\n\nAnd sometimes it surprises you.",

            whisper:
                "This is not the end. It is the beginning of an evolving world.",

            message:
                "A living world never ends. It continues to evolve.\n\nYour answers are now part of its first memory.\n\nYour ideas have become its first foundations.\n\nWhat happens next is up to you — and eventually, perhaps, to the world itself.",

            ritual:
                "Take one moment to look back.\n\nNotice where you began.\n\nNotice what changed along the way.\n\nAnd remember:\n\nYou did not simply complete a journey.\n\nYou gave something a beginning.",

            question:
                "What do you want your world to become?",

            placeholder:
                "Now that you can see the world beginning to take form,\nwhat would you love to create next?\n\nThis answer does not close the journey.\n\nIt opens the next one.",

            interaction:
                "Continue creating.",

            transition: null
        },

        path: "/world",
        order: 9
    }

];

