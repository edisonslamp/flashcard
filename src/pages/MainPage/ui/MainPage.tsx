import { useEffect, useRef, useState } from "react";
import { Set } from "src/entities/Flashcard";
import { addSet, classNames, deleteSet, getSet } from "src/shared/lib";
import { Input } from "src/shared/ui";
import { SetOfCards } from "src/widgets/SetOfCards";
import { v4 as uuidv4 } from "uuid";
import cls from "./MainPage.module.scss";

export const MainPage = () => {
    const title = useRef("");
    const [cardSet, setCardSet] = useState<Set[]>([]);

    useEffect(() => {
        getSet().then((cards: Set[] | undefined) => {
            if (cards) {
                setCardSet(cards);
            }
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        title.current = e.currentTarget.value;
    };

    const handleClick = async () => {
        if (title.current) {
            const set = { id: uuidv4(), title: title.current };
            const res = await addSet(set);
            if (res) {
                setCardSet([...cardSet, res.data]);
            }
            title.current = "";
        }
    };

    const onCloseCard = async (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        try {
            await deleteSet(id);
            setCardSet([...cardSet.filter((card) => id !== card.id)]);
        } catch (err) {
            throw new Error("wrong card ID");
        }
    };

    return (
        <div className="main-page">
            <div className={classNames(cls.input_layout, {}, [])}>
                <Input onClick={handleClick} onChange={handleChange} />
            </div>
            <SetOfCards sets={cardSet} onCloseCard={onCloseCard} />
        </div>
    );
};
