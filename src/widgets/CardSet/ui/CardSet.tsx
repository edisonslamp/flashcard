import { FC, ReactNode, useEffect, useState } from "react";
import { Card, FlashCard } from "src/entities/Flashcard";
import { getItem } from "src/shared/lib";
import cls from "./CardSet.module.scss";

interface CardSetProps {
    card?: ReactNode;
}

export const CardSet: FC<CardSetProps> = () => {
    const [cardset, setCardset] = useState<Card[]>([]);

    useEffect(() => {
        async function getCard() {
            const cards = await getItem("flashcardStore", "all");
            setCardset([...cardset, ...cards]);
        }
        getCard();
    }, []);

    return (
        <div className={cls.CardSet}>
            <ul>
                {cardset.map((item, index) => (
                    <li key={index}>
                        <FlashCard term={item.term} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
