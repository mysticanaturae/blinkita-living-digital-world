/*
====================================================
BLINKITA LIVING CARD SYSTEM™

WORLD BUILDER CARD ADAPTER

World Builder does NOT receive the complete
Living Card Registry.

It receives only the five cards specifically
chosen as the World Builder gateway cards.

The complete Living Card Registry remains available
for My Living Cards and the larger collection system.

WORLD BUILDER FIVE:
014 — DISCOVERY
029 — POSSIBILITY
071 — VISION
076 — EXPLORATION
100 — CREATION
====================================================
*/

import {
    getRegisteredLivingCard,
    getRegisteredCardsByCategory,
    getLivingCardRegistryStatus
} from "./LivingCardRegistry";


/*
====================================================
WORLD BUILDER CARD IDS

These are intentionally explicit.

Do NOT derive this from:
- category
- first five cards
- random selection
- registry order

The World Builder has its own curated five-card
gateway.
====================================================
*/

const WORLD_BUILDER_CARD_IDS = [
    "014",
    "029",
    "071",
    "076",
    "100"
];


/*
====================================================
WORLD BUILDER DECK

Returns exactly five cards.

The complete registry remains untouched.
====================================================
*/

export function getWorldBuilderDeck() {

    return WORLD_BUILDER_CARD_IDS
        .map(cardId =>
            getRegisteredLivingCard(cardId)
        )
        .filter(Boolean);

}


/*
====================================================
WORLD BUILDER CARD COUNT

Should always return 5 when all five cards
exist in the registry.
====================================================
*/

export function getWorldBuilderCardCount() {

    return getWorldBuilderDeck().length;

}


/*
====================================================
WORLD BUILDER CATEGORY

Kept available for future World Builder use.
====================================================
*/

export function getWorldBuilderCategory(
    categoryId
) {

    return getRegisteredCardsByCategory(
        categoryId
    );

}


/*
====================================================
WORLD BUILDER CARD

Retrieve one registered card by ID.
====================================================
*/

export function getWorldBuilderCard(
    cardId
) {

    return getRegisteredLivingCard(
        cardId
    );

}


/*
====================================================
WORLD BUILDER REGISTRY STATUS
====================================================
*/

export function getWorldBuilderCardSystemStatus() {

    return getLivingCardRegistryStatus();

}


/*
====================================================
WORLD BUILDER CARD IMAGE

The card owns its own image reference.
The adapter does not guess or transform paths.
====================================================
*/

export function getWorldBuilderCardImage(
    card
) {

    if (!card) {
        return "";
    }

    return card.image || "";

}


/*
====================================================
WORLD BUILDER CARD DESTINATION
====================================================
*/

export function getWorldBuilderCardDestination(
    card
) {

    if (!card) {
        return "";
    }

    return card.destination || "";

}


/*
====================================================
WORLD BUILDER CARD GROUPS

Useful later for:
- category shelves
- albums
- collection screens
- filters
- special editions
====================================================
*/

export function getWorldBuilderCardGroups() {

    const cards =
        getWorldBuilderDeck();

    const groups = {};

    cards.forEach(
        card => {

            const category =
                card.category ||
                "uncategorized";

            if (!groups[category]) {
                groups[category] = [];
            }

            groups[category].push(
                card
            );

        }
    );

    return groups;

}


/*
====================================================
END WORLD BUILDER CARD ADAPTER
====================================================
*/