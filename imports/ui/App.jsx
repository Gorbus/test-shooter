import React from "react";
import useMousePosition from "./../utils/useMousePosition";
import Target from "./Target";

export const App = () => {
  const { x, y, movX, movY, cumulX, cumulY, isPointerLockedState } =
    useMousePosition();

  console.log(cumulX, cumulY);

  return (
    <>
      <div className="crosshair" />
      <Target cumulX={100 - cumulX} cumulY={60 - cumulY} size={100} />
      <Target cumulX={150 - cumulX} cumulY={190 - cumulY} size={200} />
      <Target cumulX={300 - cumulX} cumulY={30 - cumulY} size={300} />
      <Target cumulX={400 - cumulX} cumulY={120 - cumulY} size={400} />
      <Target cumulX={180 - cumulX} cumulY={340 - cumulY} size={600} />
      <Target cumulX={280 - cumulX} cumulY={260 - cumulY} size={100} />
    </>
  );
};
