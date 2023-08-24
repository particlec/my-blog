import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import HomeHeader from './HomeHeader';
import HomeSider from './HomeSider';

const { Header, Content, Sider } = Layout;
const MenuLayout = () => {
  return (
    <>
      <div className="bg-gray-100 h-[100%] bg-[#EFEFEF]">
        <div className="mx-auto max-w-7xl py-1 sm:px-6 lg:px-8 h-full drop-shadow-md">
          <Layout>
            <Header className="rounded-t-lg bg-white border-4 border-b-[#F4F4F4]  border-t-white border-r-white border-l-white">
              <HomeHeader />
            </Header>
            <Layout>
              <Sider
                width={200}
                className="max-sm:hidden h-[100%]"
                theme="light"
              >
                <HomeSider />
              </Sider>
              <Layout>
                <Content className="p-12 mh-[280px] overflow-y-auto bg-[#F3F4F9] h-[100%]">
                  <Outlet />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </div>
    </>
  );
};
export default MenuLayout;
