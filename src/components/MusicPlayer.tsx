import React, { useEffect, useRef, useState } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  url: string;
}

interface Props {
  songs: Song[];
}

const MusicPlayer: React.FC<Props> = ({ songs }) => {
  return <div>111</div>;
  //   const [currentSongIndex, setCurrentSongIndex] = useState(0);
  //   const [isPlaying, setIsPlaying] = useState(false);
  //   const [volume, setVolume] = useState(0.5);
  //   const [currentTime, setCurrentTime] = useState(0);
  //   const audioRef = useRef<HTMLAudioElement>(null);

  //   const currentSong = songs[currentSongIndex];

  //   const togglePlay = () => {
  //     if (isPlaying) {
  //       audioRef.current?.pause();
  //     } else {
  //       audioRef.current?.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   };

  //   const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = parseFloat(event.target.value);
  //     setVolume(value);
  //     // audioRef?.current.volume = value;
  //   };

  //   const handleTimeUpdate = () => {
  //     setCurrentTime(audioRef.current?.currentTime || 0);
  //   };

  //   const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = parseFloat(event.target.value);
  //     // (audioRef.current?.currentTime= value ||null) ;
  //     setCurrentTime(value);
  //   };

  //   const handleNextSong = () => {
  //     if (currentSongIndex === songs.length - 1) {
  //       setCurrentSongIndex(0);
  //     } else {
  //       setCurrentSongIndex(currentSongIndex + 1);
  //     }
  //     setIsPlaying(true);
  //   };

  //   const handlePrevSong = () => {
  //     if (currentSongIndex === 0) {
  //       setCurrentSongIndex(songs.length - 1);
  //     } else {
  //       setCurrentSongIndex(currentSongIndex - 1);
  //     }
  //     setIsPlaying(true);
  //   };

  //   useEffect(() => {
  //     audioRef.current?.load();
  //     setIsPlaying(false);
  //   }, [currentSongIndex]);

  //   return (
  //     <div className="flex flex-col items-center">
  //       <h1 className="text-4xl font-bold mb-4">{currentSong.title}</h1>
  //       <h2 className="text-2xl font-bold mb-4">{currentSong.artist}</h2>
  //       <div className="flex items-center">
  //         <button
  //           onClick={handlePrevSong}
  //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
  //         >
  //           Prev
  //         </button>
  //         <button
  //           onClick={togglePlay}
  //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
  //         >
  //           {isPlaying ? 'Pause' : 'Play'}
  //         </button>
  //         <button
  //           onClick={handleNextSong}
  //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
  //         >
  //           Next
  //         </button>
  //       </div>
  //       <div className="flex items-center mt-4">
  //         <span className="mr-2">Volume:</span>
  //         <input
  //           type="range"
  //           min="0"
  //           max="1"
  //           step="0.01"
  //           value={volume}
  //           onChange={handleVolumeChange}
  //           className="w-32"
  //         />
  //       </div>
  //       <div className="flex items-center mt-4">
  //         <span className="mr-2">{formatTime(currentTime)}</span>
  //         <input
  //           type="range"
  //           min="0"
  //           max={currentSong.duration}
  //           step="0.01"
  //           value={currentTime}
  //           onChange={handleProgressChange}
  //           className="w-full"
  //         />
  //         <span className="ml-2">{formatTime(currentSong.duration)}</span>
  //       </div>
  //       <audio
  //         ref={audioRef}
  //         src={currentSong.url}
  //         onTimeUpdate={handleTimeUpdate}
  //         onEnded={handleNextSong}
  //         volume={volume}
  //       />
  //     </div>
  //   );
};

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MusicPlayer;
