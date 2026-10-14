import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(100);

  const images = [
    "https://i.pinimg.com/736x/2b/87/68/2b87683335860091e87af1c2c179060c.jpg",
    "https://i.pinimg.com/1200x/ee/49/aa/ee49aaa76cebc821d16d8427dfca092f.jpg",
    "https://i.pinimg.com/1200x/0c/3f/ae/0c3faef53f736577f6b76a6216c2be8f.jpg",
    "https://i.pinimg.com/1200x/94/95/0d/94950da78cd126f2a0f08d9b4ceaf0e9.jpg",
    "https://i.pinimg.com/1200x/0f/4c/89/0f4c89744131406408f0e23e4f697ed8.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setDirection((prev) => prev * -1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Image Animation</h1>

      <img
        src={images[index]}
        alt="img-here"
        style={{
          height: "200px",
          width: "200px",
          transform: `translateX(${direction}px)`,
          transition: "transform 0.8s ease-in-out",
        }}
      />
    </div>
  );
};

export default ImageSlider;