import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import UserProfile from "./components/UserProfile";

const routes=[
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />
    },
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage />
    }

  ];

  export default routes;