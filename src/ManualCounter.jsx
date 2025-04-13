import { useEffect, useState } from "react";

const ManualCounter = ({ button }) => {
  const [count, setCount] = useState(0);
  const [isCount, setIsCount] = useState(false);

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      if (isCount) {
        setCount((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isCount]);

  const handleStart = () => {
    setIsCount(true);
  };

  return (
    <>
      {button === "manual" && (
        <div>
          <p> {count}</p>
          <button onClick={handleStart}>Start</button>
          <button onClick={() => setIsCount(false)}>Pause</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      )}
    </>
  );
};
export default ManualCounter;

// Implement a React component to render a counter and three buttons Start, Stop, Reset. On start counter should increment by 1 every seconds. On click of Pause, counter should pause. On click of reset counter should reset to 0.
