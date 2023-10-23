import { FC } from "react";
import { Card, FlashCard } from "src/entities/Flashcard";
import cls from "./CardSet.module.scss";

interface CardSetProps {
    cards?: Card[];
}

export const CardSet: FC<CardSetProps> = ({ cards }) => {
    return (
        <div className={cls.CardSet}>
            <ul>
                {cards &&
                    cards.map((item, index) => (
                        <li key={index}>
                            <FlashCard term={item.term} />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
