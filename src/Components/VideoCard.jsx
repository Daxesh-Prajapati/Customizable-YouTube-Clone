import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import countConverter from "../../public/countConverter";

const VideoCard = ({ videoObj, suggestionActive, fromSearch }) => {
  // Return null or a placeholder if videoObj is not properly structured
  if (!videoObj || !videoObj.snippet || !videoObj.snippet.thumbnails) {
    console.log("return null from videocard");
    return null;
  }

  const {
    snippet: {
      thumbnails: {
        high: { url },
      },
      title,
      channelTitle,
      publishedAt,
      categoryId,
    },
  } = videoObj;

  const videoId = fromSearch ? videoObj.id.videoId : videoObj.id;

  return (
    <div
      className={`flex ${
        suggestionActive
          ? "suggestionsActive "
          : fromSearch
          ? "fromSearch"
          : "videocard"
      }
      `}
    >
      <Link
        to={`/video/${categoryId}/${videoId}`}
        className="videocard-thumbnail"
      >
        <img src={url} alt="thumbnail" className="videocard-img" />
      </Link>
      <div className="videocard-details flex">
        <h3 className="videocard-title">{title}</h3>
        <h5 className="videocard-channel">@{channelTitle}</h5>
        {!fromSearch && (
          <div className="videocard-specs flex alc">
            <span>{countConverter(videoObj.statistics.viewCount)} views</span>
            &bull;
            <span>{countConverter(videoObj.statistics.likeCount)} Likes</span>
            &bull;
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
        )}
        {fromSearch && (
          <div className="videocard-specs flex alc">
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
