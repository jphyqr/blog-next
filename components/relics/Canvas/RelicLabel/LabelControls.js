import React, { useState } from "react";

const colors = {
  White: "white",
  Black: "black",
  Red: "red",
  Blue: "blue",
};

const LabelControls = ({
  increaseFontSize,
  decreaseFontSize,
  item,
  updateItem,
}) => {
  const [fontPalette, showFontPalette] = useState(false);
  const [style, updateStyle] = useState(item?.style || {});
  const [backGroundPalette, showBackgroundPalette] = useState(false);

  const handleUpdateStyle = (property, value) => {
    let updatedStyle = style;
    updatedStyle[`${property}`] = value;
    updateStyle(updatedStyle);
    updateItem(item, style);
  };

  const renderColors = (property) => {
    return Object.keys(colors).map((color) => {
      return (
        <div
          className="color"
          onClick={() => handleUpdateStyle(property, colors[`${color}`])}
        >
          <style jsx>{`
            .color {
              height: 10px;
              width: 10px;
              background-color: ${colors[`${color}`]};
            }
          `}</style>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="selector">
        <div className="label">f</div>
        <div
          className="preview color"
          onMouseLeave={() => showFontPalette(false)}
          onMouseEnter={() => showFontPalette(true)}
        >
          {fontPalette && (
            <div className="dropdown">{renderColors("color")}</div>
          )}
        </div>
      </div>

      <div className="selector">
        <div className="label">B</div>
        <div
          className="preview backgroundColor"
          onMouseLeave={() => showBackgroundPalette(false)}
          onMouseEnter={() => showBackgroundPalette(true)}
        >
          {backGroundPalette && (
            <div className="dropdown"> {renderColors("backgroundColor")}</div>
          )}
        </div>

        <button
          onClick={() =>
            handleUpdateStyle("fontSize", item?.style?.fontSize * 1.1 || 12)
          }
        >
          +
        </button>
        <button
          onClick={() =>
            handleUpdateStyle("fontSize", item?.style?.fontSize * 0.9 || 10)
          }
        >
          -
        </button>
      </div>
      <style jsx>
        {`
          .color {
            background-color: ${item?.style?.color || "white"};
          }
          .backgroundColor {
            background-color: ${item?.style?.backgroundColor || "black"};
          }
          .preview {
            height: 10px;
            width: 10px;
            position: relative;
          }
          .container {
            display: flex;
            width: 100%;
            background-color: yellow;
          }
          .selector {
            display: flex;
            align-items: center;
          }
          .dropdown {
            background-color: white;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default LabelControls;
