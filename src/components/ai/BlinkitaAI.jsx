import React, { useRef, useState } from "react";
import "./BlinkitaAI.css";
import { LivingIntelligenceConversation } from "../../core/intelligence/LivingIntelligenceConversation";
import { getWorldState } from "../../core/state/WorldState";

const aiModes = [
  {
    id: "ask",
    icon: "◈",
    title: "ASK",
    description: "Ask Blinkita AI anything.",
    question: "WHAT WOULD YOU LIKE TO KNOW?",
    placeholder:
      "Start with a question, curiosity or something you would like to understand...",
    button: "BEGIN WITH ASK",
    promptPrefix: ""
  },
  {
    id: "idea",
    icon: "✦",
    title: "IDEA",
    description: "Develop a thought, feeling or spark into an idea.",
    question: "WHAT WOULD YOU LIKE TO DEVELOP?",
    placeholder:
      "Start with a thought, feeling or spark...",
    button: "BEGIN WITH IDEA",
    promptPrefix:
      "Help me develop this thought, feeling or spark into an idea:\n\n"
  },
  {
    id: "create",
    icon: "✧",
    title: "CREATE",
    description: "Turn an idea into something real.",
    question: "WHAT WOULD YOU LIKE TO BRING INTO REALITY?",
    placeholder:
      "Start with an idea, project or possibility you would like to create...",
    button: "BEGIN WITH CREATE",
    promptPrefix:
      "Help me turn this idea into something real:\n\n"
  },
  {
    id: "reflect",
    icon: "◌",
    title: "REFLECT",
    description: "Look deeper at what you are creating.",
    question: "WHAT WOULD YOU LIKE TO SEE MORE DEEPLY?",
    placeholder:
      "Share what you are creating, experiencing or wondering about...",
    button: "BEGIN WITH REFLECT",
    promptPrefix:
      "Help me look deeper at what I am creating and see what I may not yet be seeing:\n\n"
  },
  {
    id: "remember",
    icon: "∞",
    title: "REMEMBER",
    description: "Bring forward what Blinkita already knows about your journey.",
    question: "WHAT WOULD YOU LIKE TO BRING BACK INTO AWARENESS?",
    placeholder:
      "Ask about something relevant to your journey, your world or what you have already created...",
    button: "BEGIN WITH REMEMBER",
    promptPrefix:
      "Bring forward what you already know that is relevant to my journey and this:\n\n"
  }
];

