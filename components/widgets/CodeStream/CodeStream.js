import React, { useMemo, useState, useEffect } from "react";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";
import firebase from "../../../firebase";
import {
  widgetHeights,
  tickerManagerHeights,
  tickerSpeeds,
} from "../widgetConstants";
import {
  techTickerMap,
  highPriorityTickerMap,
  newsTickerMap,
} from "./techStackConstants";

import FocusesTicker from "./FocusesTicker/FocusesTicker";
import TechStackTicker from "./TechStackTicker/TeckStackTicker";
import ExpandedView from "../components/ExpandedView";
import TitleTicker from "../common/TitleTicker/TitleTicker";
import ProblemTicker from "./ProblemTicker/ProblemTicker";
import TeachingTicker from "./TeachingTicker/TeachingTicker";
import LearningTicker from "./LearningTicker/LearningTicker";
import ProfileTicker from "../common/ProfileTicker/ProfileTicker";
import ScheduleTicker from "../common/ScheduleTicker/ScheduleTicker";
import TickerManager from "../components/TickerManager";
import _ from "lodash";
import { themeColors } from "../../layout/themeConstants";
import AvatarSquare from "../common/AvatarSquare/AvatarSquare";
import WebsiteTicker from "../common/WebsiteTicker/WebsiteTicker";

const CodeStream = ({ id, widgetId }) => {
  const widgetHeight = widgetHeights.Medium;

  let tickerComponent = {};

  tickerComponent[techTickerMap.FocusesTicker] = FocusesTicker;
  tickerComponent[techTickerMap.TechStackTicker] = TechStackTicker;

  tickerComponent[highPriorityTickerMap.TitleTicker] = TitleTicker;
  tickerComponent[highPriorityTickerMap.ProblemTicker] = ProblemTicker;
  tickerComponent[highPriorityTickerMap.TeachingTicker] = TeachingTicker;
  tickerComponent[highPriorityTickerMap.LearningTicker] = LearningTicker;
  tickerComponent[newsTickerMap.WebsiteTicker] = WebsiteTicker;

  tickerComponent[newsTickerMap.ProfileTicker] = ProfileTicker;
  tickerComponent[newsTickerMap.ScheduleTicker] = ScheduleTicker;

  const firestore = firebase.firestore();

  const widgetQuery = useMemo(
    () => ({
      collection: "all_widgets",
      doc: widgetId,

      storeAs: "widgetConfig",
    }),
    [id, widgetId]
  );
  useFirestoreConnect(widgetQuery);
  const widgetConfig = useSelector(
    (state) =>
      (state.firestore.ordered.widgetConfig &&
        state.firestore.ordered.widgetConfig[0]) ||
      {}
  );

  const [record, setRecord] = useState(widgetConfig);
  console.log("record is loaded", isLoaded(record));
  console.log("record is empty", isEmpty(record));
  const [loadingRecord, setLoaded] = useState(true);
  //should wego ShowStack ? [ShowFocuses]

  const filterObjFromObj = (original, filter) => {
    console.log({ original });
    console.log({ filter });

    //loop over the original, and if the filter has that property,
    //do nothing, if not delete it.
    let filtered = {};

    Object.keys(original).map((key) => {
      console.log({ key });
      if (filter.hasOwnProperty(key)) {
        console.log("filter has", key);
        filtered[`${key}`] = original[`${key}`];
      }
    });

    console.log(
      `after filter of ${Object.keys(filter)[0]} from ${original}`,
      filtered
    );

    return filtered;
  };

  useEffect(() => {
    const getRecordById = async () => {
      if (!_.isEmpty(id) && !_.isEmpty(widgetId)) {
        const recordRef = firestore.collection("all_widgets").doc(widgetId);
        let recordSnap = await recordRef.get();
        let record = recordSnap.data();

        setRecord(record);
        setLoaded(false);
      }

      return record;
    };

    getRecordById();
  }, [widgetConfig]);

  return (
    <div className="expanded-container">
      <ExpandedView showDataSource={record.showDataSource || false} />
      <div className="square">
        <AvatarSquare />
      </div>
      <div className="container">
        {!loadingRecord && !_.isEmpty(record) && (
          <div className="compound-row">
            <div className="logo-square"></div>
            <div className="ticker-column">
              <div className="fade-to-black-left" />
              <div className="fade-to-black-right" />
              <TickerManager
                widgetHeight={widgetHeight}
                pulsing
                color={themeColors.Secondary}
                height={tickerManagerHeights.Third}
                key={0}
                speed={tickerSpeeds.Fixed15}
                name={"HighPriorityStaticTicker"}
                record={record}
                filteredTickers={filterObjFromObj(
                  tickerComponent,
                  highPriorityTickerMap
                )}
              />

              <TickerManager
                widgetHeight={widgetHeight}
                color={themeColors.Background}
                height={tickerManagerHeights.Third}
                key={1}
                speed={tickerSpeeds.Slow}
                name={"TechTicker"}
                autoScroll
                record={record}
                filteredTickers={filterObjFromObj(
                  tickerComponent,
                  techTickerMap
                )}
              />

              <TickerManager
                widgetHeight={widgetHeight}
                color={themeColors.Background}
                height={tickerManagerHeights.Third}
                key={2}
                speed={tickerSpeeds.Fixed20}
                name={"NewsTicker"}
                autoScroll
                avatarSync
                record={record}
                filteredTickers={filterObjFromObj(
                  tickerComponent,
                  newsTickerMap
                )}
              />
            </div>
          </div>
        )}

        {/*         
         <Ticker  name={'problem'} scrollTime={scrollTimeMap[`problem`]} calculateScrollTime={calculateScrollTime} handleRenderItems={()=>{return record?.problem}} />
     */}
      </div>
      <style jsx>
        {`
          .compound-row {
            display: flex;
            width: 100%;
          }

          .logo {
            height: 100%;
            width: 100%;
          }

          .logo-square {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: ${widgetHeight}px;
            background-color: grey;
            border: 2px solid ${themeColors.Secondary};
            box-sizing: border-box;
          }

          .ticker-column {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
          }

          .fade-to-black-left {
            height: ${widgetHeight}px;
            position: absolute;
            width: ${widgetHeight}px;
            left: 0px;
            max-width: 25%;
            background-image: linear-gradient(
              to left,
              rgba(255, 255, 255, 0) 0%,
              rgba(0, 0, 0, 1) 100%
            );
            z-index: 5;
          }

          .fade-to-black-right {
            height: ${widgetHeight}px;
            position: absolute;
            width: ${widgetHeight / 1.5}px;
            right: 0px;
            max-width: 25%;
            background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(0, 0, 0, 1) 100%
            );
            z-index: 15;
          }

          .expanded-container {
            height: ${600}px;
            width: 100%;
            position: relative;
            overflow: hidden;
          }

          .square {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 130px;
            width: 100%;
            z-index: 10;
          }
          .container {
            display: flex;
            background-color: black;
            bottom: 0px;
            width: 100%;
            position: absolute;
            height: ${widgetHeight}px;
          }

          .body {
            width: 100%;
            padding: 5px 0px 5px 0px;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;

            overflow: hidden;
          }

          .footer {
            display: flex;
            width: 100%;
            padding: 5px 0px 5px 0px;
            font-size: 26px;
            color: white;

            overflow: hidden;
          }

          .fixed-label {
            background-color: red;
            margin-right: 5px;
            bottom: 0;
            position: absolute;
            font-size: 26px;
          }
        `}
      </style>
    </div>
  );
};

export default CodeStream;
