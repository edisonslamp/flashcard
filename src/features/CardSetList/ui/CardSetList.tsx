import { FC } from "react";
import { Card, FlashCard, Set } from "src/entities/Flashcard";
import cls from "./CardSetList.module.scss";

interface CardSetListProps {
    cardSet?: Set[];
    cards?: Card[];
    onClick?: (id: string) => void;
}

export const CardSetList: FC<CardSetListProps> = ({
    cardSet,
    onClick,
    cards,
}) => {
    if (cards?.[0]) {
        console.log("CARD SECTION");
        return (
            <div className={cls.cardSetList}>
                <ul>
                    {cards?.map((item, index) => (
                        <li key={index}>
                            {/* <Link
                                to={`/sets`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            > */}
                            <FlashCard
                                term={item.term}
                                id={item.id}
                                definition={item.definition}
                                // onClick={() => onClick?.(item.id)}
                            />
                            {/* </Link> */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    console.log("SETS SECTION");
    return (
        <div className={cls.cardSetList}>
            {cardSet?.[0] ? (
                <ul>
                    {cardSet?.map((item, index) => (
                        <li key={index}>
                            {/* <Link
                                to={`/sets`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            > */}
                            <FlashCard
                                term={item.title}
                                id={item.id}
                                onClick={() => onClick?.(item.id)}
                            />
                            {/* </Link> */}
                        </li>
                    ))}
                </ul>
            ) : (
                <FlashCard term="Create your first cardset" />
            )}
        </div>
    );
};
