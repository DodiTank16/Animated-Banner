import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeroBanner from "./HeroBanner.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <HeroBanner /> */}
    {/* <p className="mt-5 text-center text-4xl font-bold text-[#91C4C3]">
      ⚡️Replicated by Dodi Tank⚡️
    </p> */}
  </StrictMode>
);
