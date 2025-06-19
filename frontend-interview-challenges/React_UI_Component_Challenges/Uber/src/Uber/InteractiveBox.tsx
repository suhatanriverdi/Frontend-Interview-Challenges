import BoxGrid from "./BoxGrid";

// Use this data to create the shape
const boxData: number[][] = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

function InteractiveBox() {
  return <BoxGrid boxData={boxData} />;
}

export default InteractiveBox;
