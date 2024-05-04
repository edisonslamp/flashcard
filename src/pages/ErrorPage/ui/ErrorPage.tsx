import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import cls from "./ErrorPage.module.scss";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    let errorMessage = "";
    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText;
    }

    return (
        <div className={cls.ErrorPage}>
            <h1>{errorMessage}</h1>
        </div>
    );
};
