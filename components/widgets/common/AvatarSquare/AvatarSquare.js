import React, { useState, useEffect } from "react";
import { widgetHeights, tickerSpeeds } from "../../widgetConstants";
import { themeColors } from "../../../layout/themeConstants";
import JamStacks from "../../../tools/JamStacks";
import { useSelector } from "react-redux";

const AvatarSquare = () => {
  const [animation, showAnimation] = useState(true);
  useEffect(() => {
    const delay = tickerSpeeds.Fixed20 * 1000;
    const timer = setTimeout(() => {
      showAnimation(!animation);
    }, delay);
  }, [animation]);

  const avatarSync = useSelector((state) => state.avatarMatch);

  return (
    <div className="logo-square">
      {avatarSync === "ScheduleTicker" || avatarSync === "WebsiteTicker" ? (
        <JamStacks />
      ) : (
        <img className="logo" src={"/File.jpg"} />
      )}

      <style jsx>
        {`
          .logo {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }

          .logo-square {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: ${widgetHeights.Medium}px;
            border: 2px solid ${themeColors.Secondary};
            box-sizing: border-box;
            background-color: black;
          }
        `}
      </style>
    </div>
  );
};

export default AvatarSquare;
