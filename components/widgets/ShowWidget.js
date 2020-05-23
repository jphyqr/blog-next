import React from "react";
import CodeStream from "./CodeStream/CodeStream";
import PokerStream from "./PokerStream/PokerStream";
import { widgets } from "./widgetConstants";

const ShowWidget = ({ data }) => {
  let widgetComponent = {};
  widgetComponent[widgets.CodeStream] = CodeStream;
  widgetComponent[widgets.PokerStream] = PokerStream;

  const renderWidget = () => {
    let DynamicWidget;

    DynamicWidget = widgetComponent[`${data.widgetName}`];
    return <DynamicWidget data={data} />;
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
