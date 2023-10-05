import { FlashCard } from "src/shared/ui";
import cls from "./CardSet.module.scss";

export const CardSet = () => {
    return (
        <div className={cls.CardSet}>
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
        </div>
    );
};
