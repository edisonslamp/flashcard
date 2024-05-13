import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            include: "**/*.tsx",
        }),
        vercel(),
    ],
    vercel: {},
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
    appType: "spa",
});
