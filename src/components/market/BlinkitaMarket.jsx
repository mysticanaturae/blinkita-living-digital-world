import React from "react";
import "./BlinkitaMarket.css";

const marketPaths = [
  {
    id: "buy",
    icon: "✦",
    title: "I WANT TO BUY",
    description: "Discover creations, products, experiences and possibilities."
  },
  {
    id: "sell",
    icon: "◈",
    title: "I WANT TO SELL",
    description: "Bring something you have created into the world."
  },
  {
    id: "offer",
    icon: "✧",
    title: "I WANT TO OFFER",
    description: "Share your knowledge, skills, services or experiences."
  },
  {
    id: "discover",
    icon: "◌",
    title: "I WANT TO DISCOVER",
    description: "Explore what other creators are bringing into the living world."
  },
  {
    id: "support",
    icon: "♡",
    title: "I WANT TO SUPPORT",
    description: "Support a creation, creator, project or possibility you believe in."
  },
  {
    id: "value",
    icon: "∞",
    title: "I WANT TO CREATE VALUE",
    description: "Explore how your ideas can become meaningful value for others."
  }
];

export default function BlinkitaMarket() {
  return (
    <main className="blinkita-market">

      <section className="market-header">
        <div className="market-kicker">
          BLINKITA MARKET™
        </div>

        <h1>BRING YOUR CREATION INTO THE WORLD</h1>

        <p>
          A living marketplace for creations, knowledge,
          experiences, services and possibilities.
        </p>
      </section>

      <section
        className="market-paths"
        aria-label="Blinkita Market paths"
      >
        {marketPaths.map((path) => (
          <button
            key={path.id}
            type="button"
            className="market-path-card"
          >
            <span
              className="market-path-icon"
              aria-hidden="true"
            >
              {path.icon}
            </span>

            <span className="market-path-title">
              {path.title}
            </span>

            <span className="market-path-description">
              {path.description}
            </span>
          </button>
        ))}
      </section>

      <section className="market-principle">
        <div className="market-principle-label">
          THE BLINKITA MARKET PRINCIPLE
        </div>

        <p>
          A market is more than a place where things are exchanged.
          It is a place where value finds connection.
        </p>
      </section>

    </main>
  );
}
