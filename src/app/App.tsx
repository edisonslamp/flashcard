import { ReactNode } from "react";
import { Button, FlashCard } from "src/shared/ui";
import { SizeButton } from "src/shared/ui/Button/Button";
import { CardSet, Navbar } from "src/widgets";
import "./styles/index.scss";

export const App = () => {
    const cardsMock: ReactNode[] = [
        <FlashCard />,
        <FlashCard />,
        <FlashCard />,
    ];

    return (
        <div className="app">
            <Navbar />
            <div className="content-page">
                <div className="card-layout">
                    <div className="createSetBtn">
                        <Button size={SizeButton.L} type="button">
                            Create Set
                        </Button>
                    </div>
                    <CardSet cards={cardsMock} />
                </div>
            </div>
        </div>
    );
};
