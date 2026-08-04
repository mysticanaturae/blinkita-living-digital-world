/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

MY LIVING™

Creator Space Living Navigation

Version 2.0
==========================================
*/

import React from "react";

import "./MyLivingNavigation.css";


const livingSpaces = [

    {
        id: "living-analysis",
        number: "01",
        title: "ANALYSIS",
        subtitle: "Understand what is emerging.",
        glyph: "◈",
        glyphClass: "glyph-analysis"
    },

    {
        id: "living-identity",
        number: "02",
        title: "IDENTITY",
        subtitle: "Know the Creator behind the creation.",
        glyph: "✦",
        glyphClass: "glyph-identity"
    },

    {
        id: "living-time",
        number: "03",
        title: "TIME",
        subtitle: "Meet yourself through Living Time.",
        glyph: "◌",
        glyphClass: "glyph-time"
    },

    {
        id: "living-intelligence",
        number: "04",
        title: "INTELLIGENCE",
        subtitle: "Think, reflect and evolve with your intelligence.",
        glyph: "∞",
        glyphClass: "glyph-intelligence"
    },

    {
        id: "living-creation-path",
        number: "05",
        title: "CREATION PATH",
        subtitle: "Choose where your creation wants to go.",
        glyph: "→",
        glyphClass: "glyph-path"
    },

    {
        id: "living-worlds",
        number: "06",
        title: "WORLDS",
        subtitle: "The worlds you are bringing to life.",
        glyph: "◎",
        glyphClass: "glyph-worlds"
    }

];


export default function MyLivingNavigation() {


    function enterLivingSpace(id) {

        const target =
            document.getElementById(id);


        if (!target) {

            return;

        }


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });


        window.setTimeout(
            () => {

                target.classList.add(
                    "my-living-space-focus"
                );


                window.setTimeout(
                    () => {

                        target.classList.remove(
                            "my-living-space-focus"
                        );

                    },
                    1200
                );

            },
            500
        );

    }


    return (

        <section className="my-living-navigation">

            <div className="my-living-navigation-header">

                <span className="my-living-navigation-eyebrow">

                    BLINKITA OS™ · CREATOR SPACE

                </span>


                <h2>

                    MY LIVING

                </h2>


                <p>

                    Move through the living spaces
                    of your Creator World.

                </p>

            </div>


            <div className="my-living-navigation-grid">

                {
                    livingSpaces.map(
                        (space) => (

                            <button

                                key={space.id}

                                type="button"

                                className="my-living-navigation-card"

                                onClick={() =>
                                    enterLivingSpace(
                                        space.id
                                    )
                                }

                            >

                                <span className="my-living-navigation-top">

                                    <span className="my-living-navigation-number">

                                        {space.number}

                                    </span>


                                    <span
                                        className={
                                            "my-living-navigation-glyph " +
                                            space.glyphClass
                                        }
                                        aria-hidden="true"
                                    >

                                        {space.glyph}

                                    </span>

                                </span>


                                <span className="my-living-navigation-content">

                                    <strong>

                                        {space.title}

                                    </strong>


                                    <small>

                                        {space.subtitle}

                                    </small>

                                </span>


                                <span className="my-living-navigation-arrow">

                                    ↘

                                </span>

                            </button>

                        )
                    )
                }

            </div>

        </section>

    );

}
