import { FC } from "react";
import { Link } from "react-router-dom";
import { Set } from "src/entities/Flashcard";
import { Button, SizeButton } from "src/shared/ui";
import { CardSetList } from "src/widgets";
import cls from "./CardSet.module.scss";

interface CardSetProps {
    handleClose: () => void;
    cardSet: Set[];
}

export const CardSet: FC<CardSetProps> = ({ handleClose, cardSet }) => {
    return (
        <div className="card-set">
            <div className={cls.cardLayout}>
                <div className={cls.createSetBtn}>
                    <div className={cls.createBtn}>
                        <Button
                            size={SizeButton.L}
                            type="button"
                            onClick={handleClose}
                        >
                            Create Set
                        </Button>
                    </div>

                    <div className={cls.backBtn}>
                        <Link to={"/"}>
                            <Button size={SizeButton.M} type="button">
                                Back to sets
                            </Button>
                        </Link>
                    </div>
                </div>
                <CardSetList cardSet={cardSet} />
            </div>
        </div>
    );
};
