import { useEffect, useState } from "react";

interface GridProps {
  grid: number[][];
}

export default function Grid({ grid }: GridProps) {
  const getState = () => {
    const isClicked = [];
    for (let i = 0; i < grid.length; i++) {
      const newRow = Array(n).fill(false);
      isClicked.push(newRow);
    }
    return isClicked;
  };

  const n = grid.length;
  const onesCount = grid.flat().reduce((a, sum) => a + sum);
  const [state, setState] = useState(getState);
  const [queue, setQueue] = useState<number[][]>([]);

  // Updates clicked state
  const handleClick = (x: number, y: number) => {
    if (queue.length === onesCount) {
      return;
    }
    const newState = structuredClone(state);
    handleQueue(x, y);
    newState[x][y] = true;
    setState(newState);
  };

  const handleQueue = (x: number, y: number) => {
    if (state[x][y] === false) {
      setQueue((prevQueue) => [...prevQueue, [x, y]]);
    }
  };

  useEffect(() => {
    async function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function run() {
      for (let i = 0; i < queue.length; i++) {
        const [x, y] = queue[i];
        setState((prev) => {
          const newState = structuredClone(prev);
          newState[x][y] = false;
          return newState;
        });
        await sleep(400);
      }
      setQueue([]);
    }

    if (queue.length === onesCount) {
      run();
    }
  }, [queue]);

  console.log(state);
  console.log(queue);

  // Build the elements
  const elements = [];
  for (let i = 0; i < n; i++) {
    const rows = [];
    for (let j = 0; j < n; j++) {
      let elem = null;
      if (grid[i][j] === 1) {
        elem = (
          <div
            key={`${i}-${j}`}
            onClick={() => handleClick(i, j)}
            className={`${state[i][j] && "clicked"} filled-box`}
          ></div>
        );
      } else {
        elem = <div key={`${i}-${j}`} className="empty-box"></div>;
      }
      rows.push(elem);
    }
    elements.push(
      <div key={i} style={{ display: "flex" }}>
        {rows}
      </div>
    );
  }

  return <div className="grid">{elements}</div>;
}
