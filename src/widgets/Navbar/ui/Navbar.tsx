import { useContext, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, Themes } from "src/app/App";
import { Button, SizeButton } from "src/shared/ui";
import cls from "./Navbar.module.scss";

export function reducer(
    state: React.ComponentState,
    action: React.ComponentState,
): React.ComponentState {
    switch (action.type) {
        case "increment": {
            return {
                num: state.num + 1,
            };
        }
        case "decrement": {
            return {
                num: state.num - 1,
            };
        }
    }
}

export const Navbar = () => {
    const context = useContext(ThemeContext);
    const [colorButton, setColorButton] = useState<Themes>(context.theme);
    const [state, dispatch] = useReducer(reducer, { num: context.num });

    const handleColorButton = () => {
        colorButton === context.theme
            ? setColorButton(Themes.PURPLE)
            : setColorButton(context.theme);
    };

    const handlePlus = () => {
        dispatch({ type: "increment" });
    };

    const handleMinus = () => {
        dispatch({ type: "decrement" });
    };

    return (
        <div className={cls.Navbar}>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <h3>Flashcard</h3>
            </Link>

            <div>
                <Button
                    type="submit"
                    style={{ backgroundColor: colorButton }}
                    size={SizeButton.M}
                    className={cls.loginBtn}
                    onClick={handleColorButton}
                >
                    Login
                </Button>

                <Button
                    type="submit"
                    size={SizeButton.M}
                    className={cls.loginBtn}
                    onClick={handleMinus}
                >
                    -
                </Button>
                <Button size={SizeButton.M} className={cls.loginBtn}>
                    {state.num}
                </Button>
                <Button
                    type="submit"
                    size={SizeButton.M}
                    className={cls.loginBtn}
                    onClick={handlePlus}
                >
                    +
                </Button>
            </div>
        </div>
    );
};
