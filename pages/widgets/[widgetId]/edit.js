import React, { useEffect, useState, useMemo } from "react";

import _ from "lodash";
import firebase from "../../../firebase";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import Router from "next/router";
import DocumentEditor from "../../../components/DocumentEditor";
import ShowWidget from "../../../components/widgets/ShowWidget";

const EditWidget = ({ data }) => {
  console.log("editwidget", data);

  const { relics, id: recordId, ...record } = data || [];
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
    const { notViewable, notEditable, ...fields } = document || {};

    notViewable &&
      Object.keys(notViewable).map((field) => {
        fields && delete fields[`${field}`];
      });

    return fields;
  };

  const updateShowDataSource = async (id) => {
    await firestore.collection("all_widgets").doc(recordId).update({
      showDataSource: id,
    });

    setExpansion(true);
  };

  // useEffect(() => {
  //   console.log("USE EFFECT EXPANSION", expansion);

  //   const clearDataSourceFromDB = async () => {
  //     // await firestore
  //     //   .collection("all_widgets")
  //     //   .doc(router?.query?.widgetId)
  //     //   .update({
  //     //     showDataSource: "",
  //     //   });

  //     setExpansion(false);
  //   };

  //   if (expansion) {
  //     console.log("THIS GOT RAN AAAA");
  //     const timer = setTimeout(() => {
  //       clearDataSourceFromDB();
  //     }, 5000);
  //   }

  //   console.log("THIS DIDNT RUN!! ");

  //   return clearTimeout();
  // }, [expansion]);

  useEffect(() => {
    console.log("SHOW DATA SOURCE USE EFFECT");
    if (_.isEmpty(_record.showDataSource)) {
      console.log("SHOW DATA SOURCE USE EFFECT IS EMPTY");
      setExpansion(false);
    } else {
      setExpansion(true);
    }
  }, [_record.showDataSource]);

  const renderControls = () => {
    return relics.map((source) => {
      return (
        <div className="column">
          <button
            disabled={blockControls}
            onClick={() => updateShowDataSource(source.id)}
          >
            {`${source.title}(${source.duration}s)`}
          </button>

          <button
            onClick={() =>
              Router.push("/relics/[relicId]", `/relics/${source.id}`)
            }
          >
            Edit
          </button>
          <style jsx>
            {`
              .column {
                display: flex;
                flex-direction: column;
                width: 150px;
              }
            `}
          </style>
        </div>
      );
    });
  };

  return (
    <div className="stacked-container">
      <div className="column grow">
        <button onClick={() => Router.push(`/widgets/user/${auth.uid}/`)}>
          All Widgets
        </button>
        <DocumentEditor
          updateDatabase={handleUpdateRecord}
          loading={loadingRecord}
          document={filterViewableFields(_record)}
          notEditable={_record.notEditable}
        />
      </div>

      <div className="overlap">
        {/* <ShowWidget widgetType={_record.widgetName} widgetId={recordId} /> */}

        <div className="row">{renderControls()}</div>
      </div>

      <style jsx>{`
        .stacked-container {
          position: relative;
        }

        .overlap {
          position: fixed;
          bottom: 0px;
          z-index: 5;
          width: 100%;
          display: flex;
          flex-direction: column;
          height: auto;
        }

        .container {
          display: flex;
        }

        .column {
          display: flex;
          flex-direction: column;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 300px;
        }

        .grow {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export async function getStaticProps({ params, preview = false }) {
  console.log("GET STATIC PROPS", params);
  const firestore = firebase.firestore();
  const relicsRef = firestore.collection("all_widgets").doc(params?.widgetId);

  let relicsSnap = await relicsRef.get();

  let data = await relicsSnap.data();
  console.log("GET STATIC PROPS", data);
  Object.assign(data, { id: params.widgetId });

  const dataRef = firestore.collection("relics");
  let dataSnapShot = await dataRef.get();

  let relics = [];
  dataSnapShot.forEach((doc) => {
    relics.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  Object.assign(data, { relics });

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

  const paths = loadedRelics.map((post) => `/widgets/${post.id}/edit`);
  console.log("GET STATIC PATHS", paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default EditWidget;
