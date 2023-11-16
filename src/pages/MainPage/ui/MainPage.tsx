import { useState } from "react";
import { Card } from "src/entities/Flashcard";
import { getSetCards } from "src/shared/lib";
import { CardSet } from "src/widgets/CardSet";
import { Cards } from "src/widgets/Cards";

export const MainPage = () => {
    const [cardArr, setCards] = useState<Card[]>([]);
    const [activateIndex, setActivateIndex] = useState(0);

    const onClick = async (id: string) => {
        const cards = await getSetCards(id);
        if (cards) setCards(cards.cards);
        setActivateIndex(1);
    };

    console.log(cardArr);

    return (
        <div className="main-page">
            <CardSet onClick={onClick} activateIndex={activateIndex} />
            <Cards cards={cardArr} activateIndex={activateIndex} />
        </div>
    );
};
