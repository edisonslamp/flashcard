import { FC, FormEvent, useRef } from "react";
import { Set } from "src/entities/Flashcard";
import { addSet, classNames } from "src/shared/lib";
import { Input } from "src/shared/ui";
import { v4 as uuidv4 } from "uuid";
import cls from "./CreateCard.module.scss";

interface CreateCardProps {
    className?: string;
    onClose: () => void;
}
export const CreateCard: FC<CreateCardProps> = ({ className, onClose }) => {
    const title = useRef<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const setCard: Set = { id: uuidv4(), title: title.current, cards: [] };
        const res = await addSet(setCard);
        return res;
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        title.current = e.currentTarget.value;
    };

    return (
        <div className={classNames(cls.CreateCard, {}, [className as string])}>
            <form onSubmit={handleSubmit} className="#myform">
                <label id="card-form">Set</label>
                <br />

                <Input
                    className=""
                    placeholder="type terms here"
                    onChange={handleOnChange}
                    onClick={onClose}
                />
                <br />
            </form>
        </div>
    );
};
