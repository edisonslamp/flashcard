import { Link } from "react-router-dom";
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
    return (
        <div className={cls.Navbar}>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <h3>Flashcard</h3>
            </Link>

            <div>
                {/* <Button
                    type="submit"
                    size={SizeButton.M}
                    className={cls.loginBtn}
                >
                    Login
                </Button> */}
            </div>
        </div>
    );
};
