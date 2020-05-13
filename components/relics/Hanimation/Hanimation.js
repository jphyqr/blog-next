import React, { useState, useEffect } from "react";
import HandRange from "../HandRange";
import AvatarSquare from "../../widgets/common/AvatarSquare/AvatarSquare";
import ButtonOpenVsBb from "./ButtonOpenVsBb";

const title = "How Poker Players Make Decision";

const sceneLengths = [2, 5, 5, 5, 10];
const Hanimation = ({ data }) => {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    //initial scene
    console.log("INITIAL SCENE scene", scene);
  }, []);

  useEffect(() => {
    console.log("CHANGE SCENE scene", scene);

    const timer = setTimeout(() => {
      if (scene < sceneLengths.length) setScene(scene + 1);
    }, sceneLengths[scene] * 1000);
  }, [scene]);
  return (
    <div className="container">
      {/* <HandRange comparison left data={data} /> */}

      <div className="header">
        {" "}
        <AvatarSquare navbar />
      </div>

      {scene >= 0 && (
        <div className="scene0">
          <h1>How Poker Players Make Decisions</h1>
        </div>
      )}

      {scene >= 1 && (
        <div className="scene-gamestate">
          <h1>1. Game State</h1>
          <ul>
            <li>Identify size/skill/speed of the game</li>
            <li>".25c / 50c game online"</li>
          </ul>
        </div>
      )}

      {scene >= 2 && (
        <div className="scene-preflop">
          <h1>2. Preflop action</h1>
          <ul>
            <li>ID Positions, Stack sizes and villians stats</li>
            <li>"Folds to button, who 2.5x's and we call in bing blind"</li>
          </ul>
        </div>
      )}

      {scene >= 4 && (
        <div className="scene-villian">
          <h1>2. ID Villian</h1>
          <ul>
            <li>Identifty stack sizes, and stats on player</li>
            <li>"We are 100BB deep, villian raises 50% of hands here"</li>
          </ul>
        </div>
      )}

      <div className="villian-card">
        <div className="stack">Chips: $150</div>
        <div className="stats">Key stats: raise 50%</div>
        <div className="name">Jeffrey(Canada)</div>
        <div className="avatar">👾</div>
      </div>

      {scene >= 3 && (
        <div className="scene-table">
          <ButtonOpenVsBb />
        </div>
      )}

      <style jsx>
        {`
          .container {
            height: 580px;
            width: 1130px;
            background-color: black;
            position: relative;
          }

        

          .scene0,.scene-gamestate,.scene-preflop,.scene-villian {
            
            opacity: 0;
            font-family: sans-serif;
            position: absolute;
            bottom: 50%;
            left: 50%;
            color: white;
            font-size: 28px;
            width:100%;
            transform: translate(-50%, 50%);
            width: auto;
            text-align: center;
            
            animation: title 2s forwards linear;
          }

          .scene-gamestate {
            animation: lift-text 2s forwards linear, corner-text 1s forwards linear 5s;
         
          }
           
          .scene-preflop{
            animation: lift-text 2s forwards linear, corner-text-2 1s forwards linear 10s;
       
          }
          .scene-villian{
            animation: lift-text 2s forwards linear, corner-text-2 1s forwards linear 5s;
       
          }


          @keyframes lift-text {
            0% {
              opacity: 0;
              transform: translate(-50%, 50%) scale(1);
            }
            10% {
              opacity: 0.5;
              transform: translate(-50%, 50%) scale(1.5);
            }
            20% {
              opacity: 1;
              transform: translate(-50%, 50%) scale(1);
            }
            30% {
              opacity: 1;
              transform: translate(-50%, 50%) scale(1);
            }
            50%, 100% {
              transform: translate(-50%, -100px);
              opacity: 1;
            }pacity: 1;
            }
          }



          li {
            transform: rotateX(90deg);
            animation: swingvertical 0.5s forwards linear, clear .5s forwards linear;
          }

          li:nth-child(1) {
            animation-delay: 1s, 5s;
          }
         li:nth-child(2){
            animation-delay: 1.5s, 5s;
          }

          .villian-card {
            
          
          background-color: white;
          border: 3px solid red;
          position:absolute;
          bottom: 50%;
            left: 50%;
          transform: translate(-50%, 240%);
          display:flex;
          flex-direction:column;
    
            font-family: sans-serif;
            text-align: center;
            
          
          }

          .villian-card:before {
            content:"Key factors in order of importance";
            
            background-color:green;
            position:absolute;
            transform: translate(-100%, -100%);
            color: white;
          }
          
            

          .villian-card:after {
            content:"at this point, convert all $s to big blinds";
            
            background-color:purple;
            position:absolute;
            transform: translateX(100%);
            color: white;
          }


          .stack, .stats {
            width: 100%;
            
          }
          .stack:before, .stack:after {
       
            background-color:green;
            position:absolute;
        
            color: white;
          }
        
          .stack:before{
            transform: translateX(-150px);
            content: "1.Stack Depth"
          }
          .stack:after{
            content:"$150/.50c(BB)=300BB";
            transform: translateX(50px);
          }
 




@keyframes clear {
  0%{
    opacity: 1
  }
  100%{
    opacity: 0;
  }
}

          @keyframes swingvertical {
            0% {
              transform: rotateX(90deg);
            }
            100% {
              transform: rotateX(0deg);
            }
          }

          .scene-table {
            opacity: 0;
            animation: fade-in-out 1s linear forwards;
          }

          @keyframes expand-text {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }

          @keyframes corner-text{
            0%{
              transform: translate(-50%, -100px);
            }
            100%{
              transform: translate(190px, -100px) scale(0.8);
              color: grey;
            }
          }

          @keyframes corner-text-2{
            0%{
              transform: translate(-50%, -100px);
            }
            100%{
              transform: translate(190px, -80px) scale(0.8);
              color: grey;
            }
          }

          @keyframes title {
            0% {
              opacity: 0;
              transform: translate(-50%, 50%) scale(1);
            }
            10% {
              opacity: 0.5;
              transform: translate(-50%, 50%) scale(1.5);
            }
            20% {
              opacity: 1;
              transform: translate(-50%, 50%) scale(1);
            }
            30% {
              opacity: 1;
              transform: translate(-50%, 50%) scale(1);
            }
            50% {
              transform: translate(-50%, -200px);
              color: grey;
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -200px);
              color: grey;
              opacity: 1;
            }
          }

          @keyframes fade-in-out {
            0%{
              opacity: 0;
            }
            10%,
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hanimation;
