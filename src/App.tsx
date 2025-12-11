import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { SelectTeam } from "./pages/teams";
import { NewsPage } from "./pages/news";
import { Feed } from "./pages/feed";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/teams",
      element: <SelectTeam />,
    },
    {
      path: "/news",
      element: <NewsPage />,
    },
    {
      path: "/feed",
      element: <Feed />,
    }
])

export { router };
