import { useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import logo from '../assets/logo.png';
import album from '../assets/sider/album.png';
import calendar from '../assets/sider/calendar.png';
import friend from '../assets/sider/friend.png';
import home from '../assets/sider/home.png';
import my from '../assets/sider/my.png';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
// https://www.iconfont.cn/user/detail?spm=a313x.7781069.1998910419.53&uid=4193520&nid=8N7pZVovdwFv&userViewType=collections 图标替换

const items: MenuItem[] = [
  getItem(
    '首页',
    '1',
    <img src={home} alt="home" className="w-[17px] h-[19px]" />
  ),
  getItem(
    '朋友',
    '2',
    <img src={friend} alt="friend" className="w-[17px] h-[19px]" />
  ),
  getItem(
    '相册',
    '3',
    <img src={album} alt="album" className="w-[17px] h-[19px]" />
  ),
  getItem(
    '日记',
    '4',
    <img src={calendar} alt="calendar" className="w-[17px] h-[19px]" />
  ),

  getItem(
    '关于',
    'sub1',
    <img src={my} alt="my" className="w-[17px] h-[19px]" />,
    [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]
  ),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ]),
];
const HomeSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  //    30多

  return (
    <div>
      <div className="flex gap-x-4 h-[80px] m-6">
        <img
          className=" flex-none rounded-full bg-gray-50 basis-1/2 "
          src={logo}
          alt="logo"
          ml-4
        />
        <div className="min-w-0 flex-auto basis-1/2 items-center justify-between flex  ">
          <p className=" font-semibold  text-muted text-xs block">
            Just like floating bubbles
          </p>
          {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p> */}
        </div>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        className="mr-1.5  text-gray-400"
      />
    </div>
  );
};
export default HomeSider;
