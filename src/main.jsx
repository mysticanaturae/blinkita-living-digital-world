import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./styles/colors.css";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/spacing.css";
import "./styles/living-ui.css";
import "./styles/world-builder.css";

import App from './App.jsx'

import { initializeSystems } from "./core/SystemInitializer";

initializeSystems();

createRoot(document.getElementById('root')).render(

    <StrictMode>

        <App />

    </StrictMode>

)