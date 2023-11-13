import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutPage } from "src/pages/AboutPage";
import { ErrorPage } from "src/pages/ErrorPage";
import { MainPage } from "src/pages/MainPage";
import { CardList } from "src/widgets";

export const AppRouter = () => {
    const router = createBrowserRouter([
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
            element: <CardList />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};
