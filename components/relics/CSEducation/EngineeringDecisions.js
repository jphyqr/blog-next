import React, { useState } from "react";
//😀👀🔨🚀💰 🔐📈

const terminology = {
  API: {
    label: "🔨API",
    description: "Accessible Programmable Interfaec",
  },
  WebServer: {
    label: "🔨Web Server",
    description: "Program that responds to HTTP requests",
  },
  Hosting: {
    label: "🔨Hosting",
    description:
      "Machine that runs web-server script (CPU) and stores web-server files (HDD)",
  },
  ResponsiveDesign: {
    label: "😀🔨Responsive Design",
    description: "UI that changes depending on screen sizes, user input",
  },
  OneCodeBase: {
    label: "🔨one code-base",
    description: "centralized code that can satisfy all instances",
  },
  Distribution: {
    label: "👀📈distribution",
    description: "to provide app to more users",
  },
  ModernUX: {
    label: "😀ModernUX",
    description: "to provide app to more users",
  },
  AdvancedWebProgramming: {
    label: "🔨 Advanced Web Programming",
    description: "to provide app to more users",
  },
  SEOBlocking: {
    label: "👀SEO Blocking",
    description: "to provide app to more users",
  },
  Routing: {
    label: "😀👀Routing",
    description: "how users move around app",
  },
  HelpWithWeb: {
    label: "🔨 Help w/Advanced Web",
    description: "to provide app to more users",
  },
  InitialLoadTime: {
    label: "😀🚀 Initial Load Time",
    description: "downloading the client for first time",
  },
  UnblockSEO: {
    label: "👀Unblock SEO",
    description: "downloading the client for first time",
  },
  SSRManagement: {
    label: "🔨SSR Management",
    description: "downloading the client for first time",
  },
  SSRSolution: {
    label: "🔨SSR Solution",
    description: "downloading the client for first time",
  },
  RoutingSolutoin: {
    label: "😀Routing Solution",
    description: "downloading the client for first time",
  },
  CodeSplitting: {
    label: "😀🚀Code Splitting",
    description: "downloading the client for first time",
  },
  WebServerOption: {
    label: "WebServerOption",
    description: "downloading the client for first time",
  },
  AutoScaling: {
    label: "AutoScaling",
    description: "downloading the client for first time",
  },
  CDN: {
    label: "CDN",
    description: "downloading the client for first time",
  },
  CloudCosts: {
    label: "CloudCosts",
    description: "downloading the client for first time",
  },
  WebServerOptimization: {
    label: "WebServerOptimization",
    description: "downloading the client for first time",
  },
};

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

        features: [
          "🚀stateless APIs are cacheable",
          "🔨API- Separate client/server allows them to evolve individually",
          "📈🔐Cloud DB/Servers",
        ],
        limitations: ["💰 API dev/maintenance/usage costs", "🔨web security"],
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
    features: [terminology.API],
    limitations: [terminology.WebServer, terminology.Hosting],
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
        features: ["leverage phones hardware", "specialized"],
        limitations: ["one codebase:one device"],
      },
      {
        answer: "No",
        title: "Cross Platform",
        purpose: "App is for Mobile+Computer+Tablet",
        features: ["one codebase:all-devices", "distribution"],
        limitations: ["responsive design"],
      },
    ],
    selection: "Cross Platform",
    features: [terminology.OneCodeBase, terminology.Distribution],
    limitations: [terminology.ResponsiveDesign],
    selectedSrc: "crossplatformlogo",
  },

  //   {
  //     title: "App or Site",
  //     description: "Do we need a website, or a web-app",
  //     question: "Do our users need to manipulate the state/data?",
  //     options: [
  //       {
  //         answer: "No",
  //         title: "Web-site",
  //         purpose: "Content is not manipulated by user",
  //         features: ["easy", "fast", "good seo"],
  //         limitations: ["limited"],
  //       },
  //       {
  //         answer: "Yes",
  //         title: "Web-App",
  //         purpose: "Content manipulated by user",
  //         features: ["unlimited functionality"],
  //         limitations: ["maintenance", "more difficult"],
  //       },
  //     ],
  //     selection: "Web-app",
  //     features: ["😀unlimited functionality"],
  //     limitations: ["👀seo", "🔨maintenance"],
  //     selectedSrc: "applogo",
  //   },
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
    features: [terminology.ModernUX],
    limitations: [
      terminology.AdvancedWebProgramming,
      terminology.SEOBlocking,
      terminology.Routing,
    ],
    selectedSrc: "spalogo",
  },

  {
    title: "🔨UI Library?",
    description: "Should we leverage others codes or build from scratch",
    question:
      "Do we have the dev skill/time to build everything we need for the current constraints (complex UI)?",
    options: [
      {
        answer: "No",
        title: "UI Library",
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
    selection: "UI Library",
    //  😀👀🔨🚀💰 🔐📈
    features: [terminology.HelpWithWeb],
    limitations: [terminology.InitialLoadTime],
    selectedSrc: "reactlogo",
  },
  {
    title: "👀Static/SSR",
    description:
      "Static HTML pages will load faster and help with SEO.  Server side rendered will help as well",
    question: "Do we need Static pages and SSR to help google crawn our site?",
    options: [
      {
        answer: "No",
        title: "Client Rendered",
        purpose: "UI is rendered in client",
        features: ["Complex UI without complex setup"],
        limitations: [
          "Google has problem parsing site",
          "if JS slow/broken, site useless",
        ],
        src: "/jslogo.jpg",
      },
      {
        answer: "Yes",
        title: "SSR/Static",
        purpose: "Send pre-rendered pages down from a server",
        features: ["good seo", "fast", "cachable"],
        limitations: ["more work"],
        src: "/nodelogo.jpg",
      },
    ],
    selection: "SSR/Static",
    reasons: "Point of course",
    features: [terminology.UnblockSEO],
    limitations: [terminology.SSRManagement],
    selectedSrc: "nodelogo",
  },
  {
    title: "Framework?",
    description:
      "Should we use a framwork for handling advanced but common infastructure challenges",
    question: "Can we build everything up to now ourselves?",
    options: [
      {
        answer: "No",
        title: "Framework",
        purpose: "Pre-built code for nasty, predictable parts of project",
        features: [
          "Save Dev time",
          "Routing",
          "Code-splitting",
          "SSR",
          "Static Generation",
        ],
        limitations: ["Vendor Coupling"],
        src: "/nextlogo.jpg",
      },
      {
        answer: "Yes",
        title: "Vanilla",
        purpose: "Control all aspects of build",
        features: ["can optimize bundle size", "become masters of browsers"],
        limitations: ["🔨more work"],
        src: "/jslogo.jpg",
      },
    ],
    selection: "Framework",
    reasons: "Point of course",
    features: [
      terminology.SSRSolution,
      terminology.RoutingSolutoin,
      terminology.CodeSplitting,
    ],
    limitations: [],

    selectedSrc: "nextlogo",
  },

  {
    title: "Web-server",
    description: "Where should we host this app",
    question: "Shuld we build our own web-server?",
    options: [
      {
        answer: "Yes",
        title: "Custom Web-server",
        purpose: "Pre-built code for nasty, predictable parts of project",
        features: ["Optimize for our needs", "Manage On-going"],
        limitations: ["Start-up costs", "Dev time", "Scaling"],
        src: "/webserverlogo.jpg",
      },
      {
        answer: "No",
        title: "Cloud Web-Server",
        purpose: "Control all aspects of build",
        features: ["Security", "Auto-Scaling", "Global Access", "CDN"],
        limitations: ["Recurring Costs", "Customizations"],
        src: "/cloudlogo.jpg",
      },
    ],
    selection: "Cloud Web-Server",
    reasons: "Point of course",
    features: [
      terminology.WebServerOption,
      terminology.AutoScaling,
      terminology.CDN,
    ],
    limitations: [terminology.CloudCosts, terminology.WebServerOptimization],

    selectedSrc: "cloudlogo",
  },
];

const EngineeringDecisions = () => {
  const [decisionIndex, selectDecisionIndex] = useState(-1);
  const [selectedDecision, selectDecision] = useState({});

  const renderLimitations = (list) => {
    let allFeatures = [];

    for (const cost of list) {
      allFeatures.push({
        gain: cost,
        src: ``,
        cost: true,
      });
    }

    return allFeatures.map((gain, i) => {
      return (
        <div className="gain">
          <span>{gain.gain.label}</span>
          <style jsx>{`
            .gain {
              display: flex;
              color: ${gain?.cost ? "white" : "black"};
              background-color: ${gain?.cost ? "red" : "green"};
              padding: 3px;
            }

            .gain:nth-child(odd) {
              background-color: ${gain?.cost ? "red" : "green"};
            }

            .gain:nth-child(4),
            .gain:nth-child(10) {
              background-color: ${decisionIndex >= 3 ? "pink" : "red"};
              transform: 1s ease;
            }

            .gain:nth-child(11) {
              background-color: ${decisionIndex >= 4 ? "pink" : "red"};
              transform: 1s ease;
            }

            .gain:nth-child(12),
            .gain:nth-child(13),
            .gain:nth-child(14),
            .gain:nth-child(17),
            .gain:nth-child(18) {
              background-color: ${decisionIndex >= 5 ? "pink" : "red"};
              transform: 1s ease;
            }

            .gain:nth-child(3) {
              background-color: ${decisionIndex >= 6 ? "pink" : "red"};
              transform: 1s ease;
            }

            img {
              height: 25px;
              width: 25px;
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
  const renderFeatures = (list) => {
    let allFeatures = [];

    for (const gain of list) {
      allFeatures.push({
        gain: gain,
        src: ``,
        const: false,
      });
    }

    console.log({ allFeatures });
    return allFeatures.map((gain, i) => {
      return (
        <div className="gain">
          <span>{gain.gain.label}</span>
          <style jsx>{`
            .gain {
              display: flex;
              color: ${gain?.cost ? "white" : "black"};
              background-color: ${gain?.cost ? "red" : "palegreen"};
              padding: 3px;
            }

            img {
              height: 25px;
              width: 25px;
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
        <div className="nav-container">
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
          </div>

          <div className="nav-features">
            {renderFeatures(decision.features)}
          </div>
          <div className="nav-limitations">
            {renderLimitations(decision.limitations)}
          </div>

          <style jsx>{`
            span {
              width: 100%;
              text-align: center;
              flex: 1;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .nav-features,
            .nav-limitations {
              display: ${decisionIndex >= index ? "visible" : "none"};
            }

            .nav-container {
              display: grid;
              grid-template-columns: 200px 200px 200px;
              grid-template-rows: auto;
              grid-template-areas: "decision features limitations";
            }

            .nav-container:nth-child(odd) {
              background-color: silver;
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
      <ol className="needs">
        <li>UX😀</li>

        <li>👀SEO</li>
        <li>📈Scalable</li>
        <li>🚀Performance</li>
        <li>🔐Security</li>
      </ol>

      <ol className="constraints">
        <li>🔨DevSkill</li>

        <li>Budget💰</li>
      </ol>

      <div className="questions">
        <div className="questions-header">
          <span>Decisions</span>
          <span>Features</span>
          <span>Limitations</span>
        </div>
        {renderDecisions()}
      </div>

      <div className="main">
        <h1 className="title">{selectedDecision?.title || "No Title"}</h1>
        <h3>{selectedDecision?.description || "No Description"}</h3>
        <h4>{selectedDecision?.question || "No Description"}</h4>
        <div className="options">
          {renderOptions(selectedDecision?.options || [])}
        </div>
      </div>
      {/* 
      <div className="features">{renderFeatures()}</div>
      <div className="limitations">{renderLimitations()}</div> */}
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
          .questions {
            display: flex;
            flex-direction: column;
            width: 600px;
            position: fixed;
            left: 800px;
            top: 100px;
          }

          .questions-header {
            display: flex;
            width: 100%;
            justify-content: space-between;
          }
          .questions-header span {
            width: 33%;
            font-size: 24px;
            text-transform: uppercase;
          }

          .nav-container {
            display: flex;
            grid-area: navbar;
            flex-direction: column;
          }

          .nav-container span {
            color: green;
          }

          .needs,
          .constraints {
            font-size: 20px;
            font-weight: bold;
            width: 180px;
          }

          .needs {
            position: fixed;
            left: 1500px;
            top: 50px;
            background-color: palegreen;
          }

          .needs:before {
            content: "Values";
            background-color: black;
            color: palegreen;
            width: 180px;
            text-align: center;
          }
          .constraints:before {
            content: "Constraints";
            background-color: black;
            color: red;
          }
          .constraints {
            position: fixed;
            left: 1500px;
            top: 250px;
            background-color: red;
          }
          .features,
          .limitations {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 200px;
            position: fixed;
            left: 1000px;
            top: 100px;
            height: 75%;
          }

          .limitations {
            left: 1200px;
          }

          .features:before {
            content: "Features";
            font-size: 20px;
            background-color: green;
            color: white;
          }
          .limitations:before {
            content: "Limitations";
            font-size: 20px;
            background-color: pink;
            color: white;
          }

          .container {
            display: grid;
            grid-template-columns: 75% 25%;
            grid-template-rows: auto;
            grid-template-areas:
              "navbar gains"
              "main gains";
            gap: 10px 5px;
          }
        `}
      </style>
    </div>
  );
};

export default EngineeringDecisions;
