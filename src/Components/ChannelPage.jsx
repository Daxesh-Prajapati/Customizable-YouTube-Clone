import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { YouTube_API_KEY } from "../apikey";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const ChannelPage = () => {
  const { channelId } = useParams();

  const [Channel, setChannel] = useState(null);
  const [ChannelVideos, setChannelVideos] = useState([]);
  const [ChannelVideoCount, setChannelVideoCount] = useState(30);

  const fetchChannel = async () => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${YouTube_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setChannel(res.items[0]))
      .catch((error) => console.log("Error in fetching channel: ", error));
  };

  const fetchChannelVideos = async (uploadsId, maxResults) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=${maxResults}&key=${YouTube_API_KEY}`
    )
      .then((res) => res.json())
      .then(async (res) => {
        const videoIds = res.items
          .map((item) => item.snippet.resourceId.videoId)
          .join(",");
        const videosRes = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${YouTube_API_KEY}`
        ).then((res) => res.json());
        setChannelVideos(videosRes.items);
      })
      .catch((error) =>
        console.log("Error in fetching channel videos: ", error)
      );
  };

  useEffect(() => {
    if (channelId) {
      fetchChannel();
    }
  }, [channelId]);

  useEffect(() => {
    if (Channel && Channel.contentDetails) {
      fetchChannelVideos(
        Channel.contentDetails.relatedPlaylists.uploads,
        ChannelVideoCount
      );
    }
  }, [Channel, ChannelVideoCount]);

  if (!Channel) {
    return (
      <div className="ErrorPage flex">
        Loading... <span>Or Api Calls Limit Exausted</span>
      </div>
    );
  }

  return (
    <div className="channel-page flex ">
      <ChannelCard key={Channel.id} ChannelObj={Channel} />

      <hr />
      <h2>Videos from {Channel.snippet.title}</h2>
      <div className="channel-video-container flex alc">
        {ChannelVideos && ChannelVideos.length > 0 ? (
          ChannelVideos.map((videoObj) => (
            <VideoCard key={videoObj.id} videoObj={videoObj} />
          ))
        ) : (
          <div>No results found</div> // Optional: Display a message if no data
        )}
      </div>
      <button
        className="channel-video-increaser"
        onClick={() => {
          setChannelVideoCount((pre) => pre + 20);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default ChannelPage;
