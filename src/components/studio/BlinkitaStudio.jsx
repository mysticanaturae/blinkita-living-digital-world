import React from "react";
import "./BlinkitaStudio.css";

const studioActions = [
  {
    id: "write",
    icon: "✍️",
    title: "WRITE",
    description: "Write books, stories, articles, posts, scripts and more."
  },
  {
    id: "pics",
    icon: "🖼️",
    title: "PICS",
    description: "Create images, visual identities, covers and artwork."
  },
  {
    id: "video",
    icon: "🎬",
    title: "VIDEO",
    description: "Create videos, reels, stories and moving worlds."
  },
  {
    id: "tools",
    icon: "🛠️",
    title: "TOOLS",
    description: "Use the creative tools you need — inside Blinkita Studio."
  }
];

export default function BlinkitaStudio() {
  return (
    <main className="blinkita-studio">
      <section className="studio-header">
        <div className="studio-kicker">BLINKITA STUDIO™</div>

        <h1>CREATE</h1>

        <p>
          Your creative space for turning ideas into living creations.
        </p>
      </section>

      <section className="studio-actions" aria-label="Studio creative spaces">
        {studioActions.map((action) => (
          <button
            key={action.id}
            type="button"
            className="studio-action-card"
          >
            <span className="studio-action-icon" aria-hidden="true">
              {action.icon}
            </span>

            <span className="studio-action-title">
              {action.title}
            </span>

            <span className="studio-action-description">
              {action.description}
            </span>
          </button>
        ))}
      </section>
    </main>
  );
}
