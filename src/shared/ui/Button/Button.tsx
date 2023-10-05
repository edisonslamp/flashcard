import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, type } = props;
    return (
        <button type={type} className={className} {...props}>
            custom button
        </button>
    );
};
