import { useEffect, useState } from "react";
import { Progress } from "./components/Progress";
import "./styles.css";
const POOL = 3;

export default function App() {
  const [items, setItems] = useState([]);
  const [clicks, setClicks] = useState(0);

  const queueTask = () => {
    setClicks((c) => c + 1);
  };

  useEffect(() => {
    if (clicks === 0) return;
    if (items.length === POOL) return;

    setClicks((c) => c - 1);
    setItems((p) => [...p, crypto.randomUUID()]);
  }, [clicks, items]);

  const onComplete = (id) => {
    setItems((p) => p.filter((item) => item !== id));
  };

  return (
    <div className="App">
      <p>Items in progress: {items.length} </p>
      <button className="btn" onClick={queueTask}>
        Start
      </button>
      {items.map((item) => (
        <Progress key={item} id={item} onComplete={onComplete} />
      ))}
    </div>
  );
}
