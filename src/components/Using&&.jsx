import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <button onClick={() => setShowMessage(true)}>Show Message</button>

      {showMessage && <p>Hello Amina 👋</p>}
    </div>
  );
}

export default App;
