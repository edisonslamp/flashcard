import { Button, SizeButton } from "src/shared/ui";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            <h3>Flashcard</h3>

            <div>
                <Button
                    type="submit"
                    size={SizeButton.M}
                    className={cls.loginBtn}
                >
                    Login
                </Button>
                <Button
                    type="submit"
                    size={SizeButton.M}
                    className={cls.loginBtn}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
};
