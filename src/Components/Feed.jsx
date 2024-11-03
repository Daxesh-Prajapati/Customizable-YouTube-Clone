import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YouTube_API_KEY } from "../apikey.js";

const Feed = ({ Category, RegionCode }) => {
  const [Data, setData] = useState([]);

  const url =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48";

  const fetch_date = async () => {
    await fetch(
      `${url}&regionCode=${RegionCode}&videoCategoryId=${Category}&key=${YouTube_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => setData(response.items))
      .catch((error) => console.log("error is  ", error));
  };
  useEffect(() => {
    fetch_date();
  }, [Category, RegionCode]);

  return (
    <>
      <div className="feed flex alc">
        {Data && Data.length > 0 ? (
          Data.map((videoObj) => (
            <VideoCard key={videoObj.id} videoObj={videoObj} />
          ))
        ) : (
          <div>No results found</div> // Optional: Display a message if no data
        )}
      </div>
    </>
  );
};

export default Feed;
