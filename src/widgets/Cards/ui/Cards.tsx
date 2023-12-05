import { useState } from "react";
import { Link } from "react-router-dom";
import { CardList } from "src/features/CardList";
import { CreateCard } from "src/features/CreateSetCard";
import { Button, Modal, SizeButton } from "src/shared/ui";
import cls from "./Cards.module.scss";

export const Cards = () => {
    const [isCardSetOpen, setIsCardSetOpen] = useState(false);

    const handleClose = () => {
        setIsCardSetOpen((prev) => !prev);
    };

    return (
        <div className="cards">
            <Modal isOpen={isCardSetOpen} onClose={handleClose}>
                <CreateCard onClose={handleClose} />
            </Modal>
            <div className={cls.cardLayout}>
                <div className={cls.createSetBtn}>
                    <div className={cls.createBtn}>
                        <Button
                            size={SizeButton.L}
                            type="button"
                            onClick={handleClose}
                        >
                            Add card
                        </Button>
                    </div>

                    <div className={cls.backBtn}>
                        <Link to={"/"}>
                            <Button size={SizeButton.M} type="button">
                                Back to sets
                            </Button>
                        </Link>
                    </div>
                </div>
                <CardList />
            </div>
        </div>
    );
};
