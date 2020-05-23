import React from "react";

const MultiPageApp = () => {
  return (
    <div className="container">
      <div className="canvas">
        <button onClick={() => forceReload(reload + 1)}>Reload</button>
        <div className="browser">
          <div className="url"></div>
          <div className="navbar">
            <span>Home</span>
            <span>About</span>
            <span>Blog</span>
          </div>

          <div className="content"></div>
        </div>

        <div className="webserver">
          <div className="webpage home">
            <div className="ip">website.com/home</div>
            <div className="script">{`
          
          <html>Home</html>`}</div>
          </div>
          <div className="webpage about">
            <div className="ip">website.com/about</div>
            <div className="script">{`
          
          <html>About</html>`}</div>
          </div>

          <div className="webpage blog">
            <div className="ip">website.com/blog</div>
            <div className="script">{`
          
          <html>Blog</html>`}</div>
          </div>
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

        
.navbar{
    display:flex;
    width: 100%;
    justify-content: space-between;
}
          .browser{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            
          }

          .webpage{
              background-color: grey;
              color: green;
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
            content: "INJECT PRE-PARSED HTML TO MY VEINS!🤤";
            position:absolute;
            right: -100%;
         
          font-size: 15px;
          color: Magenta;
          font-style: italic;
            
          }
         
          .url:before {
            content: "website.com";
            opacity: 0;
            animation: url 3s infinite, url-text 9s ;
          }

          .navbar span:nth-child(1){
            animation: url 3s; 
          }
          .navbar span:nth-child(2){
            animation: url 3s 3s; 
          }
          .navbar span:nth-child(3){
            animation: url 3s 6s; 
          }


          .script:after{
            content: "<html>MyPage</html>";
            height: 10px;
            width: 10px;
            background-color: green;

            position: absolute;
            opacity: 0;
            animation response 3s ;
          }

          .about .script:after{
            animation-delay: 3s;
        }

        .blog .script:after{
            animation-delay: 6s;
        }

          .content:before{
            content: "<html>My Page</html>";
            opacity: 0;
            animation: content 3s infinite, text 9s forwards;
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



        @keyframes url-text {
            0%, 33% {
                content: "website.com/home";
            }
            34%, 66% {
               content: "website.com/about";
           }
           67%, 100% {
               content: "website.com/blog";
           }
        }


         @keyframes text {
             0%, 33% {
                 content: "Home";
             }
             34%, 66% {
                content: "About";
            }
            67%, 100% {
                content: "Blog";
            }
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
            width: 200px;
            color: green;
            position: absolute;
            bottom: 50%;
            right: 5%;
            transform: translateY(50%);
            background-color: black;
            border: 3px solid grey;
            display:flex;
            flex-wrap:wrap;
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

export default MultiPageApp;
