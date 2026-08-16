import React from "react";
import "./BlinkitaAcademy.css";

const academyPaths = [
  {
    id: "idea",
    icon: "💡",
    title: "I HAVE AN IDEA",
    description: "Turn a feeling, thought or spark into a clear idea."
  },
  {
    id: "write",
    icon: "✍️",
    title: "I WANT TO WRITE",
    description: "Learn how ideas become books, stories, articles and words."
  },
  {
    id: "visual",
    icon: "🎨",
    title: "I WANT TO CREATE VISUALLY",
    description: "Learn how ideas become images, identities and visual worlds."
  },
  {
    id: "video",
    icon: "🎬",
    title: "I WANT TO MAKE VIDEO",
    description: "Learn how ideas become moving stories and experiences."
  },
  {
    id: "build",
    icon: "🌐",
    title: "I WANT TO BUILD",
    description: "Learn how an idea becomes a digital world, website or application."
  },
  {
    id: "publish",
    icon: "🚀",
    title: "I AM READY TO SHARE",
    description: "Learn how to prepare, publish and bring your creation into the world."
  }
];

export default function BlinkitaAcademy() {
  return (
    <main className="blinkita-academy">
      <section className="academy-header">
        <div className="academy-kicker">
          BLINKITA ACADEMY™
        </div>

        <h1>LEARN BY CREATING</h1>

        <p>
          You do not need to know everything before you begin.
          Start with what you want to create.
        </p>
      </section>

      <section
        className="academy-paths"
        aria-label="Blinkita Academy learning paths"
      >
        {academyPaths.map((path) => (
          <button
            key={path.id}
            type="button"
            className="academy-path-card"
          >
            <span className="academy-path-icon" aria-hidden="true">
              {path.icon}
            </span>

            <span className="academy-path-title">
              {path.title}
            </span>

            <span className="academy-path-description">
              {path.description}
            </span>
          </button>
        ))}
      </section>

      <section className="academy-principle">
        <div className="academy-principle-label">
          THE BLINKITA PRINCIPLE
        </div>

        <p>
          You do not learn a tool first.
          You learn what you are trying to create —
          and the right tools become part of the journey.
        </p>
      </section>
    </main>
  );
}
