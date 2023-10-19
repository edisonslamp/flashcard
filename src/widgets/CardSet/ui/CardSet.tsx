import { FC, ReactNode, useState } from "react";
import cls from "./CardSet.module.scss";

interface CardSetProps {
    card?: ReactNode;
}

export const CardSet: FC<CardSetProps> = ({ card }) => {
    const [cardset, setCardset] = useState<ReactNode[]>([]);

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
