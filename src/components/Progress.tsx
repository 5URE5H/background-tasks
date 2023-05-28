import { useEffect, useRef, useState } from "react";

export const Progress = ({ id, onComplete }) => {
  const completeRef = useRef(onComplete);
  completeRef.current = onComplete;
  const [percentage, setPercentage] = useState(0);
  const intervalRef = useRef<undefined | ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercentage((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      clearInterval(intervalRef.current);
      completeRef.current(id);
    }
  }, [percentage, id]);

  const style = {
    width: percentage + "%"
  };

  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar" style={style}>
          {percentage}%
        </div>
      </div>
    </>
  );
};
