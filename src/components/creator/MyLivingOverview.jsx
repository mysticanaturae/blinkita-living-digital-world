import {
    useState
} from "react";


import MyLivingModal
from "./MyLivingModal";


import CreatorIntelligenceCard
from "./CreatorIntelligenceCard";


import CreatorAnalysisCard
from "./CreatorAnalysisCard";


import MyLivingIdentity
from "./MyLivingIdentity";


import CreatorReflection
from "./CreatorReflection";


export default function MyLivingOverview({

    creator

}) {

    const [activeCard, setActiveCard] =
        useState(null);


    const cards = [

        {
            id: "identity",
            symbol: "✦",
            title: "Identity™",
            description: "Who you are becoming."
        },

        {
            id: "analysis",
            symbol: "◈",
            title: "Analysis™",
            description: "Your Living Portal analysis."
        },

        {
            id: "intelligence",
            symbol: "🧠",
            title: "Intelligence™",
            description: "Your evolving intelligence relationship."
        },

        {
            id: "reflection",
            symbol: "◇",
            title: "Reflection™",
            description: "What is alive in you right now."
        },

        {
            id: "journey",
            symbol: "🌀",
            title: "Journey™",
            description: "Your path through the Living World."
        },

        {
            id: "worlds",
            symbol: "🌎",
            title: "Worlds™",
            description: "The worlds you are bringing to life."
        }

    ];


    const active =
        cards.find(
            card =>
                card.id === activeCard
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

                        Everything you are, becoming, creating
                        and discovering — alive in one place.

                    </p>

                </div>


                <div className="my-living-overview-grid">

                    {

                        cards.map(

                            card => (

                                <button

                                    key={card.id}

                                    type="button"

                                    className="my-living-overview-card"

                                    onClick={() =>
                                        setActiveCard(card.id)
                                    }

                                >

                                    <span className="my-living-card-symbol">

                                        {card.symbol}

                                    </span>


                                    <span className="my-living-card-eyebrow">

                                        MY LIVING

                                    </span>


                                    <strong>

                                        {card.title}

                                    </strong>


                                    <small>

                                        {card.description}

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

                    <MyLivingModal

                        title={active.title}

                        symbol={active.symbol}

                        onClose={() =>
                            setActiveCard(null)
                        }

                    >

                        {

                            active.id === "identity"

                                ?

                            <MyLivingIdentity
                                creator={creator}
                            />

                                :

                            active.id === "reflection"

                                ?

                            <CreatorReflection
                                creator={creator}
                            />

                                :

                            active.id === "intelligence"

                                ?

                            <CreatorIntelligenceCard
                                creator={creator}
                            />

                                :

                            active.id === "analysis"

                                ?

                            <CreatorAnalysisCard
                                creator={creator}
                            />

                                :

                            <div className="my-living-modal-placeholder">

                                <span>

                                    {active.symbol}

                                </span>


                                <h3>

                                    {active.title}

                                </h3>


                                <p>

                                    This living space is being
                                    connected to your Creator World.

                                </p>

                            </div>

                        }

                    </MyLivingModal>

                )

            }

        </>

    );

}



