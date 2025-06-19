interface BoxGridProps {
  boxData: number[][];
}

function BoxGrid({ boxData }: BoxGridProps) {
  const grid = boxData.map((row: number[]) => {
    const curRow = row.map((item: number) => {
      if (item === 1) {
        return <div onClick={undefined} className="h-30 w-30 bg-white"></div>;
      } else if (item === 0) {
        return <div onClick={undefined} className="h-30 w-30"></div>;
      }
    });
    return <div className="flex gap-3">{curRow}</div>;
  });

  return <div className="flex flex-col gap-3">{grid}</div>;
}

export default BoxGrid;
