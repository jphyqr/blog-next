import React from "react";

const SSRApp = () => {
  return (
    <div className="container">
      <div className="canvas">
        <div className="browser">
          <div className="searchbar">
            <div className="loader"></div>
            <div className="url"></div>
          </div>
          <div className="state"></div>
          <div className="client-loaders">
            <div className="client-html-bar">
              <div className="client-html-label">Download HTML</div>
            </div>
            <div className="client-react-bar">
              <div className="client-react-label">Load React</div>
            </div>
            <div className="client-fetch-bar">
              <div className="client-fetch-label">Fetch Data</div>
            </div>
            <div className="client-render-bar">
              <div className="client-render-label">Hydrate HTML with JS</div>
            </div>
          </div>
          <div className="browsercontent"></div>
        </div>
        <div className="webserver">
          <div className="ssr-loaders">
            <div className="react-bar">
              <div className="react-label">Load React</div>
            </div>
            <div className="fetch-bar">
              <div className="fetch-label">Fetch Data</div>
            </div>
            <div className="render-bar">
              <div className="render-label">Render App</div>
            </div>
            <div className="html-bar">
              <div className="html-label">Build HTML</div>
            </div>
          </div>
        </div>
        <div className="googlebot">
          <img src={`/googlebot.jpg`}></img>
        </div>
      </div>
      <style jsx>
        {`
      .browser {
        height: 200px;
        width: 250px;
        position: absolute;
        bottom: 55%;
        transform: translateY(50%);
        left: 5%;
        background-color: white;
        border: 3px solid black;
     
      }

      .timing, .ssr-loaders, .client-loaders {
         
          display:flex;
          flex-direction:column;
          background-color: beige;
         
         
      }

      

      .timing{
        position:absolute;
        top: 30px;
        right: 0;
        width: 200px;
        height: 50px;
      }

      .ssr-loaders, .client-loaders{
          width: 100%;
      }
     
      .tti, .fcp, .react-bar, .fetch-bar, .render-bar, .html-bar,  .client-react-bar, .client-fetch-bar, .client-render-bar, .client-html-bar{
          width: 100%;
          background-color: khaki;
          position: relative;
          overflow:hidden;
          height: 20px;
     
      }

  
      



      .tti-label, .fcp-label, .react-label, .fetch-label, .render-label, .html-label,  .client-react-label, .client-fetch-label, .client-render-label, .client-html-label {
          z-index: 10;
          position:absolute;
          bottom:0;
          left: 0;
          width: 100%;
      }
    

      .tti:after, .fcp:after, .react-label:after, .fetch-label:after, .render-label:after, .html-label:after,  .client-react-label:after, .client-fetch-label:after, .client-render-label:after, .client-html-label:after{
          content: "";
          width: 100%;
          height: 100%;
          position:absolute;
          right: 100%;
          bottom: 0;
          z-index: 1;
          background-color:yellow;
          animation: tti 10s linear infinite;
      }

    .react-label:after, .fetch-label:after, .render-label:after, .html-label:after,  .client-react-label:after, .client-fetch-label:after, .client-render-label:after, .client-html-label:after {
    z-index: -1;

}

.react-label:after {
    animation: react 10s linear infinite;
    background-color: cyan;
} 

.fetch-label:after {
    animation: fetch-data 10s linear infinite;
    background-color: orange;
}

.render-label:after{
    animation: render-ssr 10s linear infinite;
    background-color: yellow;
}

.html-label:after{
    animation: render-ssr 10s linear infinite;
    background-color: orangered;

}

.client-react-label:after {
    animation: client-react 10s linear infinite;
    background-color: cyan;
} 

.client-fetch-label:after {
    animation: client-react 10s linear infinite;
    background-color: orange;
}

.client-render-label:after{
    animation: hydrate 10s linear infinite;
    background-color: yellow;
}

.client-html-label:after{
    animation: download-html 10s linear infinite;
    background-color: orangered;

}



@keyframes react {
    0%,19%{
        transform: translateX(0%);
    }
    30%, 100%{
        transform: translateX(100%); 
    }

}

@keyframes fetch-data {
    0%, 29%{
        transform: translateX(0%);
    }
    40%, 100%{
        transform: translateX(100%); 
    }

}
@keyframes render-ssr {
    0%, 39%{
        transform: translateX(0%);
    }
    50%, 100%{
        transform: translateX(100%); 
    }

}

@keyframes download-html {
    0%,49%{
        transform: translateX(0%);
    }
    60%, 100%{
        transform: translateX(100%); 
    }

}

@keyframes client-react {
    0%,59%{
        transform: translateX(0%);
    }
    70%, 100%{
        transform: translateX(100%); 
    }

}
@keyframes hydrate {
    0%,69%{
        transform: translateX(0%);
    }
    80%, 100%{
        transform: translateX(100%); 
    }

}

      .fcp:after{
          background-color:cyan;
          animation: fcp 10s linear infinite;
      }
      @keyframes tti {
          0%,{
              transform: translateX(0%);
          }
          90%, 100%{
              transform: translateX(90%); 
          }
      }

      @keyframes fcp {
        0%,{
            transform: translateX(0%);
        }
        50%, 100%{
            transform: translateX(50%); 
        }
    }

      .fcp{
          width: 100%;
          background-color: lightsteelblue;
          height: 20px;
          overflow:hidden;
      }


      .apikey{
         
          background-color: orange;
          border: 3px solid green;
          height: 10px;
          width: 10px;
      }
      .rootkey{
         
          background-color: green;
          border: 3px solid black;
          height: 10px;
          width: 10px;
      }
      .header{
          font-size: 22px;
          width: 100%;
          text-align: left;
      }
      .phase{
          grid-area: phase;
      }
      .client{
          grid-area:client;
      }
      .server{
          grid-area:server;
      }

      .phase, .client, .server{
          place-self: center;
          display:flex;
          flex-direction:column;
          width: 100%;
          
      }

      .phase-step:before{
          content: "test";
          animation: phase-step 10s infinite;
      }

      .client-step:before{
          content: "test";
          animation: client-step 10s infinite;
      }

      .server-step:before{
          content: "test";
          animation: server-step 10s infinite;
      }


      @keyframes phase-step {
        0%, 38.45%{
            content:"Initial Load";
        }
        38.77%, 61.6%{
            content:"User Input";
        }
        61.7%, 69.21%{
            content:"Re-render";
        }
        70%, 100%{
            content: "User Input";
        }
          
      }

      @keyframes server-step {
      0%, 23% {
          content: "Await Requests";
      }
      24%, 30%{
          content: "Transmit App";
      }
      
      31%, 100%{
          content: "Await Requests";
      }
           
      }

      @keyframes client-step {

         0%, 28% {
          content: "URL Input";
         }
         29%, 38% {
          content: "🛑Download/Build/Paint";
         }
         
         
   
         
          39%, 61%{
              content: "Await Input";
          }

          61.7%, 69.21%{
              content:"update  app state";
          }

          70%, 78% {
              content:"Re-build/Re-paint";
          }
          79%, 100%{
              content: "Await Input"; 
          }
      }

.log:before{
  position:absolute;
  top: -20px;
  font-style: italic;
  content: "Whats going on";
}
      .log{
          position:absolute;
          border: 1px solid black;
          bottom: 0;
          right: 0;
          display:grid;
          grid-template-columns: 100px 200px 150px;
          grid-template-rows: auto;
          grid-template-areas:
           "phase client server";
           background-color: beige;
      }
      .networkrequest{
          height: 15px;
          width: 15px;
          background-color: red;
      }

   
    .legend{
        display:flex;
        justify-content: space-around;
    }


    .item{display:flex;}

  
      .script:before{
          content:"site.com/";
           font-weight: bold;
           font-size: 24px;
           width:100%;
           text-align: center;
           position:absolute;
           top: -30px;
           background-color: green;
           color: black;
           

      }

      @keyframes script {
          0%, 39%{ opacity: 0;}
          40%, 100%{ opacity: 1;}
      }

      .script:after{
          content: "index.html";
          height: 10px;
          width: 10px;
          background-color: green;

          position: absolute;
          opacity: 0;
          animation: response 10s infinite;
        }
   
      .script{
          background-color:red;
          position:relative;
          display:flex;
          flex-direction: column;
          justify-content:center;
          align-items:center;
          border: 2px solid black;
          background-color: white;
          color: black;
          font-style: italic;
          animation: script 10s infinite;
           opacity: 0;

      }

      .searchbar{
          display:flex;
          width: 100%;
      }

      .loader, .renderer, .networkkey, .renderkey{
          height: 15px;
          width: 15px;
          border-radius: 50%;
          border: 3px solid black;
        
          position:relative;
          overflow:hidden;
      }


      .loader:before, .networkkey:before{
          content:"";
     height: 15px;
     width: 15px;
     background-color: blue;
     position:absolute;
     bottom:0px;
     left: 50%;
     z-index: 5;
     animation: spin 10s infinite;
     transform-origin: left;
      }
      .renderer, .renderkey{
          height: 40px;
          width: 40px;
          opacity: 0;
          
          position:relative;
      }

      .renderkey{
          opacity: 1;
          height 15px;
          width: 15px;
      }
      

      .renderer{
          animation: render 10s infinite;
      }

      .renderer:before, .renderkey:before {
          content:"";
     height: 40px;
     width: 40px;
     background-color: orange;
     position:absolute;
     bottom:0px;
     left: 50%;
     opacity: 0;
     z-index: 5;
 
     transform-origin: left;
      }

      .renderer:before{
          animation: render 10s infinite;
      }

      .renderkey:before{
          opacity: 1;
      }


      @keyframes render {
          0%, 29% {
transform: rotateZ(0deg);
opacity: 0;
          }
          30%, 40%{
              opacity: 1;
              transform: rotateZ(720deg); 
          }
         41%, 100%{
              opacity: 0;
                
          }
         
         
      }
      

      @keyframes spin {
          0%, 15.38%{
transform: rotateZ(0deg);
opacity: 0;
          }
          15.4%, 30.76%{
              opacity: 1;
          }
          30.78%, 100%{transform: rotateZ(720deg); opacity: 0;}
         
      }
      
    @keyframes l {
      0%, 30% {
          background-color: black;
         }
      31%, 33%,35%,37% {
          background-color: red;
      }
      32%,34%,36%,38%{
          background-color: black;
      }

      39%, 100% {
          background-color: black;
      }  
    }
   
      .api{
          background-color:orange;
          color: green;
          transform: rotateY(50deg);
          transform-origin: left;
          font-size: 20px;
          border: 3px solid green;
      }
      .api:before{
          content:"website.com/blogs";
      }
    

      .api:after{

          content:"blogs:{blogs}";
          opacity:0;
          position: absolute;
          background-color: pink;
          animation: api-response 10s infinite;
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
        content: "I will index this HTML!!";
        position:absolute;
        right: -150%;
      font-size: 15px;
           color: crimson;
           font-style: italic;
        
      }
     
      .url:before {
        content: "website.com";
        opacity: 0;
        animation: url 10s infinite;
      }


  


      .url:after {
        content: "";
        height: 10px;
        width: 10px;
        background-color: red;

        position: absolute;
        opacity: 0;
        animation request 10s infinite;
      }

      @keyframes url {
          0%, 7.69% {
            opacity: 1;
          }
          7.69%, 15.38% {
            opacity: 1;
            color: red;
          }
          15.38%, 100% {
            opacity: 1;
            color: black;
          }
        }
      @keyframes request {

        


          0%, 15.38%{
              opacity: 0;
              
          }
         15.39%{
              opacity: 1;
              transform: translate(0px, 0px);
          }
          23.07% {
              transform: translate(400px, 100px); 
          }
          24%, 46.14% {
            opacity: 0;
            transform: translate(0px, 100px); 
          }
          46.14%{
              opacity: 0;
            transform: translate(100px, 150px);  
          }
          53.83%{
              opacity: 1;
              transform: translate(380px, 190px);    
          }
          55%, 100%{
              opacity: 0;
              transform: translate(380px, 190px);  
          }
          
      }
      @keyframes response {
        0%, 23.07%{
            opacity: 0;
            
        }
        23.7%{
            opacity: 1;
            transform: translateX(-50px);
        }
        30.76%{
          opacity: 1;
          transform: translateX(-300px); 
        }
        30.77%, 38.45%{
            opacity:1;
            transform: translateX(-300px); 
        }
        39.77%, 100%{
          opacity:0;
          transform: translateX(-300px); 
      }

    }

    @keyframes api-response {
      0%, 53.8%{
          opacity: 0;
          
      }

      53.9%{
          opacity: 1;
          transform: translateX(-50px);
      }
      61.52%{
        opacity: 1;
        transform: translate(-450px, -100px); 
      }
      62%, 100%{
        opacity:0;
        transform: translateY(-450px, -100px); 
    }

  }



    @keyframes click {
      0%, 45%{
          background-color: palegreen;
      }
      48%, 49%{
          background-color: red;
      }
      49%, 100%{
          background-color: palegreen;
      }
  }
  
        @keyframes content {
          0%, 59% {
            opacity: 0;
          }
          60%, 100% {
            opacity: 1;
          }
          
        }

       
        @keyframes interactive {
            0%, 79% {
              opacity: 0;
            }
        80%, 100% {
              opacity: 1;
            }
            
          }

          @keyframes  button-interactive {
            0%, 79% {
              background-color: lightgrey;
            }
        80%, 100% {
            background-color: palegreen;
            }
            
          }


        @keyframes updateui {
          0%, 76.9% {
            content: "MyPage";
          }
          77%, 100% {
            content: "Blogs";
          }
          
        }

        @keyframes state {
          0%, 61.52% {
            content:"showPage: My Page";
            opacity: 0.8
          }
          70%, 100% {
              opacity: 0.8;
            content:"showPage: Blogs; blogs: blogs";
          }
          
        }


    .browsercontent {
      height: 50px;
      width: 90%;
      background-color: lightgrey;
    }
   

    .state{
        height: 50px;
        width: 90%;
        opacity: 0;
        background-color: pink;
        animation: interactive 10s infinite;
        border: 1px dashed black;
    }
    .state:before{
        content:"Client State (not visible): ";
    }

    .state:after{
        content:"showPage: My Page";
        animation: state 10s infinite;
    
    }

    .browsercontent:before{
      content: "My Page";
      opacity: 0;
      animation: content 10s infinite;
  }

  .browsercontent:after{
      content: "Get Blogs";
      margin-left: 10px;
      height: 10px;
      width: auto;
      background-color: lightgrey;
      opacity: 1;
      animation: content 10s infinite, button-interactive 10s infinite;
  }







      .browser:before {
        content: "web browser";
        position: absolute;
        font-size: 24px;
        top: -30px;
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
        font-family: sans-serif;
      }
    `}
      </style>
    </div>
  );
};

export default SSRApp;
