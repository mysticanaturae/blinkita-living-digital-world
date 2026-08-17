import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
    getWorldState
} from "../../core/state/WorldState";

import {
    getSignImage
} from "../../core/tzolkin/TzolkinImages";

import "../../styles/world-builder.css";


const TZOLKIN_CORRELATION = 584283;


const TZOLKIN_SIGNS = [

    { index: 0, classic: "Imix", local: "Imox", symbol: "𓆈", element: "Water" },
    { index: 1, classic: "Ik'", local: "Iq'", symbol: "𓂀", element: "Wind" },
    { index: 2, classic: "Ak'b'al", local: "Aq'ab'al", symbol: "☽", element: "Dawn" },
    { index: 3, classic: "K'an", local: "K'at", symbol: "✦", element: "Seed" },
    { index: 4, classic: "Chikchan", local: "Kan", symbol: "𓆗", element: "Serpent" },
    { index: 5, classic: "Kimi", local: "Kame", symbol: "☠", element: "Transformation" },
    { index: 6, classic: "Manik'", local: "Kej", symbol: "🖐", element: "Hand" },
    { index: 7, classic: "Lamat", local: "Q'anil", symbol: "✺", element: "Seed of Life" },
    { index: 8, classic: "Muluk", local: "Toj", symbol: "💧", element: "Offering" },
    { index: 9, classic: "Ok", local: "Tz'i'", symbol: "🐕", element: "Path" },
    { index: 10, classic: "Chuwen", local: "B'atz'", symbol: "🌀", element: "Thread" },
    { index: 11, classic: "Eb'", local: "E", symbol: "🛤", element: "Road" },
    { index: 12, classic: "B'en", local: "Aj", symbol: "🌱", element: "Growth" },
    { index: 13, classic: "Ix", local: "Ix", symbol: "🐆", element: "Jaguar" },
    { index: 14, classic: "Men", local: "Tz'ikin", symbol: "🦅", element: "Eagle" },
    { index: 15, classic: "K'ib'", local: "Ajmaq", symbol: "🕯", element: "Wisdom" },
    { index: 16, classic: "Kab'an", local: "No'j", symbol: "🌎", element: "Earth" },
    { index: 17, classic: "Etz'nab'", local: "Tijax", symbol: "◈", element: "Flint" },
    { index: 18, classic: "Kawak", local: "Kawoq", symbol: "⚡", element: "Storm" },
    { index: 19, classic: "Ajaw", local: "Ajaw", symbol: "☀", element: "Sun" }

];


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
                daysFromBase +
                3
            ) %
            13 +
            13
        ) %
        13 +
        1;


    const signIndex =
        (
            (
                daysFromBase +
                19
            ) %
            20 +
            20
        ) %
        20;


    const kin =
        (
            (
                daysFromBase +
                159
            ) %
            260 +
            260
        ) %
        260 +
        1;


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


function calculateLivingTime(
    birthMatrix,
    todayTzolkin
) {

    if (
        !birthMatrix ||
        !todayTzolkin
    ) {
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


    if (
        birthSignIndex < 0 ||
        birthSignIndex >= TZOLKIN_SIGNS.length
    ) {
        return null;
    }


    if (
        birthMatrix.tone == null
    ) {
        return null;
    }


    const tone =
        (
            (
                birthMatrix.tone +
                todayTzolkin.tone -
                1
            ) %
            13
        ) +
        1;


    const signIndex =
        (
            birthSignIndex +
            todayTzolkin.signIndex +
            1
        ) %
        20;


    const sign =
        TZOLKIN_SIGNS[
            signIndex
        ];


    if (!sign) {
        return null;
    }


    return {

        tone,

        signIndex,

        sign,

        kin:
            (
                (tone - 1) * 20
            ) +
            signIndex +
            1

    };

}


function TzolkinSignVisual({
    sign
}) {

    if (!sign) {
        return (
            <span className="tzolkin-sign-visual">
                <span className="tzolkin-sign-fallback">
                    ☼
                </span>
            </span>
        );
    }


    return (

        <span className="tzolkin-sign-visual">

            <img
                src={getSignImage(
                    sign.classic
                )}
                alt={`${sign.classic} Tzolk'in sign`}
                onError={(event) => {

                    event.currentTarget.style.display =
                        "none";

                    const fallback =
                        event.currentTarget.nextElementSibling;

                    if (fallback) {
                        fallback.style.opacity =
                            "1";
                    }

                }}
            />

            <span className="tzolkin-sign-fallback">
                {sign.symbol}
            </span>

        </span>

    );

}


export default function LivingTimeHeader() {

    const navigate = useNavigate();


    const worldState =
        getWorldState() || {};


    const creator =
        worldState.creator || {};


    const identity =
        creator.identity || {};


    const birthMatrix =
        identity.birthMatrix || null;


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


    return (

        <section
            className="
                world-builder-day-energy
            "
        >

            {/* =================================================
                TODAY'S LIVING TIME
            ================================================= */}

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
                        sign={
                            todayTzolkin.sign
                        }
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

                        {
                            todayTzolkin.sign?.classic ||
                            ""
                        }

                    </strong>


                    <small>

                        Kin{" "}

                        {todayTzolkin.kin}

                        {" · "}

                        {
                            todayTzolkin.sign?.element ||
                            ""
                        }

                    </small>

                </div>

            </div>


            <div
                className="
                    world-builder-time-divider
                "
            />


            {/* =================================================
                MY LIVING TIME TODAY
            ================================================= */}

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

                        <span className="tzolkin-sign-visual">

                            <span className="tzolkin-sign-fallback">
                                ☼
                            </span>

                        </span>

                    )}

                </div>


                <div>

                    <span>
                        MY LIVING TIME TODAY
                    </span>


                    <strong>

                        {
                            livingTimeToday ? (
                                `${livingTimeToday.tone} ${livingTimeToday.sign.classic}`
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => navigate("/world/creator")}
                                    className="living-time-calculate-link"
                                >
                                    Calculate Your Birth Matrix →
                                </button>
                            )
                        }

                    </strong>


                    {livingTimeToday && (

                        <small>

                            Kin{" "}

                            {livingTimeToday.kin}

                            {" · "}

                            {livingTimeToday.sign.element}

                        </small>

                    )}

                </div>

            </div>


        </section>

    );

}






