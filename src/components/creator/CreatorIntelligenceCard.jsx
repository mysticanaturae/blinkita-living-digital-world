/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

CREATOR INTELLIGENCE™

Creator awareness and creative intelligence space

Version 1.0
==========================================
*/

import React from "react";


export default function CreatorIntelligenceCard({

    creator

}) {


    const avatar =
        creator?.identity?.avatar ||
        "🌱";


    const archetype =
        creator?.identity?.archetype ||
        "Seed Creator";

const intelligence = {

    archetype,

    symbol: avatar,

    meaning:
        "Creator connected with your first living intention.",

    message:
        "Your creative intelligence grows through your memories, choices and the worlds you bring into being."

};

    return (

        <section className="living-card living-section creator-intelligence-card">

            <div className="creator-intelligence-header">

                <span className="creator-intelligence-eyebrow">

                    CREATOR INTELLIGENCE™

                </span>


                <h3>

                    Your Creative Intelligence

                </h3>


                <p>

                    Discover how your natural way of seeing,
                    thinking and creating shapes the worlds
                    you bring into being.

                </p>

            </div>



            <div className="creator-intelligence-core">

                <div className="creator-intelligence-symbol">

                    {intelligence.symbol}

                </div>


                <div className="creator-intelligence-identity">

                    <span>

                        CREATOR PATTERN

                    </span>


                    <strong>

                        {intelligence.archetype}

                    </strong>

                </div>

            </div>



            <div className="creator-intelligence-meaning">

                <span>

                    CREATIVE QUALITY

                </span>


                <p>

                    {intelligence.meaning}

                </p>

            </div>



            <div className="creator-intelligence-message">

                <span>

                    BLINKITA INSIGHT

                </span>


                <p>

                    {intelligence.message}

                </p>

            </div>



            <div className="creator-intelligence-footer">

                <span>

                    Living Intelligence™

                </span>


                <span>

                    ✦

                </span>

            </div>

        </section>

    );

}
