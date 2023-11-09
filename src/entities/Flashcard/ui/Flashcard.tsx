import { FC } from "react";
import cls from "./FlashCard.module.scss";

interface FlashCardProps {
    className?: string;
    term?: string;
    definition?: string;
    onClick?: () => void;
}

const mods: Record<string, boolean> = {
    definition: true,
};

console.log(mods);

export const FlashCard: FC<FlashCardProps> = (props) => {
    const { term, onClick, definition } = props;

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
