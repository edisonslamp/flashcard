import { FC } from "react";
import cls from "./FlashCard.module.scss";

interface FlashCardProps {
    className?: string;
    term?: string;
    definition?: string;
    onClick?: () => void;
}
export const FlashCard: FC<FlashCardProps> = (props) => {
    const { term, onClick } = props;

    return (
        <div className={cls.FlashCard} onClick={onClick}>
            <h2 className="term">{term}</h2>
        </div>
    );
};
