import { FC } from "react";
import cls from "./FlashCard.module.scss";
interface FlashCardProps {
    className?: string;
}
export const FlashCard: FC<FlashCardProps> = () => {
    return (
        <div className={cls.FlashCard}>
            <h2 className="term">terms</h2>
        </div>
    );
};
