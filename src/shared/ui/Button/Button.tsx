import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "src/shared/lib";
import cls from "./Button.module.scss";

export enum SizeButton {
    S = "size_s",
    M = "size_m",
    L = "size_l",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { type, children, size, className, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls[size]]: true,
    };

    return (
        <button
            type={type}
            className={classNames(cls.Button, mods, [className as string])} // dunno why doesn't work properly
            {...otherProps}
        >
            {children}
        </button>
    );
};
