import React from "react";
import { relicMap, relicStyles } from "./relicConstants";
import Animations from "./Animations";
import Router from "next/router";
const ShowRelic = ({ relic }) => {
  let relicComponent = {};
  relicComponent[relicMap.Animations] = Animations;

  const renderRelic = () => {
    let DynamicRelic;

    DynamicRelic = relicComponent[`${relic.component}`];
    return <DynamicRelic relic={relic} />;
  };

  return (
    <div>
      <div className="container">
        {renderRelic()}
        <style jsx>
          {`
            .container {
              width: 100%;
              height: ${relicStyles.height}px;
              background-color: ${relicStyles.BackgroundColor};
            }
          `}
        </style>
      </div>
      <button
        onClick={() =>
          Router.push("/relics/[relicId]/edit", `/relics/${relic.id}/edit`)
        }
      >
        Edit
      </button>
    </div>
  );
};

export default ShowRelic;
