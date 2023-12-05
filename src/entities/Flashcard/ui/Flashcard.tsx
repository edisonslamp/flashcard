import { FC, useState } from "react";
import { Card } from "../model/types/Card";
import cls from "./FlashCard.module.scss";

interface FlashCardProps {
    className?: string;
    id?: string;
    term?: string;
    cards?: Card[];
    definition?: string;
    getCards?: () => void;
}

export const FlashCard: FC<FlashCardProps> = (props) => {
    const { term, definition } = props;
    const [isShow, setIsShow] = useState(false);

    const handleOnClick = () => {
        setIsShow((prev) => !prev);
        console.log(isShow);
    };

    return (
        <div className={cls.FlashCard} onClick={handleOnClick}>
            <div className={cls.term}>
                <h2>{term}</h2>
            </div>
            <div className={cls.definition}>
                {isShow && <p>{definition}</p>}
            </div>
        </div>
    );
};
