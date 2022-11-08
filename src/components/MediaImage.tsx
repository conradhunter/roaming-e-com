import React from "react";


function MediaImage({ url }: any) {
  return (
    <div className="w-72">
        <img src={url} alt="Roaming Image" />
    </div>
  );
}

export default MediaImage;
