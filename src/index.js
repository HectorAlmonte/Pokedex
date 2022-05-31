import { createRoot } from "react-dom/client";
import React from "react";
import PokeApp from "./PokeApp";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<PokeApp />);
