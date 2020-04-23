import React from "react";
import { themeColors } from "../components/layout/themeConstants";

const ExplainNext = () => {
  return (
    <div className="container">
      Next .js is cool
      <style jsx>
        {`
          .container {
            height: 430px;
            width: 100%;
            background-color: ${themeColors.DataBackground};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default ExplainNext;
