import React from "react";

const colors = {
  chip1Background: "black",
  chip1Border: "purple",
  chip2Background: "black",
  chip2Border: "purple",
  chip3Background: "black",
  chip3Border: "purple",
};

const JamStacks = () => {
  return (
    <div className="outer">
      <ul className="outer-ul">
        <li>.</li>
        <li>C</li>
        <li>O</li>
        <li>M</li>

        <li>🔨</li>
        <li>S</li>
        <li>T</li>
        <li>R</li>
        <li>E</li>
        <li>A</li>
        <li>M</li>
        <li>T</li>
        <li>O</li>
        <li>O</li>
        <li>L</li>
        <li>S</li>
        <li>🔨</li>
        <li>O</li>
        <li>N</li>
        <li>💉</li>
        <li>R</li>
        <li>O</li>
        <li>I</li>
        <li>D</li>
        <li>S</li>
        <li>💉</li>
      </ul>

      <div className="container">
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="coin"></span>
        <span className="card"></span>
        <span className="card"></span>
        <span className="card"></span>
        <ul>
          <li>S</li>
          <li>T</li>
          <li>A</li>
          <li>C</li>
          <li>K</li>
          <li>S</li>
        </ul>
      </div>
      <style jsx>
        {`


.outer {
    position: relative;
    height:auto;
    width:auto;

}
.outer-ul {
    opacity:0;
    margin:0;
    padding:0;
    display: flex;
    position:absolute;
    bottom:5px;
    animation show-ul 0s forwards 2.5s;
    left: 133px;
}

.outer-ul li{
    list-style: none;
    color: #484848;
    font-size: 25px;
    letter-spacing: 5px;
    opacity: 0;
    animation: lighting 1.4s linear infinite, li-appear .1s linear forwards;
    
}


.outer-ul li:nth-child(1) {
    animation-delay: .35s, 2.75s;
}
.outer-ul li:nth-child(2) {
    animation-delay: .4s, 2.8s;
}
.outer-ul li:nth-child(3) {
    animation-delay: .45s, 2.85s;
}
.outer-ul li:nth-child(4) {
    animation-delay: .5s, 2.9s;
}
.outer-ul li:nth-child(5) {
    animation-delay: .55s, 2.95s;
}
.outer-ul li:nth-child(6) {
    animation-delay: .6s, 3s;
}
.outer-ul li:nth-child(7) {
    animation-delay: .65s, 3.05s;
}
.outer-ul li:nth-child(8) {
    animation-delay: .7s, 3.1s;
}
.outer-ul li:nth-child(9) {
    animation-delay: .75s, 3.15s;
}
.outer-ul li:nth-child(10) {
    animation-delay: .8s, 3.2s;
}
.outer-ul li:nth-child(11) {
    animation-delay: .85s, 3.25s;
}
.outer-ul li:nth-child(12) {
    animation-delay: .9s, 3.3s;
}
.outer-ul li:nth-child(13) {
    animation-delay: .95s, 3.35s;
}
.outer-ul li:nth-child(14) {
    animation-delay: 1s, 3.4s;
}
.outer-ul li:nth-child(15) {
    animation-delay: 1.05s, 3.45s;
}
.outer-ul li:nth-child(16) {
    animation-delay: 1.1s, 3.5s;
}


          .container {
            
            height: 130px;
            width: 130px;
 overflow:hidden;
            background-color: black;
            position: relative;
            z-index:1;
          }

          .container:after{
            height: 100%;
            width: 200%;
            background-color: #272727;
        content:"asdfa";
            border-radius: 100%;
         z-index:-1;
            position: absolute;
            bottom:0;
            left:0;
            transform: translate(-25%, 30%);
            border: 20px solid brown;
          }

          .table {
            height: 300px;
            width: 300px;
            background-color: grey;
            z-index=-1;
            border-radius: 100%;
            transform: translate(-25%,10%);
          }


 .container ul{
    opacity:1;
    margin:0;
    padding:0;
    display: flex;
    position:absolute;
    bottom: 5px;
    left: 3px;
    
}

@keyframes show-ul{
    0%,100%{opacity:1}
}


.container ul li{
    list-style: none;
    opacity: 0;
    color: #484848;
    font-size: 25px;
    letter-spacing: 5px;
    animation: lighting 1.4s linear infinite, li-appear .1s linear forwards;
    
}

.container ul li:nth-child(1) {
    animation-delay: 0s, 2.4s;
}
.container ul li:nth-child(2) {
    animation-delay: 0.05s, 2.45s;
}
.container ul li:nth-child(3) {
    animation-delay: 0.1s, 2.5s;
}
.container ul li:nth-child(4) {
    animation-delay: 0.15s, 2.55s;
}
.container ul li:nth-child(5) {
    animation-delay: 0.2s, 2.6s;
}
.container ul li:nth-child(6) {
    animation-delay: 0.25s, 2.65s;
}
@keyframes li-appear{
    0%,100%{opacity:1} 
}

@keyframes lighting {
    0%{ color: #484848;
    text-shadow: none;}

    90%{ color: #484848;
        text-shadow: none;}

        100%{ color: #fff900;
            text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00;}
}

          .word {
            position: absolute;
            bottom: 20Px;
            font-size: 30px;
            left: 0;
            color: purple;
            background-color: black;
            left: 50%;
            transform: translateX(-50%);
            font-family: sans-serif;
            text-transform: uppercase;
            opacity: 0;
            animation: word 1s forwards 2s;
          }

          @keyframes word {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .card {
            height: 40px;
            width: 32px;
            background-color: red;
            position: absolute;
            border-radius: 2px;
          }

          .card:nth-child(49) {
            bottom: 30%;
            left: 18%;
            transform: translate(300px, 300px) rotateY(160deg);
            animation: cardJ 2s linear forwards .25s, lighting 1.4s linear infinite 0s;
          
          }
          .card:nth-child(50) {
            bottom: 30%;
            left: 15%;
            transform: translate(300px, 300px) rotateY(160deg);
            animation: cardA 1.9s linear forwards .5s, lighting 1.4s linear infinite 0.1s;
          }
          .card:nth-child(51) {
            bottom: 30%;
            left: 15%;
            transform: translate(300px, 300px) rotateY(160deg);
            animation: cardM 1.8s linear forwards .7s, lighting 1.4s linear infinite 0.2s;
          }





          
 

          .card:nth-child(49):before {
            content: "J";
            opacity: 0;
            margin-left: 8px;
            margin-top: 35px;
            font-size: 40px;
            animation: lighting 1.4s linear infinite,showface  1s 1.5s forwards, clearlight 2.5s  0.4s;
            z-index:10;
            text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00;
            color: #fff900
          }


          .card:nth-child(50):before {
            content: "A";
            opacity: 0;
            margin-left: 3px;
            font-size: 35px;
            animation: lighting 1.4s linear infinite, showface  1s 1.5s forwards, clearlight 2.5s   .6s;
            text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00;
            color: #fff900
          }
   

          .card:nth-child(51):before {
            content: "M";
            margin-left: 0px;
            margin-top: 10px;
            font-size: 35px;
            opacity: 0;
            animation: lighting 1.4s linear infinite, showface  1s 1.5s forwards, clearlight 2.5s   .8s;

            text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00;
            color: #fff900
      


            
          }

          @keyframes clearlight{
            0% {color:#fff900
                text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00
            }
            50%{color:#fff900
                text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00
            }
            100%{
                color: black;
                text-shadow: none;
            }
        }
        
        @keyframes clear-border{
            0% {text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00}
            50%{text-shadow:0 0 7px #fff900, 0 0 50px #ff6c00}
            100%{
                text-shadow: none;
            }
        }
        


          @keyframes showface {
            0%,
            100% {
              opacity: 1;
            }
          }

          @keyframes cardJ {
            0% {
              transform: translate(300px, 300px);
            }
            20% {
              transform: translate(-50%, 0%) rotateY(160deg);
           
            }
            30% {
              transform: translate(-50%, 0%) rotateY(270deg);
              opacity: 0;
            }
            40% {
              transform: translate(-50%, 0%) rotateY(360deg);
              background-color: white;
              opacity: 0;
            }
            45% {
              transform: translate(-50%, 0%) rotateY(360deg);
              background-color: white;
              opacity: 1;
            }
            100% {
              background-color: white;
              transform: translate(-50%, 0%) rotateY(360deg);
            }
          }
          @keyframes cardA {
            0% {
              transform: translate(300px, 300px);
            }
            15% {
              transform: translate(-50%, 0%) rotateY(160deg);
            }
            25% {
              transform: translate(-50%, 0%) rotateY(270deg);
              opacity: 0;
            }
            35% {
              transform: translate(-50%, 0%) rotateY(360deg);
              background-color: white;
              opacity: 0;
            }
            40% {
              transform: translate(-50%, 0%) rotateY(360deg);
              background-color: white;
              opacity: 1;
            }
            60%,
            100% {
              background-color: white;
              transform: translate(90%, 0%) rotateY(360deg);
            }
          }

          @keyframes cardM {
            0% {
              transform: translate(300px, 300px);
            }
            10% {
              transform: translate(-50%, 0%) rotateY(160deg);
            }
            20% {
              transform: translate(-50%, 0%) rotateY(270deg);
            }
            30% {
              transform: translate(-50%, 0%) rotateY(360deg);
              background-color: white;
            }
            50%,
            100% {
              background-color: white;
              transform: translate(220%, 0%) rotateY(360deg);
            }
          }

          .coin {
            height: 35px;
            width: 35px;

            border-radius: 50%;
            position: absolute;
            box-sizing: border-box;
            border: 4px dashed green;
          }

          .coin:nth-child(1) {
            bottom: 45%;
            left: 50%;
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            transform: translate(-50%, 50%);
            animation: coin-appear 0.1s linear forwards 0s,
              rotate-stack1 0.5s linear forwards;
              transform: rotateX(60deg);
              opacity: 0;
          }
          .coin:nth-child(2) {
            bottom: 50%;
            left: 50%;
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            transform: translate(-150%, 50%);
            animation: coin-appear 0.1s linear forwards 0.05s,
              rotate-stack2 0.5s linear forwards;
              transform: rotateX(60deg);
              opacity: 0;
          }
          .coin:nth-child(3) {
            bottom: 50%;
            left: 50%;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            transform: translate(50%, 50%);
            animation: coin-appear 0.1s linear forwards 0.1s,
              rotate-stack3 0.5s linear forwards;
              transform: rotateX(60deg);
              opacity: 0;
          }
          .coin:nth-child(4) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, 40%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .1s;
            opacity: 0;
          }
          .coin:nth-child(5) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, 30%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .15s;
            opacity: 0;
          }
          .coin:nth-child(6) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, 20%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .15s;
            opacity: 0;
          }
          .coin:nth-child(7) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, 40%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .2s;
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            opacity: 0;
          }
          .coin:nth-child(8) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, 30%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .2s;
            opacity: 0;
          }
          .coin:nth-child(9) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, 40%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .25s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(10) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, 10%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .25s;
            opacity: 0;
          }

          .coin:nth-child(11) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, 0%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .3s;
            opacity: 0;
          }
          .coin:nth-child(12) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -10%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .3s;
            opacity: 0;
          }
          .coin:nth-child(13) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, 20%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .35s;
            opacity: 0;
          }
          .coin:nth-child(14) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, 30%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .35s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(15) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -20%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .4s;
            opacity: 0;
          }
          .coin:nth-child(16) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, 10%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .4s;
            opacity: 0;
          }
          .coin:nth-child(17) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, 20%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .45s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(18) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -30%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .45s;
            opacity: 0;
          }

          .coin:nth-child(19) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, 0%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .5s;
            opacity: 0;
          }
          .coin:nth-child(20) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, 10%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .5s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(21) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -40%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .55s;
            opacity: 0;
          }

          .coin:nth-child(22) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -10%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .55s;
            opacity: 0;
          }
          .coin:nth-child(23) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, 0%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .6s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(24) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -50%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .6s;
            opacity: 0;
          }

          .coin:nth-child(25) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -20%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .65s;
            opacity: 0;
          }
          .coin:nth-child(26) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -10%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .65s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(27) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -60%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .7s;
            opacity: 0;
          }

          .coin:nth-child(28) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -30%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .7s;
            opacity: 0;
          }
          .coin:nth-child(29) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -20%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .75s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(30) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -70%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .8s;
            opacity: 0;
          }

          .coin:nth-child(31) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -30%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .8s;
            opacity: 0;
          }
          .coin:nth-child(32) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -20%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .85s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(33) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -70%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .85s;
            opacity: 0;
          }


          .coin:nth-child(34) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -40%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .9s;
            opacity: 0;
          }
          .coin:nth-child(35) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -30%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards .9s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(36) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -80%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards .95s;
            opacity: 0;
          }
          .coin:nth-child(37) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -50%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards .95s;
            opacity: 0;
          }
          .coin:nth-child(38) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -40%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards 1s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(39) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -90%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards 1s;
            opacity: 0;
          }

          .coin:nth-child(40) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -60%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards 1.05s;
            opacity: 0;
          }
          .coin:nth-child(41) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -50%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards  1.05s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(42) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -100%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards 1.1s;
            opacity: 0;
          }
          .coin:nth-child(43) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -70%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards 1.1s;
            opacity: 0;
          }
          .coin:nth-child(44) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -60%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards 1.15s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(45) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -110%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards 1.15s;
            opacity: 0;
          }
          .coin:nth-child(46) {
            bottom: 50%;
            left: 50%;
            transform: translate(-150%, -80%) rotateX(60deg);
            background-color: ${colors.chip1Background};
            border: 4px dashed ${colors.chip1Border};
            animation: coin-appear 0.1s linear forwards 1.2s;
            opacity: 0;
          }
          .coin:nth-child(47) {
            bottom: 50%;
            left: 50%;
            transform: translate(50%, -70%) rotateX(60deg);
            animation: coin-appear 0.1s linear forwards 1.2s;
            background-color: ${colors.chip3Background};
            border: 4px dashed ${colors.chip3Border};
            opacity: 0;
          }
          .coin:nth-child(48) {
            bottom: 45%;
            left: 50%;
            transform: translate(-50%, -120%) rotateX(60deg);
            background-color: ${colors.chip2Background};
            border: 4px dashed ${colors.chip2Border};
            animation: coin-appear 0.1s linear forwards 1.25s;
            opacity: 0;
          }

          @keyframes coin-appear {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes rotate-stack1 {
            0% {
              transform: translate(-50%, 50%) rotateX(60deg);
            }
            100% {
              transform: translate(-50%, 50%) rotateX(60deg);
            }
          }
          @keyframes rotate-stack2 {
            0% {
              transform: translate(-150%, 50%) rotateX(60deg);
            }
            100% {
              transform: translate(-150%, 50%) rotateX(60deg);
            }
          }
          @keyframes rotate-stack3 {
            0% {
              transform: translate(50%, 50%) rotateX(60deg);
            }
            100% {
              transform: translate(50%, 50%) rotateX(60deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default JamStacks;
