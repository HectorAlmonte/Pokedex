import { createRoot } from "react-dom/client";
import React from "react";
import CounterApp from "./CounterApp";

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<CounterApp />);
