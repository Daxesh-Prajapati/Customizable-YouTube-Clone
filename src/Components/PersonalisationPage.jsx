import React, { useState } from "react";
import { themes, fonts, countryData } from "../../public/personalisationAssets";

const PersonalisationPage = ({ RegionCode, setRegionCode }) => {
  const [Theme, setTheme] = useState("");
  const [Font, setFont] = useState("");

  const root = document.documentElement;

  const setThemeVariables = (theme) => {
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  const setFontVariable = (font) => {
    root.style.setProperty("--fontFamily", fonts[font]);
  };

  React.useEffect(() => {
    if (Theme != "") setThemeVariables(themes[Theme]);
  }, [Theme]);

  React.useEffect(() => {
    if (Font != "") setFontVariable(Font);
  }, [Font]);

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  const handleFontChange = (font) => {
    setFont(font);
  };

  return (
    <div className="personalisation-page flex">
      <form>
        <div className="regionCode">
          <h1>Region</h1>
          <select
            onChange={(e) => setRegionCode(e.target.value)}
            value={RegionCode}
          >
            {countryData.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="theme flex">
          <h1 className="theme">Theme</h1>
          <div className="theme-option-box flex">
            {Object.keys(themes).map((themeKey) => (
              <div key={themeKey} className="theme-option">
                <input
                  type="radio"
                  id={themeKey}
                  name="theme"
                  checked={Theme === themeKey}
                  onChange={() => handleThemeChange(themeKey)}
                />
                <label htmlFor={themeKey}>{themeKey}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="font flex">
          <h1 className="font">Font</h1>
          {Object.keys(fonts).map((fontKey) => (
            <div key={fontKey} className="font-option">
              <input
                type="radio"
                id={fontKey}
                name="font"
                checked={Font === fontKey}
                onChange={() => handleFontChange(fontKey)}
              />
              <label htmlFor={fontKey}>{fontKey}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default PersonalisationPage;
