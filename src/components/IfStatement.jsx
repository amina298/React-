import { useState } from "react";

function App() {
  const [age, setAge] = useState(16);

  let message;

  if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are under 18";
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>{message}</h2>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

export default App;
