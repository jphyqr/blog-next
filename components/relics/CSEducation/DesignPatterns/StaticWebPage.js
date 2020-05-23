import React, { useState, useEffect } from "react";

const StaticWebPage = ({ forceReload, reload }) => {
  return (
    <div className="container">
      <div className="canvas">
        <button onClick={() => forceReload(reload + 1)}>Reload</button>
        <div className="browser">
          <div className="url"></div>
          <div className="content"></div>
        </div>

        <div className="webserver">
          <div className="ip">website.com</div>
          <div className="script">{`
          
          <html>My Page</html>`}</div>
        </div>
        <div className="googlebot">
          <img src={`/googlebot.jpg`}></img>
        </div>
      </div>
      <style jsx>
        {`
          .browser {
            height: 100px;
            width: 150px;
            position: absolute;
            bottom: 50%;
            transform: translateY(50%);
            left: 5%;
            background-color: white;
            border: 3px solid black;
          }

          .browser,
          .webserver {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
          }
          .url {
            width: 90%;
            background-color: grey;
            height: 20px;
          }

          .googlebot{
              height: 100px;
              width: 150px;
              position:absolute;
              bottom: 10px;

          }
          .googlebot img{
            height: 100px;
            width: 150px;
          }

          .googlebot:before{
            content: " I can understand this site";
            position:absolute;
            right: -100%;
          font-size: 20px;
               background-color: yellow;
            
          }
         
          .url:before {
            content: "website.com";
            opacity: 0;
            animation: url 3s infinite;
          }


          .script:after{
            content: "<html>MyPage</html>";
            height: 10px;
            width: 10px;
            background-color: green;

            position: absolute;
            opacity: 0;
            animation response 3s infinite;
          }

          .content:before{
            content: "<html>My Page</html>";
            opacity: 0;
            animation: content 3s infinite;
        }
          .url:after {
            content: "";
            height: 10px;
            width: 10px;
            background-color: red;

            position: absolute;
            opacity: 0;
            animation request 3s infinite;
          }

      
          @keyframes request {
              0,20%, 50%, 100%{
                  opacity: 0;
                  
              }
              25%{
                  opacity: 1;
                  transform: translateX(0);
              }
              45%{
                opacity: 1;
                transform: translateX(400px); 
              }
              100%{
                opacity: 0;
                transform: translateX(400px);   
              }

          }
          @keyframes response {
            0%, 45%{
                opacity: 0;
                
            }
            50%{
                opacity: 1;
                transform: translateX(0);
            }
            75%{
              opacity: 1;
              transform: translateX(-400px); 
            }
            80%,100%{
                opacity:0;
                transform: translateX(-400px); 
            }

        }
           
          @keyframes url {
            0% {
              opacity: 0;
            }
            5% {
              opacity: 1;
              color: red;
            }
            20%, 100% {
              opacity: 1;
              color: black;
            }
          }

          @keyframes content {
            0%, 70% {
              opacity: 0;
            }
            75% {
              opacity: 1;
              color: red;
            }
            95%, 100% {
              opacity: 1;
              color: black;
            }
          }

          .content {
            height: 50px;
            width: 90%;
            background-color: lightgrey;
          }
          .browser:before {
            content: "web browser";
            position: absolute;
            top: -20px;
          }
          .webserver {
            height: 200px;
            width: 100px;
            color: green;
            position: absolute;
            bottom: 50%;
            right: 5%;
            transform: translateY(50%);
            background-color: black;
            border: 3px solid grey;
          }
          .webserver:before {
            content: "web server";
            position: absolute;
            top: -20px;
          }

          .canvas {
            height: 400px;
            width: 600px;
            background-color: antiquewhite;
            position: relative;
            font-family: "San Fransisco";
          }
        `}
      </style>
    </div>
  );
};

export default StaticWebPage;
