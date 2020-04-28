import React, { useEffect } from "react";

const CoinFlip = () => {
  const rnd = Math.floor(Math.random() * 2) + 1;
  console.log({ rnd });
  let shouldCall = false;
  if (parseInt(rnd) === 1) {
    console.log("SHOULD CALL");
    shouldCall = true;
  } else console.log("SHOULD FOLD");

  const str = "call";
  return (
    <div className="container">
      <div className="result"> {shouldCall ? "🤤" : "🥱"} </div>
      {shouldCall ? <div className="call"></div> : <div className="fold" />}

      <style jsx>
        {`
          .container {
            position: relative;
            width: auto;
            height: auto;
            font-family: sans-sarif;
            font-size:20px;
            color: gold
            font-style: bold;
          }
          .result {
            position: absolute;
            left: -80px;
            top: -35px;
            font-size: 80px;
            opacity: 0;
            animation: happy 0s linear 2.5s forwards;
          }

          .call {
            height: 100px;
            width: 100px;
            border 2px solid gold;
            border-radius: 50%;
            background-color: purple;
            animation: loading 2s ease forwards;

            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotateX(80deg);
          }

          .fold {
            height: 100px;
            width: 100px;
           border 2px solid gold;
            border-radius: 50%;
            background-color: red;
            animation: loading 2s ease forwards;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotateX(80deg);
          }

          .call:before {
            content: "CALL";
            animation: call 2s ease;
            height: 100%;
            width: 100%;

            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .fold:before {
            content: "FOLD";
            animation: fold 2s ease;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @keyframes happy {
            0%,
            100% {
              opacity: 1;
            }
          }

          @keyframes call {
            0%,
            20%,
            40%,
            60%,
            80% {
                content: "FOLD";
                background: silver;
              }
            100% {
              content: "CALL";
              background: purple;
            }

            10%,
            30%,
            50%,
            70% {
              content: "FOLD";
              background: silver;
            }
          }
          @keyframes fold {
            0%,
            20%,
            40%,
            60%,
            80% {
                content: "FOLD";
                background: silver;
              }
            100% {
              content: "FOLD";
              background: red;
            }

            10%,
            30%,
            50%,
            70% {
              content: "CALL";
              background: silver;
            }
          }

          @keyframes loading {
            0% {
              transform: rotateX(0deg);
            }
            90%,
            95% {
              transform: rotateX(1710deg);
            }
            96% {
              transform: rotateX(1715deg);
            }
            97% {
              transform: rotateX(1720deg);
            }
            98% {
              transform: rotateX(1726deg);
            }
            99% {
              transform: rotateX(1740deg);
            }
            100% {
              transform: rotateX(1750deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CoinFlip;
