import { FC } from "react";
import { Card, FlashCard } from "src/entities/Flashcard";
import cls from "./CardSet.module.scss";

interface CardSetProps {
    cards: Card[];
}

export const CardSet: FC<CardSetProps> = ({ cards }) => {
    return (
        <div className={cls.CardSet}>
            <ul>
                {cards[0] ? (
                    cards.map((item, index) => (
                        <li key={index}>
                            <FlashCard term={item.term} />
                        </li>
                    ))
                ) : (
                    <li>
                        <FlashCard term={"Add your first card"} />
                    </li>
                )}
            </ul>
        </div>
    );
};
