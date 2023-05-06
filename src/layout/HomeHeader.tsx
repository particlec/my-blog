import { Input, Space } from 'antd';
import CustomMusic from '../components/CustomMusic';

// import Music from '../components/Music';
// import dynamic from 'next/dynamic';

// const Music = dynamic(import('../components/Music'), {
//   ssr: false,
// });

const { Search } = Input;

const onSearch = () => {};
const HomeHeader = () => {
  // https://www.shopify.com/zh/tools/logo-maker 自定义logo
  // https://aplayer.js.org/#/zh-Hans/?id=%E5%AE%89%E8%A3%85 播放器
  // https://blog.csdn.net/weixin_69043813/article/details/128924755?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-128924755-blog-119961966.235%5Ev32%5Epc_relevant_default_base3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-128924755-blog-119961966.235%5Ev32%5Epc_relevant_default_base3&utm_relevant_index=2
  // 自定义播放器
  return (
    <div className="flex items-center justify-between ">
      <div>
        {/* <img src={logo} alt="logo" className="w-10 h-10" /> */}
        <span>particlec</span>
      </div>

      <Space direction="vertical" className="flex items-center max-sm:hidden">
        <Search
          placeholder="搜索"
          onSearch={onSearch}
          className="flex items-center w-[200px]"
        />
      </Space>

      <CustomMusic/>
    </div>
  );
};
export default HomeHeader;
