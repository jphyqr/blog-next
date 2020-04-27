import React, { useState } from "react";
import { relicStyles } from "./relicConstants";

const Animations = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="container">
      Animations
      <button onClick={() => setClicked(!clicked)}>Click</button>
      {clicked && <span>Clicked</span>}
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Animations;
