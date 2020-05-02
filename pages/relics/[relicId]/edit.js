import React, { useState, useRef, useEffect } from "react";
import _ from "lodash";
const toolsMap = {
  RelicLabel: "RelicLabel",
  HandChart: "HandChart",
};

const Edit = ({ data }) => {
  //eventually probably stored in firestore
  //so will be array of objects

  const [grabbedElement, grabElement] = useState(null);
  const [canvasChildren, setCanvasChildren] = useState(data?.children || []);
  const [counter, count] = useState(0);
  const [hoveredItem, hover] = useState(null);
  const [selectedForEdit, selectForEdit] = useState(null);
  const [draggedX, dragX] = useState(null);
  const [draggedY, dragY] = useState(null);
  const [childRef, setChildRef] = useState(null);
  const canvasRef = useRef(null);

  const firestore = useFirestore();
  const [draggedPosition, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const setFromEvent = (e) =>
      setPosition({
        x: e.clientX - canvasRef.current.offsetLeft,
        y: e.clientY - canvasRef.current.offsetTop,
      });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const renderTools = () => {
    return Object.keys(toolsMap).map((tool) => {
      return (
        <label
          className="tool"
          id={toolsMap[`${tool}`]}
          onMouseDown={(e) => handleDrag(e)}
        >
          {tool}
          <style jsx>{`
            .tool {
              height: 40px;
              width: 100px;
              align-text: center;
              background-color: ${themeColors.Secondary};
              border-radius: 5px;
              margin-right: 10px;
            }
          `}</style>
        </label>
      );
    });
  };

  const handleKeyPress = (key, obj) => {
    console.log("KEY PRESSED", key);
    console.log("in key press sfe", obj);
    const fn = keyFunctionMap[`${key}`];
    console.log({ fn });

    fn && fn.call(this, { selectedForEdit: selectedForEdit });
  };

  const moveObjectDown = (arg) => {
    console.log({ arg });
    if (!_.isEmpty(arg)) console.log("MOVE DOWN", arg);
  };
  const moveObjectLeft = () => {
    console.log("MOVE left");
  };
  const moveObjectUp = () => {
    console.log("MOVE up");
  };
  const moveObjectRight = () => {
    console.log("MOVE right");
  };
  const keyFunctionMap = {
    ArrowUp: moveObjectUp,
    ArrowDown: moveObjectDown,
    ArrowLeft: moveObjectLeft,
    ArrowRight: moveObjectRight,
  };

  const handleUpdateChildren = async (child, value) => {
    console.log("handle update children", value);
    let newChild = child;
    child.value = value;
    let updatedChildren = canvasChildren;
    let indexOfObject = updatedChildren.findIndex((ch) => ch.key === child.key);

    updatedChildren[indexOfObject] = newChild;

    setCanvasChildren(updatedChildren);

    let updatedRelic = data;
    updatedRelic.children = updatedChildren;

    await firestore.set(`relics/${data.id}`, { ...updatedRelic });
  };

  const renderChildren = () => {
    return canvasChildren.map((child) => {
      return (
        <CanvasChild
          handleHover={hover}
          handleDrag={handleDrag}
          isDragged={Object.is(grabbedElement, child)}
          draggedPosition={draggedPosition}
          child={child}
          selectedForEdit={Object.is(selectedForEdit, child)}
          handleClick={selectForEdit}
          updateParent={handleUpdateChildren}
          updateItem={handleUpdateItem}
        />
      );
    });
  };

  const handleDrag = (e, child = null, childRef) => {
    if (!e) {
      grabElement(null);

      return;
    }

    e.preventDefault();
    grabElement(child ? child : e.target.id);

    setChildRef(childRef);
  };

  const handleUpdateItem = async (child, style) => {
    let newChild = child;
    newChild.style = style;
    let updatedChildren = canvasChildren || [];
    let indexOfObject = updatedChildren.findIndex((ch) => ch.key === child.key);

    updatedChildren[indexOfObject] = newChild;

    let updatedRelic = data;
    updatedRelic.children = updatedChildren;

    await firestore.set(`relics/${data.id}`, { ...updatedRelic });
  };

  const handleDropInCanvas = async (e) => {
    console.log("Canvas Mouse Up");
    e.preventDefault();

    if (!grabbedElement) {
      grabElement(null);
      return;
    }

    let updatedChildren = canvasChildren || [];
    let newChild = {};
    console.log({ canvasRef });
    newChild.x = Math.max(
      0,
      e.clientX -
        canvasRef.current.offsetLeft -
        childRef?.current?.offsetWidth / 2
    );
    newChild.y = Math.max(
      0,
      e.clientY -
        canvasRef.current.offsetTop -
        childRef?.current?.offsetHeight / 2
    );

    if (toolsMap[`${grabbedElement}`]) {
      //iTS A TOOL
      console.log("TOOL", grabbedElement);
      let key = updatedChildren.length;
      newChild.key = key;
      newChild.id = `${grabbedElement}_${key}`;
      newChild.component = grabbedElement;
      updatedChildren.push(newChild);
    } else {
      //its an object, then we just change something in our children
      console.log("OBJECT", grabbedElement);
      //find where it is
      newChild.id = grabbedElement.id;
      newChild.value = grabbedElement.value;

      newChild.style = grabbedElement.style || {};
      newChild.key = grabbedElement.key;
      newChild.component = grabbedElement.component;
      let indexOfObject = updatedChildren.findIndex(
        (child) => child.key === grabbedElement.key
      );
      console.log("FOUND ITEM AT INDEX", indexOfObject);
      updatedChildren[indexOfObject] = newChild;

      let updatedRelic = data;
      updatedRelic.children = updatedChildren;

      await firestore.set(`relics/${data.id}`, { ...updatedRelic });
    }

    setCanvasChildren(updatedChildren);

    grabElement(null);
    count(counter + 1);
    //if it exists, then replace it, if not, add it.
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) =>
      handleKeyPress(e.code, selectedForEdit)
    );
  }, []);

  return (
    <div className="container">
      <div className="palette">{renderTools()}</div>
      <div
        className="canvas"
        ref={canvasRef}
        onMouseDown={hoveredItem ? () => {} : () => selectForEdit(null)}
        onMouseUp={
          grabElement && hoveredItem
            ? (e) => handleDropInCanvas(e)
            : hoveredItem
            ? () => {}
            : grabElement
            ? (e) => handleDropInCanvas(e)
            : () => {}
        }
      >
        {renderChildren()}
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }
          .canvas {
            width: 100%;
            height: ${relicStyles.height}px;
            background-color: ${relicStyles.BackgroundColor};
            border: 3px black solid;
            position: relative;
          }
          .palette {
            width: 100%;
            height: 50px;
            display: flex;
            overflow-x: scroll;
            background-color: lightgrey;
          }
        `}
      </style>
    </div>
  );
};

import firebase from "../../../firebase";
import { relicStyles } from "../../../components/relics/relicConstants";
import { themeColors } from "../../../components/layout/themeConstants";
import CanvasChild from "../../../components/relics/Canvas/CanvasChild";
import { useFirestore } from "react-redux-firebase";

Edit.getInitialProps = async (context) => {
  const { query } = context || {};
  //const {store} = context || {}

  const firestore = firebase.firestore();

  const ref = firestore.collection("relics").doc(query.relicId);
  let snap = await ref.get();
  let record = snap.data();

  return { data: Object.assign(record, { id: query.relicId }) };
};

export default Edit;
