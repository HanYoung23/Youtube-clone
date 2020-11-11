import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type="text/html"
        width="800"
        height="600"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <p>{video.snippet.description}</p>
    </section>
  );
};

export default VideoDetail;
