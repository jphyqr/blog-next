const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.closeRelicAfterDuration = functions.firestore
  .document("all_widgets/{widgetId}")
  .onWrite(async (info, context) => {
    const widgetId = context.params.widgetId;
    const after = info.after.data();
    const before = info.before.data();

    console.log("Relic Changed", widgetId);

    //showDataSource
    //when SDS changes.. and its changed to not empty, then
    //look up the record , get its duration, sleep for that
    //duration, then change the record to empty
    console.log({ before });
    console.log({ after });
    if (
      before.showDataSource.length === 0 &&
      after.showDataSource.length !== 0
    ) {
      console.log("CHANGED TO LENGTH");
      //     .then(taskID => {
      //   //add a notification to all of the users who follow this task
      //   //REFACTOR can probably combine these 3 into one call
      //   let ref = admin.firestore().collection("task_subscribed");
      // })
      // .then(taskSubscribedRef => {
      //   console.log({ taskSubscribedRef });
      //   return taskSubscribedRef.where("taskId", "==", after.taskID);
      // })
      // .then(taskSubscribedQuery => {
      //   console.log({ taskSubscribedQuery });
      //   return taskSubscribedQuery.get();
      // }
      let dataSourceRef = await admin
        .firestore()
        .collection("relics")
        .doc(after.showDataSource)
        .get();
      console.log("Got Datasource", dataSourceRef);
      console.log("Got Datasource.data", dataSourceRef.data());

      await sleep(parseInt(dataSourceRef.data().duration) * 1000);

      console.log("FINISHED SLEEPING. UPDATE THE RECORD NOW TO EMPTY");

      await admin.firestore().collection("all_widgets").doc(widgetId).update({
        showDataSource: "",
      });
    } else {
      console.log("CHANGED TO NO LENGTH");
    }
  });
