import { FC, FormEvent, useState } from "react";
import { addItem, classNames } from "src/shared/lib";
import { Button, SizeButton } from "..";
import cls from "./CreateCard.module.scss";

export type Card = {
    id: number;
    term: string;
    definition: string;
};

interface CreateCardProps {
    className?: string;
    createCard?: () => void;
    onClose?: () => void;
}
export const CreateCard: FC<CreateCardProps> = ({ className, onClose }) => {
    const [cardId, setCardId] = useState<number>(0);
    const [card, setCard] = useState<Card>();
    const [term, setTerm] = useState<string>("");
    const [definition, setDefinition] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const flashcard: Card = { id: cardId, term, definition };
        setCard(flashcard);

        setCardId((prev) => ++prev);
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
