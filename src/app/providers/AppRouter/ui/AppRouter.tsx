import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "src/pages/AboutPage";
import { ErrorPage } from "src/pages/ErrorPage";
import { MainPage } from "src/pages/MainPage";
import { Cards } from "src/widgets/Cards";

const AppRouter = () => {
    const router = [
        {
            path: "/about",
            element: <AboutPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/set/:id",
            element: <Cards />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "*",
            element: "404 NOT FOUND",
            errorElement: <ErrorPage />,
        },
    ];

    return (
        <Suspense fallback="wait...">
            <Routes>
                {router.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                            errorElement={route.errorElement}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
