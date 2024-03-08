import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";

const router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "home", element: <Home /> }],
  },
];

const Routers = () => {
  const el = useRoutes(router);
  return el;
};
export default Routers;
