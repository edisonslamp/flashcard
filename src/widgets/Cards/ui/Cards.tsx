import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "src/entities/Flashcard";
import { CreateCard } from "src/features/CreateSetCard";
import { Button, Modal, SizeButton } from "src/shared/ui";
import { CardSetList } from "src/widgets";
import cls from "./Cards.module.scss";

interface CardsProps {
    activateIndex: number;
    cards?: Card[];
}

export const Cards: FC<CardsProps> = ({ cards, activateIndex }) => {
    const [isCardSetOpen, setIsCardSetOpen] = useState(false);

    const handleClose = () => {
        setIsCardSetOpen((prev) => !prev);
    };

    if (activateIndex === 1) {
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
                    <CardSetList
                        cards={cards}
                        onClick={() => console.log("click on cards comp")}
                    />
                </div>
            </div>
        );
    }
};
