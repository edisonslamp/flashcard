import { FC, ReactNode, useState } from "react";
import cls from "./CardSet.module.scss";

interface CardSetProps {
    cards?: ReactNode[];
}

export const CardSet: FC<CardSetProps> = ({ cards = [] }) => {
    const [cardset, setCardset] = useState(cards);

    return (
        <div className={cls.CardSet}>
            <ul>
                {cardset.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
