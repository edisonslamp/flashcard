import React, { ChangeEvent, FC } from "react";
import { Button, SizeButton } from "../Button/Button";

interface ModalFormProps {
    handleSubmit: () => void;
    onChangeDefinition: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeTerm: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const ModalForm: FC<ModalFormProps> = ({
    handleSubmit,
    onChangeDefinition,
    onChangeTerm,
    onKeyDown,
}) => {
    return (
        <>
            <form>
                <label htmlFor="term">Term</label>
                <br />
                <input
                    type="text"
                    id="term"
                    name="term"
                    autoComplete="off"
                    onChange={onChangeTerm}
                    onKeyDown={onKeyDown}
                />
                <br />
                <label htmlFor="definition">Definition</label>
                <br />
                <input
                    type="text"
                    id="definition"
                    name="definition"
                    autoComplete="off"
                    onChange={onChangeDefinition}
                    onKeyDown={onKeyDown}
                />
                <br />
                <Button
                    type="button"
                    size={SizeButton.M}
                    onClick={handleSubmit}
                >
                    Add card
                </Button>
            </form>
        </>
    );
};
