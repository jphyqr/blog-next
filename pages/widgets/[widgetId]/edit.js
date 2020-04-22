import React, { useEffect, useState, useMemo } from "react";

import _ from "lodash";
import firebase from "../../../firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import Router from "next/router";
import DocumentEditor from "../../../components/DocumentEditor";

const EditWidget = ({ router, record }) => {
  const firestore = firebase.firestore();
  const auth = useSelector((state) => state.firebase.auth || {});

  if (auth.isLoaded && auth.isEmpty) Router.push("/");

  const [_record, setRecord] = useState(record);
  const [loadingRecord, setLoaded] = useState(true);

  const handleUpdateRecord = async (updatedRecord) => {
    (await auth) &&
      firestore
        .collection("all_widgets")
        .doc(router?.query?.widgetId)
        .set({
          ...Object.assign({}, record, updatedRecord),
          updateDate: Date.now(),
        });

    console.log("handleUpdateRecord", record);
  };

  const filterViewableFields = (document) => {
    console.log("Filterviewabfields before", document);
    const { notViewable, notEditable, ...fields } = document || {};
    console.log("Filterviewabfields after", fields);

    notViewable &&
      Object.keys(notViewable).map((field) => {
        fields && delete fields[`${field}`];
      });

    return fields;
  };

  return (
    <div>
      <button onClick={() => Router.push(`/widgets/user/${auth.uid}/`)}>
        All Widgets
      </button>

      <DocumentEditor
        updateDatabase={handleUpdateRecord}
        loa
        ing={loadingRecord}
        document={filterViewableFields(_record)}
        notEditable={_record.notEditable}
      />
    </div>
  );
};

EditWidget.getInitialProps = async ({ store, query }) => {
  console.log("SSR edit page store", store);
  console.log("SSR edit page query", query);

  const firestore = firebase.firestore();

  const recordRef = firestore.collection("all_widgets").doc(query.widgetId);
  let recordSnap = await recordRef.get();
  let record = recordSnap.data();

  return { record };
};

export default EditWidget;
