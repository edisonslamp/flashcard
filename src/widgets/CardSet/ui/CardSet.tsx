import { FlashCard } from "src/shared/ui";
import cls from "./CardSet.module.scss";

export const CardSet = () => {
    return (
        <div className={cls.cardSet}>
            <FlashCard />
            <FlashCard />
            <FlashCard />
        </div>
    );
};
