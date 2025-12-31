import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = "AIzaSyBqhGfd0xQT9uWUKs57u0U8II-0PPVctbg";

const VideoBackground = ({ title }) => {
  const [videoId, setVideoId] = useState(null);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        title + " official trailer"
      )}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`
    );

    const json = await data.json();
    setVideoId(json.items?.[0]?.id?.videoId);
  };

  useEffect(() => {
    if (title) {
      getMovieVideos();
    }
  }, [title]);

  if (!videoId) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
     <iframe 
     className="w-full h-full scale-125" 
     src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`} 
     allow="autoplay" >
     </iframe>

      {/* Dark gradient overlay (Netflix style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
