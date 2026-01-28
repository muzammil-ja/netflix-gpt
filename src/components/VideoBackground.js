import { useEffect, useState, useCallback } from "react";

const VideoBackground = ({ title }) => {
  const [videoId, setVideoId] = useState(null);

  const getMovieVideos = useCallback(async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        title + " official trailer"
      )}&type=video&maxResults=1&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );

    const json = await data.json();
    setVideoId(json.items?.[0]?.id?.videoId || null);
  }, [title]);

  useEffect(() => {
    getMovieVideos();
  }, [getMovieVideos]);

  if (!videoId) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen -z-10 overflow-hidden">
      <iframe
        className="w-full h-full scale-125"
        title={`youtube-trailer-${videoId}`}   // ✅ required
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
