import { FC, useCallback, useEffect, useState } from "react";
import { Card, FlashCard } from "src/entities/Flashcard";
import { getItem } from "src/shared/lib";
import cls from "./CardList.module.scss";

interface CardListProps {
    className?: string;
}

export const CardList: FC<CardListProps> = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const fetchCards = useCallback(async () => {
        const card = await getItem("flashcardStore", "all");
        setCards([...card]);
    }, []);

    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

    return (
        <div className={cls.CardList}>
            <ul>
                {cards.map((item, index) => (
                    <li key={index}>
                        <FlashCard
                            term={item.term}
                            definition={item.definition}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
