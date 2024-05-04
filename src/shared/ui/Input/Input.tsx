import { FC, InputHTMLAttributes } from "react";
import { classNames } from "src/shared/lib";
import { Button, SizeButton } from "../Button/Button";
import cls from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    onClick: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: FC<InputProps> = ({
    className,
    onClick,
    onChange,
    ...otherProps
}) => {
    return (
        <div
            className={classNames(cls.input_container, {}, [
                className as string,
            ])}
        >
            <input
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                        e.currentTarget.value = "";
                        onClick();
                    }
                }}
                className={classNames(cls.Input, {}, [className as string])}
                onChange={onChange}
                {...otherProps}
            />
            <Button size={SizeButton.M} onClick={onClick}>
                Create
            </Button>
        </div>
    );
};
