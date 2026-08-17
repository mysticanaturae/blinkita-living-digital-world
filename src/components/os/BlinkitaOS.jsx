import React from "react";
import "./BlinkitaOS.css";

const dimensions = [
  {
    id: "creator",
    number: "01",
    title: "CREATOR DIMENSION™",
    question: "WHO CREATES?",
    text: "The human and the Creator are the starting point of the system.",
    route: "/world/creator",
    label: "EXPLORE CREATOR SPACE™"
  },
  {
    id: "world",
    number: "02",
    title: "WORLD DIMENSION™",
    question: "WHAT IS CREATED?",
    text: "Living Worlds™ give ideas identity, purpose, structure and a place to evolve.",
    route: "/world/living-worlds",
    label: "EXPLORE LIVING WORLDS™"
  },
  {
    id: "evolution",
    number: "03",
    title: "EVOLUTION DIMENSION™",
    question: "HOW DOES IT KEEP BECOMING?",
    text: "A living system learns, adapts, renews and continues becoming.",
    route: "/world/timeline",
    label: "EXPLORE EVOLUTION & TIME"
  }
];

const layers = [
  {
    number: "01",
    title: "CREATOR LAYER™",
    question: "WHO CREATES?",
    text: "Creator identity, space, vision, creative development and memory.",
    route: "/world/creator"
  },
  {
    number: "02",
    title: "WORLD LAYER™",
    question: "WHAT IS CREATED?",
    text: "Living World™ structure, identity, purpose, lifecycle and evolution.",
    route: "/world/living-worlds"
  },
  {
    number: "03",
    title: "JOURNEY LAYER™",
    question: "HOW DO WE MOVE?",
    text: "Discovery, progression, transformation pathways and meaningful experiences.",
    route: "/world/timeline"
  },
  {
    number: "04",
    title: "EXPERIENCE LAYER™",
    question: "HOW DO WE EXPERIENCE?",
    text: "Interaction, participation, meaning, reflection and transformation.",
    route: "/world/academy"
  },
  {
    number: "05",
    title: "KNOWLEDGE & MEMORY LAYER™",
    question: "WHAT IS REMEMBERED?",
    text: "Information, history, discoveries, learning, decisions and continuity.",
    route: "/world/living-memory"
  },
  {
    number: "06",
    title: "CONNECTION LAYER™",
    question: "WHAT CONNECTS?",
    text: "Relationships, networks, communities, collaboration and Living Network™.",
    route: "/world/community"
  },
  {
    number: "07",
    title: "VALUE LAYER™",
    question: "WHAT IS CONTRIBUTED?",
    text: "Contribution, exchange, participation models and sustainable ecosystems.",
    route: "/world/market"
  },
  {
    number: "08",
    title: "GOVERNANCE LAYER™",
    question: "WHAT PROTECTS THE SYSTEM?",
    text: "Trust, dignity, transparency, ethics and human sovereignty.",
    route: "/world/method"
  },
  {
    number: "09",
    title: "LEGACY LAYER™",
    question: "WHAT CONTINUES?",
    text: "Preservation, transmission and continuity beyond the original creator.",
    route: "/world/library"
  },
  {
    number: "10",
    title: "EVOLUTION LAYER™",
    question: "HOW DOES IT KEEP BECOMING?",
    text: "Learning, adaptation, renewal and continuous becoming.",
    route: "/world/timeline"
  }
];

const systems = [
  {
    title: "CORE ARCHITECTURE",
    text: "The structural foundation of BLINKITA OS™.",
    route: "/world/os"
  },
  {
    title: "CREATOR & WORLD",
    text: "The relationship between Creators™ and Living Worlds™.",
    route: "/world/creator"
  },
  {
    title: "EXPERIENCE",
    text: "How humans enter, navigate and experience Living Worlds™.",
    route: "/world/academy"
  },
  {
    title: "KNOWLEDGE & INTELLIGENCE",
    text: "How information becomes evolving understanding.",
    route: "/world/living-memory"
  },
  {
    title: "CONNECTION",
    text: "Relationships between people, creators and worlds.",
    route: "/world/community"
  },
  {
    title: "VALUE",
    text: "Contribution, participation and exchange.",
    route: "/world/market"
  },
  {
    title: "RESPONSIBILITY",
    text: "Governance, ethics, participation and accessibility.",
    route: "/world/method"
  },
  {
    title: "CONTINUITY & EVOLUTION",
    text: "How Living Systems™ continue through time.",
    route: "/world/timeline"
  }
];

const portals = [
  ["BLINKITA METHOD™", "/world/method"],
  ["BLINKITA OS™", "/world/os"],
  ["BLINKITA AI™", "/world/ai"],
  ["CREATOR SPACE™", "/world/creator"],
  ["WORLD BUILDER™", "/world/world-builder"],
  ["BLINKITA ACADEMY™", "/world/academy"],
  ["BLINKITA STUDIO™", "/world/studio"],
  ["LIVING WORLDS™", "/world/living-worlds"],
  ["LIVING MEMORY™", "/world/living-memory"],
  ["MARKET™", "/world/market"],
  ["TIMELINE™", "/world/timeline"],
  ["LIBRARY™", "/world/library"],
  ["COMMUNITY™", "/world/community"],
  ["BLINKITA ECOSYSTEM™", "/world/ecosystem"]
];

