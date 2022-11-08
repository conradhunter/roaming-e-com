import React from "react";

function MediaImage({ url }: any) {
  return (
    <div className="w-72 rounded-3xl overflow-hidden">
      <img src={url} alt="" />
    </div>
  );
}

export default MediaImage;
