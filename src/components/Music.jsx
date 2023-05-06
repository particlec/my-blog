import React from 'react';
import ReactAplayer from 'react-aplayer';

const Music = () => {
  // event binding example
  const onPlay = () => {
    console.log('on play');
  };

  const onPause = () => {
    console.log('on pause');
  };

  // example of access aplayer instance
  const onInit = () => {};

  const props = {
    theme: '#FADFA3',
    lrcType: 3,
    listMaxHeight: "64",
    mini: true,
    audio: [
      {
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
        cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
        theme: '#ebd0c2',
      },
    ],
  };

  return (
    <div>
      <ReactAplayer
        {...props}
        onInit={onInit}
        onPlay={onPlay}
        onPause={onPause}
      />
    </div>
  );
};

export default Music;