export default function BlinkitaOS() {
  return (
    <main className="blinkita-os">

      <section className="os-hero">
        <div className="os-kicker">BLINKITA OS™</div>

        <h1>THE LIVING OPERATING SYSTEM OF CREATION™</h1>

        <p className="os-lead">
          BLINKITA OS™ is the living operating system architecture designed
          to support the creation, development and evolution of Living Worlds™.
        </p>

        <p className="os-sublead">
          It is not only software. It is not only a digital platform.
          It is an architectural model where humans, ideas and systems
          can evolve together.
        </p>
      </section>

      <section className="os-creation-flow">
        <div className="os-section-label">THE ARCHITECTURE OF CREATION</div>

        <div className="os-flow">
          <span>HUMAN</span>
          <b>↓</b>
          <span>CREATOR™</span>
          <b>↓</b>
          <span>CREATOR SPACE™</span>
          <b>↓</b>
          <span>LIVING WORLD™</span>
          <b>↓</b>
          <span>JOURNEY™</span>
          <b>↓</b>
          <span>EXPERIENCE™</span>
          <b>↓</b>
          <span>KNOWLEDGE + MEMORY™</span>
          <b>↓</b>
          <span>CONNECTION™</span>
          <b>↓</b>
          <span>CONTRIBUTION™</span>
          <b>↓</b>
          <span>VALUE EXCHANGE™</span>
          <b>↓</b>
          <span>LEGACY™</span>
          <b>↓</b>
          <span>EVOLUTION™</span>
        </div>

        <p className="os-flow-statement">
          The system is designed around creation itself.
        </p>
      </section>

      <section className="os-dimensions">
        <div className="os-section-label">THREE FUNDAMENTAL DIMENSIONS</div>

        <div className="os-dimension-grid">
          {dimensions.map((item) => (
            <article className="os-dimension-card" key={item.id}>
              <div className="os-card-number">{item.number}</div>
              <h2>{item.title}</h2>
              <h3>{item.question}</h3>
              <p>{item.text}</p>

              <a href={item.route}>
                {item.label} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="os-layers">
        <div className="os-section-label">THE 10 LIVING OS LAYERS™</div>

        <div className="os-layer-grid">
          {layers.map((layer) => (
            <article className="os-layer-card" key={layer.number}>
              <div className="os-card-number">{layer.number}</div>

              <h2>{layer.title}</h2>

              <h3>{layer.question}</h3>

              <p>{layer.text}</p>

              <a href={layer.route}>
                EXPLORE →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="os-systems">
        <div className="os-section-label">SYSTEM ARCHITECTURE</div>

        <div className="os-system-grid">
          {systems.map((system) => (
            <a
              className="os-system-card"
              href={system.route}
              key={system.title}
            >
              <h2>{system.title}</h2>
              <p>{system.text}</p>
              <span>EXPLORE →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="os-philosophy">
        <div className="os-section-label">DEVELOPMENT PHILOSOPHY</div>

        <div className="os-philosophy-flow">
          <strong>ARCHITECTURE FIRST</strong>
          <span>↓</span>
          <strong>EXPERIENCE SECOND</strong>
          <span>↓</span>
          <strong>TECHNOLOGY THIRD</strong>
          <span>↓</span>
          <strong>EVOLUTION ALWAYS</strong>
        </div>

        <p>
          The architecture defines the purpose.
          The experience defines the relationship.
          Technology enables implementation.
          Evolution keeps the system alive.
        </p>
      </section>

      <section className="os-principles">
        <article>
          <div className="os-section-label">HUMAN-CENTERED PRINCIPLE™</div>
          <p>
            Technology should expand human possibility,
            not create unnecessary barriers.
          </p>
        </article>

        <article>
          <div className="os-section-label">HUMAN SOVEREIGNTY PRINCIPLE™</div>
          <p>
            BLINKITA OS™ may organize, remember, reveal patterns
            and suggest possibilities.
          </p>
          <p>
            It does not replace human judgment, define personal meaning,
            control decisions or remove responsibility.
          </p>
        </article>
      </section>

      <section className="os-portals">
        <div className="os-section-label">THE 14 LIVING WORLDS™</div>

        <p className="os-portals-intro">
          The OS is not a destination separated from the rest of BLINKITA.
          Its architecture becomes alive through the Worlds themselves.
        </p>

        <div className="os-portal-grid">
          {portals.map(([title, route]) => (
            <a
              href={route}
              className="os-portal-card"
              key={route}
            >
              {title}
              <span>→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="os-sovereignty">
        <div className="os-sovereignty-mark">✦</div>

        <h2>THE CREATOR™ REMAINS SOVEREIGN.</h2>

        <p>
          The system can support creation.
          It cannot replace the Creator.
        </p>
      </section>

    </main>
  );
}
