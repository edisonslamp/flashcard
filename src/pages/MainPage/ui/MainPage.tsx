import { useState } from "react";
import { Link } from "react-router-dom";
import { CreateCard } from "src/features/CreateSetCard";
import { Button, Modal, SizeButton } from "src/shared/ui";
import { CardSetList } from "src/widgets";
import cls from "./MainPage.module.scss";

export const MainPage = () => {
    const [isCardSetOpen, setIsCardSetOpen] = useState(false);

    const handleClose = () => {
        setIsCardSetOpen((prev) => !prev);
    };

    return (
        <div className="main-page">
            <Modal isOpen={isCardSetOpen} onClose={handleClose}>
                <CreateCard onClose={handleClose} />
            </Modal>
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
                <CardSetList />
            </div>
        </div>
    );
};
