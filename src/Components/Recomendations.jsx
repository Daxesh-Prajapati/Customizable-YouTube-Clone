import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YouTube_API_KEY } from "../apikey";

const Recomendations = ({ categoryId, RegionCode }) => {
  const [SuggestionsData, setSuggestionsData] = useState([]);

  const fetchChannelData = async () => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${RegionCode}&videoCategoryId=20&key=${YouTube_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSuggestionsData(data.items);
      })
      .catch((error) => console.log("error in suggestions data : ", error));
  };

  useEffect(() => {
    fetchChannelData();
  }, [categoryId]);

  // console.log("SuggestionsData : ", SuggestionsData);

  return (
    <React.Fragment>
      <h1>Suggested Videos</h1>
      <div className="recomendations flex">
        {SuggestionsData && SuggestionsData.length > 0 ? (
          SuggestionsData.map((videoObj) => (
            <VideoCard
              key={videoObj.id}
              videoObj={videoObj}
              suggestionActive={true}
            />
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Recomendations;
