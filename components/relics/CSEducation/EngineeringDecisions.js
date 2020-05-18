import React, { useState } from "react";

const decisions = [
  {
    title: "Web/NoWeb",
    description: "Do we need web capabilities?",
    question: "Does our app need to communicate with other apps/data?",
    options: [
      {
        answer: "Yes",
        title: "Web",
        purpose: "App that communicates over internet",

        features: ["cloud services", "APIs", "CDN"],
        limitations: ["data fetching", "security", "size"],
      },
      {
        answer: "No",
        title: "Non-Web",
        purpose: "App does not communicate",
        features: ["security", "simplicity"],
        limitations: ["scaling"],
      },
    ],
    selection: "Web",
    reasons: "Accessability",
    features: ["cloud services", "APIs", "CDN"],
    limitations: ["data fetching", "security", "size"],
    selectedSrc: "httplogo",
  },

  {
    title: "Mobile / CrossPlatform",
    description: "Should we make Native or Responsive Webapp?",
    question: "Are our users ONLY mobile users?",
    options: [
      {
        answer: "Yes",
        title: "Native App",
        purpose: "App native to mobile devices",
        features: ["one codebase", "leverage phones hardware", "specialized"],
        limitations: ["limited accessability"],
      },
      {
        answer: "No",
        title: "Cross Platform",
        purpose: "App is for Mobile+Computer+Tablet",
        features: ["accessability"],
        limitations: ["not optimized for mobile phones"],
      },
    ],
    selection: "Cross Platform",
    reasons: "accessability",
    gains: ["multi-device"],
    selectedSrc: "crossplatformlogo",
  },

  {
    title: "App or Site",
    description: "Do we need a website, or a web-app",
    question: "Do our users need to manipulate the state/data?",
    options: [
      {
        answer: "No",
        title: "Web-site",
        purpose: "Content is not manipulated by user",
        features: ["easy", "fast", "good seo"],
        limitations: ["limited"],
      },
      {
        answer: "Yes",
        title: "Web-App",
        purpose: "Content manipulated by user",
        features: ["unlimited functionality"],
        limitations: ["maintenance", "more difficult"],
      },
    ],
    selection: "Web-app",
    reasons: "Point of course",
    gains: ["users can change state"],
    selectedSrc: "applogo",
  },
  {
    title: "SPA or MPA?",
    description:
      "Single Page Application or Multiple-pages rendered on server?",
    question: "Do we need a complex UI?",
    options: [
      {
        answer: "No",
        title: "MPA",
        purpose: "Each user input requests a new page , rendered from server",
        features: ["top SEO", "navigation", "debugging", "browser familiarity"],
        limitations: ["bad UX", "improving UX is complicated"],
        src: "/wordpresslogo.jpg",
      },
      {
        answer: "Yes",
        title: "SPA",
        purpose:
          "One page, requests data from server and renders page in browser",
        features: [
          "can update part of app without a server call",
          "less data sent=faster loadtimes",
          "decouple front end from backend=specialized development",
          "simplified for mobile",
        ],
        limitations: [
          "JS complicate bundle",

          "UI not compiled=hard to debug",
          "no navigation",
          "SEO-google doesn't render consistently",
          "Loading CSS/JS",
          "Analytics",
          "Fake pages=Hard to write tests for",
          "Memory Leaks",
          "Loading indicators inaccurate",
          "JS will fail eventually",
          "Not using common browser buttons:back/forward/stop",
        ],
        src: "/spalogo.jpg",
      },
    ],
    selection: "SPA",
    reasons: "Point of course",
    gains: ["fast", "UX", "UI/Server Decoupled"],
    costs: ["full web expertise", "SEO", "routing"],
    selectedSrc: "spalogo",
  },

  {
    title: "Framework/Vanialla?",
    description: "Should we leverage others codes or build from scratch",
    question: "Is it necessary to optimize the entire build?",
    options: [
      {
        answer: "No",
        title: "Framework",
        purpose: "Pre-built code for nasty, predictable parts of project",
        features: ["Save Dev time"],
        limitations: ["Framework must load"],
        src: "/reactlogo.jpg",
      },
      {
        answer: "Yes",
        title: "Vanilla",
        purpose: "Control all aspects of build",
        features: ["can optimize bundle size", "become masters of browsers"],
        limitations: ["more work"],
        src: "/jslogo.jpg",
      },
    ],
    selection: "Framework",
    reasons: "Point of course",
    gains: ["less work"],
    costs: ["initial load time"],
    selectedSrc: "reactlogo",
  },
  {
    title: "Framework/Vanialla?",
    description: "Should we leverage others codes or build from scratch",
    question: "Is it necessary to optimize the entire build?",
    options: [
      {
        answer: "No",
        title: "Framework",
        purpose: "Pre-built code for nasty, predictable parts of project",
        features: ["Save Dev time"],
        limitations: ["Framework must load"],
        src: "/reactlogo.jpg",
      },
      {
        answer: "Yes",
        title: "Vanilla",
        purpose: "Control all aspects of build",
        features: ["can optimize bundle size", "become masters of browsers"],
        limitations: ["more work"],
        src: "/jslogo.jpg",
      },
    ],
    selection: "Framework",
    reasons: "Point of course",
    gains: ["less work"],
    costs: ["initial load time"],
    selectedSrc: "reactlogo",
  },
  {
    title: "Framework/Vanialla?",
    description: "Should we leverage others codes or build from scratch",
    question: "Is it necessary to optimize the entire build?",
    options: [
      {
        answer: "No",
        title: "Framework",
        purpose: "Pre-built code for nasty, predictable parts of project",
        features: ["Save Dev time"],
        limitations: ["Framework must load"],
        src: "/reactlogo.jpg",
      },
      {
        answer: "Yes",
        title: "Vanilla",
        purpose: "Control all aspects of build",
        features: ["can optimize bundle size", "become masters of browsers"],
        limitations: ["more work"],
        src: "/jslogo.jpg",
      },
    ],
    selection: "Framework",
    reasons: "Point of course",
    gains: ["less work"],
    costs: ["initial load time"],
    selectedSrc: "reactlogo",
  },
];

