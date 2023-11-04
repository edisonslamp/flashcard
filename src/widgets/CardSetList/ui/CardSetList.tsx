import { FC, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, FlashCard } from "src/entities/Flashcard";
import { getItem } from "src/shared/lib";
import cls from "./CardSetList.module.scss";

interface CardSetListProps {
    card?: Card[];
    fetchCards: () => void;
}

export const CardSetList: FC<CardSetListProps> = ({ fetchCards }) => {
    const [cards, setCards] = useState<Card[]>([]);

    fetchCards = useCallback(async () => {
        const card = await getItem("flashcardStore", "all");
        setCards([...card]);
    }, []);

    useEffect(() => {
        fetchCards();
        console.log(cards);
    }, [fetchCards]);

    return (
        <div className={cls.cardSetList}>
            {cards[0] ? (
                <ul>
                    {cards.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={"/mySet"}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <FlashCard
                                    term={item.term}
                                    onClick={fetchCards}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <FlashCard term="Create your first cardset" />
            )}
        </div>
    );
};
