import { Suspense } from "react";
import { Navbar } from "src/widgets";
import AppRouter from "./providers/AppRouter/ui/AppRouter";

export const App = () => {
    return (
        <Suspense fallback="wait...">
            <Navbar />
            <AppRouter />
        </Suspense>
    );
};
