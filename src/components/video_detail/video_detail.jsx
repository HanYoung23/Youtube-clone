import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        title={video.id}
        className={styles.video}
        type="text/html"
        src={`http://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </section>
  );
};

export default VideoDetail;
