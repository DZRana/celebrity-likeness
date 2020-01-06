import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box, celeb, likeness }) => {
  return (
    <div className="center ma">
      { celeb &&
      <div>
        <p>{`Your face most closely resembles ${celeb} with a likeness of ${likeness}%.`}</p>
      </div>
      }
      <div className="absolute mt5">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
        
      </div>
    </div>
  );
};

export default FaceRecognition;
