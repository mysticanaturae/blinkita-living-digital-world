import { useNavigate } from "react-router-dom";

import "./BlinkitaGenesis.css";

export default function BlinkitaGenesis() {

    const navigate = useNavigate();

    function enterEcosystem() {
        navigate("/ecosystem");
    }

    return (

        <main className="blinkita-genesis">

            <div className="genesis-background" />

            <div className="genesis-overlay" />

            <section className="genesis-content">

                <div className="genesis-kicker">
                    BLINKITA OS™
                </div>

                <h1>
                    ONE VISION.<br />
                    ONE ECOSYSTEM.<br />
                    INFINITE WORLDS.
                </h1>

                <p className="genesis-lead">
                    Imagine having everything you need to create,
                    explore, remember and evolve in one living
                    digital ecosystem.
                </p>

                <p className="genesis-memory">
                    Remember what you create.<br />
                    Discover what wants to become next.
                </p>

                <button
                    type="button"
                    className="genesis-enter"
                    onClick={enterEcosystem}
                >
                    ENTER THE ECOSYSTEM
                </button>

            </section>

        </main>

    );

}
