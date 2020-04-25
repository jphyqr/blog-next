import React from "react";
import { themeColors } from "../components/layout/themeConstants";

const SQLVSNoSQL = () => {
  return (
    <div className="container">
      SQL SUCKS NO SQL RULES
      <style jsx>
        {`
          .container {
            height: 450px;
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

export default SQLVSNoSQL;
