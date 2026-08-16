import React from "react";
import "./BlinkitaAI.css";

const aiModes = [
  {
    id: "ask",
    icon: "◈",
    title: "ASK",
    description: "Ask Blinkita AI anything."
  },
  {
    id: "idea",
    icon: "✦",
    title: "IDEA",
    description: "Develop a thought, feeling or spark into an idea."
  },
  {
    id: "create",
    icon: "✧",
    title: "CREATE",
    description: "Turn an idea into something real."
  },
  {
    id: "reflect",
    icon: "◌",
    title: "REFLECT",
    description: "Look deeper at what you are creating."
  },
  {
    id: "remember",
    icon: "∞",
    title: "REMEMBER",
    description: "Bring forward what Blinkita already knows about your journey."
  }
];

export default function BlinkitaAI() {
  return (
    <main className="blinkita-ai">

      <section className="ai-header">
        <div className="ai-kicker">
          BLINKITA AI™
        </div>

        <h1>CREATE WITH INTELLIGENCE</h1>

        <p>
          You do not have to know the answer before you begin.
          Blinkita AI helps you discover, develop and create.
        </p>
      </section>

      <section className="ai-question">

        <div className="ai-question-label">
          WHAT DO YOU WANT TO CREATE?
        </div>

        <textarea
          className="ai-input"
          placeholder="Start with an idea, a question, a feeling or a project..."
          rows={5}
        />

        <button
          type="button"
          className="ai-start-button"
        >
          BEGIN WITH BLINKITA AI
        </button>

      </section>

      <section
        className="ai-modes"
        aria-label="Blinkita AI modes"
      >
        {aiModes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            className="ai-mode-card"
          >
            <span
              className="ai-mode-icon"
              aria-hidden="true"
            >
              {mode.icon}
            </span>

            <span className="ai-mode-title">
              {mode.title}
            </span>

            <span className="ai-mode-description">
              {mode.description}
            </span>
          </button>
        ))}
      </section>

      <section className="ai-principle">

        <div className="ai-principle-label">
          THE BLINKITA AI PRINCIPLE
        </div>

        <p>
          AI is not here to replace your intelligence.
          It is here to help you see more of what is already possible.
        </p>

      </section>

    </main>
  );
}
