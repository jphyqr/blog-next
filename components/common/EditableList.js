import React, { useState } from "react";
import EditableObject from "./EditableObject";
import { firestore } from "firebase";
import { themeColors } from "../layout/themeConstants";
import EditableProperty from "./EditableProperty";

const EditableList = ({
  isSelected,
  deleteItem,
  updateParent,
  label,
  field,
  selectField,
  list,
}) => {
  const [_list, setList] = useState(list);
  const [selectedIndex, selectIndex] = useState(-1);

  const updateList = async (value) => {
    console.log("LIST BLURRED");
    let newState = _list;
    newState[selectedIndex] = value;
    setList(newState);

    updateParent(newState, field);

    selectIndex(-1);
  };

  const updateObjectInList = () => {};

  const deleteObjectFromList = (index) => {
    console.log("DELETE OBJECT");
    let newState = _list;
    console.log("newState before", newState);
    newState.splice(index, 1);
    console.log("newState after", newState);
    updateList(newState);

    updateParent(newState, field);

    selectIndex(-1);
  };

  const addItemToParent = () => {
    let copyItem = {};
    copyItem = _list[_list.length - 1];
    let newItem = {};
    let updatedList = _list;
    if (typeof copyItem === "object") {
      Object.keys(copyItem).map((field) => {
        newItem[`${field}`] = "newItem";
      });
    } else {
      newItem = "newItem";
    }

    updatedList.push(newItem);

    setList(updatedList);
    updateParent(updatedList, field);
  };
  const renderItems = () => {
    const editField = {};

    return (
      <div className="row">
        {list.map((item, index) => {
          if (typeof item == "string") {
            return (
              <EditableProperty
                property={field}
                value={item}
                inList
                selectIndex={selectIndex}
                updateObject={updateList}
                key={item}
                field={field}
                isSelected={isSelected && selectedIndex == index}
                selectProperty={selectIndex}
                indexInList={index}
              />
            );
          } else if (!Array.isArray(item) && typeof item == "object") {
            console.log("is AN OBJECT", item);
            return (
              <EditableObject
                inList
                deleteObjectFromList={deleteObjectFromList}
                selectIndex={selectIndex}
                parentsIndex={index}
                parentIsSelected={selectedIndex == index}
                selectIndex={selectIndex}
                updateParent={updateList}
                field={field}
                value={item}
                isSelected={field}
                selectField={() => {}}
              />
            );
          }
        })}
        <button onClick={addItemToParent}>Add</button>
        <style jsx>{`
          .row {
            display: flex;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div onDoubleClick={() => selectField(field)} className="wrapped-list">
      <span className="label">{label} : </span>
      {renderItems()}

      <style jsx>
        {`
          .label {
            text-transform: uppercase;
            background-color: ${themeColors.Grey};
            color: ${themeColors.Secondary};

            width: 100px;
            word-break: break-all;

            padding: 0 5px;
          }
          .wrapped-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            background-color: lightgrey;
          }
        `}
      </style>
    </div>
  );
};

export default EditableList;
