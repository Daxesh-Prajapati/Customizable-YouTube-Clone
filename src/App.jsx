import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// css
import "./App.css";
// components
import Navbar from "./Components/Navbar";
import VideoPage from "./Components/VideoPage";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import PersonalisationPage from "./Components/PersonalisationPage";
import ChannelPage from "./Components/ChannelPage";
import SearchResult from "./Components/SearchResult";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  const [Category, setCategory] = useState(0);
  const [RegionCode, setRegionCode] = useState("US");

  return (
    <>
      <Navbar setSidebar={setSidebar} setCategory={setCategory} />

      <Sidebar
        sidebar={sidebar}
        Category={Category}
        setCategory={setCategory}
      />

      <Routes>
        <Route
          index
          path="/"
          element={<Feed Category={Category} RegionCode={RegionCode} />}
        />
        <Route
          path="/video/:categoryId/:videoId"
          element={<VideoPage RegionCode={RegionCode} />}
        />
        <Route path="/channel/:channelId" element={<ChannelPage />} />
        <Route
          path="/personalisation"
          element={
            <PersonalisationPage
              RegionCode={RegionCode}
              setRegionCode={setRegionCode}
            />
          }
        />
        <Route path="/search/:q" element={<SearchResult />} />
      </Routes>
    </>
  );
};

export default App;
