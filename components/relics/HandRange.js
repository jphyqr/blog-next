import React, { useState, useEffect } from "react";
import { cards } from "./relicConstants";
import { useFirestore } from "react-redux-firebase";
import firebase from "../../firebase";
const HandRange = ({ data }) => {
  const [handRange, updateHandRange] = useState(data?.handRange || {});
  const [counter, count] = useState(0);
  const [handsByEquity, setHandsByEquity] = useState([]);
  const [handsByRank, setHandsByRank] = useState([]);
  const firestore = useFirestore();
  const firestoreApi = firebase.firestore();
  const [combos, setCombos] = useState(0);
  const [rangePercent, setRangePercent] = useState(0);
  useEffect(() => {
    const getHoldEmHandsFromStorage = async () => {
      if (process.browser) {
        var holdEmHandsEquity = await window.localStorage.getItem(
          "holdEmHandsEquity"
        );
        var holdEmHandsCardRank = await window.localStorage.getItem(
          "holdEmHandsCardRank"
        );

        if (!holdEmHandsEquity) {
          const handRef = firestore
            .collection("holdem_hands")
            .orderBy("handRank", "asc");
          let ss = await handRef.get();

          let loadedHands = [];

          ss.forEach((doc) => {
            loadedHands.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          await window.localStorage.setItem(
            "holdEmHandsEquity",
            JSON.stringify(loadedHands)
          );
        }

        if (!holdEmHandsCardRank) {
          const handRef = firestore
            .collection("holdem_hands")
            .orderBy("card1Rank", "desc")
            .orderBy("card2Rank", "desc");
          let ss = await handRef.get();

          let loadedRankedHands = [];

          ss.forEach((doc) => {
            loadedRankedHands.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          await window.localStorage.setItem(
            "holdEmHandsCardRank",
            JSON.stringify(loadedRankedHands)
          );
        }

        await setHandsByEquity(
          await JSON.parse(window.localStorage.getItem("holdEmHandsEquity"))
        );
        await setHandsByRank(
          await JSON.parse(window.localStorage.getItem("holdEmHandsCardRank"))
        );
      }
    };
    console.log("RUN GETHOLDEM HANDS FROM STORAGE");
    getHoldEmHandsFromStorage();
  }, []);

  const getTopHandsInRange = async (percent) => {
    let combosAdded = 0;
    console.log("adding for percent", percent);
    let combosAddedPercent = 0;
    let allHandsByEquity = [...handsByEquity];

    let bestHands = {};
    while (combosAdded < 1326 * (percent / 100)) {
      const nextHand = allHandsByEquity.shift();
      bestHands[`${nextHand.id}`] = nextHand;
      console.log({ bestHands });
      combosAdded = combosAdded + parseInt(nextHand?.combos);
      console.log("added", nextHand);
    }

    console.log({ bestHands });
    updateHandRange(bestHands);
    await firestore.update(`relics/${data.id}`, {
      handRange: bestHands,
    });
  };

  const updateRangeByPercent = (increment = true) => {
    increment
      ? setRangePercent(Math.floor(rangePercent + 1))
      : setRangePercent(Math.floor(rangePercent - 1));

    getTopHandsInRange(rangePercent);
  };

  const toggleHand = async (hand) => {
    let updatedHandRange = handRange;
    let orderedHand = `${hand.card1}${hand.card2}`;
    updatedHandRange[`${hand.id}`] = handRange[`${hand.id}`] ? null : hand;
    await count(counter + 1);
    await updateHandRange(updatedHandRange);

    let comboCount = calculateComboCount();
    setCombos(comboCount);
    setRangePercent(calculateRangePercent(comboCount));

    await firestore.update(`relics/${data.id}`, {
      handRange: updatedHandRange,
    });
  };

  const calculateRangePercent = (combos) => {
    let percent = 0.0;

    return parseFloat(((combos / 1360) * 100).toFixed(1));
  };

  const calculateComboCount = () => {
    console.log("UPDATD HAND RANGE USE EFFECT");
    let comboCount = 0;
    for (const hand in handRange) {
      if (handRange[`${hand}`] && typeof handRange[`${hand}`] == "object") {
        comboCount = comboCount + parseInt(handRange[`${hand}`]?.combos);
        console.log("found hand", handRange[`${hand}`]);
      }
    }

    return comboCount;
  };

  useEffect(() => {
    let comboCount = calculateComboCount();

    setCombos(comboCount);
    setRangePercent(calculateRangePercent(comboCount));
  }, []);

  const renderHands = () => {
    return handsByRank.map((hand) => {
      return (
        <div className="hand" onClick={() => toggleHand(hand)}>
          {hand.hand}
          <style jsx>{`
            .hand {
              height: 20px;
              width: 20px;
              color: black;
              background-color: ${handRange[`${hand.id}`] ? "yellow" : "grey"};
              display: flex;
              align-items: center;

              justify-content: center;
              border: 0.5px solid gainsboro;
            }
          `}</style>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <span className="title">
        {data?.title} {rangePercent}%
        <button onClick={() => updateRangeByPercent(true)}>+</button>
        <button onClick={() => updateRangeByPercent(false)}>-</button>
      </span>
      <div className="chart">{renderHands()}</div>
      <style jsx>
        {`
          .container {
            width: 273px;
            height: auto;
            position: absolute;
            background-color: black;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            font-size: 10px;
            font-family: sans-serif;
            border: 1px solid purple;
          }
          .title {
            color: white;
            background-color:purple;
            font-size 16px;
            width:100%;
            text-align:center;
          }
          .chart {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
};

export default HandRange;
