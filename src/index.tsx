import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./app/styles/index.scss";

import { Navbar } from "./widgets";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <div className="app">
        <Navbar />
        <App />
    </div>,
);
