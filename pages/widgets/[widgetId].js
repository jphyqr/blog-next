import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import firebase from "../../firebase";
import { widgets } from "../../components/widgets/widgetConstants";
import CodeStream from "../../components/widgets/CodeStream/CodeStream";
import PokerStream from "../../components/widgets/PokerStream/PokerStream";
import ShowWidget from "../../components/widgets/ShowWidget";
const WidgetComponent = ({ data }) => {
  return (
    <div className="container">
      <ShowWidget data={data} />
    </div>
  );
};

// WidgetComponent.getInitialProps = async ({ query }) => {
//   console.log("SSR edit page query", query);

//   const firestore = firebase.firestore();

//   const recordRef = firestore.collection("all_widgets").doc(query.widgetId);
//   let recordSnap = await recordRef.get();
//   let record = recordSnap.data();
//   console.log("SSR record", record);
//   return { widgetId: query.widgetId, widgetType: record.widgetName };
// };

export async function getStaticProps({ params, preview = false }) {
  console.log("GET STATIC PROPS", params);
  const firestore = firebase.firestore();
  const relicsRef = firestore.collection("all_widgets").doc(params?.widgetId);

  let relicsSnap = await relicsRef.get();

  let data = await relicsSnap.data();
  console.log("GET STATIC PROPS", data);
  Object.assign(data, { id: params.widgetId });

  return { props: { data: data } };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const firestore = firebase.firestore();
  const relicsRef = firestore.collection("all_widgets");

  let relicsSnap = await relicsRef.get();

  let loadedRelics = [];

  relicsSnap.forEach((doc) => {
    loadedRelics.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const paths = loadedRelics.map((post) => `/widgets/${post.id}`);

  const pathsedit = loadedRelics.map((post) => `/widgets/${post.id}/edit`);

  Object.assign([], ...paths, ...pathsedit);
  console.log("GET STATIC PATHS", paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default WidgetComponent;
