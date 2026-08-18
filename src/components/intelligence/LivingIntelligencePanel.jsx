import React, { useState } from "react";
import {
  getWorldState,
  addWorldMemory
} from "../../core/state/WorldState";

import { LivingIntelligence } from "../../core/intelligence/LivingIntelligence";

import "./LivingIntelligencePanel.css";


export default function LivingIntelligencePanel() {

  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [remembered, setRemembered] = useState([]);

  const world = getWorldState();

  const latestMemory =
    world?.memory?.events?.[
      world.memory.events.length - 1
    ] || null;


  function handleAsk() {

    const question = message.trim();

    if (!question) {
      return;
    }


    const prepared =
      LivingIntelligence.prepareConversation(
        question
      );


    const response =
      "Living Intelligence is present. " +
      "Your question has been received and connected to this Living World™. " +
      "AI response connection will be activated when the intelligence service is connected.";


    const item = {

      id: Date.now(),

      question,

      response,

      timestamp:
        prepared.timestamp,

      remembered: false

    };


    setConversation(prev => [
      ...prev,
      item
    ]);

    setMessage("");

  }


  function handleRemember(item) {

    const memoryEvent = {

      type:
        "LIVING_INTELLIGENCE_MEMORY",

      question:
        item.question,

      response:
        item.response,

      timestamp:
        new Date().toISOString(),

      importance:
        1

    };


    addWorldMemory(
      memoryEvent
    );


    setRemembered(prev => [
      ...prev,
      item.id
    ]);

  }


  return (

    <section className="living-intelligence-panel">

      <div className="living-intelligence-panel-header">

        <div>

          <div className="living-intelligence-panel-label">
            LIVING INTELLIGENCE™
          </div>

          <h2>
            TALK TO YOUR WORLD
          </h2>

          <p>
            Ask, explore and reflect with the intelligence
            connected to your Living World™.
          </p>

        </div>

        <div className="living-intelligence-status">
          <span className="living-intelligence-status-dot" />
          <span>CONNECTED</span>
        </div>

      </div>


      <div className="living-intelligence-conversation">

        {conversation.length === 0 ? (

          <div className="living-intelligence-empty">

            <div className="living-intelligence-empty-icon">
              ✦
            </div>

            <div className="living-intelligence-empty-title">
              YOUR WORLD IS LISTENING
            </div>

            <div className="living-intelligence-empty-text">
              Begin a conversation. Important moments can
              later become part of your Living Memory™.
            </div>

          </div>

        ) : (

          conversation.map(item => (

            <div
              key={item.id}
              className="living-intelligence-message"
            >

              <div className="living-intelligence-question">

                <span>YOU</span>

                <p>
                  {item.question}
                </p>

              </div>


              <div className="living-intelligence-response">

                <span>LIVING INTELLIGENCE™</span>

                <p>
                  {item.response}
                </p>

              </div>


              <button
                type="button"
                className={
                  remembered.includes(item.id)
                    ? "remember-button remembered"
                    : "remember-button"
                }
                onClick={() =>
                  handleRemember(item)
                }
                disabled={
                  remembered.includes(item.id)
                }
              >

                {remembered.includes(item.id)
                  ? "✓ REMEMBERED"
                  : "♡ REMEMBER"}

              </button>

            </div>

          ))

        )}

      </div>


      <div className="living-intelligence-history">

        <div className="living-intelligence-history-label">
          LIVING MEMORY
        </div>

        {latestMemory ? (

          <div className="living-intelligence-history-item">

            <span>LAST REMEMBERED</span>

            <p>
              {latestMemory.response ||
               latestMemory.message ||
               latestMemory.question ||
               "A new memory has been formed."}
            </p>

          </div>

        ) : (

          <div className="living-intelligence-history-empty">
            No important moments have been remembered yet.
          </div>

        )}

      </div>


      <div className="living-intelligence-input-area">

        <textarea
          value={message}
          onChange={event =>
            setMessage(event.target.value)
          }
          onKeyDown={event => {

            if (
              event.key === "Enter" &&
              !event.shiftKey
            ) {

              event.preventDefault();

              handleAsk();

            }

          }}
          placeholder="Ask your Living Intelligence..."
          rows={3}
        />


        <button
          type="button"
          className="living-intelligence-ask"
          onClick={handleAsk}
        >
          ASK →
        </button>

      </div>


      <div className="living-intelligence-footer">

        <span>
          INTELLIGENCE → CONVERSATION → MEMORY → EVOLUTION
        </span>

      </div>

    </section>

  );

}
