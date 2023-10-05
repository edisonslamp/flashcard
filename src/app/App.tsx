import { CardSet, Navbar } from "src/widgets";
import "./styles/index.scss";

export const App = () => {
    return (
        <div className="app">
            <div className="content-page">
                <Navbar />
                <div className="card-layout">
                    <CardSet />
                </div>
            </div>
        </div>
    );
};
