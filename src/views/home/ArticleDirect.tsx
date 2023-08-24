import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from 'antd';
import { Pagination } from 'antd';
import { formatTimestamp } from '../../utils/timeConversion';
import { ArticleDirectProps } from '../../types';

const ArticleDirect = () => {
  const navigate = useNavigate();

  const [typechos, setTypecho] = useState();

  const [] = useState();
  let typecho = [
    {
      time: '15464648',
      title: '欢迎使用 Typecho',
      article:
        '初夏、天气渐热 \n最近下班总是躺在床上，不想动弹，宛如一头废人，看着杂乱的房间，突然想到：\n 想要什么就要去改变，你在一个最贴近的的状态，才可能会更容易达到你想达到的状态于是把衣服洗了，周末在整理一下吧',
    },
    {
      time: '15464648',
      title: '欢迎使用 Typecho',
      article:
        '从初级到中级，到高级，再到主程、再到TL，技术经理，再到架构师，再到负责人。当完成任务的时候，是最基本的事情，深入的时候，从coding入手，在代码上有所追求，比如说可读性，用用设计模式，再深入想到代码可扩展性。。。',
    },
    {
      time: '15464648',
      title: '欢迎使用 Typecho',
      article:
        '从初级到中级，到高级，再到主程、再到TL，技术经理，再到架构师，再到负责人。当完成任务的时候，是最基本的事情，深入的时候，从coding入手，在代码上有所追求，比如说可读性，用用设计模式，再深入想到代码可扩展性。。。',
    },
    {
      time: '15464648',
      title: '欢迎使用 Typecho',
      article:
        '从初级到中级，到高级，再到主程、再到TL，技术经理，再到架构师，再到负责人。当完成任务的时候，是最基本的事情，深入的时候，从coding入手，在代码上有所追求，比如说可读性，用用设计模式，再深入想到代码可扩展性。。。',
    },
  ];

  const jumpArticle = (id: string) => {
    navigate(`/home/articleDetails/${id}`);
  };

  return (
    <div className="bg-white w-[100%]">
      {/* overflow-hidden + line-clamp-3 -webkit-box-orient: vertical 限制行数 */}
      {typecho.length > 0 ? (
        typecho.map((object: ArticleDirectProps) => (
          <li
            key={object.title}
            className="flex w-[90%] mt-[10px] pb-[12px] border-b-1 border-[#e4e6eb]-solid h-[200px] "
            onClick={() => {
              jumpArticle(object?.id || '');
            }}
          >
            <div className="flex w-[100%] flex-col	 overflow-hidden">
              <h2 className="ml-3 my-2 font-[600] text-[16px] leading-[24px] text-[#252933] line-clamp-1 whitespace-pre	">
                {object.title}
              </h2>

              <p className="ml-3 text-[13px] leading-[22px] text-[#8a919f]">
                {formatTimestamp(object.time, 'YYYY-MM-DD HH:mm:ss')}
              </p>

              <p className="ml-3 my-2 text-[14px] leading-[22px] text-[#8a919f]  m-[1em 1em 0 0] block whitespace-pre-wrap line-clamp-3 -webkit-box-orient: vertical;	">
                {object.article}
              </p>
            </div>
          </li>
        ))
      ) : (
        <Skeleton active />
      )}

      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    </div>
  );
};
export default ArticleDirect;
