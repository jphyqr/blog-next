import React, { useState, useEffect, useRef } from "react";
import LabelControls from "./RelicLabel/LabelControls";

const CanvasChild = ({
  selectedForEdit,
  isDragged,
  handleClick,
  handleHover,
  child,
  handleDrag,
  handleKeyboardInput,
  draggedPosition,
  updateParent,
  updateChildColorInParent,

  updateItem,
}) => {
  let childRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [editable, edit] = useState(false);
  const [position, setPosition] = useState({
    x: child?.x - childRef?.current?.offsetLeft / 2 || null,
    y: child?.y - childRef?.current?.offsetHeight / 2 || null,
  });

  const [value, setValue] = useState(child?.value || "");
  useEffect(() => {
    if (!selectedForEdit) {
      edit(false);
      updateParent(child, value);
    }
  }, [selectedForEdit]);

  useEffect(() => {
    console.log({ childRef });
  }, [draggedPosition]);

  const handleUpdateColor = (property, color) => {
    updateChildColorInParent(property, color, child);
  };

  return (
    <div
      className="canvas-child"
      onMouseEnter={
        selectedForEdit
          ? () => setShowControls(true)
          : () => handleHover({ child })
      }
      onMouseLeave={() => handleHover(null)}
      id={child.id}
      onClick={() => handleClick(child)}
      onMouseUp={(e) => handleDrag(null, null, childRef)}
      onMouseDown={
        selectedForEdit ? () => {} : (e) => handleDrag(e, child, childRef)
      }
      onDoubleClick={() => edit(true)}
    >
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
      </div>
      {selectedForEdit && (
        <LabelControls
          increaesFontSize
          decreaseFontSize
          item={child}
          updateItem={updateItem}
        />
      )}
      <style jsx>{`
        .container {
          position: relative;
        }

        .canvas-child {
          position: absolute;
          top: ${isDragged
            ? draggedPosition.y - childRef?.current?.offsetHeight / 2
            : child.y}px;
          height: auto;
          width: auto;
          left: ${isDragged
            ? draggedPosition.x - childRef?.current?.offsetWidth / 2
            : child.x}px;
          display: flex;
          flex-direction: column;
        }
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

export default CanvasChild;
