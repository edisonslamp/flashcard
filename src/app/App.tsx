import { createContext, Suspense } from "react";
import { Navbar } from "src/widgets/Navbar";
import AppRouter from "./providers/AppRouter/ui/AppRouter";

export enum Themes {
    BLACK = "black",
    GREEN = "green",
    PURPLE = "purple",
}

type ContextType = {
    theme: Themes;
    num: number;
};

const ContextDefaultValues: ContextType = {
    theme: Themes.BLACK,
    num: 100,
};

export const ThemeContext = createContext<ContextType>(ContextDefaultValues);

export const App = () => {
    return (
        <Suspense fallback="wait...">
            <ThemeContext.Provider value={{ theme: Themes.GREEN, num: 0 }}>
                <Navbar />
                <AppRouter />
            </ThemeContext.Provider>
        </Suspense>
    );
};
