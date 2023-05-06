import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import MenuLayout from "../layout/MenuLayout";
import Home from "../views";


type KZRoute = {
  // 布局组件
  layout?: ReactNode | null;
  // 路由实际渲染的组件
  component?: ReactNode | null;
  // 路径
  path: string;
};

const CustomRouter: KZRoute[] = [
  {
    layout: <MenuLayout />,
    component: <Home />,
    path: "/home",
  },
  { component: <Navigate to="/home" />, path: "*" },
];

export default CustomRouter;
