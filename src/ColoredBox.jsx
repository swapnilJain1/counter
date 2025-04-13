import { useEffect, useState } from "react";

const ColoredBox = ({ button }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [count, setCount] = useState();

  useEffect(() => {
    let intervalId;
    if (count < 10) {
      intervalId = setInterval(() => {
        setIsToggle(!isToggle);
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      setIsToggle(false);
    }
    return () => clearInterval(intervalId);
  }, [isToggle]);

  const handleChange = () => {
    setIsToggle(true);
    setCount(0);
  };

  return (
    <>
      {button === "colored" && (
        <div>
          <div
            className="color-box"
            style={{ backgroundColor: isToggle ? "red" : "green" }}
          >
            {count}
          </div>
          <button onClick={handleChange} disabled={count < 10}>
            {!count ? "Start" : count === 10 ? "Reset" : "Stop"}
          </button>
        </div>
      )}
    </>
  );
};
export default ColoredBox;

// Create a React component that displays a colored box and a button.

// When the button is clicked, the background color of the box should toggle between red and green every second.

// After 10 seconds, the color toggling should automatically stop.
