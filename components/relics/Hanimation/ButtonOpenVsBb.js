import React from "react";

const ButtonOpenVsBb = () => {
  return (
    <div className="table">
      <div className="player" />
      <div className="player" />
      <div className="player" />
      <div className="player" />
      <div className="player" />
      <div className="player" />
      <div className="player" />
      <div className="player" />
      <div className="button" />
      <div className="smallblind" />
      <div className="bigblind" />
      <div className="dealer" />
      <div className="raise" />
      <style jsx>
        {`
          .table {
            height: 250px;
            width: 500px;
            background-color: darkgrey;
            border: 30px solid purple;
            border-radius: 50%;
            position: absolute;
            bottom: 50%;
            left: 50%;
            transform: translate(-50%, 50%) rotateX(60deg);
          }

          .smallblind,
          .bigblind,
          .dealer,
          .raise {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            position: absolute;
            background-color: gold;
            transform: translate(70px, 175px);
          }
          .smallblind:before,
          .bigblind:before,
          .dealer:before,
          .raise:before {
            content: ".25";
            font-weight: bold;
            font-family: sans-serif;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .bigblind {
            transform: translate(20px, 120px);
          }

          .bigblind:before {
            content: ".50";
          }

          .dealer {
            transform: translate(220px, 210px);
            background-color: white;
            border: 1px solid black;
          }
          .dealer:before {
            content: "D";
          }

          .raise {
            transform: translate(220px, 160px);
          }

          .raise:before {
            content: "1.25";
          }

          .player {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: blue;
            position: absolute;
            animation: fold 1s linear forwards, raise 1s linear forwards 3s;
          }

          .player:before,
          .player:after {
            content: "";
            position: absolute;
            left: -20px;
            top: -20px;
            right: -20px;
            bottom: -20px;
            border: 1px solid blue;
            border-radius: 50%;
            animation: pulsing 1.5s linear infinite;
          }

          .player:after {
            animation-delay: 0.5s;
          }

          .player:nth-child(7):before,
          .player:nth-child(7):after {
            animation: pulsing 1.5s linear infinite,
              raise-rings 1s linear forwards 1.7s;
          }

          .player:nth-child(7):after {
            animation-delay: 0.5s, 2.5s;
          }

          .player:nth-child(1):after {
            animation-delay: 0.5s, 2.2s;
          }

          .player:nth-child(1):before,
          .player:nth-child(1):after {
            animation: pulsing 1.5s linear infinite,
              hero-rings 1s linear forwards 2.2s;
          }

          .player:nth-child(1):after {
            animation-delay: 0.5s, 2.2s;
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

          @keyframes fold {
            0%,
            100% {
              opacity: 0;
            }
          }

          .player:nth-child(1) {
            transform: translate(-100px, 100px);
            animation-delay: 10s;
          }
          .player:nth-child(2) {
            transform: translate(10px, -50px);
            animation-delay: 0.5s;
          }
          .player:nth-child(3) {
            transform: translate(220px, -100px);
            animation-delay: 0.8s;
          }
          .player:nth-child(4) {
            transform: translate(425px, -50px);
            animation-delay: 1.1s;
          }
          .player:nth-child(5) {
            transform: translate(540px, 100px);
            animation-delay: 1.4s;
          }
          .player:nth-child(6) {
            transform: translate(425px, 235px);
            animation-delay: 1.7s;
          }
          .player:nth-child(7) {
            transform: translate(220px, 285px);

            animation-delay: 30s, 1.8s;
          }
          .player:nth-child(8) {
            transform: translate(10px, 235px);
            animation-delay: 2.1s;
          }

          @keyframes raise {
            0%,
            100% {
              background-color: red;
            }
          }
          @keyframes raise-rings {
            0%,
            100% {
              border: 1px solid red;
            }
          }

          @keyframes hero {
            0%,
            100% {
              background-color: green;
            }
          }

          @keyframes hero-rings {
            0%,
            100% {
              border: 1px solid green;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ButtonOpenVsBb;
