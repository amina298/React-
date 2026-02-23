import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Text
      </button>

      {show && <p>Hello Amina </p>}
    </div>
  );
}

export default ToggleText;