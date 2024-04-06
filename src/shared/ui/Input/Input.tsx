import { FC, InputHTMLAttributes, useRef } from "react";
import { classNames } from "src/shared/lib";
import { Button, SizeButton } from "../Button/Button";
import cls from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    onClick: () => void;
}
export const Input: FC<InputProps> = ({
    className,
    onClick,
    ...otherProps
}) => {
    const title = useRef<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        title.current = e.currentTarget.value;
    };

    return (
        <div className={classNames(cls.input_container, {}, [className])}>
            <input
                className={classNames(cls.Input, {}, [className])}
                onChange={handleChange}
                {...otherProps}
            />
            <Button size={SizeButton.M} onClick={onClick}>
                Create
            </Button>
        </div>
    );
};
