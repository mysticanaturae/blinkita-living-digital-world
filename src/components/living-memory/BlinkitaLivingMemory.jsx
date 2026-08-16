import React from "react";
import "./BlinkitaLivingMemory.css";

const memoryLayers = [
  {
    id: "world",
    icon: "◉",
    title: "WORLD MEMORY",
    description: "What your Living World has experienced, created and become."
  },
  {
    id: "creator",
    icon: "✦",
    title: "CREATOR MEMORY",
    description: "The ideas, decisions, discoveries and evolution behind your creation."
  },
  {
    id: "time",
    icon: "◌",
    title: "TIME MEMORY",
    description: "The moments, cycles and changes through which your world evolves."
  },
  {
    id: "birth",
    icon: "∞",
    title: "BIRTH MEMORY",
    description: "The original conditions, intention and identity from which a world began."
  },
  {
    id: "discovery",
    icon: "◇",
    title: "DISCOVERY MEMORY",
    description: "What your world learns as it is explored."
  },
  {
    id: "harmony",
    icon: "⌘",
    title: "HARMONY MEMORY",
    description: "Patterns, relationships and connections that emerge over time."
  }
];

export default function BlinkitaLivingMemory() {
  return (
    <main className="blinkita-living-memory">

      <section className="living-memory-header">

        <div className="living-memory-kicker">
          BLINKITA LIVING MEMORY™
        </div>

        <h1>A WORLD THAT REMEMBERS</h1>

        <p>
          Your world is not a static collection of pages.
          It has a history, a beginning, experiences and an evolving identity.
          Living Memory keeps that story alive.
        </p>

      </section>

      <section
        className="living-memory-layers"
        aria-label="Living Memory layers"
      >

        {memoryLayers.map((layer) => (
          <button
            key={layer.id}
            type="button"
            className="living-memory-card"
          >

            <span
              className="living-memory-icon"
              aria-hidden="true"
            >
              {layer.icon}
            </span>

            <span className="living-memory-title">
              {layer.title}
            </span>

            <span className="living-memory-description">
              {layer.description}
            </span>

          </button>
        ))}

      </section>

      <section className="living-memory-statement">

        <div className="living-memory-statement-label">
          THE LIVING MEMORY PRINCIPLE
        </div>

        <p>
          A Living World becomes more intelligent when it can remember
          what has happened — and use that memory to shape what comes next.
        </p>

      </section>

    </main>
  );
}
