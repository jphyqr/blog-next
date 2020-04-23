import React, { useEffect, useState } from "react";

const ExpandedView = ({ show }) => {
  const [, rerender] = useState(false);

  useEffect(() => {
    rerender(true);
  }, [show]);

  return (
    <div className="container">
      Expanded
      <style jsx>
        {`
          .container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 300px;
            background-color: green;
  
            z-Index:30;
            animation: example1 2s linear forwards;

          } 
          @-moz-keyframes example1 {
            0%   { -moz-transform: translateY(50px); }
      
            100% { -moz-transform: translateY(0px); }
           }
           @-webkit-keyframes example1 {
            0%   { -moz-transform: translateY(100%); }
         
            100% { -moz-transform: translateY(-150%); }
           }
           @keyframes example1 {
            0%   { 
            -moz-transform: translateY(300px); /* Firefox bug fix */
            -webkit-transform: translateY(300px); /* Firefox bug fix */
            transform: translateY(300px); 	
             
            }

            20%,80% { 
                -moz-transform: ${
                  show == "true" ? `translateY(0px)` : `translateY(300px)`
                };  /* Firefox bug fix */
                -webkit-transform: ${
                  show == "true" ? `translateY(0px)` : `translateY(300px)`
                };  /* Firefox bug fix */
                transform: ${
                  show == "true" ? `translateY(0px)` : `translateY(300px)`
                }; 
             
                }
       
            100% { 
                -moz-transform: translateY(300px); /* Firefox bug fix */
                -webkit-transform: translateY(300px); /* Firefox bug fix */
                transform: translateY(300px); 	
            }

        `}
      </style>
    </div>
  );
};

export default ExpandedView;
