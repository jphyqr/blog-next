import React from "react";
import RouletteWheel from "../../components/tools/RouletteWheel";
import { toolMap } from "../../components/tools/toolConstants";
import CoinFlip from "../../components/tools/CoinFlip";
import JamStacks from "../../components/tools/JamStacks";

const ToolName = ({ toolName }) => {
  let toolComponent = {};
  toolComponent[toolMap.RouletteWheel] = RouletteWheel;
  toolComponent[toolMap.CoinFlip] = CoinFlip;
  toolComponent[toolMap.JamStacks] = JamStacks;
  const renderTool = () => {
    let DynamicTool;

    DynamicTool = toolComponent[`${toolName}`];
    return <DynamicTool />;
  };

  return (
    <div className="className">
      {renderTool()}
      <style jsx>
        {`
          .className {
          }
        `}
      </style>
    </div>
  );
};

ToolName.getInitialProps = async (context) => {
  const { query } = context || {};
  //const {store} = context || {}

  return { toolName: query.toolName };
};

export default ToolName;
