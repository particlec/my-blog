import { useState } from 'react';
import { Slider } from 'antd';
import next from '../assets/next.png';
import pause from '../assets/pause.png';
import play from '../assets/play.png';
import volume from '../assets/volume.png';

const CustomMusic = () => {
  const [isPlay, setIsPlay] = useState(false);

  // 控制音乐播放
  const playMusic = () => {
    setIsPlay(!isPlay);
  };

  //她使用了ref={musicRef}

  const onChange = (value: number | [number, number]) => {
    console.log('onChange: ', value);
  };

  const onAfterChange = (value: number | [number, number]) => {
    console.log('onAfterChange: ', value);
  };

  return (
    <div className="rounded-lg flex bg-white shadow-xl w-[400px] h-[50px]">
      <div className="flex items-center space-x-4 px-3 py-2">
        <img
          src={next}
          alt="next"
          className="w-[20px] h-[20px] cursor-pointer rotate-180"
          onClick={playMusic}
        />
        {isPlay ? (
          <img
            src={play}
            alt="play"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={playMusic}
          />
        ) : (
          <img
            src={pause}
            alt="pause"
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={playMusic}
          />
        )}

        <img
          src={next}
          alt="next"
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={playMusic}
        />

        <div className="flex flex-col flex-wrap w-[200px]">
          <div className="  ">
            <span>Western Hero</span>
          </div>
          <Slider
            defaultValue={0}
            onChange={onChange}
            onAfterChange={onAfterChange}
            className=" "
          />
        </div>

        

        {/* <div className="absolute h-[40px]">
        <img
          src={volume}
          alt="next"
          className="w-[15px] h-[15px] cursor-pointer"
          onClick={playMusic}
        />
         <Slider vertical defaultValue={20} />

        </div> */}

        
      </div>

    </div>
  );
};
export default CustomMusic;
