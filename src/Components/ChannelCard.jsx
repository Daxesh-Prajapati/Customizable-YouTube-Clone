import React from "react";
import countConverter from "../../public/countConverter";

const ChannelCard = ({ ChannelObj, fromSearch }) => {
  const {
    snippet: {
      title,
      description,
      customUrl,
      thumbnails: {
        high: { url },
      },
    },
  } = ChannelObj;

  // Extract statistics conditionally
  const subscriberCount = ChannelObj.statistics
    ? ChannelObj.statistics.subscriberCount
    : null;
  const videoCount = ChannelObj.statistics
    ? ChannelObj.statistics.videoCount
    : null;

  return (
    <div className="channelbanner flex jcc alc">
      <img src={url} alt="channel pfp" />
      <div className="channeldetails">
        <h1>{title}</h1>
        {!fromSearch && (
          <p>
            {customUrl} <span>&bull;</span>
            {countConverter(subscriberCount)} subscribers <span>&bull;</span>{" "}
            {countConverter(videoCount)} videos
          </p>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelCard;
