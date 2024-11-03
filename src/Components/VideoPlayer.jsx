import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YouTube_API_KEY } from "../apikey.js";
import countConverter from "../../public/countConverter";
import userProfile from "../assets/user-solid.svg";
import moment from "moment";

const VideoPlayer = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const [ChannelData, setChannelData] = useState(null);
  const [CommentThread, setCommentThread] = useState([]);
  const [LoadedComment, setLoadedComment] = useState(25);

  const commentIncreaser = () => {
    setLoadedComment((prevCount) => prevCount + 25);
    console.log("comment inc to : ", LoadedComment);
  };

  const fetchVideoData = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YouTube_API_KEY}`
      );
      const data = await response.json();
      setVideoData(data.items[0]);
    } catch (error) {
      console.log("error is  ", error);
    }
  };

  const fetchChannelData = async (channelId) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${YouTube_API_KEY}`
      );
      const data = await response.json();
      setChannelData(data.items[0]);
    } catch (error) {
      console.log("Error fetching channel data: ", error);
    }
  };

  const fetchCommentsThreadData = async (videoId) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?maxResults=${LoadedComment}&part=snippet%2Creplies&videoId=${videoId}&key=${YouTube_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setCommentThread(res.items))
      .catch((error) => console.log("error in comments threads: ", error));
  };
  // console.log("comments thread: ", CommentThread);

  useEffect(() => {
    const fetchData = async () => {
      await fetchVideoData();
    };
    fetchData();
  }, [videoId, LoadedComment]);

  // this will only be executed when videoData is fetched
  useEffect(() => {
    if (videoData) {
      fetchChannelData(videoData.snippet.channelId);
      fetchCommentsThreadData(videoId);
    }
  }, [videoData, LoadedComment]);

  if (!videoData || !ChannelData) {
    return (
      <div className="ErrorPage flex">
        Loading... <span>Or Api Calls Limit Exausted</span>
      </div>
    );
  }

  const {
    snippet: { title, description, channelTitle, publishedAt, channelId },
    statistics: { viewCount, likeCount, commentCount },
  } = videoData;

  const {
    snippet: {
      thumbnails: {
        high: { url },
      },
    },
    statistics: { subscriberCount },
  } = ChannelData;

  return (
    <div className="videoplayer">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3 className="video-title">{title}</h3>
      <div className="video-specs flex alc">
        <p>
          {countConverter(viewCount)} Views • {moment(publishedAt).fromNow()}
        </p>
        <div className="flex alc">
          <div className="like">
            <svg
              className="custom-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
            </svg>
          </div>
          <p className="likecount">{countConverter(likeCount)}</p>
          <div className="dislike">
            <svg
              className="custom-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
            </svg>
          </div>
          <p className="dislikecount">{countConverter(commentCount)}</p>
        </div>
      </div>
      <hr />
      <Link className="flex alc" to={`/channel/${channelId}`}>
        <img src={url ? url : userProfile} alt="Channel pfp" />
        <div>
          <h3 className="channelname">{channelTitle}</h3>
          <span>{countConverter(subscriberCount)} subscribers</span>
        </div>
      </Link>
      <div className="video-desc">{description}</div>
      <hr />
      <h4 className="comment-count">{countConverter(commentCount)} Comments</h4>
      <div className="comments-box">
        {CommentThread &&
          CommentThread.length > 0 &&
          CommentThread.map((comment, index) => {
            const {
              snippet: {
                topLevelComment: {
                  snippet: {
                    authorDisplayName,
                    authorProfileImageUrl,
                    likeCount,
                    publishedAt,
                    textDisplay,
                  },
                },
              },
            } = comment || { snippet: { topLevelComment: { snippet: {} } } };

            return (
              <div key={index} className="comment flex">
                <img
                  src={authorProfileImageUrl || userProfile}
                  alt="comment pfp"
                />
                <div>
                  <h3>
                    {authorDisplayName || "Anonymous"}
                    <span>{moment(publishedAt).fromNow()}</span>
                  </h3>
                  <p>{textDisplay}</p>
                  <div className="comment-action flex alc">
                    <div className="comment-like">
                      <svg
                        className="custom-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                      </svg>
                    </div>
                    <p className="likecount">{countConverter(likeCount)}</p>
                    <div className="comment-dislike">
                      <svg
                        className="custom-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <button
          className="commentIncreaser"
          onClick={() => commentIncreaser(LoadedComment)}
        >
          Load More...
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
