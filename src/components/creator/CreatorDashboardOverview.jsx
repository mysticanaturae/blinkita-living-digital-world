/*
==========================================
BLINKITA OS™

CREATOR DASHBOARD™
MY LIVING OVERVIEW™

Premium navigation layer
==========================================
*/

import {
    useState
} from "react";


export default function CreatorDashboardOverview() {

    const [activePanel, setActivePanel] =
        useState(null);


    const panels = [

        {
            id: "identity",
            symbol: "✦",
            title: "My Living Identity™",
            description:
                "Who you are becoming.",
            detail:
                "Your living creator identity, avatar, expression and identity evolution."
        },


        {
            id: "analysis",
            symbol: "◈",
            title: "My Living Analysis™",
            description:
                "Your Living Portal analysis.",
            detail:
                "The living analysis of everything you discovered and expressed through the nine Living Portals."
        },


        {
            id: "intelligence",
            symbol: "🧠",
            title: "My Living Intelligence™",
            description:
                "Your evolving intelligence relationship.",
            detail:
                "A living intelligence that grows through knowing you, reflecting with you and witnessing what you create."
        },


        {
            id: "reflection",
            symbol: "◇",
            title: "My Living Reflection™",
            description:
                "What is alive in you right now.",
            detail:
                "Bring a thought, question, decision, creation or moment into your Living World."
        },


        {
            id: "journey",
            symbol: "🌀",
            title: "My Living Journey™",
            description:
                "Your path through the Living World.",
            detail:
                "Your movement, discoveries, stages and evolving relationship with what you create."
        },


        {
            id: "worlds",
            symbol: "🌎",
            title: "My Living Worlds™",
            description:
                "The worlds you are bringing to life.",
            detail:
                "The Living Worlds you are creating, nurturing and evolving."
        }

    ];


    const active =
        panels.find(
            panel =>
                panel.id === activePanel
        );


    return (

        <>

            <section className="my-living-overview">

                <div className="my-living-overview-heading">

                    <span className="my-living-overview-eyebrow">

                        BLINKITA CREATOR SPACE™

                    </span>


                    <h2>

                        My Living...

                    </h2>


                    <p>

                        Everything you are,
                        becoming, creating
                        and discovering —
                        alive in one place.

                    </p>

                </div>


                <div className="my-living-overview-grid">

                    {
                        panels.map(
                            panel => (

                                <button

                                    key={
                                        panel.id
                                    }

                                    type="button"

                                    className={
                                        "my-living-overview-card" +
                                        (
                                            panel.id === "analysis"
                                                ? " my-living-analysis-card"
                                                : ""
                                        )
                                    }

                                    onClick={() =>
                                        setActivePanel(
                                            panel.id
                                        )
                                    }

                                >

                                    <span className="my-living-card-symbol">

                                        {
                                            panel.symbol
                                        }

                                    </span>


                                    <span className="my-living-card-eyebrow">

                                        MY LIVING

                                    </span>


                                    <strong>

                                        {
                                            panel.title
                                                .replace(
                                                    "My Living ",
                                                    ""
                                                )
                                        }

                                    </strong>


                                    <small>

                                        {
                                            panel.description
                                        }

                                    </small>


                                    <span className="my-living-card-arrow">

                                        →

                                    </span>

                                </button>

                            )
                        )
                    }

                </div>

            </section>


            {
                active && (

                    <div
                        className="my-living-modal-backdrop"
                        role="presentation"
                        onClick={() =>
                            setActivePanel(null)
                        }
                    >

                        <div
                            className="my-living-modal"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="my-living-modal-title"
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        >

                            <button
                                type="button"
                                className="my-living-modal-close"
                                onClick={() =>
                                    setActivePanel(null)
                                }
                                aria-label="Close"
                            >

                                ×

                            </button>


                            <div className="my-living-modal-symbol">

                                {
                                    active.symbol
                                }

                            </div>


                            <span className="my-living-modal-eyebrow">

                                MY LIVING

                            </span>


                            <h2 id="my-living-modal-title">

                                {
                                    active.title
                                }

                            </h2>


                            <p className="my-living-modal-description">

                                {
                                    active.description
                                }

                            </p>


                            <div className="my-living-modal-content">

                                <p>

                                    {
                                        active.detail
                                    }

                                </p>

                            </div>


                            <div className="my-living-modal-status">

                                Living relationship
                                • Living memory
                                • Living evolution

                            </div>

                        </div>

                    </div>

                )
            }

        </>

    );

}
