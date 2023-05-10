import MusicPlayer from "../components/MusicPlayer";

const songs = [
    {
      id: 1,
      title: 'Song 1',
      artist: 'Artist 1',
      duration: 180,
      url: 'path/to/song1.mp3',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      duration: 240,
      url: 'path/to/song2.mp3',
    },
    {
      id: 3,
      title: 'Song 3',
      artist: 'Artist 3',
      duration: 300,
      url: 'path/to/song3.mp3',
    },
  ];
  

const Home = () => {
    return <div className="h-[1200px]"><MusicPlayer songs={songs}/></div>
}
export default Home;