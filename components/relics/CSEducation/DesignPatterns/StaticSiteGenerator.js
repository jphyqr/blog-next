import React from "react";

const StaticSiteGenerator = () => {
  return (
    <div className="container">
      <style jsx>
        Static Site Generator
        {`
          .container {
              width:100%;
              height: 100%
              position:relative;
          }
        `}
      </style>
    </div>
  );
};

export default StaticSiteGenerator;
