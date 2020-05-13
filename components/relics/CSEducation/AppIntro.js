import React, { useState } from "react";

const AppIntro = () => {
  const [content, selectContent] = useState("phase2stack");

  const renderPhase2Stack = () => {
    return (
      <div className="container">
        <h1>Programming Languages</h1>
        <h3>
          formal language, with a set of instructions to produce outputs. Used
          in programs to implement algorithms
        </h3>

        <h2>Phase 2</h2>

        <div className="card client">
          <span className="title">Client Language</span>
          <span className="language">JavaScript</span>
          <div className="js-parent">
            <img className="js" src={"/jslogo.jpg"}></img>
          </div>
        </div>

        <div className="card structure">
          <span className="title">Client Structure</span>
          <span className="language">HTML5</span>
          <div className="html5-parent">
            <img className="html5" src={"/html5logo.jpg"}></img>
          </div>
        </div>

        <div className="card presentation">
          <span className="title">Client Presentation</span>
          <span className="language">CSS</span>
          <div className="css-parent">
            <img className="css" src={"/csslogo.jpg"}></img>
          </div>
        </div>

        <div className="card server">
          <span className="title">Server Language</span>
          <span className="language">Node.js</span>
          <img src={"/nodelogo.jpg"}></img>
        </div>

        <div className="card database">
          <span className="title">Database Language</span>
          <span className="language">NoSQL(Firestore API)</span>
          <img src={"/firebaselogo.jpg"}></img>
          <ul>
            <li>createPost</li>
            <li>deletePost</li>
            <li>getPosts</li>
          </ul>
          <hr />
        </div>

        <style jsx>{`
          .js,
          .html5,
          .css {
            position: absolute;
            transform: rotate(0deg);
            transition: transform 0.7s linear;
            top: -40px; /* -child size/2 */
            left: 110px; /* parent size/2 - child size/2 */
            animation: rotate-child 3s forwards;
          }

          .js-parent,
          .html5-parent,
          .css-parent {
            position: relative;
            width: 300px;
            height: 300px;
            border: 0px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            transform: translateY(40px) rotate(0deg);
            transition: transform 0.7s linear;
            z-index: 10;
          }

          .presentation:before {
            content: "React";
            background-color: black;
            height: 25px;
            width: 100%;
            color: blue;
            font-size: 25px;
            position: absolute;

            opacity: 0;
            top: 20px;
            animation: appear 0.5s forwards linear 2.1s;
          }

          .server {
            animation: blur 1s forwards 4s;
          }
          @keyframes blur {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0.1;
            }
          }

          .database ul {
            margin: 0;
            padding: 0;
          }

          h2 {
            position: relative;
          }
          h2:before {
            content: "Use React for front end framework";
            height: 30px;
            background-color: pink;
            color: black;
            width: auto;
            position: absolute;
            bottom: 0;
            left: 120px;
            animation: steps 16s forwards linear;
          }
          @keyframes steps {
            0%,
            20% {
              content: "Use React for front end framework";
              background-color: pink;
            }

            25%,
            45% {
              content: "Replace Server with Cloud Functions";
              background-color: orange;
            }

            55%,
            75% {
              content: "Connect Front-end API";
              background-color: red;
            }
            80%,
            100% {
              content: "JAMStack: Javascript, APIs, Markup";
              background-color: green;
            }
          }

          .database li {
            list-style: none;
            margin: 10px;
            padding: 5px;
            font-family: sans-serif;
            font-size: 20px;
            text-align: center;
            border: 3px solid orange;
            color: green;
            background-color: black;
            width: 100%;
            opacity: 0;
            animation: swing 0.2s forwards linear;
            transform-origin: start;
          }

          .database li:nth-child(1) {
            animation-delay: 5s;
          }
          .database li:nth-child(2) {
            animation-delay: 5.5s;
          }

          .database li:nth-child(3) {
            animation-delay: 6s;
          }

          .database li:nth-child(3):before {
            content: "";

            border-bottom: 8px solid red;
            border-right: 8px solid red;
            border-left: 8px solid red;
            height: 100px;
            width: 900px;
            position: fixed;
            bottom: -100px;
            left: -900px;
            opacity: 0;
            animation: appear 1s forwards 8s;
          }

          .database li:nth-child(2):after {
            height: 30px;
            width: 30px;
            border 4px solid;
            border-radius: 50%;
            position: absolute;
            content: "";
            bottom: -60px;
            left: 0px;
            animation: req 2s infinite 8s,  red-lighting 1s forwards infinite;
            transform: translate(-900px, 50px);
          }
          @keyframes red-lighting {
            0% {
              color: black;
              text-shadow: none;
            }

            40%,
            60% {
              color: red;
              text-shadow: 0 0 7px red, 0 0 50px red;
            }

            100% {
              color: black;
              text-shadow: none;
            }
          }

          @keyframes req {
            0% {
              transform: translate(-900px, 50px);
              background-color: yellow;
              border-color: black;
            }
            16% {
              transform: translate(-900px, 100px);
              background-color: yellow;
              border-color: black;
            }
            32% {
              transform: translate(0px, 100px);
              background-color: yellow;
              border-color: black;
            }
            48% {
              transform: translate(0px, 0px);
              background-color: yellow;
              border-color: black;
            }
            63% {
              transform: translate(0px, 100px);
              background-color: green;
              border-color: orange;
            }
            72% {
              transform: translate(-900px, 100px);
              background-color: green;
              border-color: orange;
            }
            100% {
              transform: translate(-900px, 50px);
              background-color: green;
              border-color: orange;
            }
          }
          .database li:nth-child(3):after {
            content: "HTTP Request to API endpoints";
            color: white;
            font-size: 30px;
            background-color: red;
            height: 30px;
            width: auto;
            position: fixed;
            left: -1200px;
            bottom: -150px;
            opacity: 0;
            animation: appear 1s forwards 8.5s;
          }

          .js-parent {
            position: relative;
          }
          .js-parent:after,
          .html5-parent:after,
          .css-parent:after {
            content: "";
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border: 5px solid green;
            position: absolute;
            bottom: 275px;
            left: 135px;
            z-index: 20;
            opacity: 0;
            animation: appear forwards 1s 12s;
          }

          .html5-parent:after {
            height: 30px;
            width: 30px;
            bottom: 230px;
            left: 129px;
            animation-delay: 14s;
          }
          .css-parent:after {
            height: 30px;
            width: 30px;
            z-index: 30;
            bottom: 375px;
            left: 310px;
            animation-delay: 13s;
          }

          @keyframes swing {
            0% {
              transform: translateX(0px) rotateY(0deg);
              opacity: 0;
            }

            100% {
              transform: translateX(-100px) rotateY(60deg);
              opacity: 1;
            }
          }

          .presentation .title:before {
            content: "Front-end Framework";
            height: 20px;
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: pink;
            color: black;
            opacity: 0;
            animation: appear 0.5s forwards linear 1.9s;
          }
          .presentation:after {
            content: "";
            width: 100%;
            height: 150px;
            position: absolute;
            top: 100px;
            left: 25px;
            background-color: pink;
            background: url("/reactlogo.jpg") no-repeat;
            opacity: 0;
            animation: appear 0.5s forwards linear 2s;
          }

          @keyframes appear {
            0% {
              opacity: 0;
              transform: scale(1);
            }
            50% {
              transform: scale(2);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .html5-parent {
            animation: rotate-html5 3s forwards;
          }

          .js-parent {
            animation: rotate-js 3s forwards;
          }
          .css-parent {
            animation: rotate-css 3s forwards;
            z-index: 10;
          }

          @keyframes rotateMid {
            0% {
              transform: rotateX(0deg);
            }
            100% {
              transform: rotateX(45deg);
            }
          }

          .js-parent,
          .js {
            animation-delay: 0.5s;
          }

          .html5 {
            animation-delay: 0.6s;
          }

          .html5-parent {
            animation-delay: 0.6s, 0s;
          }

          .css-parent,
          .css {
            animation-delay: 0.7s;
          }

          @keyframes rotate-child {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(540deg);
            }
          }

          @keyframes rotate-js {
            0% {
              transform: rotate(0deg);
            }

           
            100% {
              transform: rotate(-540deg) rotateX(360deg) translateX(100px);
            }
          }

          @keyframes rotate-html5 {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(-540deg) rotateX(360deg);
            }
          }
          @keyframes rotate-css {
            0% {
              transform: rotate(0deg);
            }
           
            100% {
              transform: rotate(-540deg) rotateX(360deg) translateX(-100px);
            }
          }

          .html5 {
          }

          .css {
          }

          @keyframes react {
            0% {
              transform: translate(0px, 0px);
            }
            50% {
              transform: translate(50px, 50px);
            }
            100% {
              transform: translate(0px, 0px);
            }
          }

          h1 {
            grid-area: header;
          }

          h3 {
            grid-area: sub;
          }

          h2 {
            grid-area: stack;
          }

          .card {
            display: flex;
            flex-direction: column;
            width: 100%;
            background-color: lightgrey;
            align-items: center;
          }

          .language {
            background-color: black;
            width: 100%;
            font-size: 20px;
            text-align: center;
          }

          .client .language {
            color: yellow;
          }

          .client {
            animation: center 3s forwards linear;
          }

          .presentation {
            animation: move-left 3s forwards linear;
          }
          @keyframes center {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(170px);
            }
          }
          @keyframes move-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-170px);
            }
          }

          .structure .language {
            color: red;
          }

          .structure {
            grid-area: structure;
          }

          .presentation .language {
            color: blue;
          }

          .presentation {
            grid-area: presentation;
            position: relative;
          }
          .server .language {
            color: green;
          }
          .database .language {
            color: orange;
          }

          .card img {
            height: 100px;
            width: auto;
            object-fit: cover;
          }
          .client {
            grid-area: client;
          }

          .database {
            grid-area: database;
            z-index: 0;
          }
          .container {
            display: grid;
            grid-template-columns: 20% 20% 20% 20% 20%;
            grid-template-rows: auto;
            grid-template-areas:
              "header header header header header"
              "sub sub sub sub sub"
              "stack stack stack stack stack"
              "client structure presentation server database"
              "footer footer footer footer footer";
          }

          grid-gap: 10px 10px;
        `}</style>
      </div>
    );
  };

  const renderLanguages = () => {
    return (
      <div className="container">
        <h1>Programming Languages</h1>
        <h3>
          formal language, with a set of instructions to produce outputs. Used
          in programs to implement algorithms
        </h3>

        <h2>Phase 1: Learn fundamental full-stack web technologies</h2>

        <div className="card client">
          <span className="title">Client Language</span>
          <span className="language">JavaScript</span>
          <img src={"/jslogo.jpg"}></img>

          <ul>
            <li>Client Side Language</li>
            <li>Executed in browser (and mobile browsers)</li>
            <li>👍Lots of support, docs libraries courses</li>
            <li>👍 all browsers support</li>
            <li>👍 in demand jobs</li>
            <li>👍 basis for back-end dev(node.js)</li>
            <li>👎Loosely typed/hard to debug</li>
          </ul>
        </div>

        <div className="card structure">
          <span className="title">Client Structure</span>
          <span className="language">HTML5</span>
          <img src={"/html5logo.jpg"}></img>

          <ul>
            <li>Markup language for content on web </li>
            <li>Cross-platform (works mobile)</li>
            <li>👍 industry standard</li>
            <li>👍 all browsers support</li>
            <li>👍 new powerful features (ie: video, canvas)</li>
          </ul>
        </div>

        <div className="card presentation">
          <span className="title">Client Presentation</span>
          <span className="language">CSS</span>
          <img src={"/csslogo.jpg"}></img>

          <ul>
            <li>Describes how HTML elements should be displayed</li>
            <li>Saves lots of work</li>
            <li>👍Lots of support, docs libraries courses</li>
            <li>👎 hard to debug</li>
          </ul>
        </div>

        <div className="card server">
          <span className="title">Server Language</span>
          <span className="language">Node.js</span>
          <img src={"/nodelogo.jpg"}></img>
          <ul>
            <li>Javascript run outside of browser (CPU)</li>
            <li>Allow for common code</li>
            <li>Single Threaded/Non blocking</li>
            <li>👍learn node while learning JS</li>
            <li>👎Loosely typed/hard to debug</li>
          </ul>
        </div>

        <div className="card database">
          <span className="title">Database Language</span>
          <span className="language">NoSQL(Firestore API)</span>
          <img src={"/firebaselogo.jpg"}></img>
          <ul>
            <li>Used with real-time web</li>
            <li>flexible</li>
            <li>fast to write</li>
            <li>hard to do complex reads</li>
            <li>👍👍👍when used with cloud functions, replace server</li>
          </ul>

          <hr />
          <ul>
            <li>Used with real-time web</li>
            <li>flexible</li>
            <li>fast to write</li>
            <li>hard to do complex reads</li>
            <li>👍👍👍when used with cloud functions, replace server</li>
          </ul>
        </div>

        <style jsx>{`
          h1 {
            grid-area: header;
          }

          h3 {
            grid-area: sub;
          }

          h2 {
            grid-area: stack;
          }

          .card {
            display: flex;
            flex-direction: column;
            width: 100%;
            background-color: lightgrey;
            align-items: center;
          }

          .language {
            background-color: black;
            width: 100%;
            font-size: 20px;
            text-align: center;
          }

          .client .language {
            color: yellow;
          }

          .structure .language {
            color: red;
          }

          .structure {
            grid-area: structure;
          }

          .presentation .language {
            color: blue;
          }

          .presentation {
            grid-area: presentation;
          }
          .server .language {
            color: green;
          }
          .database .language {
            color: orange;
          }

          .title {
            position: relative;
          }

          .card img {
            height: 100px;
            width: auto;
            object-fit: cover;
          }
          .client {
            grid-area: client;
          }

          .database {
            grid-area: database;
          }
          .container {
            display: grid;
            grid-template-columns: 20% 20% 20% 20% 20%;
            grid-template-rows: auto;
            grid-template-areas:
              "header header header header header"
              "sub sub sub sub sub"
              "stack stack stack stack stack"
              "client structure presentation server database"
              "footer footer footer footer footer";
          }

          grid-gap: 10px 10px;
        `}</style>
      </div>
    );
  };

  const renderServer = () => {
    return (
      <div className="server">
        <h1 className="header">Client/Server/Database</h1>
        <h2 className="sub">Standard model for web-apps</h2>
        <h3 className="sub-left">Client</h3>
        <h3 className="sub-middle">Server</h3>
        <h3 className="sub-right">Database</h3>

        <ul className="list-left">
          <li>Shows user controls (button)</li>
          <li>Listens to user input (click)</li>
          <li>Makes request to server</li>
        </ul>

        <ul className="list-middle">
          <li>Listens on a "port" for requests</li>
          <li>Receives a request "REQ"</li>
          <li>Deals with requests</li>
          <li>Sends response "RES" to client</li>
        </ul>

        <ul className="list-right">
          <li>Allows permissions for Read/Write/Update</li>
        </ul>

        <div className="file-left">
          <ul>
            <li>TO SERVER: CreatePost </li>
            <li>TO SERVER: CreatePost </li>
            <li>TO SERVER: CreatePost </li>
            <li>TO SERVER: CreatePost </li>
            <li>TO SERVER: CreatePost </li>
            <li>TO SERVER: CreatePost </li>
          </ul>
        </div>

        <div className="file-middle">
          <ul>
            <li>LISTEN FOR CreatePost </li>
            <li>TO DB: CreateRecord </li>
            <li>TO CLIENT: Heres Records!</li>
          </ul>
        </div>

        <div className="file-right">
          <ul>
            <li>1. Post1 | May11th | jphyqr </li>
            <li>2. Post2 | May11th | jphyqr </li>
            <li>3. Post3 | May11th | jphyqr </li>
            <li>4. Post4 | May11th | jphyqr </li>
            <li>5. Post5 | May11th | jphyqr </li>
            <li>6. Post6 | May11th | jphyqr </li>
          </ul>
        </div>

        <div className="graphic-right">
          <div className="computer">
            <div className="hard-drive" />
            <div className="ethernet" />
            <div className="modem" />
          </div>
        </div>

        <div className="graphic-middle">
          <div className="computer">
            <div className="hard-drive" />
            <div className="ethernet" />
            <div className="modem" />
          </div>
        </div>

        <div className="graphic-left">
          <div className="mobile">
            <div className="add">+</div>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
              <li>Post 4</li>
              <li>Post 5</li>
              <li>Post 6</li>
            </ul>
          </div>
        </div>

        <style jsx>{`
          .computer {
            grid-area: right;
            height: 150px;
            width: 50px;
            background-color: yellow;
            border-radius: 3px;
            place-self: center;
            position: relative;
            border: 3px solid black;
          }
          .ethernet {
            height: 100px;
            width: 50px;
            border-top: 3px solid blue;
            border-right: 3px solid blue;
            position: absolute;
            right: -100%;
            bottom: 0;
          }
          .modem {
            height: 15px;
            width: 50px;
            background-color: blue;
            position: absolute;
            bottom: 0;
            right: -150%;
          }

          .mobile {
            height: 200px;
            width: 100px;
            background-color: grey;
            border: 3px solid black;
            border-radius: 10px;

            position: relative;
          }

          .add {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border: 3px solid red;
            font-size: 40px;
            color: white;
            background-color: red;
            text-align: center;
            line-height: 50px;
            position: absolute;
            bottom: 0;
            right: 0;
          }

          .add:before {
            content: "👆";
            position: absolute;
            bottom: -70%;
            right: -70%;
            font-size: 60px;
            animation: press linear 2s 6;
          }
          .add:after {
            content: "";
            height: 100%;
            width: 100%;
            background-color: yellow;
            position: absolute;
            bottom: 0;
            right: 0;
            border-radius: 50%;
            opacity: 0;
            animation: pressed linear 2s 6;
          }

          ul {
            margin: 0;
            padding: 0;
          }

          li {
            list-style: none;
          }

          .file-left li,
          .mobile li,
          .file-right li {
            opacity: 0;
          }
          .file-left li,
          .file-right li {
            animation: appear 0.5s forwards, lighting 1s forwards;
          }

          .mobile li {
            animation: appear 0.5s forwards, red-lighting 1s forwards;
          }

          .mobile li:nth-child(1) {
            animation-delay: 2.2s;
          }
          .mobile li:nth-child(2) {
            animation-delay: 4.2s;
          }
          .mobile li:nth-child(3) {
            animation-delay: 6.2s;
          }
          .mobile li:nth-child(4) {
            animation-delay: 8.2s;
          }
          .mobile li:nth-child(5) {
            animation-delay: 10.2s;
          }
          .mobile li:nth-child(6) {
            animation-delay: 12.2s;
          }

          .file-right li:nth-child(1) {
            animation-delay: 1.6s;
          }
          .file-right li:nth-child(2) {
            animation-delay: 3.6s;
          }
          .file-right li:nth-child(3) {
            animation-delay: 5.6s;
          }
          .file-right li:nth-child(4) {
            animation-delay: 7.6s;
          }
          .file-right li:nth-child(5) {
            animation-delay: 9.6s;
          }
          .file-right li:nth-child(6) {
            animation-delay: 11.6s;
          }

          .file-left li:nth-child(1) {
            animation-delay: 1s;
          }
          .file-left li:nth-child(2) {
            animation-delay: 3s;
          }
          .file-left li:nth-child(3) {
            animation-delay: 5s;
          }
          .file-left li:nth-child(4) {
            animation-delay: 7s;
          }
          .file-left li:nth-child(5) {
            animation-delay: 9s;
          }
          .file-left li:nth-child(6) {
            animation-delay: 11s;
          }

          .file-middle li:nth-child(1) {
            animation: blinking 0.5s linear infinite;
          }
          .file-middle li:nth-child(2) {
            animation: lighting 2s linear 6 1.3s;
          }
          .file-middle li:nth-child(3) {
            animation: red-lighting 2s linear 6 1.9s;
          }

          @keyframes lighting {
            0% {
              color: #484848;
              text-shadow: none;
            }

            40%,
            60% {
              color: #fff900;
              text-shadow: 0 0 7px #fff900, 0 0 50px #ff6c00;
            }

            100% {
              color: #484848;
              text-shadow: none;
            }
          }

          @keyframes red-lighting {
            0% {
              color: black;
              text-shadow: none;
            }

            40%,
            60% {
              color: red;
              text-shadow: 0 0 7px red, 0 0 50px red;
            }

            100% {
              color: black;
              text-shadow: none;
            }
          }

          @keyframes blinking {
            0% {
              color: black;
              text-shadow: none;
            }

            40%,
            60% {
              color: #green;
              text-shadow: 0 0 7px green, 0 0 50px green;
            }

            100% {
              color: green;
              text-shadow: none;
            }
          }

          @keyframes appear {
            0%,
            100% {
              opacity: 1;
            }
          }

          @keyframes press {
            0% {
              transform: translate(0%, 0%);
            }
            20% {
              transform: translate(-20%, -20%);
            }
            90%,
            100% {
              transform: translate(0%%, 0%);
            }
          }

          @keyframes pressed {
            0%,
            10% {
              opacity: 0;
            }
            20%,
            22% {
              opacity: 1;
            }
            25%,
            100% {
              opacity: 0;
            }
          }

          .laptop {
            height: 100px;
            width: 200px;
            background-color: white;
            border: 3px solid black;
            color: black;
            grid-area: four;
            position: relative;
            place-self: center;
          }

          .keyboard {
            width: 200px;
            height: 100px;
            background-color: grey;
            position: absolute;
            bottom: -100px;
            left: -3px;
            transform: rotateX(70deg);
            transform-origin: top;
            border: 3px solid black;
          }

          .modem:before,
          .modem:after,
          .mobile:before,
          .laptop:after,
          .laptop:before {
            content: "";
            position: absolute;
            left: -20px;
            top: -20px;
            right: -20px;
            bottom: -20px;
            border: 1px solid green;
            border-radius: 50%;
            animation: pulsing 1.5s linear infinite;
          }

          .mobile:before {
            border: 1px solid yellow;
            animation: signal 2s linear 6;
          }

          .modem:after,
          .mobile:after,
          .laptop:after {
            animation-delay: 0.5s;
          }

          @keyframes pulsing {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.2);
              opacity: 0;
            }
          }

          @keyframes signal {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.2);
              opacity: 0;
            }
          }

          .hard-drive {
            width: 100%;
            background-color: black;
            height: 20px;
            position: absolute;
            bottom: 50%;
          }
          .hard-drive:before {
            content: "1TB";
            color: grey;
            position: absolute;
            bottom: 0;
            width: 100%;
          }

          .header {
            grid-area: header;
          }
          .sub {
            grid-area: sub;
          }

          .sub-left {
            grid-area: sub-left;
          }

          .sub-middle {
            grid-area: sub-middle;
          }
          .sub-right {
            grid-area: sub-right;
          }

          .list-left {
            grid-area: list-left;
          }

          .list-middle {
            grid-area: list-middle;
          }
          .list-right {
            grid-area: list-right;
          }

          .file-left {
            grid-area: file-left;
          }

          .file-middle {
            grid-area: file-middle;
          }
          .file-right {
            grid-area: file-right;
          }

          .graphic-left {
            grid-area: graphic-left;
          }

          .graphic-middle {
            grid-area: graphic-middle;
          }
          .graphic-right {
            grid-area: graphic-right;
          }

          .server {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
              "header header header"
              "sub sub sub"
              "sub-left sub-middle sub-right"
              "list-left list-middle list-right"
              "file-left file-middle file-right"
              "graphic-left graphic-middle graphic-right";

            gap: 10px 10px;
          }
        `}</style>
      </div>
    );
  };

  const renderDatabase = () => {
    return (
      <div className="database">
        <h1 className="header">Databases</h1>
        <h2 className="sub">Structured set of data held in a computer</h2>
        <h2 className="sub2">(Usually) Accessed by multiple devices</h2>
        <div className="left">
          <ul>
            <li>1. Post1 | May11th | jphyqr </li>
            <li>2. Post2 | May11th | jphyqr </li>
            <li>3. Post3 | May11th | jphyqr </li>
            <li>4. Post4 | May11th | jphyqr </li>
            <li>5. Post5 | May11th | jphyqr </li>
            <li>6. Post6 | May11th | jphyqr </li>
          </ul>
        </div>

        <div className="computer">
          <div className="hard-drive" />
          <div className="ethernet" />
          <div className="modem" />
        </div>

        <div className="third">
          <div className="mobile">
            <div className="add">+</div>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
              <li>Post 4</li>
              <li>Post 5</li>
              <li>Post 6</li>
            </ul>
          </div>
        </div>
        <div className="fourth">
          <div className="laptop">
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
              <li>Post 3</li>
              <li>Post 4</li>
              <li>Post 5</li>
              <li>Post 6</li>
            </ul>
            <div className="keyboard">QWERTYUIOP</div>
          </div>
        </div>

        <style jsx>{`
          .header {
            grid-area: header;
          }
          .sub {
            grid-area: sub;
          }

          .sub2{
              grid-area:sub2;
          }

       

          .computer{
              grid-area: right;
              height: 150px;
              width: 50px;
              background-color: yellow;
              border-radius: 3px;
              place-self: center;
              position: relative;
              border: 3px solid black;
          }
          .ethernet{
              height: 100px;
              width:50px;
              border-top: 3px solid blue;
              border-right: 3px solid blue;
              position:absolute;
              right: -100%;
              bottom: 0;
          }
          .modem{
              height: 15px;
              width: 50px;
              background-color: blue;
              position: absolute;
              bottom:0;
              right: -150%;


          }

          .third, .fourth{
          
            height:auto;
            width:auto;
            position:relative;
          }

          .third{
            grid-area: three;
          }

          .fourth{
            grid-area: four;
          }

          .mobile {
            height: 200px;
            width: 100px;
            background-color: grey;
            border: 3px solid black;
            border-radius: 10px;
            
            position:relative;
            
        }

        .add{
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border: 3px solid red;
            font-size: 40px;
            color: white;
            background-color: red;
            text-align: center;
            line-height: 50px;
            position: absolute;
            bottom: 0;
            right: 0;
            
        }

        .add:before{
            content: "👆";
            position:absolute;
            bottom:-70%;
            right: -70%;
            font-size: 60px;
            animation: press linear 2s infinite;
}
         .add:after{
             content:"";
             height: 100%;
             width: 100%;
             background-color: yellow;
             position:absolute;
             bottom:0;
             right:0;
             border-radius:50%;
             opacity: 0;
             animation: pressed linear 2s infinite;
         }


         ul{
            margin:0;
            padding:0;
         }

         li{
             opacity: 0;
             list-style: none;
         }
         li{
             animation: appear .5s forwards;
         }

         li:nth-child(1){
             animation-delay: 1s;
         }
         li:nth-child(2){
            animation-delay: 3s;
        }
        li:nth-child(3){
            animation-delay: 5s;
        }
        li:nth-child(4){
            animation-delay: 7s;
        }
        li:nth-child(5){
            animation-delay: 9s;
        }
        li:nth-child(6){
            animation-delay: 11s;
        }


         @keyframes appear {
             0%, 100%{
                 opacity: 1;
             }
         }


 
@keyframes press {
    0%{ transform:translate(0%, 0%)}
   20%{ transform:translate(-20%, -20%) }
   90%, 100%{ transform:translate(0%%, 0%)}
}

@keyframes pressed {
      0%, 10%{ opacity: 0;}
      20%, 22%{opacity:1;}
      25%,
      100%{ opacity: 0;}
}




        .laptop{
            height: 100px;
            width: 200px;
            background-color: white;
            border: 3px solid black;
            color: black;
        grid-area: four;
        position:relative;
        place-self: center;
        }

        .keyboard{
            width: 200px;
            height: 100px;
            background-color: grey;
            position:absolute;
            bottom:-100px;
            left: -3px;
            transform: rotateX(70deg);
            transform-origin: top;
            border: 3px solid black;


        }

          .modem:before,
          .modem:after, 
          .mobile:before, .mobile:after, .laptop:after, .laptop:before {
            content: "";
            position: absolute;
            left: -20px;
            top: -20px;
            right: -20px;
            bottom: -20px;
            border: 1px solid green;
            border-radius: 50%;
            animation: pulsing 1.5s linear infinite;
          }

    

          .modem:after, .mobile:after, .laptop:after {
            animation-delay: 0.5s;
          }

          @keyframes pulsing {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.2);
              opacity: 0;
            }
          }

          .hard-drive{
              width: 100%;
              background-color: black;
              height: 20px;
              position:absolute;
              bottom: 50%;
        
          }
          .hard-drive:before{
              content:"1TB";
              color: grey;
              position:absolute;
              bottom:0;
              width: 100%;
          }

          .left {
            grid-area: left;
            background-color: black;
            color green;
            position:relative;
          }

          .left:before{
           content:"";
            height: 100px;
            width:100px;
            
            background-color:grey;
            position:absolute;
            bottom:50%;
            right:0;
            transform: translate(40%, 50%) rotateZ(50deg);
            height:100px;
            width: 100px;
             background-color: black;
        }
        .left:after, .computer:after, .third:after, .fourth:after {
            content:"database file";
            position: absolute;
            top: -20px;
            color: white;
            background-color:purple;
            width:200px;

        }

        .computer:after{
            content:"computer";
        }

        .third:after{
            content:"mobile phone creating/reading from db";
        }
        .fourth:after{
            content:"laptop reading from db";
        }
        

          .database {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
              "header header"
              "sub sub"
              "left right"
              "sub2 sub2"
              "three four"
              "footer footer";
          
          gap: 30px 10px;}
        `}</style>
      </div>
    );
  };

  const renderApps = () => {
    return (
      <div className="apps">
        <h1 className="header">Applications</h1>
        <h2 className="sub">Programs(software) designed for end-users</h2>
        <div clasName="application">
          <h3 className="app-header">Application Software</h3>
          <ul className="app-list">
            <li>for end users</li>
            <li>used to perform a task</li>
            <li>installed according to user requirements</li>
            <li>cant run without presence of system software</li>
            <li>ex: Chrome, Instagram</li>
          </ul>
        </div>

        <div clasName="system">
          <h3 className="system-header">System Software</h3>
          <ul className="system-list">
            <li>Used to operate computer hardware</li>
            <li>usually run in background</li>
            <li>runs by itself</li>
            <li>ex: Windows, macOS</li>
          </ul>
        </div>

        <h3 className="both">Some software could be both</h3>

        <style jsx>{`
          .apps {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: auto;
            grid-template-areas:
              "header header"
              "sub sub"
              "application system"
              "both both"
              "footer footer";
          }
          .application: {
            grid-area: application;
            display: flex;
            flex-direction: column;
          }
          .app-header {
            grid-area: application;
          }
          .sub {
            grid-area: sub;
          }
          .header {
            grid-area: header;
          }

          .both {
            grid-area: both;
          }
        `}</style>
      </div>
    );
  };

  const renderSoftware = () => {
    return (
      <div className="software">
        <h1 className="header">Software</h1>
        <h2 className="step1">
          Program that directs the operation of a computer
        </h2>

        <h3 className="footer">Sometimes called "program" or "algorithm"</h3>
        <div className="display"></div>
        <div className="code"></div>
        <style jsx>{`
          .software {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: auto;
            grid-template-areas:
              "header header"
              "sub sub"
              "code display"
              "footer footer"
          }

          .step1{
              grid-area: sub;
          }

          .software{
              grid-area:header;
          }

          .footer{
              grid-area: footer;
          }

          .code{
              grid-area: code;
              background-color: black;
              
              height: 200px;
              width: 200px;
              position:relative;
              overflow:hidden;
          }
          .code:before{
              content:">TURN ON LIGHT";
              font-size: 30px;
              position:absolute;
              color: green;
              bottom:0;
              transform:translateY(100%);

              animation: scroll 6s linear infinite; 
          }

          .code:after{
            content:">TURN OFF LIGHT";
            font-size: 30px;
            position:absolute;
            color: red;
            bottom:0;
            transform:translateY(400%);
            animation: scroll2 6s linear infinite; 
        }

               


            .display:before {
              content: "CPU";
              color: grey;
              
              height: 100px;
              width: 50px;
              border: 2px dashed grey;
              background-color: black;
              position: absolute;
              animation: lighting 3s linear infinite;
              
              
            }
            @keyframes lighting {
                0%{ color: #484848;
                text-shadow: none;}
            
                90%{ color: #484848;
                    text-shadow: none;}
            
                    100%{ color: #fff900;
                        text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00;}
            }
            .display:after {
                content: "";
            height: 100px;
            width: 100px;
            border: 1px solid gold;
            border-radius: 50%;
            position:absolute;
            right: 0;
            background-color: lightyellow;
            animation: light 6s linear infinite;
            }
          @keyframes scroll {
              0%{transform:translateY(100%)}
              100%{transform:translateY(-700%)}
          }
          @keyframes scroll2 {
            0%{transform:translateY(400%)}
            100%{transform:translateY(-300%)}
        }

        @keyframes light{
            0%, 50%{
                background-color: yellow
            }
           55%, 100%{
                background-color: lightyellow
            }
        }

          .display{
            grid-area: display;
            height: 200px;
            width: 200px;  
            position:relative;
          }
          }
        `}</style>
      </div>
    );
  };

  const renderClient = () => {
    return (
      <div className="client">
        client
        <style jsx>{`
          .client {
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="header">Introduction to Apps</div>

      <div className="sidebar">
        <div
          className="sidebar-item software"
          onClick={() => selectContent("software")}
        >
          Software
        </div>
        <div
          className="sidebar-item apps"
          onClick={() => selectContent("apps")}
        >
          Apps
        </div>
        <div
          className="sidebar-item database"
          onClick={() => selectContent("database")}
        >
          Database
        </div>
        <div
          className="sidebar-item server"
          onClick={() => selectContent("server")}
        >
          Client/Server
        </div>
        <div
          className="sidebar-item phase1stack"
          onClick={() => selectContent("phase1stack")}
        >
          Phase 1 Stack
        </div>

        <div
          className="sidebar-item phase2stack"
          onClick={() => selectContent("phase2stack")}
        >
          Phase 2 Stack
        </div>
      </div>

      <div className="main">
        {content === "software"
          ? renderSoftware()
          : content === "apps"
          ? renderApps()
          : content === "database"
          ? renderDatabase()
          : content === "server"
          ? renderServer()
          : content === "phase1stack"
          ? renderLanguages()
          : content === "phase2stack"
          ? renderPhase2Stack()
          : null}
      </div>
      <style jsx>
        {`
          .header {
            grid-area: header;
            width: 100%;
            background-color: purple;
            color: white;

            text-align: center;
            font-size: 24px;
            padding: 10px 0px;
          }
          .sidebar {
            grid-area: sidebar;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

            grid-gap: 1rem;
          }
          .sidebar-item {
            text-align: center;
            font-size: 20px;
            text-transform: uppercase;
            align-self: center;
          }

          .phase1stack {
            background-color: ${content === "phase1stack" ? "green" : ""};
          }
          .phase2stack {
            background-color: ${content === "phase2stack" ? "green" : ""};
          }

          .database {
            background-color: ${content === "database" ? "green" : ""};
          }
          .server {
            background-color: ${content === "server" ? "green" : ""};
          }
          .apps {
            background-color: ${content === "apps" ? "green" : ""};
          }
          .software {
            background-color: ${content === "software" ? "green" : ""};
          }

          .main {
            grid-area: main;
          }
          .container {
            display: grid;
            font-family: sans-serif;
            background-color: gainsboro;
            grid-template-columns: 100px 800px;
            grid-template-rows: 50px 700px;
            grid-template-areas:
              "header header"
              "sidebar main";
          }
          grid-gap: 10px 70px;
        `}
      </style>
    </div>
  );
};

export default AppIntro;
