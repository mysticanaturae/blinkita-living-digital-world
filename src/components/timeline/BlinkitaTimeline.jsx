import React, { useEffect, useState } from "react";
import "./BlinkitaTimeline.css";

import { WorldTimeline } from "../../core/timeline/WorldTimeline";

const timelineTabs = [
    {
        id: "my",
        label: "MY TIMELINE"
    },
    {
        id: "public",
        label: "PUBLIC TIMELINE"
    }
];

export default function BlinkitaTimeline() {

    const [activeTab, setActiveTab] = useState("my");
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(WorldTimeline.getTimeline());
    }, []);

    return (
        <main className="blinkita-timeline">

            <section className="timeline-header">

                <div className="timeline-kicker">
                    BLINKITA TIMELINE™
                </div>

                <h1>
                    LIVING TIME
                </h1>

                <p>
                    Your journey through time, creation and the Living World.
                </p>

            </section>


            <nav
                className="timeline-tabs"
                aria-label="Timeline views"
            >

                {timelineTabs.map((tab) => (

                    <button
                        key={tab.id}
                        type="button"
                        className={
                            activeTab === tab.id
                                ? "timeline-tab active"
                                : "timeline-tab"
                        }
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>

                ))}

            </nav>


            {activeTab === "my" && (

                <section className="timeline-content">

                    <section className="tzolkin-section">

                        <div className="section-kicker">
                            MY LIVING TIME
                        </div>

                        <div className="tzolkin-grid">

                            <article className="tzolkin-card">

                                <div className="tzolkin-label">
                                    BIRTH TZOLK'IN
                                </div>

                                <h2>
                                    YOUR BIRTH TIME
                                </h2>

                                <p>
                                    Your personal Tzolk'in birth matrix
                                    will live here.
                                </p>

                            </article>


                            <article className="tzolkin-card">

                                <div className="tzolkin-label">
                                    TODAY'S TZOLK'IN
                                </div>

                                <h2>
                                    TODAY'S TIME
                                </h2>

                                <p>
                                    The living Tzolk'in code of today
                                    will appear here.
                                </p>

                            </article>


                            <article className="tzolkin-card combined">

                                <div className="tzolkin-label">
                                    BIRTH × TODAY
                                </div>

                                <h2>
                                    YOUR LIVING TIME
                                </h2>

                                <p>
                                    The relationship between your birth
                                    matrix and today's living time.
                                </p>

                            </article>

                        </div>

                    </section>


                    <section className="journey-section">

                        <div className="section-kicker">
                            MY JOURNEY
                        </div>

                        {events.length === 0 ? (

                            <article className="timeline-empty">

                                <div className="timeline-empty-symbol">
                                    ∞
                                </div>

                                <h2>
                                    YOUR STORY IS BEGINNING
                                </h2>

                                <p>
                                    As you create, explore and move through
                                    your Living World, meaningful moments
                                    will appear here.
                                </p>

                            </article>

                        ) : (

                            <div className="timeline-feed">

                                {events
                                    .slice()
                                    .reverse()
                                    .map((event) => (

                                        <article
                                            key={event.id}
                                            className="timeline-event"
                                        >

                                            <div className="timeline-event-line" />

                                            <div className="timeline-event-body">

                                                <div className="timeline-event-type">
                                                    {event.type || "LIVING MOMENT"}
                                                </div>

                                                <h3>
                                                    {event.title}
                                                </h3>

                                                <p>
                                                    {event.description}
                                                </p>

                                                <time>
                                                    {new Date(
                                                        event.timestamp
                                                    ).toLocaleString()}
                                                </time>

                                            </div>

                                        </article>

                                    ))}

                            </div>

                        )}

                    </section>

                </section>

            )}


            {activeTab === "public" && (

                <section className="public-timeline">

                    <div className="section-kicker">
                        PUBLIC TIMELINE
                    </div>

                    <article className="public-empty">

                        <div className="public-empty-symbol">
                            ◌
                        </div>

                        <h2>
                            THE LIVING WORLD IS CONNECTING
                        </h2>

                        <p>
                            Public moments from friends and other
                            World Builders will appear here.
                        </p>

                    </article>

                </section>

            )}


            <section className="timeline-principle">

                <div className="timeline-principle-label">
                    THE BLINKITA TIMELINE PRINCIPLE
                </div>

                <p>
                    Time is not only what happened.
                    Time is the living trail of what is becoming.
                </p>

            </section>

        </main>
    );
}

