import React from "react";
import imgSrc from "../../assets/compressed.png";

import html2canvas from "html2canvas";
const DivToImage = () => {
  const convertToImage = () => {
    const div = document.getElementById("myDiv");
    if (!div) return;
    html2canvas(div, {
      backgroundColor: null, // Transparent background
      scale: 2, // Increase scale for better quality (optional)
    }).then(function (canvas) {
      canvas.toBlob(function (blob) {
        if (!blob) return;
        const file = new File([blob], "myImage.png", { type: blob.type });
        const filesArray = [file];

        // Share the image using navigator.share
        if (navigator.share) {
          navigator
            .share({
              files: filesArray,
              title: "My Image",
            })
            .then(() => {
              console.log("Image shared successfully");
            })
            .catch((error) => {
              console.error("Error sharing image:", error);
            });
        } else {
          console.error("navigator.share is not supported");
        }
      });
    });
  };

  return (
    <div>
      <div style={{visibility:"hidden", width:"20px", height:"20px"}} id="myDiv">
        {/* Your HTML content goes here */}
        <h1>Hello, World!</h1>
        <p>This is a demo for converting HTML div to an image.</p>
        <img src={imgSrc} width={"100%"} height={"100%"} alt="" />
      </div>
      <button onClick={convertToImage}>Convert to Image</button>
    </div>
  );
};

export default DivToImage;
