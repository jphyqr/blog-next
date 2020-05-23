import React, { useState } from "react";
import StaticWebPage from "./StaticWebPage";
import MultiPageApp from "./MultiPageApp";
import SinglePageApp from "./SinglePageApp";
import SSRApp from "./SSRApp";
import SSG from "./SSG";

const phases = [
  {
    title: "Static Web Page",
    component: "StaticWebPage",
    description: "A hypertext document connected to the world wide web",
    features: [
      "HTML is pre-rendered on a webserver",
      "server has little work to do",
      "fast",
    ],
    limitations: [
      "no user input(besides URL)",
      "no user feedback until request/response finished",
      "server security",
    ],
    steps: [
      "user enters a URL into a browser OR webcrawler targets a URL",
      "browser makes HTTP request to th URL",
      "webserver listening at the URL respons with pre-rendered HTML",
      "browser displays the HTML",
    ],
  },
  {
    title: "Multi Page App (MPA)",
    description: "Multiple web pages navigated by URLs",
    component: "MultiPageApp",
    features: [
      "readable by googlebot",
      "accept user input(navigation)",
      "fast/predictable",
      "only returning whats necessary",
    ],
    limitations: [
      "browser locked during request",
      "no immediate user feedback",
      "server grows in complexity",
    ],
    steps: [
      "user enters a URL",
      "webserver has a URL for each route/page",
      "returns data to browser",
    ],
  },
  {
    title: "Single Page App (SPA)",
    description: "One webpage that mimics a MPA through browser rendering",
    component: "SinglePageApp",
    features: [
      "update content without server requests",
      "instant user feedback",
      "UI available during back-end computations",
      "server is not responsible for updating UI",
    ],
    limitations: ["initial app load", "googlebot cant read html well"],
    steps: [
      "INITIAL LOAD: browser makes network request to servers root file",
      "INITIAL LOAD: server sends index.HTML (only HTML doc sent). Since file is not pre-rendered, googlebot cannot effeciently understand it.  Google is working on this",
      "INITIAL LOAD: render engine parses html, builds DOM/Render Tree",
      "INITIAL LOAD: browser paints render tree",
      "USER INPUT: (button click), requests a resource (in background!)",
      "API RESPONSE:  (cloud/api/any) returns JSON DATA (not HTML)",
      "UPDATE UI: client updates state via data",
      "UPDATE UI: updating state forces re-render (Tree/Paint)",
      "UI is updated",
    ],
  },

  {
    title: "SSR SPA",
    description: "SPA that is rendered on the server",
    component: "SSRApp",
    features: [
      "update content without server requests",
      "instant user feedback",
      "UI available during back-end computations",
      "server is not responsible for updating UI",
    ],
    limitations: ["initial app load", "googlebot cant read html well"],
    steps: [
      "Browser makes request to server url",
      "Server downloads react/js from index file",
      "Server creates HTML file of entire page",
      "Client downloads HTML file",
      "Client displays HTML right away",
      "Elements of HTML file tell client to preserve them",
      "HTML file tells client to download bundle file",
      "Client parses JS file",
      "Client appends JS handlers onto preserved elements",
      "Elements are now interactive",
    ],
  },

  {
    title: "Static Site Generation",
    description: "Generate static sites for all routes",
    component: "SSG",
    features: [
      "update content without server requests",
      "instant user feedback",
      "UI available during back-end computations",
      "server is not responsible for updating UI",
    ],
    limitations: ["initial app load", "googlebot cant read html well"],
    steps: [
      "Browser makes request to server url",
      "Server downloads react/js from index file",
      "Server creates HTML file of entire page",
      "Client downloads HTML file",
      "Client displays HTML right away",
      "Elements of HTML file tell client to preserve them",
      "HTML file tells client to download bundle file",
      "Client parses JS file",
      "Client appends JS handlers onto preserved elements",
      "Elements are now interactive",
    ],
  },
];

const DesignPatterns = () => {
  const [showPattern, setPattern] = useState("SSG");
  const [navIndex, selectNavIndex] = useState(4);
  const [phase, selectPhase] = useState(phases[navIndex]);
  let designPatternComponent = {};

  const [reload, forceReload] = useState(-1);

  designPatternComponent["StaticWebPage"] = StaticWebPage;
  designPatternComponent["MultiPageApp"] = MultiPageApp;
  designPatternComponent["SinglePageApp"] = SinglePageApp;
  designPatternComponent["SSRApp"] = SSRApp;
  designPatternComponent["SSG"] = SSG;
  const renderDesignPattern = () => {
    let ShowDesignPattern;

    ShowDesignPattern = designPatternComponent[`${showPattern}`];
    return <ShowDesignPattern forceReload={forceReload} reload={reload} />;

    return <div></div>;
  };

  const renderListItems = (list) => {
    return list.map((feature) => {
      return <li>{feature}</li>;
    });
  };

  return (
    <div className="container">
      <h1>{phase.title}</h1>
      <h3>{phase.description}</h3>
      <div className="design">{renderDesignPattern()}</div>
      {/* <ul className="features">{renderListItems(phase.features)}</ul>

      <ul className="steps">{renderListItems(phase.steps)}</ul>

      <ul className="limitations">{renderListItems(phase.limitations)}</ul> */}

      <div className="nav">
        {navIndex > 0 && (
          <button
            onClick={async () => {
              selectPhase(phases[navIndex - 1]);
              setPattern(phases[navIndex - 1]?.component);
              selectNavIndex(navIndex - 1);
            }}
            className="back"
          >
            ⬅{phases[navIndex - 1]?.title}
          </button>
        )}
        {navIndex < phases.length - 1 && (
          <button
            onClick={async () => {
              selectPhase(phases[navIndex + 1]);
              setPattern(phases[navIndex + 1]?.component);
              selectNavIndex(navIndex + 1);
            }}
            className="next"
          >
            {phases[navIndex + 1]?.title}➡
          </button>
        )}
      </div>
      <style jsx>
        {`
          h1,
          h3,
          .nav,
          .design,
          .steps,
          .features,
          .limitations {
            place-self: center;
          }

          .features,
          .limitations {
            align-self: start;
          }
          h1 {
            grid-area: title;
          }
          h3 {
            grid-area: description;
          }

          .limitations:before {
            content: "Limitations";
            background-color: lightsalmon;
            color: white;
          }
          .features:before {
            content: "Features";
            background-color: darkseagreen;
            color: white;
          }
          .steps:before {
            content: "Steps";
            background-color: orangered;
            color: white;
          }

          .steps {
            grid-area: steps;
          }
          .nav {
            grid-area: nav;
            place-self: center;
            display: flex;
            width: 300px;
          }
          .design {
            grid-area: design;
            place-self: center;
          }

          .features {
            grid-area: features;
          }
          .limitations {
            grid-area: limitations;
          }
          .container {
            display: grid;
            grid-template-columns: 1fv 1fv;
            grid-template-rows: 30px auto 400px auto auto;
            grid-template-areas:
              "title title"
              "description description"
              "design design"
              "steps steps"
              "features limitations"
              "nav nav";
          }
        `}
      </style>
    </div>
  );
};

export default DesignPatterns;
