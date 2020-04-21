import React, { useEffect, useState } from "react";
import { themeColors } from "../layout/themeConstants";

import EditableProperty from "./EditableProperty";

const EditableObject = ({
  inList,
  updateParent,
  deleteObjectFromList,
  selectIndex,
  parentsIndex,
  key,
  value,
  field,
  parentIsSelected,
  selectField,
}) => {
  const [selectedProperty, selectProperty] = useState({});
  const [objectData, setObject] = useState(value);
  const [counter, incrementCounter] = useState(0); //force update on state when we update just a child of records state

  const handleOnChange = (e) => {
    console.log("setValue", e.target.value);
    setValue(e.target.value);
  };

  const updateObject = async (value, property) => {
    console.log("EDITABLEOBJECT BLUR", value);

    let newState = objectData;
    newState[`${property}`] = value;

    setObject(newState);
    incrementCounter(counter + 1);

    updateParent(newState, field);

    selectProperty({});
  };

  const renderProperties = () => {
    return (
      objectData &&
      Object.keys(objectData).map((property, index) => {
        const propValue = value[`${property}`];

        return (
          <EditableProperty
            inList={inList}
            inObjectInList
            updateObject={updateObject}
            selectIndex={selectIndex}
            parentsIndex={parentsIndex}
            key={index}
            property={property}
            value={propValue}
            isSelected={selectedProperty == property}
            selectProperty={selectProperty}
          />
        );
      })
    );
  };

  return (
    <div className="card" key={key}>
      {renderProperties()}
      {inList && (
        <button onClick={() => deleteObjectFromList(parentsIndex)}>
          Delete
        </button>
      )}

      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          border: ${parentIsSelected
            ? "3px yellow solid"
            : inList
            ? `3px solid ${themeColors.Secondary}`
            : ""};
        }

        .card:nth-child(odd) {
          background-color: lightgrey;
        }

        input {
          width: 100%;
          flex-grow: 1;
        }

        .label {
          background-color: ${themeColors.Secondary};
          width: 150px;
          color: white;
          font-weight: bold;
          padding: 5px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default EditableObject;
