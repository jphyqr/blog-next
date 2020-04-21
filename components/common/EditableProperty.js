import React, { useEffect, useState } from "react";
import { themeColors } from "../layout/themeConstants";

const EditableProperty = ({
  updateObject,
  selectIndex,
  updateDocument,
  indexInList,
  key,
  value,
  property,
  isSelected,
  selectProperty,
  inList,
  inObjectInList,
}) => {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const handleOnChange = (e) => {
    console.log("setValue", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="card" key={key}>
      {(!inList || inObjectInList) && (
        <label className="label">{property}</label>
      )}
      {isSelected ? (
        <div>
          <input
            id={property}
            autoFocus
            type="text"
            value={_value}
            onBlur={() => updateObject(_value, property)}
            onChange={(e) => handleOnChange(e)} // setValue(e.target.value)}
          ></input>
        </div>
      ) : (
        <div>
          <span
            onDoubleClick={() => {
              selectProperty(property);
              selectIndex(indexInList);
            }}
          >
            {_value}
          </span>
        </div>
      )}

      <style jsx>{`
        .card {
          display: flex;
          margin: ${inList && !inObjectInList ? "0 5px 0 0" : "0 0 0 0px"};
          border-radius: ${inList ? "5px" : "0px"};
          color: ${inList ? "white" : "black"};
          padding: ${inList && !inObjectInList ? "0 5px" : "0 0"};
          background-color: ${inList && !inObjectInList
            ? `${themeColors.Secondary}`
            : `${themeColors.Grey}`};
        }

        .card:nth-child(odd) {
          background-color: ${!inList ? "lightgrey" : ""};
        }

        input {
          width: 100%;
          flex-grow: 1;
        }

        .label {
          background-color: ${inObjectInList
            ? "grey"
            : inList
            ? `${themeColors.Secondary}`
            : `${themeColors.Grey}`};
          width: 100px;
          word-break: break-all;
          padding: 0 5px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default EditableProperty;
