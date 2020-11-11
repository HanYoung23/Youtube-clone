import React, { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo("");
      });
  };

  const showFirstScreen = () => {
    setSelectedVideo("");
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} onLogoClick={showFirstScreen} />
      {selectedVideo !== "" && <VideoDetail video={selectedVideo} />}
      <VideoList videos={videos} onVideoClick={selectVideo} />
    </div>
  );
}

export default App;
