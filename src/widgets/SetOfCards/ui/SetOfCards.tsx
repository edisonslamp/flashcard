import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FlashCard, Set } from "src/entities/Flashcard";
import cls from "./SetOfCards.module.scss";

interface SetOfCardsProps {
    sets: Set[];
    onCloseCard?: (e: React.MouseEvent, id: string) => void;
}

export const SetOfCards: FC<SetOfCardsProps> = ({ sets, onCloseCard }) => {
    return (
        <div className="card-set">
            <div className={cls.cardLayout}>
                <div className={cls.createSetBtn}></div>

                <div className={cls.SetOfCardsList}>
                    {sets ? (
                        <ul>
                            {sets?.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/set/${item.setId}`}
                                        style={{
                                            display: "contents",
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        <FlashCard
                                            term={item.title}
                                            id={item.setId}
                                            onCloseCard={(
                                                e: React.MouseEvent,
                                            ) => {
                                                onCloseCard?.(e, item.setId);
                                            }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <FlashCard
                            id={""}
                            term="Create your first set of cards"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
