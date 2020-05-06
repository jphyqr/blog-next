import React from "react";
import CSVReader from "react-csv-reader";
import { useFirestore } from "react-redux-firebase";
import Router from "next/router";
const Test = () => {
  const firestore = useFirestore();

  const calculateCardRank = (card) => {
    let rank;

    switch (card) {
      case "A":
        rank = 13;
        break;
      case "K":
        rank = 12;
        break;
      case "Q":
        rank = 11;
        break;
      case "J":
        rank = 10;
        break;
      case "T":
        rank = 9;
        break;
      case "9":
        rank = 8;
        break;
      case "8":
        rank = 7;
        break;
      case "7":
        rank = 6;
        break;
      case "6":
        rank = 5;
        break;
      case "5":
        rank = 4;
        break;
      case "4":
        rank = 3;
        break;
      case "3":
        rank = 2;
        break;
      case "2":
        rank = 1;
        break;

      default:
        rank = 0;
    }

    return rank;
  };

  const handleLoadCSV = async (data) => {
    console.log("uploading data to firestore");

    try {
      for (var i = 0; i < data.length; i++) {
        // for(var i=1; i<200; i++){
        let handArray = data[i];

        let hand = handArray[0].replace(" ", "");
        let charsOfHand = hand.split("");
        let card1, card2, card1Rank, card2Rank;

        if (charsOfHand.includes("s")) {
          card1 = charsOfHand[0];
          card2 = charsOfHand[1];
        } else if (charsOfHand[0] == charsOfHand[1]) {
          card1 = card2 = charsOfHand[0];
        } else {
          card1 = charsOfHand[1];
          card2 = charsOfHand[0];
        }

        card1Rank = calculateCardRank(card1);
        card2Rank = calculateCardRank(card2);

        let handObj = {
          hand: typeof hand == "undefined" ? "" : hand,
          handRank: typeof hand == "undefined" ? "" : i + 169 - 168,
          card1: typeof card1 == "undefined" ? "" : card1,
          card2: typeof card2 == "undefined" ? "" : card2,
          card1Rank: typeof card1 == "undefined" ? "" : card1Rank,
          card2Rank: typeof card2 == "undefined" ? "" : card2Rank,
          overall_equity:
            typeof handArray[1] == "undefined" ? "" : handArray[1],
          combos: typeof handArray[3] == "undefined" ? "" : handArray[3],
        };

        // hand.keywords = generateKeyTree(hand.YMMT);
        // if (i % 10 === 0) console.log("keywords", i);

        // if (ymmtArray[0].includes("Undetermined")) {
        //   undeterminedcount = undeterminedcount + 1;
        //   console.log("Not including undetermined", undeterminedcount);
        // } else {
        await firestore.add(`holdem_hands`, handObj);
        // }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const handlePrintOutAllHandCombos = async (data) => {
    console.log("uploading data to firestore");

    try {
      let handCombosNoSuites = [];
      for (var i = 0; i < data.length; i++) {
        // for(var i=1; i<200; i++){
        let handArray = data[i];

        let hand = handArray[0].replace(" ", "");
        let charsOfHand = hand.split("");
        let card1, card2, card1Rank, card2Rank;

        if (charsOfHand.includes("s")) {
          card1 = charsOfHand[0];
          card2 = charsOfHand[1];
          handCombosNoSuites.push([
            `${card1}s${card2}s`,
            `${card1}s${card2}d`,
            `${card1}s${card2}h`,
            `${card1}s${card2}c`,
            `${card1}d${card2}s`,
            `${card1}d${card2}d`,
            `${card1}d${card2}h`,
            `${card1}d${card2}c`,
            `${card1}h${card2}s`,
            `${card1}h${card2}d`,
            `${card1}h${card2}h`,
            `${card1}h${card2}c`,
            `${card1}c${card2}s`,
            `${card1}c${card2}d`,
            `${card1}c${card2}h`,
            `${card1}c${card2}c`,
          ]);
        } else if (charsOfHand[0] == charsOfHand[1]) {
          handCombosNoSuites.push([
            `${charsOfHand[0]}s${charsOfHand[1]}d`,
            `${charsOfHand[0]}s${charsOfHand[1]}c`,
            `${charsOfHand[0]}s${charsOfHand[1]}h`,
            `${charsOfHand[0]}d${charsOfHand[1]}c`,
            `${charsOfHand[0]}d${charsOfHand[1]}h`,
            `${charsOfHand[0]}c${charsOfHand[1]}h`,
          ]);
        } else {
        }
      }

      console.log({ handCombosNoSuites });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="container">
      <CSVReader onFileLoaded={(data) => handlePrintOutAllHandCombos(data)} />

      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </div>
  );
};

export default Test;
