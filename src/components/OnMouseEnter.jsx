import { useState } from "react";

function HoverExample() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: hovered ? "purple" : "gray",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Hover Me
    </div>
  );
}

export default HoverExample;
