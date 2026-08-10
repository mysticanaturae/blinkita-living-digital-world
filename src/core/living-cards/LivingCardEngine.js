/*
====================================================
BLINKITA LIVING CARD SYSTEM™

LIVING CARD ENGINE
====================================================

Purpose:
- Central engine for the Living Card System
- Cards can later grow from 50 → 100 → 1000+
- Cards are organized by category
- World Builder can consume this engine
- No card identification is hard-coded here
- Images remain independent from the engine

====================================================
*/

import { useMemo } from "react";

/*
====================================================
CARD CATEGORIES
====================================================
*/

export const LIVING_CARD_CATEGORIES = [
    {
        id: "foundations",
        title: "FOUNDATIONS",
        description: "The fundamental patterns from which living creation begins."
    },
    {
        id: "inner-experience",
        title: "INNER EXPERIENCE",
        description: "Awareness, perception, feeling and inner movement."
    },
    {
        id: "meaning-and-possibility",
        title: "MEANING & POSSIBILITY",
        description: "Meaning, imagination and what could become."
    },
    {
        id: "recognition-and-self",
        title: "RECOGNITION & SELF",
        description: "Identity, recognition and the experience of self."
    },
    {
        id: "purpose",
        title: "PURPOSE",
        description: "Direction, intention and what calls creation forward."
    },
    {
        id: "creation-process",
        title: "CREATION PROCESS",
        description: "The movement from possibility into creation."
    },
    {
        id: "world-and-consequence",
        title: "WORLD & CONSEQUENCE",
        description: "How creation enters and affects a living world."
    },
    {
        id: "change",
        title: "CHANGE",
        description: "Transformation, transition and movement."
    },
    {
        id: "creator-experience",
        title: "CREATOR EXPERIENCE",
        description: "The lived experience of being a creator."
    },
    {
        id: "world-creation",
        title: "WORLD CREATION",
        description: "The architecture and emergence of Living Worlds."
    },
    {
        id: "creator-agency",
        title: "CREATOR AGENCY",
        description: "Choice, action, influence and responsibility."
    },
    {
        id: "structure",
        title: "STRUCTURE",
        description: "Patterns, systems, relationships and form."
    },
    {
        id: "living-system",
        title: "LIVING SYSTEM",
        description: "Interdependence, intelligence and living relationships."
    },
    {
        id: "time",
        title: "TIME",
        description: "Living Time, rhythm, cycles and timing."
    },
    {
        id: "perception",
        title: "PERCEPTION",
        description: "Seeing, sensing, noticing and interpretation."
    },
    {
        id: "memory",
        title: "MEMORY",
        description: "Experience, remembrance and accumulated intelligence."
    },
    {
        id: "evolution",
        title: "EVOLUTION",
        description: "Growth, development and becoming."
    },
    {
        id: "events",
        title: "EVENTS",
        description: "Moments, encounters and movements that change a world."
    },
    {
        id: "possibility",
        title: "POSSIBILITY",
        description: "Potential, openings and unrealized futures."
    },
    {
        id: "integration",
        title: "INTEGRATION",
        description: "Bringing experience, knowledge and creation together."
    }
];


/*
====================================================
CATEGORY LOOKUP
====================================================
*/

export const LIVING_CARD_CATEGORY_MAP =
    Object.fromEntries(
        LIVING_CARD_CATEGORIES.map(
            category => [
                category.id,
                category
            ]
        )
    );


/*
====================================================
CARD NORMALIZER
====================================================

Keeps the engine tolerant of future card formats.

A card can contain:

id
title
category
image
symbol
essence
reading
destination
number

Additional properties are preserved.
====================================================
*/

export function normalizeLivingCard(card) {

    if (!card) {
        return null;
    }

    return {
        ...card,

        id:
            card.id ||
            `card-${card.number || Date.now()}`,

        title:
            card.title ||
            "UNTITLED CARD",

        category:
            card.category ||
            "foundations",

        image:
            card.image ||
            "",

        symbol:
            card.symbol ||
            "✦",

        essence:
            card.essence ||
            "",

        reading:
            card.reading ||
            "",

        destination:
            card.destination ||
            "",

        number:
            card.number ||
            null
    };
}


/*
====================================================
CARD VALIDATION
====================================================
*/

export function isLivingCard(card) {

    if (!card) {
        return false;
    }

    return Boolean(
        card.id &&
        card.title &&
        card.category
    );
}


/*
====================================================
FILTER VALID CARDS
====================================================
*/

export function normalizeLivingCards(cards = []) {

    return cards
        .map(normalizeLivingCard)
        .filter(isLivingCard);
}


/*
====================================================
GET CARDS BY CATEGORY
====================================================
*/

export function getCardsByCategory(
    cards = [],
    categoryId
) {

    return normalizeLivingCards(cards)
        .filter(
            card =>
                card.category ===
                categoryId
        );
}


/*
====================================================
GET CARD BY ID
====================================================
*/

export function getLivingCardById(
    cards = [],
    cardId
) {

    return normalizeLivingCards(cards)
        .find(
            card =>
                card.id ===
                cardId
        ) || null;
}


