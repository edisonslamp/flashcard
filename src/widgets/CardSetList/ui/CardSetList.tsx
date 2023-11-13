import { useEffect, useState } from "react";
import { Card, FlashCard, Set } from "src/entities/Flashcard";
import { getSet, getSetCards } from "src/shared/lib";
import cls from "./CardSetList.module.scss";

export const CardSetList = () => {
    const [cardDesk, setCardDesk] = useState<Set[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [single, setSingle] = useState<Card[]>([]);

    useEffect(() => {
        const fetchSet = async () => {
            const setData = await getSet();
            if (setData) {
                setCardDesk(setData);
            }
        };
        fetchSet();
    }, []);

    const getCards = async (id: string) => {
        const set = await getSetCards(id);
        if (set) {
            setSingle(set.cards);
        }
        setIsClicked((prev) => !prev);
    };

    console.log(single);
    if (isClicked) {
        return (
            <div className={cls.cardSetList}>
                <ul>
                    {single.map((item, index) => (
                        <li key={index}>
                            {/* <Link
                                    to={`/`}
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                > */}
                            <FlashCard
                                term={item.term}
                                definition={item.definition}
                                id={item.id}
                            />
                            {/* </Link> */}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className={cls.cardSetList}>
            {cardDesk[0] ? (
                <ul>
                    {cardDesk.map((item, index) => (
                        <li key={index}>
                            {/* <Link
                                to={`/`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            > */}
                            <FlashCard
                                term={item.title}
                                id={item.id}
                                onClick={() => getCards(item.id)}
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
