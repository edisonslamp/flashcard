import { FC, useEffect, useState } from "react";
import { Card } from "../model/types/Card";
import cls from "./FlashCard.module.scss";

interface FlashCardProps {
    className?: string;
    id?: string;
    term?: string;
    cards?: Card[];
    definition?: string;
    onClick?: () => void;
}

export const FlashCard: FC<FlashCardProps> = (props) => {
    const { term, definition, id, onClick } = props;

    const [cardId, setCardId] = useState(id);

    useEffect(() => {
        if (id) {
            setCardId(id);
        }
    }, [id]);

    return (
        <div className={cls.FlashCard} onClick={onClick}>
            <div className={cls.term}>
                <h2>{term}</h2>
            </div>
            <div className={cls.definition}>
                <p>{definition}</p>
            </div>
        </div>
    );
};
