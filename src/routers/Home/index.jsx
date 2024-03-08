import Loadable from "components/Loadable";
import { PathRoute } from "constants/router/path";
import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";

// Auth
const QuanLyBieuMauBCTK = Loadable(
  lazy(() => import("pages/QuanLyBieuMauBaoCao-ThongKe/index"))
);

const EFormDetail = Loadable(
  lazy(() => import("../pages/QuanLyBieuMauBaoCao-ThongKe/ChiTiet-LichSu"))
);

const TaoMoiBieuMau = Loadable(
  lazy(() => import("../pages/QuanLyBieuMauBaoCao-ThongKe/EForm/EFormCreate"))
);

const SuaBieuMau = Loadable(
  lazy(() => import("../pages/QuanLyBieuMauBaoCao-ThongKe/EForm/EEditForm"))
);

const QuanLyBieuMauBCTKRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <QuanLyBieuMauBCTK />,
    },
    {
      path: PathRoute.TaoMoiBieuMau,
      element: <TaoMoiBieuMau />,
    },
    {
      path: PathRoute.EFormDetail,
      element: <EFormDetail />,
    },
    {
      path: PathRoute.SuaBieuMau,
      element: <SuaBieuMau />,
    },
  ],
};

export default QuanLyBieuMauBCTKRoutes;
