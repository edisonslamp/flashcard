import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, FlashCard } from "src/entities/Flashcard";
import {
    addElement,
    deleteCardElement,
    getAllElements,
    Key,
    Store,
} from "src/shared/lib";
import { Button, Modal, ModalForm, SizeButton } from "src/shared/ui";
import { v4 as uuidv4 } from "uuid";
import cls from "./Cards.module.scss";

export const Cards = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const newCard = useRef<Card>({
        id: "",
        term: "",
        definition: "",
        setId: "",
    });
    const { id: setId } = useParams();

    useEffect(() => {
        if (setId) {
            getAllElements<Card>(Store.CARDS, Key.READONLY, {
                setId,
            }).then(setCards);
        }
    }, [setId]);

    // there's some bugs with multiple sumbit button
    const handleAddCard = async () => {
        if (setId) {
            const card: Card = {
                ...newCard.current,
                id: uuidv4(),

                setId,
            };
            setCards([...cards, card]);

            addElement(Store.CARDS, Key.READWRITE, card);
        }

        setIsModalOpened(false);
    };

    const handleDefinition = (e: ChangeEvent<HTMLInputElement>) => {
        newCard.current.definition = e.currentTarget.value;
    };

    const handleTerm = (e: ChangeEvent<HTMLInputElement>) => {
        newCard.current.term = e.currentTarget.value;
    };

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddCard();
        }
        if (e.key === "Escape") {
            setIsModalOpened(false);
        }
    };

    const onCloseCard = async (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        try {
            deleteCardElement(Store.CARDS, Key.READWRITE, id);
            setCards([...cards.filter((card) => id !== card.id)]);
        } catch (err) {
            throw new Error("wrong card ID");
        }
    };

    return (
        <div className="cards">
            <div className={cls.cardLayout}>
                <div className={cls.createSetBtn}>
                    <div className={cls.createBtn}>
                        <Modal
                            isOpen={isModalOpened}
                            onClose={() => setIsModalOpened((prev) => !prev)}
                        >
                            <ModalForm
                                handleSubmit={handleAddCard}
                                onChangeDefinition={handleDefinition}
                                onChangeTerm={handleTerm}
                                onKeyDown={handleEnterPress}
                            />
                        </Modal>
                        <Button
                            size={SizeButton.L}
                            type="button"
                            onClick={() => setIsModalOpened((prev) => !prev)}
                        >
                            Create card
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
                <div className={cls.cardList}>
                    {cards ? (
                        <ul>
                            {cards?.map((item, index) => (
                                <li key={index}>
                                    <FlashCard
                                        term={item.term}
                                        id={item.id}
                                        definition={item.definition}
                                        onCloseCard={onCloseCard}
                                    />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <FlashCard id={""} term="Add your first flashcard" />
                    )}
                </div>
            </div>
        </div>
    );
};
