/*
==========================================
BLINKITA METHOD™
BLINKITA OS™

LIVING INTELLIGENCE™

Creator Intelligence™

A living intelligence relationship
with the Creator

Version 3.0
==========================================
*/

import React from "react";


export default function CreatorIntelligenceCard({
    creator
}) {


    const avatar =
        creator?.identity?.avatar ||
        "🌱";


    const name =
        creator?.identity?.name ||
        "Creator";


    const archetype =
        creator?.identity?.archetype ||
        "Seed Creator";


    const description =
        creator?.identity?.description ||
        "";


    /*
    ==========================================
    LIVING INTELLIGENCE FOUNDATION
    ==========================================
    */

    const intelligence = {

        symbol:
            avatar,

        archetype,

        foundation:
            description
                ? "Your Living Intelligence begins with what you have already revealed about yourself."
                : "Your Living Intelligence begins by discovering the Creator behind the creation.",

        message:
            description
                ? "It is beginning to recognize the patterns, intentions and possibilities carried within the way you describe yourself."
                : "It is waiting to discover how you think, what you value and what you are here to create."

    };


    return (

        <section className="living-card living-section creator-intelligence-card">


            {/* ==========================================
                PREMIUM HEADER
            ========================================== */}

            <div className="creator-intelligence-header">

                <div className="creator-intelligence-header-meta">

                    <span className="creator-intelligence-eyebrow">

                        LIVING INTELLIGENCE™

                    </span>


                    <span className="creator-intelligence-header-mark">

                        ✦

                    </span>

                </div>


                <h2>

                    Living Intelligence

                </h2>


                <p className="creator-intelligence-introduction">

                    A living intelligence that grows through
                    knowing you, reflecting with you and
                    witnessing what you create.

                </p>

            </div>



            {/* ==========================================
                CREATOR INTELLIGENCE IDENTITY
            ========================================== */}

            <div className="creator-intelligence-core">

                <div className="creator-intelligence-symbol">

                    {
                        intelligence.symbol
                    }

                </div>


                <div className="creator-intelligence-identity">

                    <span>

                        YOUR LIVING INTELLIGENCE

                    </span>


                    <strong>

                        {
                            name
                        }

                    </strong>


                    <small>

                        {
                            intelligence.archetype
                        }

                    </small>

                </div>


                <div className="creator-intelligence-status">

                    <span className="creator-intelligence-status-dot">

                        ✦

                    </span>


                    <span>

                        Living

                    </span>

                </div>

            </div>



            {/* ==========================================
                FOUNDATION
            ========================================== */}

            <div className="creator-intelligence-foundation">

                <span className="creator-intelligence-label">

                    THE RELATIONSHIP BEGINS HERE

                </span>


                <p>

                    {
                        intelligence.foundation
                    }

                </p>

            </div>



            {/* ==========================================
                CURRENT INSIGHT
            ========================================== */}

            <div className="creator-intelligence-insight">

                <div className="creator-intelligence-insight-mark">

                    ✦

                </div>


                <div className="creator-intelligence-insight-content">

                    <span className="creator-intelligence-label">

                        CURRENT LIVING INSIGHT

                    </span>


                    <p>

                        {
                            intelligence.message
                        }

                    </p>

                </div>

            </div>



            {/* ==========================================
                RELATIONSHIP PRINCIPLE
            ========================================== */}

            <div className="creator-intelligence-principle">

                <span>

                    Your intelligence grows with you.

                </span>


                <p>

                    Every reflection, decision, creation and
                    remembered moment can become part of the
                    relationship between you and your Living
                    Intelligence™.

                </p>

            </div>



            {/* ==========================================
                FOOTER
            ========================================== */}

            <div className="creator-intelligence-footer">

                <span>

                    LIVING INTELLIGENCE™

                </span>


                <span>

                    Living relationship • Living memory • Living evolution

                </span>


                <span>

                    ✦

                </span>

            </div>


        </section>

    );

}
