import React, { useState } from 'react';
import './style.css';

function FullScreenImage({ imageUrl, className }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`image-container ${isFullScreen ? 'full-screen' : ''}`} onClick={toggleFullScreen}>
      <img className={className} src={imageUrl} alt="Full Screen" />
    </div>
  );
}

export default FullScreenImage;

