import React, { useRef, useEffect } from "react";

import Card from "../../../common/Cards/Card";
import Ticker from "../../components/Ticker";
import { themeColors } from "../../../layout/themeConstants";

import { techStackWidgetMap } from "../techStackConstants";
const TechStackTicker = ({ record, ...props }) => {
  const renderFocuses = () => {
    //return one scroll item, which has all the cards
    //build up a new array from our others
    const { techStack } = record || [];

    let allCards = [];
    allCards.push({
      label: "Tech Stack",
      value: ":",
      color: themeColors.Positive,
    });

    Object.keys(techStack).map((field, i) => {
      allCards.push({
        label: field,
        value: techStack[`${field}`],
        color: themeColors.Grey,
      });
    });

    return allCards.map((item, i) => {
      return (
        <Card
          key={i}
          color={item.color}
          body={item.value}
          heading={item.label}
        />
      );
    });
  };

  return <Ticker renderScrollItems={renderFocuses} {...props} />;
};

export default TechStackTicker;
