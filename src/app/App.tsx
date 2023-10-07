import { Button } from "src/shared/ui";
import { SizeButton } from "src/shared/ui/Button/Button";
import { CardSet, Navbar } from "src/widgets";
import "./styles/index.scss";

export const App = () => {
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
                    <CardSet />
                </div>
            </div>
        </div>
    );
};
