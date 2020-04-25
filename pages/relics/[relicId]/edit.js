import React from "react";

const Edit = ({ router }) => {
  return (
    <div className="container">
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </div>
  );
};

import firebase from "../../../firebase";

Edit.getInitialProps = async (context) => {
  const { query } = context || {};
  //const {store} = context || {}

  const firestore = firebase.firestore();

  const ref = firestore.collection("relics").doc(query.relicId);
  let snap = await ref.get();
  let record = snap.data();

  return { relic: Object.assign(record, { id: query.relicId }) };
};

export default Edit;
