import React from "react";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const [degree, setDegree] = useState(0);

  const images = [
    "https://i.pinimg.com/736x/2b/87/68/2b87683335860091e87af1c2c179060c.jpg",
    "https://i.pinimg.com/1200x/ee/49/aa/ee49aaa76cebc821d16d8427dfca092f.jpg",
    "https://i.pinimg.com/1200x/0c/3f/ae/0c3faef53f736577f6b76a6216c2be8f.jpg",
    "https://i.pinimg.com/1200x/94/95/0d/94950da78cd126f2a0f08d9b4ceaf0e9.jpg",
    "https://i.pinimg.com/1200x/0f/4c/89/0f4c89744131406408f0e23e4f697ed8.jpg",
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Slider
      </h1>

      <img
        src={images[index]}
        alt=""
        style={{
          width: "500px",
          height: "300px",
        }}
      />

      <br />

      <button
        onClick={() =>
          setIndex(index > 0 ? index - 1 : images.length - 1)
        }
        style={{
          margin: "10px",
          padding: "10px 20px",
        }}
      >
        Left
      </button>

      <button
        onClick={() =>
          setIndex(index < images.length - 1 ? index + 1 : 0)
        }
        style={{
          margin: "10px",
          padding: "10px 20px",
        }}
      >
        Right
      </button>

      <div style={{ marginTop: "50px" }}>
        <h1 style={{ backgroundColor: "black", color: "white" }}>
          Rotate Image
        </h1>

        <img
          src="https://i.pinimg.com/736x/2b/87/68/2b87683335860091e87af1c2c179060c.jpg"
          alt=""
          style={{
            width: "500px",
            height: "300px",
            transform: `rotate(${degree}deg)`,
          }}
        />

        <br />

        <button
          onClick={() => setDegree(degree - 90)}
          style={{
            margin: "10px",
            padding: "10px 20px",
          }}
        >
          Rotate Left
        </button>

        <button
          onClick={() => setDegree(degree + 90)}
          style={{
            margin: "10px",
            padding: "10px 20px",
          }}
        >
          Rotate Right
        </button>
      </div>
    </div>
  );
};

export default App;