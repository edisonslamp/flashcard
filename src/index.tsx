import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import "./app/styles/index.scss";
import initDB from "./shared/lib/db";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// initialize database
initDB();

// render app
root.render(
    <div className="app">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>,
);
