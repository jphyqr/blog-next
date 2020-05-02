import React, { useRef, useEffect } from "react";

import PassiveTicker from "../../components/PassiveTicker";

const WebsiteTicker = ({ record, ...props }) => {
  const renderScrollItems = () => {
    const { createdBy, twitter, github } = record || {};

    return (
      <span className="scroll-text">
        {``}
        <style jsx>
          {`
            .scroll-text {
              font-size: 18px;
              font-weight: bold;
            }
          `}
        </style>
      </span>
    );
  };

  return <PassiveTicker renderScrollItems={renderScrollItems} {...props} />;
};

export default WebsiteTicker;
