import React, { useEffect, useState, useMemo } from "react";

import _ from "lodash";
import firebase from "../../../../firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import Router from "next/router";
import DocumentEditor from "../../../../components/DocumentEditor";

const EditWidget = ({ router }) => {
  const firestore = firebase.firestore();
  const auth = useSelector((state) => state.firebase.auth || {});

  if (auth.isLoaded && auth.isEmpty) Router.push("/");

  const widgetQuery = useMemo(
    () => ({
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "widgets", doc: router.query.widgetId }],
      storeAs: "widgetConfig",
    }),
    [router.query.userId]
  );
  useFirestoreConnect(widgetQuery);
  const widgetConfig = useSelector(
    (state) =>
      (state.firestore.ordered.widgetConfig &&
        state.firestore.ordered.widgetConfig[0]) ||
      {}
  );

  const [widgetId, setWidgetId] = useState(router?.query?.widgetId || {});
  const [record, setRecord] = useState({});
  const [loadingRecord, setLoaded] = useState(true);

  useEffect(() => {
    setWidgetId(router?.query?.widgetId);

    const getRecordById = async () => {
      if (!_.isEmpty(id) && !_.isEmpty(widget)) {
        const recordRef = firestore
          .collection("users")
          .doc(auth.uid)
          .collection("widgets")
          .doc(widgetId);
        let recordSnap = await recordRef.get();
        let record = recordSnap.data();

        setRecord(record);
        setLoaded(false);
      }

      return record;
    };

    getRecordById();
  }, [widgetConfig]);

  const handleUpdateRecord = async (record) => {
    await firestore
      .collection("courses")
      .doc(id)
      .collection("widgets")
      .doc(widget)
      .set({
        ...record,
        updateDate: Date.now(),
      });

    console.log("handleUpdateRecord", record);
  };

  return (
    <div>
      <button onClick={() => Router.push(`/widgets/user/${auth.uid}/`)}>
        All Widgets
      </button>

      <DocumentEditor
        updateDatabase={handleUpdateRecord}
        loading={loadingRecord}
        document={record}
      />
    </div>
  );
};

export default EditWidget;
