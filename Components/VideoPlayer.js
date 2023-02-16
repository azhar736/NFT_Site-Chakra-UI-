import { Box } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ videoUrl }) {
  const [isVisible, setIsVisible] = useState(false);
  const playerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current);
      }
    };
  }, []);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" my="40px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ background: "black" }}
        ref={playerRef}
      >
        {isVisible && (
          <ReactPlayer
            url={videoUrl}
            controls={false}
            width="80%"
            height="100%"
            playing
            playsinline
            muted
            loop
          />
        )}
      </Box>
      {/* <VideoPlayer /> */}
    </Box>
  );
}

export default VideoPlayer;
