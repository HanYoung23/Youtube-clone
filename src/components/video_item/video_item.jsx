import React from "react";

const VideoItem = (props) => {
  return (
    <>
      <h1>{props.video.snippet.title}</h1>
      <h4>{props.video.snippet.description}</h4>
    </>
  );
};

export default VideoItem;
