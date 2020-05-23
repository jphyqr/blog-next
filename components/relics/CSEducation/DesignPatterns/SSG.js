import React from "react";

const SSG = () => {
  return (
    <div className="container">
      <div className="src">
        <div className="build-bar">
          <div className="build-label">Build Project</div>
        </div>
        <div className="route-bar">
          <div className="route-label">Fetch Routes from Data</div>
        </div>
      </div>
      <div className="db">
        <div className="db-item">
          <span>blog1</span>
          <span>data for blog 1</span>
        </div>
        <div className="db-item">
          <span>blog2</span>
          <span>data for blog 2</span>
        </div>
        <div className="db-item">
          <span>blog3</span>
          <span>data for blog 3</span>
        </div>
      </div>
      <div className="cdn">
        <div className="staticpage">
          <span>website.com/blog1</span>
          <div className="data-bar">
            <div className="data-label">Get Data</div>
          </div>
          <div className="html-bar">
            <div className="html-label">Generate HTML</div>
          </div>
          <p className="renderedhtml">{`<html>Blog1</html>`}</p>
        </div>
        <div className="staticpage">
          <span>website.com/blog1</span>
          <div className="data-bar">
            <div className="data-label">Get Data</div>
          </div>
          <div className="html-bar">
            <div className="html-label">Generate HTML</div>
          </div>
          <p className="renderedhtml">{`<html>Blog2</html>`}</p>
        </div>
        <div className="staticpage">
          <span>website.com/blog1</span>
          <div className="data-bar">
            <div className="data-label">Get Data</div>
          </div>
          <div className="html-bar">
            <div className="html-label">Generate HTML</div>
          </div>
          <p className="renderedhtml">{`<html>Blog3</html>`}</p>
        </div>
      </div>
      <style jsx>
        {`
          .staticpage {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 80%;
            align-items: center;
            background-color: white;
            border: 1px solid black;
            padding: 10px 0px;
            opacity: 0;
          }

          .renderedhtml {
            opacity: 0;
            animation: htmltext1 12s forwards;
          }

          .staticpage:nth-child(1) {
            animation: staticpage 12s forwards;
          }

          .staticpage:nth-child(2) {
            animation: staticpage2 12s forwards;
          }
          .staticpage:nth-child(3) {
            animation: staticpage3 12s forwards;
          }

          @keyframes htmltext1 {
            0%,
            74% {
              opacity: 0;
            }
            75%,
            100% {
              opacity: 1;
            }
          }

          @keyframes staticpage {
            0% {
              opacity: 0;
            }
            8%,
            100% {
              opacity: 1;
            }
          }

          @keyframes staticpage2 {
            0%,
            8% {
              opacity: 0;
            }
            16%,
            100% {
              opacity: 1;
            }
          }

          @keyframes staticpage3 {
            0%,
            16% {
              opacity: 0;
            }
            25%,
            100% {
              opacity: 1;
            }
          }

          .staticpage span {
            background-color: black;
            color: white;
          }

          .build-bar,
          .route-bar,
          .data-bar,
          .html-bar {
            width: 100%;
            background-color: khaki;
            position: relative;
            overflow: hidden;
            height: 20px;
          }

          .build-label,
          .route-label,
          .html-label,
          .data-label {
            z-index: 10;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
          }

          .build-label:after,
          .route-label:after,
          .html-label:after,
          .data-label:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            right: 100%;
            bottom: 0;
            z-index: -1;
            background-color: cornflowerblue;
          }

          .build-label:after {
            animation: build 12s linear forwards;
            background-color: cyan;
          }

          .route-label:after {
            animation: route 12s linear forwards;
            background-color: orange;
          }

          .html-label:after {
            animation: html 12s linear forwards;
            background-color: cornflowerblue;
          }

          .data-label:after {
            animation: data 12s linear forwards;
            background-color: orangered;
          }

          @keyframes build {
            0% {
              transform: translateX(0%);
            }
            75%,
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes route {
            0% {
              transform: translateX(0%);
            }
            25%,
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes data {
            0%,
            25% {
              transform: translateX(0%);
            }
            50%,
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes html {
            0%,
            50% {
              transform: translateX(0%);
            }

            75%,
            100% {
              transform: translateX(100%);
            }
          }
          .db-item {
            display: flex;
            justify-content: space-between;
            background-color: white;
            border: 1px solid black;
          }

          .src:before,
          .db:before,
          .cdn:before {
            width: 100%;
            text-align: center;
            font-size: 20px;
            position: absolute;
            top: -20px;
            background-color: darksalmon;
            color: white;
          }

          .src,
          .db,
          .cdn {
            height: 80%;
            width: 80%;
            display: flex;
            position: relative;
          }
          .cdn {
            justify-content: space-between;
            align-items: center;
          }

          .db,
          .src {
            flex-direction: column;
          }

          .src {
            align-items: center;
            justify-content: space-around;
          }

          .src:before {
            content: "Source Code";
          }

          .db:before {
            content: "Database";
          }

          .cdn:before {
            content: "Webserver";
          }

          .src {
            background-color: aliceblue;
          }

          .db {
          }

          .cdn {
          }

          .src,
          .db,
          .cdn {
            place-self: center;
          }
          .src {
            grid-area: src;
          }
          .db {
            grid-area: db;
          }
          .cdn {
            grid-area: cdn;
          }
          .container {
            display: grid;
            width: 600px;
            height: 400px;
            background-color: beige;
            grid-template-columns: 1fv 1fv;
            grid-template-rows: auto;
            grid-template-areas:
              "src db"
              "cdn cdn";
          }
        `}
      </style>
    </div>
  );
};

export default SSG;
