import React, { FC, useEffect, useState } from "react";
import { classNames } from "src/shared/lib";
import { Button, SizeButton } from "src/shared/ui";
import { Card } from "../model/types/Card";
import cls from "./FlashCard.module.scss";

interface FlashCardProps {
    className?: string;
    id: string;
    term?: string;
    cards?: Card[];
    definition?: string;
    onCloseCard?: (e: React.MouseEvent, id: string) => void;
}

export const FlashCard: FC<FlashCardProps> = (props) => {
    const { term, definition, id, onCloseCard } = props;
    const [isShow, setIsShow] = useState(false);
    const [cardId, setCardId] = useState<string>("");

    useEffect(() => {
        setCardId(id);
    }, [id]);

    const handleOnClick = () => {
        setIsShow((prev) => !prev);
    };

    return (
        <div className={cls.FlashCard_container}>
            <div className={cls.FlashCard} onClick={handleOnClick}>
                <div className={cls.closeBtn_container}>
                    <Button
                        onClick={(e: React.MouseEvent) =>
                            onCloseCard?.(e, cardId)
                        }
                        className={classNames(cls.closeBtn, {}, [])}
                        size={SizeButton.S}
                    >
                        <h1>X</h1>
                    </Button>
                </div>

                <div className={cls.term}>
                    <h2>{term}</h2>
                </div>
                <div className={cls.definition}>
                    {isShow && <p>{definition}</p>}
                </div>
            </div>
        </div>
    );
};