export default function BlinkitaAI() {

  const [message, setMessage] = useState("");
  const [activeMode, setActiveMode] = useState("ask");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [worldState, setWorldState] = useState(() => getWorldState());

  const questionSectionRef = useRef(null);


  const selectedMode =
    aiModes.find((mode) => mode.id === activeMode) || aiModes[0];


  const selectMode = (modeId) => {

    setActiveMode(modeId);
    setError("");
    setResponse("");

    requestAnimationFrame(() => {

      questionSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    });

  };


  const sendMessage = async () => {

    const cleanMessage = message.trim();

    if (!cleanMessage) {

      setError(
        "Begin with a question, idea, feeling or project."
      );

      return;

    }

    setError("");
    setResponse("");
    setLoading(true);

    const finalMessage =
      selectedMode.promptPrefix + cleanMessage;

    try {

      const result =
        await LivingIntelligenceConversation.send(
          finalMessage
        );

      if (!result?.ok) {

        throw new Error(
          result?.error ||
          "Living Intelligence could not respond."
        );

      }

      setResponse(
        result.response ||
        "Living Intelligence is listening."
      );

    } catch (err) {

      console.error(
        "Blinkita AI conversation error:",
        err
      );

      setError(
        err?.message ||
        "Living Intelligence could not respond."
      );

    } finally {

      setLoading(false);

    }

  };


  return (
    <main className="blinkita-ai">

      <section className="ai-header">

        <div className="ai-kicker">
          BLINKITA AI™
        </div>

        <h1>
          CREATE WITH INTELLIGENCE
        </h1>

        <p>
          You do not have to know the answer before you begin.
          Blinkita AI helps you discover, develop and create.
        </p>

      </section>


      <section
        className="ai-question"
        ref={questionSectionRef}
      >

        <div className="ai-question-label">
          {selectedMode.icon} {selectedMode.title}
        </div>

        <h2>
          {selectedMode.question}
        </h2>

        <textarea
          className="ai-input"
          value={message}
          onChange={(event) => {

            setMessage(event.target.value);
            setError("");

          }}
          placeholder={selectedMode.placeholder}
          rows={5}
          disabled={loading}
        />

        <button
          type="button"
          className="ai-start-button"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading
            ? "LIVING INTELLIGENCE IS LISTENING..."
            : selectedMode.button}
        </button>

        {error && (
          <div className="ai-error">
            {error}
          </div>
        )}

      </section>


      {(loading || response) && (
        <section className="ai-response">

          <div className="ai-response-label">
            MY LIVING INTELLIGENCE™
          </div>

          {loading ? (
            <p className="ai-response-loading">
              Listening...
            </p>
          ) : (
            <p className="ai-response-text">
              {response}
            </p>
          )}

        </section>
      )}


      <section
        className="ai-modes"
        aria-label="Blinkita AI modes"
      >

        {aiModes.map((mode) => (

          <button
            key={mode.id}
            type="button"
            className={
              `ai-mode-card ${
                activeMode === mode.id
                  ? "is-active"
                  : ""
              }`
            }
            onClick={() => selectMode(mode.id)}
            disabled={loading}
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


      <section className="ai-living-intelligence">

        <div className="ai-living-intelligence-label">
          MY LIVING INTELLIGENCE™
        </div>

        <p className="ai-living-intelligence-statement">
          It grows with you.
          It remembers what matters.
          It helps you see what is possible.
        </p>


        <div className="living-intelligence-panel">

          <div className="living-intelligence-panel-header">
            <span>CURRENT AWARENESS</span>
            <span>LEVEL {worldState?.intelligence?.level || 0}</span>
          </div>


          <div className="living-intelligence-grid">


            <div className="living-intelligence-item">

              <div className="living-intelligence-item-label">
                INTELLIGENCE
              </div>

              <div className="living-intelligence-item-value">
                Level {worldState?.intelligence?.level || 0}
              </div>

            </div>


            <div className="living-intelligence-item">

              <div className="living-intelligence-item-label">
                LIVING MEMORIES
              </div>

              <div className="living-intelligence-item-value">
                {worldState?.memory?.events?.length || 0}
              </div>

            </div>


            <div className="living-intelligence-item">

              <div className="living-intelligence-item-label">
                INSIGHTS
              </div>

              <div className="living-intelligence-item-value">
                {worldState?.intelligence?.insights?.length || 0}
              </div>

            </div>


            <div className="living-intelligence-item">

              <div className="living-intelligence-item-label">
                EVOLUTION
              </div>

              <div className="living-intelligence-item-value">
                {worldState?.evolution?.stage || "awakening"}
              </div>

            </div>


            <div className="living-intelligence-item">

              <div className="living-intelligence-item-label">
                JOURNEY
              </div>

              <div className="living-intelligence-item-value">
                {worldState?.journey?.stage || "arrival"}
              </div>

            </div>


            <div className="living-intelligence-item">

              <div className="living-intelligence-item-label">
                DISCOVERIES
              </div>

              <div className="living-intelligence-item-value">
                {worldState?.discovery?.knowledge || 0}
              </div>

            </div>


          </div>


          <div className="living-intelligence-insight">

            <div className="living-intelligence-item-label">
              RECENT INSIGHT
            </div>

            <p>
              {worldState?.intelligence?.insights?.length
                ? (
                    worldState.intelligence.insights[
                      worldState.intelligence.insights.length - 1
                    ]?.meaning ||
                    worldState.intelligence.insights[
                      worldState.intelligence.insights.length - 1
                    ]?.message ||
                    "A new insight has entered your Living World."
                  )
                : (
                    "Your Living Intelligence is beginning to learn your world."
                  )
              }
            </p>

          </div>


          <div className="living-intelligence-memory">

            <div className="living-intelligence-item-label">
              WHAT IT REMEMBERS
            </div>

            <p>
              {worldState?.memory?.events?.length
                ? `${worldState.memory.events.length} Living Memories are currently held by your world.`
                : "Nothing has been marked as a Living Memory yet."
              }
            </p>

          </div>


        </div>


        <section className="living-world-memory">

          <div className="living-world-memory-header">

            <div>

              <div className="living-world-memory-label">
                LIVING MEMORY™
              </div>

              <h2>
                WHAT MY WORLD REMEMBERS
              </h2>

            </div>

            <div className="living-world-memory-count">
              {worldState?.memory?.events?.length || 0}
              <span>MEMORIES</span>
            </div>

          </div>


          <p className="living-world-memory-intro">
            The important things your Living World™ has experienced,
            discovered and chosen to remember.
          </p>


          {worldState?.memory?.events?.length ? (

            <div className="living-world-memory-list">

              {[
                ...(worldState.memory.events || [])
              ]
                .slice()
                .reverse()
                .slice(0, 12)
                .map((memory, index) => (

                  <article
                    className="living-world-memory-item"
                    key={
                      memory.id ||
                      `${memory.type || "memory"}-${index}`
                    }
                  >

                    <div className="living-world-memory-item-top">

                      <span className="living-world-memory-type">
                        {String(
                          memory.type ||
                          "memory"
                        ).replaceAll("_", " ")}
                      </span>

                      <span className="living-world-memory-date">
                        {memory.createdAt
                          ? new Date(
                              memory.createdAt
                            ).toLocaleDateString()
                          : ""
                        }
                      </span>

                    </div>


                    <p className="living-world-memory-message">
                      {memory.message ||
                       memory.response ||
                       "Your Living World™ remembers this moment."
                      }
                    </p>


                    {memory.importance && (

                      <div className="living-world-memory-importance">

                        IMPORTANCE {memory.importance}

                      </div>

                    )}

                  </article>

                ))}

            </div>

          ) : (

            <div className="living-world-memory-empty">

              <div className="living-world-memory-empty-symbol">
                ∞
              </div>

              <p>
                Your Living World™ has not created
                a Living Memory™ yet.
              </p>

              <span>
                Important experiences, discoveries and
                transformations will appear here as your
                world evolves.
              </span>

            </div>

          )}


        </section>


        <p className="ai-living-intelligence-identity">
          I am you. You are me.
        </p>

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

