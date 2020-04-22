import React, { useCallback } from "react";
import { useFirestore, useFirebase } from "react-redux-firebase";
import { updateDisplayName } from "../../actions/authActions";

const DisplayNameForm = () => {
  const firebase = useFirebase();
  const firestore = useFirestore();
  const handleUpdateDisplayName = useCallback(async (displayName) => {
    await updateDisplayName({ firebase, firestore }, displayName, "/");
    //    toggleForm(false);
  }, []);

  const handleSubmit = (e, values) => {
    e.preventDefault();

    handleUpdateDisplayName(e.target.displayName.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Display Name Form</h3>
      <input type="test" id="displayName" />
      <button type="submit">Update Display Name</button>
    </form>
  );
};

export default DisplayNameForm;
