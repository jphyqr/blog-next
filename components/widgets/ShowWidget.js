import React from "react";
import CodeStream from "./CodeStream/CodeStream";
import PokerStream from "./PokerStream/PokerStream";
import { widgets } from "./widgetConstants";

const ShowWidget = ({ widgetType, widgetId }) => {
  let widgetComponent = {};
  widgetComponent[widgets.CodeStream] = CodeStream;
  widgetComponent[widgets.PokerStream] = PokerStream;

  const renderWidget = () => {
    let DynamicWidget;

    DynamicWidget = widgetComponent[`${widgetType}`];
    return <DynamicWidget id={widgetId} widgetId={widgetId} />;

    return <div></div>;
  };

  return (
    <div className="container">
      {renderWidget()}
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </div>
  );
};

export default ShowWidget;
