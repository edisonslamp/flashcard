import { FC } from "react";
import cls from "./CardSet.module.scss";
interface CardSetProps {
    className?: string;
}
export const CardSet: FC<CardSetProps> = ({ className }) => {
    return <div className={classNames(cls.CardSet, {}, [className])}></div>;
};
