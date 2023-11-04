import { Button, SizeButton } from "src/shared/ui";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            Flashcard
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
