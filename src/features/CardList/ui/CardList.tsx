import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, FlashCard } from "src/entities/Flashcard";
import { getSetCards } from "src/shared/lib";
import cls from "./CardList.module.scss";

export const CardList = () => {
    const [cards, setCards] = useState<Card[] | undefined>([]);
    const { id: setId } = useParams();

    useEffect(() => {
        if (setId) {
            getSetCards(setId).then(setCards);
        }
    }, [setId]);

    return (
        <div className={cls.cardList}>
            {cards ? (
                <ul>
                    {cards?.map((item, index) => (
                        <li key={index}>
                            <FlashCard
                                term={item.term}
                                id={item.id}
                                definition={item.definition}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <FlashCard term="Create your first cardset" />
            )}
        </div>
    );
};
