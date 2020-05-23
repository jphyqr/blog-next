import Animations from "./Animations";
import HandRange from "./HandRange";
import Hanimation from "./Hanimation/Hanimation";
import AppIntro from "./CSEducation/AppIntro";
import WebAppIntro from "./CSEducation/WebAppIntro";
import JamStackIntro from "./CSEducation/JamStackIntro";
import SSG from "./CSEducation/DesignPatterns/SSG";

export const relicMap = {
  Animations: "Animations",
  NextJS: "NextJS",
  NoSQL: "NoSQL",
  HandRange: "HandRange",
  Hanimation: "Hanimation",
  AppIntro: "AppIntro", //DB Server client
  WebAppIntro: "WebAppIntro", //Types of Apps, Use of internet, Web Servers
  JamStackIntro: "JamStackIntro", //Mobile+Web, API
  SSG: "SSG",
};

let relicCompTemp = {};
relicCompTemp[relicMap.Animations] = Animations;
relicCompTemp[relicMap.HandRange] = HandRange;
relicCompTemp[relicMap.Hanimation] = Hanimation;

relicCompTemp[relicMap.AppIntro] = AppIntro;
relicCompTemp[relicMap.WebAppIntro] = WebAppIntro;
relicCompTemp[relicMap.JamStackIntro] = JamStackIntro;
relicCompTemp[relicMap.SSG] = SSG;
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
