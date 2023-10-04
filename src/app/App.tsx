import { FlashCard } from "src/shared/ui/FlashCard/FlashCard";
import { TestComp } from "src/shared/ui/testComp/testComp";
import "./styles/index.scss";

export const App = () => {
    return (
        <div className="app">
            <TestComp />
            <FlashCard />
        </div>
    );
};
