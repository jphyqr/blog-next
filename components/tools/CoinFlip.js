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
      {shouldCall ? <div className="call"></div> : <div className="fold" />}

      <style jsx>
        {`
          .call {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: gold;
            animation: loading 2s ease-out 1s forwards;

            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotateX(80deg);
          }

          .fold {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: silver;
            animation: loading 2s ease-out 1s forwards;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: rotateX(80deg);
          }

          .call:before {
            content: "CALL";
            animation: call 2s ease-out 1s;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .fold:before {
            content: "FOLD";
            animation: fold 2s ease-out 1s;
            height: 100%;
            width: 100%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          @keyframes call {
            0%,
            10%,
            20%,
            30%,
            40%,
            50%,
            60%,
            80%,
            100% {
              content: "CALL";
              background: gold;
            }

            5%,
            15%,
            25%,
            35%,
            45%,
            55% {
              content: "FOLD";
              background: silver;
            }
          }

          @keyframes fold {
            0%,
            10%,
            20%,
            30%,
            40%,
            50%,
            60%,
            80%,
            100% {
              content: "FOLD";
              background: silver;
            }
            5%,
            15%,
            25%,
            35%,
            45%,
            55% {
              content: "CALL";
              background: gold;
            }
          }

          @keyframes loading {
            0% {
              transform: rotateX(90deg);
            }

            80%,
            100% {
              transform: rotateX(3640deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CoinFlip;
