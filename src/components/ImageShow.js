import React from "react";
import "../App.css";

export default function ImageShow({ images }) {
  return (
    <div className="image">
      {/* map images */}
      {images.map(image => {
        return (
          <div className="img-list" key={image.id}>
            <img src={image.urls.small} alt="" />
          </div>
        );
      })}
    </div>
  );
}
