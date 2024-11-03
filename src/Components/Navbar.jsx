import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// icons
import logo from "/public/youtube.svg";
import userProfile from "../assets/user-solid.svg";

const Navbar = ({ setSidebar, setCategory }) => {
  const Location = useNavigate();

  const [Search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    Location(`search/${Search}`);
    setSearch("");
  };

  return (
    <nav
      className="navbar flex jsc alc"
      onScroll={(e) => {
        e.target.style.backgroundColor = "transparent";
      }}
    >
      <div className="navbar-left flex alc">
        <div
          className="menu-icon custom-svg"
          onClick={() => setSidebar((prev) => (prev ? false : true))}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <Link
          to="/"
          className="logo-box flex alc"
          onClick={() => setCategory(0)}
        >
          <img className="navbar-svg" src={logo} alt="youtube logo" />
          <h3 className="logo-text">YouTube</h3>
        </Link>
      </div>
      <div className=" navbar-middle ">
        <form className="search-box flex alc" onSubmit={handleSearch}>
          <input
            className="search-tag"
            type="text"
            placeholder="Search "
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="search-btn custom-svg"
            onClick={handleSearch}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </form>
      </div>
      <div className="navbar-right profile-box flex alc">
        <Link to={"/personalisation"} title="Personalisation">
          <button className="personalize custom-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" />
            </svg>
          </button>
        </Link>
        <button className="user-profile navbar-svg">
          <img
            className="user-profile-svg"
            src={userProfile}
            alt="User Profile"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
