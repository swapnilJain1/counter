import { useState } from "react";
import "./App.css";
import ColoredBox from "./ColoredBox";
import AutomaticCounter from "./AutomaticCounter";
import ManualCounter from "./ManualCounter";

function App() {
  const [button, setButton] = useState("");

  return (
    <>
      <button onClick={() => setButton("colored")}>Colored -box</button>
      <button onClick={() => setButton("automatic")}>Loading Bar</button>
      <button onClick={() => setButton("manual")}>Manual Counter</button>
      <ColoredBox button={button} />
      <AutomaticCounter button={button} />
      <ManualCounter button={button} />
    </>
  );
}

export default App;
