import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const { type, children } = props;
    return (
        <button type={type} {...props}>
            {children}
        </button>
    );
};
