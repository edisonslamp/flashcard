import { useEffect, useState } from "react";
import { Set } from "src/entities/Flashcard";
import { CreateCard } from "src/features/CreateSetCard";
import { getSet } from "src/shared/lib";
import { Modal } from "src/shared/ui";
import { CardSet } from "src/widgets/CardSet";

export const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [cardSet, setCardSet] = useState<Set[]>([]);

    const handleClose = () => {
        setIsModalOpen((prev) => !prev);
    };

    useEffect(() => {
        getSet().then((cards: any) => {
            setCardSet(cards);
        });
    }, []);

    return (
        <div className="main-page">
            <Modal isOpen={isModalOpen} handleClose={handleClose}>
                <CreateCard onClose={handleClose} />
            </Modal>
            <CardSet handleClose={handleClose} cardSet={cardSet} />
        </div>
    );
};
