import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button, FlashCard, SizeButton } from "src/shared/ui";
import { CardSet } from "src/widgets";
import cls from "./MainPage.module.scss";

const cardsMock: ReactNode[] = [<FlashCard />, <FlashCard />, <FlashCard />];

export const MainPage = () => {
    return (
        <div className="main-page">
            <div className={cls.cardLayout}>
                <div className={cls.createSetBtn}>
                    <Button size={SizeButton.L} type="button">
                        Create Set
                    </Button>
                    <Link to={"/about"}>
                        <Button>LINK</Button>
                    </Link>
                </div>
                <CardSet cards={cardsMock} />
            </div>
        </div>
    );
};
