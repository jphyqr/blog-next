import React from "react";
import firebase from "../../firebase";

import ShowRelic from "../../components/relics/ShowRelic";
const Relic = ({ data }) => {
  return (
    <div className="container">
      <ShowRelic data={data} />

      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </div>
  );
};

Relic.getInitialProps = async ({ query }) => {
  const firestore = firebase.firestore();
  const relicRef = firestore.collection("relics").doc(query.relicId);
  let relicSnap = await relicRef.get();
  let data = relicSnap.data();

  Object.assign(data, { id: query.relicId });

  console.log("relic ssr", data);

  return { data };
};

export default Relic;
