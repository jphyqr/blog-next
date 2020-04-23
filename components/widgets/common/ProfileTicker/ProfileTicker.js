import React, { useRef, useEffect } from "react";

import PassiveTicker from "../../components/PassiveTicker";

const ProfileTicker = ({ record, ...props }) => {
  const renderScrollItems = () => {
    const { createdBy, twitter, github } = record || {};

    return (
      <span className="scroll-text">
        {`Created By: ${createdBy} ${twitter ? `| twitter: ${twitter}` : ""} ${
          github ? ` | github: ${github}` : ``
        }`}
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

export default ProfileTicker;
