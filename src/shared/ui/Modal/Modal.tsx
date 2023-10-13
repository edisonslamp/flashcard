import { FC } from "react";
import { classNames } from "src/shared/lib";
import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    isOpen: boolean;
}

export const Modal: FC<ModalProps> = ({ className, isOpen }) => {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    return (
        <div className={classNames(cls.Modal, mods, [className as string])}>
            <div className={classNames(cls.overlay, {}, [className as string])}>
                <div className={cls.content}>Hello, I'm modal content!</div>
            </div>
        </div>
    );
};
