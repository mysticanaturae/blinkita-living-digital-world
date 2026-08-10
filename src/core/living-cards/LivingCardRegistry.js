/*
BLINKITA LIVING CARD SYSTEM™

LIVING CARD REGISTRY

Generated from the existing public/cards structure.

Architecture:
100 categories × 10 cards = 1000 cards.

Current populated cards are read directly from:
public/cards/01-* through public/cards/20-*.

Images belong to the cards.
*/

import {
    normalizeLivingCards,
    LIVING_CARD_CATEGORIES
} from "./LivingCardEngine";

/*
====================================================
CARD DATA
====================================================
*/

export const LIVING_CARDS = [
    {
        id: "001",
        number: 1,
        title: "ABUNDANCE",
        category: "foundations",
        image: "/cards/01-foundations/001-abundance.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "002",
        number: 2,
        title: "ACTION",
        category: "foundations",
        image: "/cards/01-foundations/002-action.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "003",
        number: 3,
        title: "ADVENTURE",
        category: "foundations",
        image: "/cards/01-foundations/003-adventure.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "004",
        number: 4,
        title: "AUTHENTICITY",
        category: "foundations",
        image: "/cards/01-foundations/004-authenticity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "005",
        number: 5,
        title: "BELONGING",
        category: "foundations",
        image: "/cards/01-foundations/005-belonging.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "006",
        number: 6,
        title: "BOUNDARIES",
        category: "foundations",
        image: "/cards/01-foundations/006-boundaries.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "007",
        number: 7,
        title: "CALM",
        category: "foundations",
        image: "/cards/01-foundations/007-calm.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "008",
        number: 8,
        title: "CAPACITY",
        category: "foundations",
        image: "/cards/01-foundations/008-capacity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "009",
        number: 9,
        title: "CHOICE",
        category: "foundations",
        image: "/cards/01-foundations/009-choice.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "010",
        number: 10,
        title: "CLARITY",
        category: "foundations",
        image: "/cards/01-foundations/010-clarity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "011",
        number: 11,
        title: "COMPASSION",
        category: "inner-experience",
        image: "/cards/02-inner-experience/011-compassion.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "012",
        number: 12,
        title: "CURIOSITY",
        category: "inner-experience",
        image: "/cards/02-inner-experience/012-curiosity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "013",
        number: 13,
        title: "DESIRE",
        category: "inner-experience",
        image: "/cards/02-inner-experience/013-desire.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "014",
        number: 14,
        title: "DISCOVERY",
        category: "inner-experience",
        image: "/cards/02-inner-experience/014-discovery.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "015",
        number: 15,
        title: "DREAM",
        category: "inner-experience",
        image: "/cards/02-inner-experience/015-dream.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "016",
        number: 16,
        title: "EMBODIMENT",
        category: "inner-experience",
        image: "/cards/02-inner-experience/016-embodiment.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "017",
        number: 17,
        title: "EXPRESSION",
        category: "inner-experience",
        image: "/cards/02-inner-experience/017-expression.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "018",
        number: 18,
        title: "FAITH",
        category: "inner-experience",
        image: "/cards/02-inner-experience/018-faith.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "019",
        number: 19,
        title: "FORGIVENESS",
        category: "inner-experience",
        image: "/cards/02-inner-experience/019-forgiveness.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "020",
        number: 20,
        title: "FREEDOM",
        category: "inner-experience",
        image: "/cards/02-inner-experience/020-freedom.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "021",
        number: 21,
        title: "HARMONY",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/021-harmony.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "022",
        number: 22,
        title: "HOPE",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/022-hope.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "023",
        number: 23,
        title: "IDENTITY",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/023-identity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "024",
        number: 24,
        title: "INDEPENDENCE",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/024-independence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "025",
        number: 25,
        title: "INTENTION",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/025-intention.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "026",
        number: 26,
        title: "JOY",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/026-joy.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "027",
        number: 27,
        title: "LOVE",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/027-love.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "028",
        number: 28,
        title: "MEANING",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/028-meaning.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "029",
        number: 29,
        title: "POSSIBILITY",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/029-possibility.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "030",
        number: 30,
        title: "PRESENCE",
        category: "meaning-and-possibility",
        image: "/cards/03-meaning-and-possibility/030-presence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "031",
        number: 31,
        title: "RECOGNITION",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/031-recognition.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "032",
        number: 32,
        title: "SACREDNESS",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/032-sacredness.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "033",
        number: 33,
        title: "SELF TRUST",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/033-self-trust.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "034",
        number: 34,
        title: "SURRENDER",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/034-surrender.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "035",
        number: 35,
        title: "TRUST",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/035-trust.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "036",
        number: 36,
        title: "UNITY",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/036-unity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "037",
        number: 37,
        title: "VISIBILITY",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/037-visibility.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "038",
        number: 38,
        title: "WONDER",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/038-wonder.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "039",
        number: 39,
        title: "WORTH",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/039-worth.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "040",
        number: 40,
        title: "YEARNING",
        category: "recognition-and-self",
        image: "/cards/04-recognition-and-self/040-yearning.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "041",
        number: 41,
        title: "PURPOSE",
        category: "purpose",
        image: "/cards/05-purpose/041-purpose.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "042",
        number: 42,
        title: "AWARENESS",
        category: "purpose",
        image: "/cards/05-purpose/042-awareness.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "044",
        number: 44,
        title: "GROWTH",
        category: "purpose",
        image: "/cards/05-purpose/044-growth.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "045",
        number: 45,
        title: "RENEWAL",
        category: "purpose",
        image: "/cards/05-purpose/045-renewal.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "046",
        number: 46,
        title: "PATIENCE",
        category: "purpose",
        image: "/cards/05-purpose/046-patience.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "047",
        number: 47,
        title: "COURAGE",
        category: "purpose",
        image: "/cards/05-purpose/047-courage.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "048",
        number: 48,
        title: "SELF LOVE",
        category: "purpose",
        image: "/cards/05-purpose/048-self-love.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "049",
        number: 49,
        title: "CREATIVITY",
        category: "purpose",
        image: "/cards/05-purpose/049-creativity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "050",
        number: 50,
        title: "SERVICE",
        category: "purpose",
        image: "/cards/05-purpose/050-service.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "051",
        number: 51,
        title: "IDEATION",
        category: "creation-process",
        image: "/cards/06-creation-process/051-ideation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "052",
        number: 52,
        title: "FOCUS",
        category: "creation-process",
        image: "/cards/06-creation-process/052-focus.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "053",
        number: 53,
        title: "PLANNING",
        category: "creation-process",
        image: "/cards/06-creation-process/053-planning.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "054",
        number: 54,
        title: "EXECUTION",
        category: "creation-process",
        image: "/cards/06-creation-process/054-execution.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "055",
        number: 55,
        title: "MOTIVATION",
        category: "creation-process",
        image: "/cards/06-creation-process/055-motivation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "056",
        number: 56,
        title: "FRUSTRATION",
        category: "creation-process",
        image: "/cards/06-creation-process/056-frustration.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "057",
        number: 57,
        title: "CONFLICT",
        category: "creation-process",
        image: "/cards/06-creation-process/057-conflict.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "058",
        number: 58,
        title: "LIMITATION",
        category: "creation-process",
        image: "/cards/06-creation-process/058-limitation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "059",
        number: 59,
        title: "ADAPTATION",
        category: "creation-process",
        image: "/cards/06-creation-process/059-adaptation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "060",
        number: 60,
        title: "MASTERY",
        category: "creation-process",
        image: "/cards/06-creation-process/060-mastery.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "061",
        number: 61,
        title: "TIME",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/061-time.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "063",
        number: 63,
        title: "RESOURCES",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/063-resources.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "064",
        number: 64,
        title: "ALLIANCE",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/064-alliance.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "065",
        number: 65,
        title: "OPPORTUNITY",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/065-opportunity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "066",
        number: 66,
        title: "RISK",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/066-risk.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "067",
        number: 67,
        title: "BREAKTHROUGH",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/067-breakthrough.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "068",
        number: 68,
        title: "REFLECTION",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/068-reflection.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "069",
        number: 69,
        title: "GRATITUDE",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/069-gratitude.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "070",
        number: 70,
        title: "LEGACY",
        category: "world-and-consequence",
        image: "/cards/07-world-and-consequence/070-legacy.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "071",
        number: 71,
        title: "VISION",
        category: "change",
        image: "/cards/08-change/071-vision.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "072",
        number: 72,
        title: "DOUBT",
        category: "change",
        image: "/cards/08-change/072-doubt.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "073",
        number: 73,
        title: "CHANGE",
        category: "change",
        image: "/cards/08-change/073-change.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "074",
        number: 74,
        title: "NURTURE",
        category: "change",
        image: "/cards/08-change/074-nurture.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "075",
        number: 75,
        title: "LOSS",
        category: "change",
        image: "/cards/08-change/075-loss.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "076",
        number: 76,
        title: "EXPLORATION",
        category: "change",
        image: "/cards/08-change/076-exploration.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "077",
        number: 77,
        title: "CHALLENGE",
        category: "change",
        image: "/cards/08-change/077-challenge.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "078",
        number: 78,
        title: "DECISION",
        category: "change",
        image: "/cards/08-change/078-decision.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "080",
        number: 80,
        title: "ALIGNMENT",
        category: "change",
        image: "/cards/08-change/080-alignment.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "081",
        number: 81,
        title: "INSPIRATION",
        category: "creator-experience",
        image: "/cards/09-creator-experience/081-inspiration.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "082",
        number: 82,
        title: "EXPERIMENT",
        category: "creator-experience",
        image: "/cards/09-creator-experience/082-experiment.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "083",
        number: 83,
        title: "FAILURE",
        category: "creator-experience",
        image: "/cards/09-creator-experience/083-failure.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "084",
        number: 84,
        title: "RESILIENCE",
        category: "creator-experience",
        image: "/cards/09-creator-experience/084-resilience.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "085",
        number: 85,
        title: "COMPROMISE",
        category: "creator-experience",
        image: "/cards/09-creator-experience/085-compromise.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "086",
        number: 86,
        title: "CONSEQUENCE",
        category: "creator-experience",
        image: "/cards/09-creator-experience/086-consequence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "087",
        number: 87,
        title: "REPAIR",
        category: "creator-experience",
        image: "/cards/09-creator-experience/087-repair.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "088",
        number: 88,
        title: "SERENDIPITY",
        category: "creator-experience",
        image: "/cards/09-creator-experience/088-serendipity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "089",
        number: 89,
        title: "OWNERSHIP",
        category: "creator-experience",
        image: "/cards/09-creator-experience/089-ownership.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "090",
        number: 90,
        title: "IMPACT",
        category: "creator-experience",
        image: "/cards/09-creator-experience/090-impact.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "091",
        number: 91,
        title: "INFLUENCE",
        category: "world-creation",
        image: "/cards/10-world-creation/091-influence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "092",
        number: 92,
        title: "COLLABORATION",
        category: "world-creation",
        image: "/cards/10-world-creation/092-collaboration.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "093",
        number: 93,
        title: "SCARCITY",
        category: "world-creation",
        image: "/cards/10-world-creation/093-scarcity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "094",
        number: 94,
        title: "RESOURCEFULNESS",
        category: "world-creation",
        image: "/cards/10-world-creation/094-resourcefulness.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "095",
        number: 95,
        title: "UNCERTAINTY",
        category: "world-creation",
        image: "/cards/10-world-creation/095-uncertainty.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "096",
        number: 96,
        title: "REVELATION",
        category: "world-creation",
        image: "/cards/10-world-creation/096-revelation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "097",
        number: 97,
        title: "DESTRUCTION",
        category: "world-creation",
        image: "/cards/10-world-creation/097-destruction.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "098",
        number: 98,
        title: "INTEGRATION",
        category: "world-creation",
        image: "/cards/10-world-creation/098-integration.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "099",
        number: 99,
        title: "SOVEREIGNTY",
        category: "world-creation",
        image: "/cards/10-world-creation/099-sovereignty.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "100",
        number: 100,
        title: "CREATION",
        category: "world-creation",
        image: "/cards/10-world-creation/100-creation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "101",
        number: 101,
        title: "AGENCY",
        category: "creator-agency",
        image: "/cards/11-creator-agency/101-agency.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "102",
        number: 102,
        title: "AUTHORSHIP",
        category: "creator-agency",
        image: "/cards/11-creator-agency/102-authorship.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "103",
        number: 103,
        title: "INTEGRITY",
        category: "creator-agency",
        image: "/cards/11-creator-agency/103-integrity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "104",
        number: 104,
        title: "COMMITMENT",
        category: "creator-agency",
        image: "/cards/11-creator-agency/104-commitment.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "105",
        number: 105,
        title: "DEVOTION",
        category: "creator-agency",
        image: "/cards/11-creator-agency/105-devotion.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "106",
        number: 106,
        title: "DISCERNMENT",
        category: "creator-agency",
        image: "/cards/11-creator-agency/106-discernment.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "107",
        number: 107,
        title: "INTUITION",
        category: "creator-agency",
        image: "/cards/11-creator-agency/107-intuition.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "108",
        number: 108,
        title: "WISDOM",
        category: "creator-agency",
        image: "/cards/11-creator-agency/108-wisdom.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "109",
        number: 109,
        title: "RESPONSIBILITY",
        category: "creator-agency",
        image: "/cards/11-creator-agency/109-responsibility.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "110",
        number: 110,
        title: "ACCOUNTABILITY",
        category: "creator-agency",
        image: "/cards/11-creator-agency/110-accountability.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "111",
        number: 111,
        title: "STRUCTURE",
        category: "structure",
        image: "/cards/12-structure/111-structure.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "112",
        number: 112,
        title: "ARCHITECTURE",
        category: "structure",
        image: "/cards/12-structure/112-architecture.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "113",
        number: 113,
        title: "SYSTEM",
        category: "structure",
        image: "/cards/12-structure/113-system.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "114",
        number: 114,
        title: "PATTERN",
        category: "structure",
        image: "/cards/12-structure/114-pattern.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "115",
        number: 115,
        title: "ORDER",
        category: "structure",
        image: "/cards/12-structure/115-order.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "116",
        number: 116,
        title: "FRAMEWORK",
        category: "structure",
        image: "/cards/12-structure/116-framework.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "117",
        number: 117,
        title: "DESIGN",
        category: "structure",
        image: "/cards/12-structure/117-design.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "118",
        number: 118,
        title: "ORGANIZATION",
        category: "structure",
        image: "/cards/12-structure/118-organization.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "119",
        number: 119,
        title: "RELATIONSHIP",
        category: "structure",
        image: "/cards/12-structure/119-relationship.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "120",
        number: 120,
        title: "CONNECTION",
        category: "structure",
        image: "/cards/12-structure/120-connection.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "121",
        number: 121,
        title: "ECOSYSTEM",
        category: "living-system",
        image: "/cards/13-living-system/121-ecosystem.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "122",
        number: 122,
        title: "NETWORK",
        category: "living-system",
        image: "/cards/13-living-system/122-network.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "123",
        number: 123,
        title: "ENVIRONMENT",
        category: "living-system",
        image: "/cards/13-living-system/123-environment.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "124",
        number: 124,
        title: "CONTEXT",
        category: "living-system",
        image: "/cards/13-living-system/124-context.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "125",
        number: 125,
        title: "FIELD",
        category: "living-system",
        image: "/cards/13-living-system/125-field.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "126",
        number: 126,
        title: "LAYER",
        category: "living-system",
        image: "/cards/13-living-system/126-layer.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "127",
        number: 127,
        title: "NODE",
        category: "living-system",
        image: "/cards/13-living-system/127-node.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "128",
        number: 128,
        title: "FLOW",
        category: "living-system",
        image: "/cards/13-living-system/128-flow.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "129",
        number: 129,
        title: "RHYTHM",
        category: "living-system",
        image: "/cards/13-living-system/129-rhythm.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "131",
        number: 131,
        title: "TIMING",
        category: "time",
        image: "/cards/14-time/131-timing.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "132",
        number: 132,
        title: "MOMENT",
        category: "time",
        image: "/cards/14-time/132-moment.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "133",
        number: 133,
        title: "SEASON",
        category: "time",
        image: "/cards/14-time/133-season.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "134",
        number: 134,
        title: "THRESHOLD",
        category: "time",
        image: "/cards/14-time/134-threshold.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "135",
        number: 135,
        title: "WAITING",
        category: "time",
        image: "/cards/14-time/135-waiting.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "136",
        number: 136,
        title: "RIPENING",
        category: "time",
        image: "/cards/14-time/136-ripening.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "137",
        number: 137,
        title: "SYNCHRONICITY",
        category: "time",
        image: "/cards/14-time/137-synchronicity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "138",
        number: 138,
        title: "SEQUENCE",
        category: "time",
        image: "/cards/14-time/138-sequence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "139",
        number: 139,
        title: "MOMENTUM",
        category: "time",
        image: "/cards/14-time/139-momentum.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "140",
        number: 140,
        title: "KAIROS",
        category: "time",
        image: "/cards/14-time/140-kairos.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "141",
        number: 141,
        title: "OBSERVATION",
        category: "perception",
        image: "/cards/15-perception/141-observation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "142",
        number: 142,
        title: "PERSPECTIVE",
        category: "perception",
        image: "/cards/15-perception/142-perspective.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "143",
        number: 143,
        title: "INSIGHT",
        category: "perception",
        image: "/cards/15-perception/143-insight.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "144",
        number: 144,
        title: "SIGNAL",
        category: "perception",
        image: "/cards/15-perception/144-signal.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "145",
        number: 145,
        title: "TRUTH",
        category: "perception",
        image: "/cards/15-perception/145-truth.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "146",
        number: 146,
        title: "UNDERSTANDING",
        category: "perception",
        image: "/cards/15-perception/146-understanding.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "147",
        number: 147,
        title: "KNOWLEDGE",
        category: "perception",
        image: "/cards/15-perception/147-knowledge.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "148",
        number: 148,
        title: "INTERPRETATION",
        category: "perception",
        image: "/cards/15-perception/148-interpretation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "149",
        number: 149,
        title: "PERCEPTION",
        category: "perception",
        image: "/cards/15-perception/149-perception.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "150",
        number: 150,
        title: "ATTENTION",
        category: "perception",
        image: "/cards/15-perception/150-attention.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "151",
        number: 151,
        title: "MEMORY",
        category: "memory",
        image: "/cards/16-memory/151-memory.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "152",
        number: 152,
        title: "TRACE",
        category: "memory",
        image: "/cards/16-memory/152-trace.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "153",
        number: 153,
        title: "RECORD",
        category: "memory",
        image: "/cards/16-memory/153-record.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "154",
        number: 154,
        title: "STORY",
        category: "memory",
        image: "/cards/16-memory/154-story.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "155",
        number: 155,
        title: "NARRATIVE",
        category: "memory",
        image: "/cards/16-memory/155-narrative.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "156",
        number: 156,
        title: "ARCHIVE",
        category: "memory",
        image: "/cards/16-memory/156-archive.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "157",
        number: 157,
        title: "REMEMBERING",
        category: "memory",
        image: "/cards/16-memory/157-remembering.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "158",
        number: 158,
        title: "IMPRINT",
        category: "memory",
        image: "/cards/16-memory/158-imprint.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "159",
        number: 159,
        title: "HISTORY",
        category: "memory",
        image: "/cards/16-memory/159-history.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "160",
        number: 160,
        title: "CONTINUITY",
        category: "memory",
        image: "/cards/16-memory/160-continuity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "161",
        number: 161,
        title: "EVOLUTION",
        category: "evolution",
        image: "/cards/17-evolution/161-evolution.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "162",
        number: 162,
        title: "EMERGENCE",
        category: "evolution",
        image: "/cards/17-evolution/162-emergence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "163",
        number: 163,
        title: "REFINEMENT",
        category: "evolution",
        image: "/cards/17-evolution/163-refinement.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "164",
        number: 164,
        title: "INNOVATION",
        category: "evolution",
        image: "/cards/17-evolution/164-innovation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "165",
        number: 165,
        title: "REINVENTION",
        category: "evolution",
        image: "/cards/17-evolution/165-reinvention.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "166",
        number: 166,
        title: "REORGANIZATION",
        category: "evolution",
        image: "/cards/17-evolution/166-reorganization.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "167",
        number: 167,
        title: "EXPANSION",
        category: "evolution",
        image: "/cards/17-evolution/167-expansion.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "168",
        number: 168,
        title: "MATURATION",
        category: "evolution",
        image: "/cards/17-evolution/168-maturation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "169",
        number: 169,
        title: "DEVELOPMENT",
        category: "evolution",
        image: "/cards/17-evolution/169-development.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "170",
        number: 170,
        title: "BECOMING",
        category: "evolution",
        image: "/cards/17-evolution/170-becoming.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "171",
        number: 171,
        title: "EVENT",
        category: "events",
        image: "/cards/18-events/171-event.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "172",
        number: 172,
        title: "TRIGGER",
        category: "events",
        image: "/cards/18-events/172-trigger.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "173",
        number: 173,
        title: "SHIFT",
        category: "events",
        image: "/cards/18-events/173-shift.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "174",
        number: 174,
        title: "INTERRUPTION",
        category: "events",
        image: "/cards/18-events/174-interruption.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "175",
        number: 175,
        title: "ACTIVATION",
        category: "events",
        image: "/cards/18-events/175-activation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "176",
        number: 176,
        title: "INVITATION",
        category: "events",
        image: "/cards/18-events/176-invitation.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "177",
        number: 177,
        title: "ENCOUNTER",
        category: "events",
        image: "/cards/18-events/177-encounter.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "178",
        number: 178,
        title: "ARRIVAL",
        category: "events",
        image: "/cards/18-events/178-arrival.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "179",
        number: 179,
        title: "DEPARTURE",
        category: "events",
        image: "/cards/18-events/179-departure.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "180",
        number: 180,
        title: "RETURN",
        category: "events",
        image: "/cards/18-events/180-return.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "181",
        number: 181,
        title: "POTENTIAL",
        category: "possibility",
        image: "/cards/19-possibility/181-potential.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "182",
        number: 182,
        title: "OPENING",
        category: "possibility",
        image: "/cards/19-possibility/182-opening.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "183",
        number: 183,
        title: "HORIZON",
        category: "possibility",
        image: "/cards/19-possibility/183-horizon.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "184",
        number: 184,
        title: "ALTERNATIVE",
        category: "possibility",
        image: "/cards/19-possibility/184-alternative.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "185",
        number: 185,
        title: "DIRECTION",
        category: "possibility",
        image: "/cards/19-possibility/185-direction.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "186",
        number: 186,
        title: "CHANCE",
        category: "possibility",
        image: "/cards/19-possibility/186-chance.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "187",
        number: 187,
        title: "LATENCY",
        category: "possibility",
        image: "/cards/19-possibility/187-latency.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "188",
        number: 188,
        title: "UNFOLDING",
        category: "possibility",
        image: "/cards/19-possibility/188-unfolding.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "189",
        number: 189,
        title: "FORESIGHT",
        category: "possibility",
        image: "/cards/19-possibility/189-foresight.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "190",
        number: 190,
        title: "CONTINGENCY",
        category: "possibility",
        image: "/cards/19-possibility/190-contingency.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "191",
        number: 191,
        title: "SYNTHESIS",
        category: "integration",
        image: "/cards/20-integration/191-synthesis.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "192",
        number: 192,
        title: "WHOLENESS",
        category: "integration",
        image: "/cards/20-integration/192-wholeness.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "193",
        number: 193,
        title: "BALANCE",
        category: "integration",
        image: "/cards/20-integration/193-balance.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "194",
        number: 194,
        title: "RECIPROCITY",
        category: "integration",
        image: "/cards/20-integration/194-reciprocity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "195",
        number: 195,
        title: "COHERENCE",
        category: "integration",
        image: "/cards/20-integration/195-coherence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "196",
        number: 196,
        title: "RESOLUTION",
        category: "integration",
        image: "/cards/20-integration/196-resolution.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "197",
        number: 197,
        title: "ACCEPTANCE",
        category: "integration",
        image: "/cards/20-integration/197-acceptance.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "198",
        number: 198,
        title: "TRANSCENDENCE",
        category: "integration",
        image: "/cards/20-integration/198-transcendence.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "199",
        number: 199,
        title: "COMPLETION",
        category: "integration",
        image: "/cards/20-integration/199-completion.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
    {
        id: "200",
        number: 200,
        title: "GENERATIVITY",
        category: "integration",
        image: "/cards/20-integration/200-generativity.png",
        symbol: "✦",
        essence: "",
        reading: "",
        destination: ""
    },
];

/*
====================================================
NORMALIZED CARD REGISTRY
====================================================
*/

export const LIVING_CARD_REGISTRY =
    normalizeLivingCards(
        LIVING_CARDS
    );

/*
====================================================
REGISTRY COUNT
====================================================
*/

export const LIVING_CARD_COUNT =
    LIVING_CARD_REGISTRY.length;

/*
====================================================
CATEGORY REGISTRY
====================================================
*/

export const LIVING_CARD_CATEGORY_REGISTRY =
    LIVING_CARD_CATEGORIES.map(
        category => ({
            ...category,

            cards:
                LIVING_CARD_REGISTRY.filter(
                    card =>
                        card.category ===
                        category.id
                )
        })
    );

/*
====================================================
GET ALL REGISTERED CARDS
====================================================
*/

export function getAllLivingCards() {

    return [
        ...LIVING_CARD_REGISTRY
    ];

}

/*
====================================================
GET CARDS BY CATEGORY
====================================================
*/

export function getRegisteredCardsByCategory(
    categoryId
) {

    return LIVING_CARD_REGISTRY.filter(
        card =>
            card.category ===
            categoryId
    );

}

/*
====================================================
GET REGISTERED CARD
====================================================
*/

export function getRegisteredLivingCard(
    cardId
) {

    return LIVING_CARD_REGISTRY.find(
        card =>
            card.id ===
            cardId
    ) || null;

}

/*
====================================================
REGISTRY STATUS
====================================================
*/

export function getLivingCardRegistryStatus() {

    const categoryStatus =
        Object.fromEntries(

            LIVING_CARD_CATEGORIES.map(
                category => [

                    category.id,

                    LIVING_CARD_REGISTRY.filter(
                        card =>
                            card.category ===
                            category.id
                    ).length

                ]
            )

        );

    return {

        total:
            LIVING_CARD_REGISTRY.length,

        target:
            1000,

        categories:
            100,

        populatedCategories:
            LIVING_CARD_CATEGORIES.length,

        categoryStatus

    };

}

/*
====================================================
DEFAULT EXPORT
====================================================
*/

export default LIVING_CARD_REGISTRY;

/*
====================================================
END
====================================================
*/