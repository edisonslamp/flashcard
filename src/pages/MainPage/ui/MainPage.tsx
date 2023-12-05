import { useState } from "react";
import { Card } from "src/entities/Flashcard";
import { getSetCards } from "src/shared/lib";
import { CardSet } from "src/widgets/CardSet";

export const MainPage = () => {
    const [cardArr, setCards] = useState<Card[]>([]);

    const getCards = async (id: string) => {
        const cards = await getSetCards(id);
        if (cards) setCards(cards.cards);
    };

    console.log(cardArr);

    return (
        <div className="main-page">
            <CardSet getCards={getCards} />
        </div>
    );
};
