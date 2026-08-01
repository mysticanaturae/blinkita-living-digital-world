/*
==========================================

BLINKITA METHOD™
BLINKITA OS™

CREATOR DASHBOARD™

Creator identity and evolution space

Version 4.0

==========================================
*/

import { useState } from "react";

import {
    getCreatorState
} from "../../core/creator/CreatorState";

import {
    getWorldState,
    updateWorldState
} from "../../core/state/WorldState";

import WorldBuilderEvolutionCard
from "../evolution/WorldBuilderEvolutionCard";

import WorldBuilderDomainCard
from "../worldbuilder/WorldBuilderDomainCard";


export default function CreatorDashboard() {

    const creatorState =
        getCreatorState() || {};

    const worldState =
        getWorldState() || {};


    const creator =
        creatorState.creator || {

            id: null,

            identity: {

                name: "",
                archetype: "Explorer",
                description: ""

            },

            evolution: {

                level: 1,
                experience: 0,
                stage: "Beginning"

            }

        };


    const worlds =
        creatorState.worlds || [];


    const evolution =
        creatorState.evolution ||
        creator.evolution;


    const worldEvolution =
        worldState.evolution || {};


    const worldGovernance =
        worldState.governance || {};


    const worldDecision =
        worldState.decision || {};


    const worldAction =
        worldState.action || {};


    /*
    ======================================
    CREATOR IDENTITY FORM
    ======================================
    */

    const [name, setName] = useState(

        creator.identity?.name || ""

    );


    const [archetype, setArchetype] = useState(

        creator.identity?.archetype || "Explorer"

    );


    const [description, setDescription] = useState(

        creator.identity?.description || ""

    );


    const [saved, setSaved] = useState(false);


    /*
    ======================================
    SAVE CREATOR IDENTITY
    ======================================
    */

    function handleSaveIdentity() {

        const updatedCreator = {

            ...creator,

            identity: {

                ...creator.identity,

                name:
                    name.trim() || "Anonymous Creator",

                archetype:
                    archetype.trim() || "Explorer",

                description:
                    description.trim()

            }

        };


        updateWorldState({

            creator: updatedCreator

        });


        setSaved(true);


        console.log(

            "🌱 Creator Identity Saved:",

            updatedCreator.identity

        );


        setTimeout(() => {

            setSaved(false);

        }, 2500);

    }


    /*
    ======================================
    PAGE
    ======================================
    */

    return (

        <section className="living-page creator-dashboard">


            <header className="living-header">

                <h1>

                    🌱 Welcome Creator™

                </h1>


                <p>

                    Your evolution space inside
                    the Living World™

                </p>

            </header>


            <section className="living-card living-section">

                <h2>

                    Creator Identity™

                </h2>


                <p>

                    Tell your Living World™ who you are.

                </p>


                <div className="creator-identity-form">


                    <div>

                        <label>

                            Name

                        </label>


                        <input

                            type="text"

                            value={name}

                            onChange={(event) =>

                                setName(

                                    event.target.value

                                )

                            }

                            placeholder="Your name"

                        />

                    </div>


                    <div>

                        <label>

                            Creator Archetype

                        </label>


                        <input

                            type="text"

                            value={archetype}

                            onChange={(event) =>

                                setArchetype(

                                    event.target.value

                                )

                            }

                            placeholder="Explorer, Artist, Builder..."

                        />

                    </div>


                    <div>

                        <label>

                            About You

                        </label>


                        <textarea

                            value={description}

                            onChange={(event) =>

                                setDescription(

                                    event.target.value

                                )

                            }

                            placeholder="Tell your Living World™ something about you..."

                            rows="5"

                        />

                    </div>


                    <button

                        type="button"

                        className="journey-button"

                        onClick={handleSaveIdentity}

                    >

                        {

                            saved

                                ?

                            "Identity Saved ✨"

                                :

                            "Save My Identity"

                        }

                    </button>


                </div>

            </section>


            <div className="living-grid">


                <section className="living-card">

                    <h2>

                        Creator Identity

                    </h2>


                    <p>

                        Name:{" "}

                        {

                            creator.identity?.name ||

                            "Anonymous Creator"

                        }

                    </p>


                    <p>

                        Archetype:{" "}

                        {

                            creator.identity?.archetype ||

                            "Explorer"

                        }

                    </p>


                    {

                        creator.identity?.description && (

                            <p>

                                About:{" "}

                                {

                                    creator.identity.description

                                }

                            </p>

                        )

                    }

                </section>


                <section className="living-card">

                    <h2>

                        Creator Journey™

                    </h2>


                    <p>

                        Level:{" "}

                        {

                            evolution?.level || 1

                        }

                    </p>


                    <p>

                        Experience:{" "}

                        {

                            evolution?.experience || 0

                        }

                        {" "}XP

                    </p>


                    <p>

                        Stage:{" "}

                        {

                            evolution?.stage ||

                            "Beginning"

                        }

                    </p>

                </section>


                <WorldBuilderEvolutionCard />


                <section className="living-card">

                    <h2>

                        Living World™ Status

                    </h2>


                    <p>

                        Current Portal:{" "}

                        {

                            worldState.currentPortal ||

                            "arrival"

                        }

                    </p>


                    <p>

                        Evolution:{" "}

                        {

                            worldEvolution.stage ||

                            "seed"

                        }

                    </p>


                    <p>

                        Decisions:{" "}

                        {

                            worldDecision.choices?.length ||

                            0

                        }

                    </p>


                    <p>

                        Governance:{" "}

                        {

                            worldGovernance.decisions ||

                            0

                        }

                        {" "}evaluations

                    </p>


                    <p>

                        Actions:{" "}

                        {

                            worldAction.executed ||

                            0

                        }

                    </p>

                </section>


            </div>


            <WorldBuilderDomainCard />


            <section className="living-card living-section">

                <h2>

                    My Living Worlds™

                </h2>


                <div className="living-grid">


                    {

                        worlds.length > 0

                            ?

                        worlds.map((world) => (

                            <article

                                key={world.id}

                                className="living-card"

                            >

                                <h3>

                                    🌎 {world.id}

                                </h3>


                                <p>

                                    Status:{" "}

                                    {world.status}

                                </p>

                            </article>

                        ))

                            :

                        <p>

                            Your first Living World™
                            is waiting.

                        </p>

                    }

                </div>

            </section>


            <section className="living-card living-section">

                <h2>

                    Achievements™

                </h2>


                <p>

                    Your World Builder™
                    milestones will appear here.

                </p>

            </section>


        </section>

    );

}
