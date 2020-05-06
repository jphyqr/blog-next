import Animations from "./Animations";
import HandRange from "./HandRange";
import Hanimation from "./Hanimations";

export const relicMap = {
  Animations: "Animations",
  NextJS: "NextJS",
  NoSQL: "NoSQL",
  HandRange: "HandRange",
  Hanimation: "Hanimation",
};

let relicCompTemp = {};
relicCompTemp[relicMap.Animations] = Animations;
relicCompTemp[relicMap.HandRange] = HandRange;
relicCompTemp[relicMap.Hanimation] = Hanimation;
export const relicComponent = Object.assign({}, relicCompTemp);

export const relicStyles = {
  BackgroundColor: "grey",
  height: 450,
};

export const childTypes = {
  RelicLabel: "RelicLabel",
  HandChart: "HandChart",
};

export const cards = [
  "A",
  "K",
  "Q",
  "J",
  "T",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];
