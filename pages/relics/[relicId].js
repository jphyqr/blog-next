import React from "react";
import firebase from "../../firebase";

import ShowRelic from "../../components/relics/ShowRelic";
const Relic = ({ relic }) => {
  return (
    <div className="container">
      <ShowRelic relic={relic} />

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
  let relic = relicSnap.data();

  Object.assign(relic, { id: query.relicId });

  console.log("relic ssr", relic);

  return { relic };
};

export default Relic;
