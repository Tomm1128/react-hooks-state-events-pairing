import React from "react";

function Video({video}) {

  return (
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
  );
}

export default Video;
