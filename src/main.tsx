import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { RouterProvider } from "react-router-dom";
import router from "./routes";
// import App from './App.tsx';
import './main.css';
// import LayoutHome from './views/layout-home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    {/* <LayoutHome/> */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </ConfigProvider>
);
