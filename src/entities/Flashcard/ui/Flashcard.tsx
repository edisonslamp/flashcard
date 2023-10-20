import { FC } from "react";
import cls from "./FlashCard.module.scss";

interface FlashCardProps {
    className?: string;
    term?: string;
    definition?: string;
}
export const FlashCard: FC<FlashCardProps> = ({ term }) => {
    return (
        <div className={cls.FlashCard}>
            <h2 className="term">{term}</h2>
        </div>
    );
};
