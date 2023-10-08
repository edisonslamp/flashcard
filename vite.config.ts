import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            include: "**/*.tsx",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".css"],
        alias: {
            src: "/src",
        },
    },
    server: {
        port: 3000,
    },
    base: "http://localhost:3000/",
});
