import React, { useEffect, useState, useMemo } from "react";

import _ from "lodash";
import firebase from "../../../firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import Router from "next/router";
import DocumentEditor from "../../../components/DocumentEditor";
import ShowWidget from "../../../components/widgets/ShowWidget";

const EditWidget = ({ recordId, router, record, data_sources }) => {
  const firestore = firebase.firestore();
  const auth = useSelector((state) => state.firebase.auth || {});

  if (auth.isLoaded && auth.isEmpty) Router.push("/");

  const [_record, setRecord] = useState(record);

  const blockControls = !_.isEmpty(_record.showDataSource);
  const recordQuery = useMemo(
    () => ({
      collection: "all_widgets",
      doc: record.id,

      storeAs: "recordSnap",
    }),
    [record.id]
  );
  useFirestoreConnect(recordQuery);
  const recordSnap = useSelector(
    (state) =>
      (state.firestore.ordered.recordSnap &&
        state.firestore.ordered.recordSnap[0]) ||
      {}
  );

  useEffect(() => {
    const getRecordById = async () => {
      const recordRef = firestore.collection("all_widgets").doc(recordId);
      let recordSnap = await recordRef.get();
      let updatedRecord = recordSnap.data();

      setRecord(updatedRecord);
      setLoaded(false);
    };

    getRecordById();
  }, [recordSnap]);

  const [loadingRecord, setLoaded] = useState(true);
  const [expansion, setExpansion] = useState(false);
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

  const updateShowDataSource = async (id) => {
    await firestore
      .collection("all_widgets")
      .doc(router?.query?.widgetId)
      .update({
        showDataSource: id,
      });

    setExpansion(true);
  };

  useEffect(() => {
    console.log("USE EFFECT EXPANSION", expansion);

    const clearDataSourceFromDB = async () => {
      await firestore
        .collection("all_widgets")
        .doc(router?.query?.widgetId)
        .update({
          showDataSource: "",
        });

      setExpansion(false);
    };

    if (expansion) {
      console.log("THIS GOT RAN AAAA");
      const timer = setTimeout(() => {
        clearDataSourceFromDB();
      }, 5000);
    }

    console.log("THIS DIDNT RUN!! ");

    return clearTimeout();
  }, [expansion]);

  useEffect(() => {
    console.log("SHOW DATA SOURCE USE EFFECT");
    if (_.isEmpty(_record.showDataSource)) {
      console.log("SHOW DATA SOURCE USE EFFECT IS EMPTY");
      setExpansion(false);
    }
  }, [_record.showDataSource]);

  const renderControls = () => {
    return data_sources.map((source) => {
      return (
        <button
          disabled={blockControls}
          onClick={() => updateShowDataSource(source.id)}
        >
          {source.title}
        </button>
      );
    });
  };

  return (
    <div>
      <ShowWidget widgetType={_record.widgetName} widgetId={recordId} />
      <div className="container">
        <div className="column grow">
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
        <div className="column">{renderControls()}</div>

        <style jsx>{`
          .container {
            display: flex;
          }

          .column {
            display: flex;
            flex-direction: column;
          }

          .grow {
            flex-grow: 1;
          }
        `}</style>
      </div>
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

  const dataRef = firestore.collection("data_sources");
  let dataSnapShot = await dataRef.get();

  let data_sources = [];
  dataSnapShot.forEach((doc) => {
    data_sources.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return { record, recordId: query.widgetId, data_sources };
};

export default EditWidget;
