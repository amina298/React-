import { useState } from "react";

function StrongCoder() {
  const [jsState, setJsState] = useState("confusing");

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>JavaScript Status: {jsState}</h2>

      {jsState === "confusing" ? (
        <h3>
          JS is confusing 😭 <br />
          Wake up and do it again and again 💪🏽🔥
        </h3>
      ) : (
        <h3>
          I am strong 😍 <br />I will not give up coding 🚀
        </h3>
      )}

      <button
        onClick={() =>
          setJsState(jsState === "confusing" ? "understood" : "confusing")
        }
        style={{ marginTop: "20px" }}
      >
        Toggle Mindset
      </button>
    </div>
  );
}

export default StrongCoder;
