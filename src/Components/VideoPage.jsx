import React from "react";
import VideoPlayer from "./VideoPlayer";
import Recomendations from "./Recomendations";
import { useParams } from "react-router-dom";

const VideoPage = ({ RegionCode }) => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="videoPage">
      <div className="video-container">
        <div className="video-container-left">
          <VideoPlayer videoId={videoId} />
        </div>
        <div className="video-container-right">
          <Recomendations categoryId={categoryId} RegionCode={RegionCode} />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
