import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import "./app/styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <div className="app">
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>,
);
