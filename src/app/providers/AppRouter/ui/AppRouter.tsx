import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "src/pages/AboutPage";
import { ErrorPage } from "src/pages/ErrorPage";
import { MainPage } from "src/pages/MainPage";

// import { CardList } from "src/widgets";

const AppRouter = () => {
    const router = [
        {
            path: "/",
            element: <MainPage />,
            errorElement: <ErrorPage />,
        },

        {
            path: "/about",
            element: <AboutPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/sets",
            // element: <CardList />,
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
                            errorElement={<ErrorPage />}
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
