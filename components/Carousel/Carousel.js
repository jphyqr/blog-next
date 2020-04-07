import React from "react";


const Carousel = ({ items }) => {

  //whats our list of courses look like
  //will prob have a videoUrl
  //inside a course, whats our list of videos look like
  //previewUrl


  //Each course should have a videoURL , title, id 
 
  const renderItems = items => {
    return items.map(item => {
      return (
        <div className='container' key={item.id}>
          
   <h1>{item.videoURL}</h1>
         <video autoPlay src={`${item.videoURL}`}  style={{height:"100px", width:"100px"}}/>
        </div>
      );
    });
  };

  return (
    <div>

   
      {renderItems(items)}
    </div>
  );
};

export default Carousel;
