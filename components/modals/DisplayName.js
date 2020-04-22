import React from "react";
import Modal from "./Modal";
import DisplayNameForm from "../forms/DisplayNameForm";

const DisplayName = () => {
  const displayForm = <DisplayNameForm />;

  return <Modal content={displayForm} />;
};

export default DisplayName;
