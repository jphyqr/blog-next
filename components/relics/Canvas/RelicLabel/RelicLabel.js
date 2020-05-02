import React from "react";
import LabelControls from "./LabelControls";

const RelicLabel = ({
  isDragged,
  selectedForEdit,
  childRef,
  seValue,
  child,
  editable,
  value,
}) => {
  return (
    <div ref={childRef} className="element">
      {editable ? (
        <input
          type="text"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => console.log("BLURR", e)} // updateParent(child, e.target.value)}
        ></input>
      ) : (
        <label>{child?.value || "Set Value"}</label>
      )}
      <style jsx>{`
        .element {
          background-color: ${child?.style?.backgroundColor || "black"};
          color: ${child?.style?.color || "white"};
          opacity: ${isDragged ? 0.6 : 1};
          font-size: ${Math.floor(child?.style?.fontSize) || 12}px;
          border: ${selectedForEdit ? "2px solid red" : ""};
        }
        .element:hover {
          border: 1px solid blue;
        }
      `}</style>
    </div>
  );
};

export default RelicLabel;
