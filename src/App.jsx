import { useState } from "react";
import "./App.css";
import ColoredBox from "./ColoredBox";
import AutomaticCounter from "./AutomaticCounter";
import ManualCounter from "./ManualCounter";

function App() {
  const [button, setButton] = useState("");

  return (
    <>
      <button
        className={button === "colored" ? "active" : ""}
        onClick={() => setButton("colored")}
      >
        Colored -box
      </button>
      <button
        className={button === "automatic" ? "active" : ""}
        onClick={() => setButton("automatic")}
      >
        Loading Bar
      </button>
      <button
        className={button === "manual" ? "active" : ""}
        onClick={() => setButton("manual")}
      >
        Manual Counter
      </button>
      <ColoredBox button={button} />
      <AutomaticCounter button={button} />
      <ManualCounter button={button} />
    </>
  );
}

export default App;
