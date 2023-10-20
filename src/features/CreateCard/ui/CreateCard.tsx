import { FC, FormEvent, useState } from "react";
import { Card } from "src/entities/Flashcard";
import { addItem, classNames } from "src/shared/lib";
import { Button, SizeButton } from "src/shared/ui";
import { v4 as uuidv4 } from "uuid";
import cls from "./CreateCard.module.scss";

interface CreateCardProps {
    className?: string;
    createCard?: () => void;
    onClose?: () => void;
}
export const CreateCard: FC<CreateCardProps> = ({ className, onClose }) => {
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const flashcard: Card = { id: uuidv4(), term, definition };
        addItem("flashcardStore", flashcard);

        setTerm("");
        setDefinition("");
    };

    return (
        <div className={classNames(cls.CreateCard, {}, [className as string])}>
            <form onSubmit={handleSubmit}>
                <label id="card-form">Term</label>
                <br />
                <input
                    type="text"
                    id="term"
                    name="term"
                    placeholder="your term..."
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                />
                <br />

                <label htmlFor="definition">Definition</label>
                <br />
                <textarea
                    id="definition"
                    name="definition"
                    placeholder="your definition..."
                    onChange={(e) => setDefinition(e.target.value)}
                    value={definition}
                />
                <br />

                <Button type="submit" size={SizeButton.M} onClick={onClose}>
                    Create card
                </Button>
            </form>
        </div>
    );
};
