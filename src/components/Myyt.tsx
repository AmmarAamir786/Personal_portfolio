"use client"
// components/YouTubeVideo.js
import YouTube from 'react-youtube';


const Myyyt = ({ videoId, title }: { videoId: string, title: string }) => {
  
    return <YouTube videoId={videoId} className={title}/>;
  };
  
  export default Myyyt;
  
