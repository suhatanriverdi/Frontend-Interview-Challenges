import Grid from "./Grid";

function App() {
  const grid: number[][] = [
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1],
  ];

  return (
    <div className="main">
      <Grid grid={grid} />
    </div>
  );
}

export default App;