const EngineeringDecisions = () => {
  const [decisionIndex, selectDecisionIndex] = useState(-1);
  const [selectedDecision, selectDecision] = useState({});

  const renderGains = () => {
    let allFeatures = [];
    for (var i = 0; i <= decisionIndex; i++) {
      const decision = decisions[i];
      console.log({ decision });
      const { features, limitations } = decision || [];
      for (const gain of features) {
        allFeatures.push({
          gain: gain,
          src: `/${decision?.selectedSrc}.jpg`,
          const: false,
        });
      }
      if (limitations)
        for (const cost of limitations) {
          allFeatures.push({
            gain: cost,
            src: `/${decision?.selectedSrc}.jpg`,
            cost: true,
          });
        }
    }
    console.log({ allFeatures });
    return allFeatures.map((gain) => {
      return (
        <div className="gain">
          <img src={gain.src} />
          <span>{gain.gain}</span>

          <style jsx>{`
            .gain {
              display: flex;
              color: ${gain?.cost ? "white" : "black"};
              background-color: ${gain?.cost ? "red" : "lightgrey"};
              padding: 3px;
            }

            .gain:nth-child(odd) {
              background-color: ${gain?.cost ? "red" : "silver"};
            }

            img {
              height: 25px;
              width: 25px;
              border-radius: 50%;
            }

            span {
              width: 100%;
              text-align: center;
            }
          `}</style>
        </div>
      );
    });
  };

  const renderDecisions = () => {
    return decisions.map((decision, index) => {
      return (
        <div
          onClick={() => {
            selectDecisionIndex(index);
            selectDecision(decision);
          }}
          className="nav-item"
        >
          <span>
            {index + 1}.{decision.title}
          </span>

          {decisionIndex >= index ? (
            <div className="nav-decision">
              <img src={`/${decision?.selectedSrc}.jpg`} />
              <span>{decision.selection}</span>
            </div>
          ) : null}

          <style jsx>{`
            span {
              width: 100%;
              text-align: center;
              flex: 1;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .nav-decision {
              color: red;
              font-style: italic;
              font-size: 20px;
              width: 100%;
              text-align: center;
              display: flex;
            }
            img {
              height: 30px;
              width: 30px;
            }
            .nav-item {
              height: 75px;

              display: flex;
              flex-direction: column;
              justify-content: space-between;
              background-color: lightgrey;
              margin: 5px;
              border-radius: 10px;
              padding: 5px;
              box-sizing: border-box;
              border: ${decisionIndex == index ? "3px solid red" : ""};
            }
          `}</style>
        </div>
      );
    });
  };

  const renderListItems = (items) => {
    return items.map((item) => {
      return <li>{item}</li>;
    });
  };

  const renderOptions = (options) => {
    return options.map((option, index) => {
      return (
        <div className={`option-item`}>
          <h2
            className={`${
              selectedDecision.selection.toLowerCase().trim() ==
              option.title.toLowerCase().trim()
                ? " test"
                : ""
            }`}
          >
            <span>{option.answer}:</span>
            {option.title}
          </h2>
          <img src={option?.src || "/nologo.png"} />
          <div className="features card">
            <h3>💪features💪</h3>
            <ul>{renderListItems(option?.features || [])}</ul>
          </div>

          <div className={"limitations card"}>
            <h3>👎limitations👎</h3>
            <ul>{renderListItems(option?.limitations || [])}</ul>
          </div>
          <style jsx>
            {`
              h2,
              h3 {
                place-self: center;
                background-color: purple;
                width: 100%;
                text-align: center;
                color: white;
              }

              h2 {
                grid-area: title;
                place-self: top;
                position: relative;
                font-style: italic;
              }

              h2 span {
                font-weight: bold;
                text-transform: uppercase;
              }

              .test {
                position: relative;
                animation: red-lighting 1s infinite;
              }

              @keyframes red-lighting {
                0% {
                  color: white;
                  text-shadow: none;
                }

                40%,
                60% {
                  color: red;
                  text-shadow: 0 0 7px red, 0 0 50px red;
                }

                100% {
                  color: white;
                  text-shadow: none;
                }
              }

              @keyframes pulsing {
                0% {
                  transform: scale(0.9, 0.9);
                  opacity: 0;
                }
                50% {
                  transform: scale(1, 1);
                  opacity: 1;
                }
                100% {
                  transform: scale(1.1, 1);
                  opacity: 0;
                }
              }

              h3 {
                background-color: grey;
              }

              img {
                height: 100px;
                width: 100px;
                place-self: center;
              }
              ul {
              }

              .features {
                grid-area: features;
              }

              .limitations {
                grid-area: limitations;
              }
              .option-item {
                display: grid;
                grid-template-columns: 1fv;
                grid-template-rows: 30px 100px 200px 200px;
                grid-template-areas:
                  "title"
                  "img"
                  "features"
                  "limitations";
                width: 300px;
                background-color: lightgrey;
                margin-right: 10px;
                border-radius: 5px;
              }
            `}
          </style>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="nav-container">
        <span>Functional Requirements</span>
        <div className="navbar">{renderDecisions()}</div>
      </div>
      <div className="main">
        <h1 className="title">{selectedDecision?.title || "No Title"}</h1>
        <h3>{selectedDecision?.description || "No Description"}</h3>
        <h4>{selectedDecision?.question || "No Description"}</h4>
        <div className="options">
          {renderOptions(selectedDecision?.options || [])}
        </div>
      </div>

      <div className="gains">{renderGains()}</div>
      <style jsx>
        {`
          .options {
            display: flex;
            width: auto;

            height: auto;
            margin-top: 30px;
          }

          h1,
          h4,
          h3,
          .options {
            place-self: center;

            margin: 5px;
          }
          h4 {
            color: red;
            font-style: italic;
          }
          .main {
            grid-area: main;
            display: flex;
            flex-direction: column;
            place-self: center;
          }
          .navbar {
            display: flex;
            width: 100%;
            background-color: grey;

            overflow-x: auto;
          }

          .nav-container {
            display: flex;
            grid-area: navbar;
            flex-direction: column;
          }

          .nav-container span {
            color: green;
          }

          .gains {
            display: flex;
            flex-direction: column;
            background-color: grey;
            width: 100%;
            grid-area: gains;
          }
          .gains:before {
            content: "Capabilities";
            font-size: 20px;
            background-color: green;
            color: white;
          }

          .container {
            display: grid;
            grid-template-columns: 75% 25%;
            grid-template-rows: auto;
            grid-template-areas:
              "navbar navbar"
              "main gains";
            gap: 10px 5px;
          }
        `}
      </style>
    </div>
  );
};

export default EngineeringDecisions;
