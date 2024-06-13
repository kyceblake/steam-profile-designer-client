import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import RootPage from "./pages/Root/RootPage";
import s from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className={s.App}>
      <RouterProvider router={router} />
    </div>
  );
}
