import React, { useCallback, useRef } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ReactPlayer from 'react-player';


function Video({src}) {


  const videoRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    videoRef.current.pause();
  }, []);

  return (
    <MDBContainer>
      <video
     
     
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={videoRef}
        type="video/mp4"
        className="w-100"
        src={src}
        loop
      ></video>
    </MDBContainer>
  );
}

export default Video;