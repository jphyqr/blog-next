import React from "react";
import _ from "lodash";
const RouletteWheel = () => {
  const renderSegments = () => {
    return _.times(36, (i) => {
      return (
        <div className="segment">
          <style jsx>{`
            .segment {
              height: 100%;
              position: absolute;
              width: 100%;
              transform: translate(0, -50%) rotate(90deg)
                rotate(${(i - 1) * 10}deg);
              transform-origin: 50% 100%;
              overflow: hidden;
            }

            .segment:after,
            .segment:before {
              content: "";
              height: 100%;
              position: absolute;

              width: 100%;
            }
            .segment:before {
              background: ${i % 2 == 0 ? "red" : "black"};
              content: "";
              height: 100%;
              position: absolute;
              transform: translate(0, 100%) rotate(${i * 10}deg);
              transform-origin: 50% 0;
            }
            .segment:after {
              opacity: ${i % 2 == 0 ? 1 : 0};
            }
          `}</style>
        </div>
      );
    });
  };

  return (
    <div className="outer">
      <div className="container">
        <div className="wheel">{renderSegments()}</div>
      </div>

      <style jsx>
        {`
          .container {
            height: 160px;
            width: 160px;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wheel {
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: grey;
            position: relative;
            top: 0;
            left: 0;
            overflow: hidden;
            animation: spin 7s ease-in-out;
          }

          .outer {
            display: flex;
            flex-direction: column;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(2160deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default RouletteWheel;
