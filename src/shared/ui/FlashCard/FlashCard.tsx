import { FC, useState } from "react";
import cls from "./FlashCard.module.scss";

interface FlashCardProps {
    className?: string;
}
export const FlashCard: FC<FlashCardProps> = () => {
    const [term, setTerm] = useState(0);
    const onClick = () => {
        setTerm((prev) => prev + 1);
    };

    return (
        <div className={cls.FlashCard} onClick={onClick}>
            <h2 className="term">{term}</h2>
        </div>
    );
};
