import { useNavigate } from "react-router-dom";

const ArticleDirect = () => {
    const navigate = useNavigate()
  let typecho = [
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
    {
      time: '15464648',
      title: '欢迎使用 Typecho',
      article:
        '从初级到中级，到高级，再到主程、再到TL，技术经理，再到架构师，再到负责人。当完成任务的时候，是最基本的事情，深入的时候，从coding入手，在代码上有所追求，比如说可读性，用用设计模式，再深入想到代码可扩展性。。。',
    },
  ];



  const jumpArticle = (id:string)=> {
    navigate(`/home/articleDetails/${id}`)
  }

  


  return (
    <div>
      {typecho.map((object: any) => (
        <li
          key={object.title}
          className="flex w-[100%] mt-[10px] pb-[12px] border-b-1 border-[#e4e6eb]-solid "
          onClick={()=>{
            jumpArticle(object.id)
          }}
        >
          <p className="text-[13px] leading-[22px] text-[#8a919f]">
            {object.time}
          </p>
          <h2 className="font-[600] text-[16px] leading-[24px] text-[#252933]">
            {object.title}
          </h2>
          <div className="text-[13px] leading-[22px] text-[#8a919f]">
            {object.article}
          </div>
        </li>
      ))}
    </div>
  );
};
export default ArticleDirect;
