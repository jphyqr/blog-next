import React from "react";
import HandRange from "./HandRange";

const Hanimation = ({ data }) => {
  //should show a hand range selector
  //

  return (
    <div className="container">
      <HandRange comparison left data={data} />

      <style jsx>
        {`
          .container {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default Hanimation;