/*
====================================================
GET CATEGORY
====================================================
*/

export function getLivingCardCategory(
    categoryId
) {

    return (
        LIVING_CARD_CATEGORY_MAP[
            categoryId
        ] ||
        null
    );
}


/*
====================================================
GET CATEGORY COUNTS
====================================================
*/

export function getLivingCardCategoryCounts(
    cards = []
) {

    const normalized =
        normalizeLivingCards(cards);

    return Object.fromEntries(

        LIVING_CARD_CATEGORIES.map(
            category => [

                category.id,

                normalized.filter(
                    card =>
                        card.category ===
                        category.id
                ).length

            ]
        )

    );
}


/*
====================================================
GET TOTAL CARD COUNT
====================================================
*/

export function getLivingCardCount(
    cards = []
) {

    return normalizeLivingCards(
        cards
    ).length;
}


/*
====================================================
RANDOM CARD
====================================================
*/

export function drawRandomLivingCard(
    cards = []
) {

    const normalized =
        normalizeLivingCards(cards);

    if (!normalized.length) {
        return null;
    }

    const index =
        Math.floor(
            Math.random() *
            normalized.length
        );

    return normalized[index];
}


/*
====================================================
SEEDED CARD DRAW
====================================================

Used later when we want a repeatable
Living Time / Tzolk'in based draw.
====================================================
*/

export function drawSeededLivingCard(
    cards = [],
    seed = 0
) {

    const normalized =
        normalizeLivingCards(cards);

    if (!normalized.length) {
        return null;
    }

    const numericSeed =
        Math.abs(
            Number(seed) || 0
        );

    const index =
        numericSeed %
        normalized.length;

    return normalized[index];
}


/*
====================================================
CARD IMAGE RESOLUTION
====================================================

The actual image path belongs to the card.

This function deliberately does NOT attempt
to identify images automatically.

Later cards can simply provide:

image: "/living-cards/.../card.png"

====================================================
*/

export function getLivingCardImage(card) {

    if (!card) {
        return "";
    }

    return card.image || "";
}


/*
====================================================
CARD DESTINATION
====================================================
*/

export function getLivingCardDestination(
    card
) {

    if (!card) {
        return "";
    }

    return card.destination || "";
}


/*
====================================================
CARD COLLECTION HELPERS
====================================================
*/

export function addCardToCollection(
    collection = [],
    card
) {

    const normalized =
        normalizeLivingCard(card);

    if (!normalized) {
        return collection;
    }

    const exists =
        collection.some(
            item =>
                item.id ===
                normalized.id
        );

    if (exists) {
        return collection;
    }

    return [
        ...collection,
        normalized
    ];
}


/*
====================================================
CARD COLLECTION CHECK
====================================================
*/

export function hasCardInCollection(
    collection = [],
    cardId
) {

    return collection.some(
        card =>
            card.id ===
            cardId
    );
}


/*
====================================================
CARD COLLECTION COUNT
====================================================
*/

export function getCollectionCount(
    collection = []
) {

    return collection.length;
}


/*
====================================================
CARD COLLECTION CATEGORY PROGRESS
====================================================
*/

export function getCategoryProgress(
    collection = [],
    totalCards = []
) {

    const collectionCards =
        normalizeLivingCards(
            collection
        );

    const allCards =
        normalizeLivingCards(
            totalCards
        );

    return Object.fromEntries(

        LIVING_CARD_CATEGORIES.map(
            category => {

                const collected =
                    collectionCards.filter(
                        card =>
                            card.category ===
                            category.id
                    ).length;

                const total =
                    allCards.filter(
                        card =>
                            card.category ===
                            category.id
                    ).length;

                return [
                    category.id,
                    {
                        collected,
                        total,
                        complete:
                            total > 0 &&
                            collected >= total
                    }
                ];

            }
        )

    );
}


/*
====================================================
REACT HOOK
====================================================

Optional convenience hook for World Builder
and future Living Card collection screens.
====================================================
*/

export function useLivingCards(
    cards = []
) {

    const normalizedCards =
        useMemo(
            () =>
                normalizeLivingCards(
                    cards
                ),
            [cards]
        );

    const categoryCounts =
        useMemo(
            () =>
                getLivingCardCategoryCounts(
                    normalizedCards
                ),
            [normalizedCards]
        );

    return {
        cards:
            normalizedCards,

        count:
            normalizedCards.length,

        categories:
            LIVING_CARD_CATEGORIES,

        categoryCounts,

        getByCategory:
            categoryId =>
                getCardsByCategory(
                    normalizedCards,
                    categoryId
                ),

        getById:
            cardId =>
                getLivingCardById(
                    normalizedCards,
                    cardId
                ),

        draw:
            () =>
                drawRandomLivingCard(
                    normalizedCards
                )
    };
}


/*
====================================================
SYSTEM CONSTANTS
====================================================
*/

export const LIVING_CARD_SYSTEM = {

    name:
        "BLINKITA LIVING CARD SYSTEM™",

    engine:
        "Living Card Engine",

    categories:
        20,

    targetCards:
        1000,

    initialCards:
        0

};


/*
====================================================
END
====================================================
*/
