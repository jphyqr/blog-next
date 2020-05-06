import React, { useMemo } from "react";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import firebase from "firebase";
import Router from "next/router";
const UserWidgets = ({ router }) => {
  const auth = useSelector((state) => state.firebase.auth || {});

  if (auth.isLoaded && auth.isEmpty) Router.push("/");

  const widgetQuery = useMemo(
    () => ({
      collection: "widgets",
      storeAs: "allWidgets",
    }),
    [router?.query?.userId]
  );

  const myWidgetsQuery = useMemo(
    () => ({
      collection: "widgets_for_user",
      where: ["userId", "==", router.query.userId],
      storeAs: "myWidgets",
    }),
    [router?.query?.userId]
  );
  useFirestoreConnect(widgetQuery);
  useFirestoreConnect(myWidgetsQuery);
  const allWidgets = useSelector(
    (state) => state.firestore.ordered.allWidgets || []
  );

  const myWidgets = useSelector(
    (state) => state.firestore.ordered.myWidgets || []
  );
  const profile = useSelector((state) => state.firebase.profile || {});

  const createWidgetForUser = async (widget) => {
    const firestore = firebase.firestore();

    const { id, ...otherProps } = widget || {};

    let newWidget = await firestore.collection("all_widgets").add({
      creationDate: Date.now(),
      ...otherProps,
      widgetName: id,
      editors: [router.query.userId],
      ownerId: router.query.userId,
      createdBy: profile.displayName,
      createdByPhotoURL: profile.photoURL || "user.png",
    });

    await firestore
      .collection("widgets_for_user")
      .doc(`${router?.query?.userId}_${newWidget.id}`)
      .set({
        creationDate: Date.now(),
        ...otherProps,
        widgetName: id,
        widgetId: newWidget.id,
        ownderId: router.query.userId,
        userId: router.query.userId,
      });

    //create in edit_widget list
    //tie widgets to users that can edit them
    //widgets (all the widget)
    //widgets_for_user
    router.push("/widgets/[widgetId]/edit", `/widgets/${newWidget.id}/edit`);
  };

  const renderButtons = (widgets) => {
    return widgets.map((widget) => {
      return (
        <button onClick={() => createWidgetForUser(widget)}>{widget.id}</button>
      );
    });
  };

  const renderMyWidgets = (widgets) => {
    return widgets.map((widget) => {
      return (
        <div
          className="row"
          onClick={() =>
            router.push(
              "/widgets/[widgetId]/edit",
              `/widgets/${widget.widgetId}/edit`
            )
          }
        >
          {widget.widgetName}
          <style jsx>{`
            .row {
              display: flex;
            }
          `}</style>
        </div>
      );
    });
  };

  return (
    <div className="container">
      {/* {router?.query?.userId} */}
      Create A Widget
      <div className="button-group">{renderButtons(allWidgets)}</div>
      <hr />
      <h3>My Widgets</h3>
      <div className="table">{renderMyWidgets(myWidgets)}</div>
      <style jsx>
        {`
          .container {
          }

          .button-group {
            display: flex;
            flex-wrap: wrap;
          }
          .table {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default UserWidgets;
