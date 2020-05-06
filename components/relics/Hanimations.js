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
            height: 630px;
            width: 1130px;
            border: 5px solid red;
            background-color: grey;
          }
        `}
      </style>
    </div>
  );
};

export default Hanimation;
