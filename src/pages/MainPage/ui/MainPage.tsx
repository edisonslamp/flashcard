import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Button, FlashCard, Modal, SizeButton } from "src/shared/ui";
import { CardSet } from "src/widgets";
import cls from "./MainPage.module.scss";

const cardsMock: ReactNode[] = [<FlashCard />, <FlashCard />, <FlashCard />];

export const MainPage = () => {
    const [isCardSetOpen, setIsCardSetOpen] = useState(false);

    const handleClose = () => {
        setIsCardSetOpen((prev) => !prev);
    };

    return (
        <div className="main-page">
            <Modal isOpen={isCardSetOpen} onClose={handleClose} />
            <div className={cls.cardLayout}>
                <div className={cls.createSetBtn}>
                    <Button
                        size={SizeButton.L}
                        type="button"
                        onClick={handleClose}
                    >
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
