import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, FlashCard } from "src/entities/Flashcard";
import { getSetCards } from "src/shared/lib";
import cls from "./CardList.module.scss";

export const CardList = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const { id: setId } = useParams();

    const fetchCards = async (id: string) => {
        try {
            const set = await getSetCards(id);
            const cards = set?.cards;
            return cards;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (setId) {
            fetchCards(setId).then(setCards); // need to fix it
        }
    }, [setId]);

    return (
        <div className={cls.cardList}>
            {cards?.[0] ? (
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
