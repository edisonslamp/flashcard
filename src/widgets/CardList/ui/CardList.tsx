import { FC, useState } from "react";
import { Card, FlashCard } from "src/entities/Flashcard";
import cls from "./CardList.module.scss";

interface CardListProps {
    className?: string;
}

export const CardList: FC<CardListProps> = () => {
    const [cards, setCards] = useState<Card[]>([]);

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
