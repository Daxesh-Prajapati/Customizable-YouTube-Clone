import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YouTube_API_KEY } from "../apikey";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const SearchResult = () => {
  const q = useParams();
  const keyword = Object.values(q).toString().split(" ").join("%20");

  const [Result, setResult] = useState([]);
  const [resultCount, setResultCount] = useState(20);

  const fetchSearch = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${resultCount}&q=${keyword}&key=${YouTube_API_KEY}`
      );
      const data = await response.json();
      setResult(data.items || []);
    } catch (err) {
      console.log("error in search result: ", err);
      setResult([]);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [keyword, resultCount]);

  if (!Result)
    return (
      <div className="ErrorPage flex">
        Loading... <span>Or Api Calls Limit Exausted</span>
      </div>
    );

  return (
    <div className="search-page flex">
      <h1>Search Results for {Object.values(q).toString()}</h1>
      <div className="search-result-container flex alc">
        {Result.length > 0 ? (
          Result.map((ResultObj) => {
            const type = ResultObj.id.kind;

            if (type === "youtube#channel") {
              return (
                <Link
                  to={`/channel/${ResultObj.id.channelId}`}
                  key={ResultObj.id.channelId}
                  style={{ width: "100%" }}
                >
                  <ChannelCard ChannelObj={ResultObj} fromSearch={true} />
                </Link>
              );
            } else if (type === "youtube#video") {
              return (
                <VideoCard
                  key={ResultObj.id.videoId}
                  videoObj={ResultObj}
                  fromSearch={true}
                />
              );
            }

            return null;
          })
        ) : (
          <p>No results found</p>
        )}
      </div>
      <button
        className="channel-video-increaser"
        onClick={() => {
          setResultCount((pre) => pre + 20);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default SearchResult;
