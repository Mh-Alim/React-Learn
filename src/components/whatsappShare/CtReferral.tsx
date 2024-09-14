import React from "react";
import imgSrc from "../../assets/compressed.png";

const CtReferral = () => {
  function canBrowserShareData(data: any) {
    if (!navigator.share || !navigator.canShare) {
      return false;
    }

    return navigator.canShare(data);
  }
  const shareImage = async () => {
    const res = await fetch(imgSrc);
    const blob = await res.blob();

    const text = "this is text to share";
    const textBlob = new Blob([text], {
      type: "text/plain",
    });

    const file = new File([], "abc.m4v", { type: blob.type });
    const file2 = new File([blob], "sf.png", { type: blob.type });

    console.log(
      "canBrowserShare: ",
      canBrowserShareData({
        title: "heirh",
        text: "this is the final take which i am doing",
        files: [file, file2],
      })
    );
    await navigator.share({
      title: "last title",
      text: "this is the final take which i am doing",
      files: [file, file2],
    });
  };
  return <button onClick={shareImage}>CtReferral</button>;
};

export default CtReferral;
