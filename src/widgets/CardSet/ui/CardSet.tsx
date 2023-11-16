import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Set } from "src/entities/Flashcard";
import { CreateCard } from "src/features/CreateSetCard";
import { getSet } from "src/shared/lib";
import { Button, Modal, SizeButton } from "src/shared/ui";
import { CardSetList } from "src/widgets";
import cls from "./CardSet.module.scss";

interface CardSetProps {
    activateIndex: number;
    onClick?: (id: string) => void;
}

export const CardSet: FC<CardSetProps> = ({ onClick, activateIndex }) => {
    const [isCardSetOpen, setIsCardSetOpen] = useState(false);
    const [cardSet, setCardSet] = useState<Set[]>([]);

    const handleClose = () => {
        setIsCardSetOpen((prev) => !prev);
    };

    useEffect(() => {
        const fetchSet = async () => {
            const setData = await getSet();
            if (setData) {
                setCardSet(setData);
            }
        };
        fetchSet();
    }, []);

    if (activateIndex === 0) {
        return (
            <div className="card-set">
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
                                Create Set
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
                    <CardSetList cardSet={cardSet} onClick={onClick} />
                </div>
            </div>
        );
    }
};
