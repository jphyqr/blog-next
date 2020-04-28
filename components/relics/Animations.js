import React, { useState } from "react";
import { relicStyles } from "./relicConstants";
import CoinFlip from "../tools/CoinFlip";

const Animations = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="container">
      {/* <video className="cover" autoPlay src="/coinflip2.mp4"></video>
       */}

      <div className="coin">
        <CoinFlip />
      </div>

      <style jsx>
        {`
          .container {
            width: 100%;
            height: 100%;
            position: relative;
          }
          .cover {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
          }
          .coin {
            position: absolute;
            zindex: 5;
            left: 90px;
            bottom: 30px;
            animation: jump 2s forwards;
            opacity: 1;
          }

          @keyframes jump {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-300px);
            }

            100% {
              transform: translateY(50px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Animations;
