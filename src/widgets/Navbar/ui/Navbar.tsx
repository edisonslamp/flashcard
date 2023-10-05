import { Button } from "src/shared/ui";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            I'm Navbar
            <div>
                <Button type="submit" className={cls.navbarBtn}>
                    Login
                </Button>
                <Button type="submit" className={cls.navbarBtn}>
                    Sign Up
                </Button>
            </div>
        </div>
    );
};
