import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlinkitaLivingWorlds.css";
import LivingIntelligencePanel from "../intelligence/LivingIntelligencePanel";

import { WorldRegistry } from "../../core/registry/WorldRegistry";
import { getWorldState } from "../../core/state/WorldState";


function getWorldStage(world) {

  return (
    world?.lifecycle?.id ||
    world?.status ||
    "seed"
  );

}


function getWorldIcon(world) {

  const stage = getWorldStage(world);

  const icons = {
    seed: "🌱",
    beginning: "🌱",
    growing: "🌿",
    alive: "✦",
    evolving: "∞",
    completed: "◈"
  };

  return icons[stage] || "✦";

}


function getWorldTitle(world) {

  return (
    world?.identity?.name ||
    world?.name ||
    "Unnamed World"
  );

}


function getWorldDescription(world) {

  if (world?.identity?.essence) {
    return world.identity.essence;
  }

  if (world?.lifecycle?.description) {
    return world.lifecycle.description;
  }

  return "A Living World™ created within the Blinkita ecosystem.";

}


function getWorldDate(world) {

  return (
    world?.record?.createdAt ||
    world?.createdAt ||
    world?.created ||
    null
  );

}


function getWorldLastActive(world) {

  return (
    world?.record?.lastVisited ||
    world?.record?.lastActive ||
    world?.lastVisited ||
    world?.lastActive ||
    null
  );

}


