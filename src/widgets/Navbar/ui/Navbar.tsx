import { classNames } from "src/shared/lib";
import { Button } from "src/shared/ui";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            I'm Navbar
            <div>
                <Button
                    type="submit"
                    className={classNames(cls.loginBtn, {}, [])}
                />
                <Button
                    type="submit"
                    className={classNames(cls.loginBtn, {}, [])}
                />
            </div>
        </div>
    );
};
