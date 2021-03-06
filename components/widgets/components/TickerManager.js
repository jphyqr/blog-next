import React, { useState, useEffect } from "react";

import _ from "lodash";
import { useDispatch } from "react-redux";
import { SET_AVATAR_MATCH } from "../../../constants/reducerConstants";

const TickerManager = ({
  speed,
  pulsing,
  filteredTickers,
  record,
  color,
  avatarSync,
  ...otherProps
}) => {
  const [currentTickerName, setCurrentTickerName] = useState({});
  const [scrollTimeMap, updateScrollTimeMap] = useState({});
  const [forceRerender, takeOff] = useState(false);
  const dispatch = useDispatch();
  const getNextPropertyOfObject = (obj, currentKey) => {
    let nextProperty = {};
    nextProperty = Object.keys(obj)[0];
    Object.keys(obj).map((key, i) => {
      if (key == currentKey) {
        if (i == Object.keys(obj).length - 1)
          nextProperty = Object.keys(obj)[0];
        else nextProperty = Object.keys(obj)[i + 1];
      }
    });

    avatarSync &&
      dispatch({
        type: SET_AVATAR_MATCH,
        payload: nextProperty,
      });

    return nextProperty;
  };

  const renderTicker = () => {
    let ShowTicker;
    if (!_.isEmpty(currentTickerName)) {
      console.log({ filteredTickers });
      console.log({ currentTickerName });
      ShowTicker = filteredTickers[`${currentTickerName}`];
      console.log({ ShowTicker });
      if (typeof ShowTicker != "undefined")
        return (
          <ShowTicker
            {...otherProps}
            record={record}
            name={currentTickerName}
            scrollTime={scrollTimeMap[`${currentTickerName}`]}
            calculateScrollTime={calculateScrollTime}
            speed={speed}
          />
        );
    }

    return <div></div>;
  };

  useEffect(() => {
    setCurrentTickerName(currentTickerName);
  }, []);

  useEffect(() => {
    const delay = scrollTimeMap[`${currentTickerName}`] * 1000 || 5000;

    const timer = setTimeout(() => {
      setCurrentTickerName(
        getNextPropertyOfObject(filteredTickers, currentTickerName)
      );
    }, delay);
  }, [currentTickerName]);

  const calculateScrollTime = (currentRef, tickerName, fixedTime) => {
    const updatedMap = scrollTimeMap;

    if (fixedTime) {
      console.log("FIXED TIME UPDATE");
      updatedMap[`${tickerName}`] = fixedTime;
    } else {
      updatedMap[`${tickerName}`] = currentRef.offsetWidth / speed;
    }
    updateScrollTimeMap(updatedMap);

    takeOff(!forceRerender);
  };

  return (
    <div className="TickerManager">
      {renderTicker()}

      <style jsx>
        {`
          .TickerManager {
            height: auto;
            width: auto;
            background-color: ${color};
       
          }

          @keyframes bgchange {
            0% { background-color: ${pulsing ? "purple" : "purple"}};
            40% { background-color: ${pulsing ? "blue" : "purple"}};
            20% { background-color: ${pulsing ? "red" : "purple"}};
            60% { background-color: ${pulsing ? "orange" : "purple"}};
            80% { background-color: ${pulsing ? "yellow" : "purple"}};
            100% { background-color: ${pulsing ? "purple" : "purple"}};
            }
        } 
       
        `}
      </style>
    </div>
  );
};

export default TickerManager;
