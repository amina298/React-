import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h2>{isLoggedIn ? "Welcome back, Amina!" : "Please log in"}</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
    </div>
  );
}

export default App;
