import React, { useState, useEffect } from "react";
import { themeColors } from "./layout/themeConstants";
import EditableList from "./common/EditableList";
import EditableObject from "./common/EditableObject";
import EditableProperty from "./common/EditableProperty";

const DocumentEditor = ({ document, updateDatabase, notEditable }) => {
  const [counter, incrementCounter] = useState(0); //force update on state when we update just a child of records state
  const [editField, selectField] = useState({});
  const [formData, updateFormData] = useState(document, {});

  useEffect(() => {
    updateFormData(document);
  }, [document, counter]);

  const renderObjects = () => {
    return (
      document &&
      Object.keys(document).map((field, i) => {
        const value = document[`${field}`];
        console.log({ value });

        if (!Array.isArray(value) && typeof value == "object") {
          console.log("is AN OBJECT", field);

          return (
            <div>
              <span className="label">{field}</span>
              <EditableObject
                selectIndex={() => {}}
                updateParent={updateDocument}
                key={i}
                field={field}
                value={value}
                isSelected={editField == field}
                selectField={selectField}
              />
              <style jsx>{`
                .label {
                  background-color: ${themeColors.Secondary};
                  text-transform: uppercase;
                  color: white;
                }
              `}</style>
            </div>
          );
        } else {
          return <div></div>;
        }
      })
    );
  };

  const renderTextFields = () => {
    return (
      document &&
      Object.keys(document).map((field, i) => {
        if (typeof document[`${field}`] == "string") {
          return (
            <EditableProperty
              selectIndex={() => {}}
              disabled={notEditable[`${field}`] ? true : false}
              updateObject={updateDocument}
              key={i}
              property={field}
              value={formData[`${field}`]}
              isSelected={editField == field}
              selectProperty={selectField}
            />
          );
        } else {
          return <div></div>;
        }
      })
    );
  };

  const renderArrays = () => {
    return (
      document &&
      Object.keys(document).map((field, i) => {
        const value = document[`${field}`];
        if (Array.isArray(value)) {
          return (
            <EditableList
              updateParent={updateDocument}
              isSelected={field == editField}
              selectField={selectField}
              field={field}
              label={field}
              list={value}
            />
          );
        } else {
          return <div></div>;
        }
      })
    );
  };

  const updateDocument = async (value, field) => {
    console.log("delete at ", field);
    let newState = formData;
    newState[`${field ? field : editField}`] = value;
    updateFormData(newState);
    incrementCounter(counter + 1);

    updateDatabase(formData);

    selectField({});
  };

  return (
    <div className="container">
      {renderTextFields()}

      {renderArrays()}

      {renderObjects()}
      <style jsx>
        {`
          .container {
            background-color: gainsboro;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
};

export default DocumentEditor;
