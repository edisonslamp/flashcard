import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, FlashCard, Set } from "src/entities/Flashcard";
import cls from "./CardSetList.module.scss";

interface CardSetListProps {
    cardSet?: Set[];
    cards?: Card[];
    getCards?: (id: string) => void;
}

export const CardSetList: FC<CardSetListProps> = ({ cardSet, getCards }) => {
    return (
        <div className={cls.cardSetList}>
            {cardSet?.[0] ? (
                <ul>
                    {cardSet?.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={`/sets/${item.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <FlashCard
                                    term={item.title}
                                    id={item.id}
                                    getCards={() => getCards?.(item.id)}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <FlashCard term="Create your first cardset" />
            )}
        </div>
    );
};
