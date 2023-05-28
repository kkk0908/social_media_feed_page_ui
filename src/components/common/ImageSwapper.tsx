import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ImageSwapper: React.FC = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const images: string[] = [
    "https://via.placeholder.com/500",
    "https://picsum.photos/500/300",
    "https://source.unsplash.com/random/500x300",
    "https://loremflickr.com/500/300",
    "https://placeimg.com/500/300/any",
  ];

  const handlePrev = () => {
    setTransition(true);
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setTransition(true);
    setActiveIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleTransitionEnd = () => {
    setTransition(false);
  };

  const isFirstImage = activeIndex === 0;
  const isLastImage = activeIndex === images.length - 1;

  const imageStyles: React.CSSProperties = {
    marginLeft: `-${activeIndex * 100}%`,
    transition: transition ? "margin-left 0.3s ease-in-out" : "none",
  };

  return (
    <div className="image-swapper">
      <div className="image-container">
        <div className="image-wrapper" style={imageStyles} onTransitionEnd={handleTransitionEnd}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} className="image-item" />
          ))}
        </div>
      </div>
      <div className="controls">
        <IconButton onClick={handlePrev} disabled={isFirstImage}>
          <ChevronLeftIcon />
        </IconButton>

        <IconButton onClick={handleNext} disabled={isLastImage}>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageSwapper;

