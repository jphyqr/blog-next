import React from "react";
import { relicMap, relicStyles, relicComponent } from "./relicConstants";
import Animations from "./Animations";
import Router from "next/router";
import HandRange from "./HandRange";
import Hanimation from "./Hanimations";
const ShowRelic = ({ data }) => {
  const renderRelic = () => {
    let DynamicRelic;

    DynamicRelic = relicComponent[`${data.component}`];
    return <DynamicRelic data={data} />;
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
              position: relative;
              background-color: ${relicStyles.BackgroundColor};
            }
          `}
        </style>
      </div>
      <button
        onClick={() =>
          Router.push("/relics/[relicId]/edit", `/relics/${data.id}/edit`)
        }
      >
        Edit
      </button>
    </div>
  );
};

export default ShowRelic;
