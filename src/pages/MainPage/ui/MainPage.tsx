import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    CreateCard,
    FlashCard,
    Modal,
    SizeButton,
} from "src/shared/ui";
import { CardSet } from "src/widgets";
import cls from "./MainPage.module.scss";

export const MainPage = () => {
    const [isCardSetOpen, setIsCardSetOpen] = useState(false);

    const handleClose = () => {
        setIsCardSetOpen((prev) => !prev);
    };

    return (
        <div className="main-page">
            <Modal isOpen={isCardSetOpen} onClose={handleClose}>
                <CreateCard onClose={handleClose} />
            </Modal>
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
                <CardSet card={[<FlashCard term="test" />]} />
            </div>
        </div>
    );
};
