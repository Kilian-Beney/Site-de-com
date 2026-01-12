import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Hero } from "./screens/Hero";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Hero />
  </StrictMode>,
);
