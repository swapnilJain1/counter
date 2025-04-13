import { useEffect, useState } from "react";

const AutomaticCounter = ({ button }) => {
  const [count, setCount] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    let intervalId;
    if (count < 10 && isButtonClicked) {
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [count, isButtonClicked]);
  useEffect(() => {
    if (button === "automatic") {
      setIsButtonClicked(true);
      setCount(0);
    }
  }, [button]);

  return (
    <>
      {button === "automatic" && (
        <div className="loader" style={{ width: count * 50 }}>
          {count > 0 && count}0%
        </div>
      )}
    </>
  );
};
export default AutomaticCounter;

// Create a React component that starts a counter from 0 and increments it by 1 every second until it reaches 10.
