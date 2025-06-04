import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReserveAgentId } from "./screens/ReserveAgentId";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ReserveAgentId />
  </StrictMode>,
);
