import React from "react";
import { Link } from "react-router-dom";

// assests import
import codeWithHarry from "../assets/codeWithHarry.jpg";
import harikratSingh from "../assets/harkiratSingh.jpg";
import joshTriedCoding from "../assets/joshTriedCoding.jpg";
import loveBabber from "../assets/loveBabber.jpg";
import thappaTechnical from "../assets/thappaTechnical.jpg";

const Sidebar = ({ sidebar, Category, setCategory }) => {
  return (
    <section
      className={`sidebarsection  ${sidebar ? "" : "sidebarsection-closed"}`}
    >
      <div className="sidebar">
        <div className="category flex">
          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 0 ? "active-options" : ""
            }`}
            onClick={() => setCategory(0)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </div>
            <div className="option-name">Home</div>
          </Link>
          {/* <Link to="/" 
            className={`category-options flex alc ${
              Category === 42 ? "active-options" : ""
            }`}
            onClick={() => setCategory(42)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z" />
              </svg>
            </div>
            <div className="option-name ">Shorts</div>
          </Link> */}
          <div className="division-line"></div>

          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 10 ? "active-options" : ""
            }`}
            onClick={() => setCategory(10)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
              </svg>
            </div>
            <div className="option-name">Music</div>
          </Link>
          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 1 ? "active-options" : ""
            }`}
            onClick={() => setCategory(1)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" />
              </svg>
            </div>
            <div className="option-name">Movies</div>
          </Link>
          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 20 ? "active-options" : ""
            }`}
            onClick={() => setCategory(20)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
              </svg>
            </div>
            <div className="option-name">Gaming</div>
          </Link>
          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 2 ? "active-options" : ""
            }`}
            onClick={() => setCategory(2)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
            </div>
            <div className="option-name">Automobiles and Vehicles</div>
          </Link>
          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 25 ? "active-options" : ""
            }`}
            onClick={() => setCategory(25)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z" />
              </svg>
            </div>
            <div className="option-name">News</div>
          </Link>
          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 24 ? "active-options" : ""
            }`}
            onClick={() => setCategory(24)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </div>
            <div className="option-name">Entertainment</div>
          </Link>
          <Link
            to="/"
            className={`category-options flex alc ${
              Category === 28 ? "active-options" : ""
            }`}
            onClick={() => setCategory(28)}
          >
            <div className="option-icon custom-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
              </svg>
            </div>
            <div className="option-name">Technology </div>
          </Link>
          {/* <div className={`category-options flex alc ${Category===0?"active-options":""}`} onClick={()=>setCategory(0)}>
            <div className="option-icon custom-svg"></div>
            <div className="option-name"></div>
          </div> */}
        </div>
        <div className="division-line-two"></div>
        <div className="suscribe flex">
          <h3 className="suscribe-title">Suscribed</h3>
          <Link
            to="/channel/UCeVMnSShP_Iviwkknt83cww"
            className="suscribe-box flex alc"
          >
            <img
              src={codeWithHarry}
              alt="Code With Harry"
              className="suscribe-img"
            />
            <p className="suscribe-name">Code With Harry</p>
          </Link>
          <Link
            to="/channel/UCvGwM5woTl13I-qThI4YMCg"
            className="suscribe-box flex alc"
          >
            <img
              src={joshTriedCoding}
              alt="Josh Tried Coding"
              className="suscribe-img"
            />
            <p className="suscribe-name">Josh Tried Coding</p>
          </Link>
          <Link
            to="/channel/UCWX0cUR2rZcqKei1Vstww-A"
            className="suscribe-box flex alc"
          >
            <img
              src={harikratSingh}
              alt="Harkirat Singh"
              className="suscribe-img"
            />
            <p className="suscribe-name">Harkirat Singh</p>
          </Link>
          <Link
            to="/channel/UCldyi11QYNXYXiLjVbyw5dA"
            className="suscribe-box flex alc"
          >
            <img src={loveBabber} alt="Love Babber" className="suscribe-img" />
            <p className="suscribe-name">CodeHelp - by Babbar</p>
          </Link>
          <Link
            to="/channel/UCwfaAHy4zQUb2APNOGXUCCA"
            className="suscribe-box flex alc"
          >
            <img
              src={thappaTechnical}
              alt="Thappa Technical"
              className="suscribe-img"
            />
            <p className="suscribe-name">Thappa Technical</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
