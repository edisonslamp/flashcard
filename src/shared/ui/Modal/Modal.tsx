import React, { FC, ReactNode } from "react";
import { classNames } from "src/shared/lib";
import cls from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    isOpen: boolean;
    children?: ReactNode;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
    className,
    isOpen,
    onClose,
    children,
}) => {
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className as string])}>
            <div
                className={classNames(cls.overlay, {}, [className as string])}
                onClick={onClose}
            >
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
