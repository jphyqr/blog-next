import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import firebase from "../../firebase";
import { widgets } from "../../components/widgets/widgetConstants";
import CodeStream from "../../components/widgets/CodeStream/CodeStream";
import PokerStream from "../../components/widgets/PokerStream/PokerStream";
import ShowWidget from "../../components/widgets/ShowWidget";
const WidgetComponent = ({ widgetType, widgetId }) => {
  return (
    <div className="container">
      <ShowWidget widgetType={widgetType} widgetId={widgetId} />
    </div>
  );
};

WidgetComponent.getInitialProps = async ({ query }) => {
  console.log("SSR edit page query", query);

  const firestore = firebase.firestore();

  const recordRef = firestore.collection("all_widgets").doc(query.widgetId);
  let recordSnap = await recordRef.get();
  let record = recordSnap.data();
  console.log("SSR record", record);
  return { widgetId: query.widgetId, widgetType: record.widgetName };
};

export default WidgetComponent;
