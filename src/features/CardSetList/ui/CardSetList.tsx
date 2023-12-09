import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FlashCard, Set } from "src/entities/Flashcard";
import { deleteSet, getSet } from "src/shared/lib";
import cls from "./CardSetList.module.scss";

export const CardSetList = () => {
    const [cardSet, setCardSet] = useState<Set[] | undefined>([]);

    const handleOnCloseCard = useCallback(
        async (e: React.MouseEvent, id: string) => {
            e.preventDefault();
            await deleteSet(id);
        },
        [],
    );

    useEffect(() => {
        getSet().then(setCardSet);
    }, []);

    return (
        <div className={cls.cardSetList}>
            {cardSet ? (
                <ul>
                    {cardSet?.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={`/set/${item.id}`}
                                style={{
                                    display: "contents",
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <FlashCard
                                    term={item.title}
                                    id={item.id}
                                    onCloseCard={handleOnCloseCard}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <FlashCard id={""} term="Create your first cardset" />
            )}
        </div>
    );
};
