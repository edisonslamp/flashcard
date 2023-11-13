import { FC, FormEvent, useState } from "react";
import { Set } from "src/entities/Flashcard";
import { addSet, classNames } from "src/shared/lib";
import { Button, SizeButton } from "src/shared/ui";
import { v4 as uuidv4 } from "uuid";
import cls from "./CreateCard.module.scss";

interface CreateCardProps {
    className?: string;
    onClose?: () => void;
}
export const CreateCard: FC<CreateCardProps> = ({ className, onClose }) => {
    const [title, setTitle] = useState<string>("");
    // const [body, setDefinition] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const setCard: Set = { id: uuidv4(), title, cards: [] };
        addSet(setCard);

        setTitle("");
    };

    return (
        <div className={classNames(cls.CreateCard, {}, [className as string])}>
            <form onSubmit={handleSubmit} className="#myform">
                <label id="card-form">Set</label>
                <br />
                <input
                    type="text"
                    id="term"
                    name="term"
                    placeholder="your term..."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />

                {/* <label htmlFor="definition">Definition</label>
                <br />
                <textarea
                    id="definition"
                    name="definition"
                    placeholder="your definition..."
                    onChange={(e) => setDefinition(e.target.value)}
                    value={definition}
                /> */}
                <br />

                <Button type="submit" size={SizeButton.M} onClick={onClose}>
                    Create set
                </Button>
            </form>
        </div>
    );
};
