import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./BlinkitaGenesis.css";

export default function BlinkitaGenesis() {

    const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {

            navigate("/ecosystem");

        }, 5000);

        return () => clearTimeout(timer);

    }, [navigate]);


    return (

        <div className="blinkita-genesis">

            <div className="genesis-light">

                <img
                    src="/portal/icons/master_brand_icons/blinkita-ecosystem-clean.png"
                    alt="BLINKITA ECOSYSTEM™"
                    className="ecosystem-genesis-icon"
                />

            </div>

        </div>

    );

}
