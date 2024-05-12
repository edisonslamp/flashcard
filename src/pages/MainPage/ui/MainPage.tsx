import { useEffect, useRef, useState } from "react";
import { Set } from "src/entities/Flashcard";
import { classNames } from "src/shared/lib";
import {
    addElement,
    deleteSetElement,
    getAllElements,
    Key,
    Store,
} from "src/shared/lib/db/actions";
import { Input } from "src/shared/ui";
import { SetOfCards } from "src/widgets/SetOfCards";
import { v4 as uuidv4 } from "uuid";
import cls from "./MainPage.module.scss";

export const MainPage = () => {
    const title = useRef("");
    const [cardSet, setCardSet] = useState<Set[]>([]);

    useEffect(() => {
        getAllElements<Set>(Store.SETS, Key.READONLY).then(setCardSet);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        title.current = e.currentTarget.value;
    };

    const handleClick = async () => {
        if (title.current) {
            const newSet: Set = { setId: uuidv4(), title: title.current };

            addElement(Store.SETS, Key.READWRITE, newSet);
            setCardSet([...cardSet, newSet]);

            title.current = "";
        }
    };

    const onCloseCard = async (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        try {
            deleteSetElement(Store.SETS, Key.READWRITE, id);
            setCardSet([...cardSet.filter((card) => id !== card.setId)]);
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
