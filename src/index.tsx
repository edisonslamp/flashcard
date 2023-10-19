import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./app/styles/index.scss";
import { initDB } from "./shared/lib";
import { Navbar } from "./widgets";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// initialize IndexedDB on the client side
initDB();

root.render(
    <div className="app">
        <Navbar />
        <App />
    </div>,
);