function formatDate(value) {

  if (!value) {
    return "—";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

}


function getWorldCover(world) {

  return (
    world?.visual?.cover ||
    world?.visual?.image ||
    world?.cover ||
    world?.image ||
    null
  );

}


export default function BlinkitaLivingWorlds() {

  const navigate = useNavigate();

  const [view, setView] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");

  const [worlds] = useState(() =>
    WorldRegistry.getWorlds()
  );

  const worldState = getWorldState();

  const intelligence =
    worldState?.intelligence || {};

  const intelligenceLevel =
    intelligence.level || 0;

  const latestInsight =
    intelligence.insights?.[
      intelligence.insights.length - 1
    ] || null;

  const latestMemory =
    intelligence.history?.[
      intelligence.history.length - 1
    ] || null;


  const filteredWorlds = useMemo(() => {

    let result = [...worlds];

    if (view === "recent") {

      result.sort((a, b) => {

        const dateA = new Date(
          getWorldLastActive(a) || getWorldDate(a) || 0
        ).getTime();

        const dateB = new Date(
          getWorldLastActive(b) || getWorldDate(b) || 0
        ).getTime();

        return dateB - dateA;

      });

    }

    if (stageFilter !== "all") {

      result = result.filter(
        (world) =>
          getWorldStage(world) === stageFilter
      );

    }

    return result;

  }, [worlds, view, stageFilter]);


  return (
    <main className="blinkita-living-worlds">

      <section className="living-worlds-header">

        <div className="living-worlds-kicker">
          BLINKITA LIVING WORLDS™
        </div>

        <h1>
          WORLDS THAT LIVE
        </h1>

        <p>
          A living world is more than a collection of pages.
          It is a space that can evolve, remember, respond and grow.
        </p>

      </section>


      {/* QUICK ENTRY */}

      <section className="living-worlds-quick-entry">

        <button
          type="button"
          className="living-world-quick-card"
          onClick={() => navigate("/world/studio")}
        >

          <div className="quick-world-visual">
            <span aria-hidden="true">
              🌱
            </span>
          </div>

          <div className="quick-world-content">

            <div className="quick-world-label">
              START NOW
            </div>

            <div className="quick-world-title">
              Unnamed World
            </div>

            <div className="quick-world-description">
              A new Living World begins as a possibility.
            </div>

            <div className="living-world-enter">
              ENTER WORLD →
            </div>

          </div>

        </button>

      </section>



      {/* LIVING INTELLIGENCE */}

      <LivingIntelligencePanel />


      {/* GALLERY */}

      <section className="living-worlds-library">

        <div className="living-worlds-library-header">

          <div>

            <div className="living-worlds-section-label">
              YOUR LIVING WORLDS
            </div>

            <h2>
              WORLD GALLERY
            </h2>

          </div>

          <button
            type="button"
            className="living-worlds-new-button"
            onClick={() =>
              navigate("/world/world-builder")
            }
          >
            + CREATE NEW WORLD
          </button>

        </div>


        {/* VIEW SELECTOR */}

        <div className="living-worlds-controls">

          <div className="living-worlds-view-tabs">

            <button
              type="button"
              className={
                view === "all"
                  ? "active"
                  : ""
              }
              onClick={() => setView("all")}
            >
              ALL WORLDS
            </button>

            <button
              type="button"
              className={
                view === "my"
                  ? "active"
                  : ""
              }
              onClick={() => setView("my")}
            >
              MY WORLDS
            </button>

            <button
              type="button"
              className={
                view === "recent"
                  ? "active"
                  : ""
              }
              onClick={() => setView("recent")}
            >
              RECENTLY VISITED
            </button>

          </div>


          <div className="living-worlds-stage-filters">

            <button
              type="button"
              className={
                stageFilter === "all"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStageFilter("all")
              }
            >
              ALL
            </button>

            <button
              type="button"
              className={
                stageFilter === "seed"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStageFilter("seed")
              }
            >
              🌱 SEED
            </button>

            <button
              type="button"
              className={
                stageFilter === "growing"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStageFilter("growing")
              }
            >
              🌿 GROWING
            </button>

            <button
              type="button"
              className={
                stageFilter === "alive"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStageFilter("alive")
              }
            >
              ✦ ALIVE
            </button>

            <button
              type="button"
              className={
                stageFilter === "evolving"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStageFilter("evolving")
              }
            >
              ∞ EVOLVING
            </button>

            <button
              type="button"
              className={
                stageFilter === "completed"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setStageFilter("completed")
              }
            >
              ◈ COMPLETED
            </button>

          </div>

        </div>


        {/* WORLD GRID */}

        {filteredWorlds.length === 0 ? (

          <div className="living-worlds-empty">

            <div className="living-worlds-empty-icon">
              🌱
            </div>

            <div className="living-worlds-empty-title">
              NO WORLDS FOUND
            </div>

            <div className="living-worlds-empty-text">
              Try another filter or begin a new Living World.
            </div>

            <button
              type="button"
              onClick={() =>
                navigate("/world/world-builder")
              }
            >
              BEGIN WITH WORLD BUILDER →
            </button>

          </div>

        ) : (

          <div className="living-world-gallery">

            {filteredWorlds.map((world) => {

              const cover = getWorldCover(world);
              const stage = getWorldStage(world);

              return (

                <article
                  key={world.id}
                  className="living-world-gallery-card"
                >

                  <button
                    type="button"
                    className="living-world-cover"
                    onClick={() =>
                      navigate(`/world/${world.id}`)
                    }
                    aria-label={`Enter ${getWorldTitle(world)}`}
                  >

                    {cover ? (

                      <img
                        src={cover}
                        alt=""
                      />

                    ) : (

                      <div className="living-world-placeholder">

                        <span>
                          {getWorldIcon(world)}
                        </span>

                        <small>
                          LIVING WORLD™
                        </small>

                      </div>

                    )}

                    <span className="living-world-stage-badge">
                      {getWorldIcon(world)}{" "}
                      {stage.toUpperCase()}
                    </span>

                  </button>


                  <div className="living-world-card-body">

                    <h3>
                      {getWorldTitle(world)}
                    </h3>

                    <p>
                      {getWorldDescription(world)}
                    </p>


                    <div className="living-world-meta">

                      <span>
                        CREATED
                        <strong>
                          {formatDate(
                            getWorldDate(world)
                          )}
                        </strong>
                      </span>

                      <span>
                        LAST ACTIVE
                        <strong>
                          {formatDate(
                            getWorldLastActive(world)
                          )}
                        </strong>
                      </span>

                    </div>


                    <button
                      type="button"
                      className="living-world-enter-button"
                      onClick={() =>
                        navigate(`/world/${world.id}`)
                      }
                    >
                      ENTER WORLD →
                    </button>

                  </div>

                </article>

              );

            })}

          </div>

        )}

      </section>


      {/* WORLD BUILDER */}

      <section className="living-worlds-create">

        <div className="living-worlds-create-label">
          SHAPE A NEW WORLD
        </div>

        <h2>
          YOUR WORLD CAN BEGIN WITH AN IDEA.
        </h2>

        <p>
          Start with a thought, a vision, a story or a question.
          Then give it a place to live.
        </p>

        <button
          type="button"
          className="living-worlds-create-button"
          onClick={() =>
            navigate("/world/world-builder")
          }
        >
          BEGIN WITH WORLD BUILDER →
        </button>

      </section>


      {/* PRINCIPLE */}

      <section className="living-worlds-principle">

        <div className="living-worlds-principle-label">
          THE BLINKITA LIVING WORLD PRINCIPLE
        </div>

        <p>
          A living world is not finished when it is published.
          It begins to live when someone enters it.
        </p>

      </section>

    </main>
  );

}




