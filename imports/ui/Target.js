import React, { useEffect, useRef } from "react";

const Target = ({ cumulX, cumulY, size }) => {
  const newCumulX = (cumulX * size) / 100;
  const newCumulY = (cumulY * size) / 100;

  const crossX = window.innerWidth / 2,
    crossY = window.innerHeight / 2;
  console.log(newCumulX, newCumulY);

  const onClick = () => {
    console.log(newCumulX, newCumulY);
  };

  // const refOnClick = useRef(onClick);

  // useEffect(() => {
  //   window.addEventListener("click", refOnClick.current);
  //   return () => window.removeEventListener("click", refOnClick.current);
  // }, [refOnClick]);

  return (
    <div
      className="target"
      style={{
        width: size,
        height: size,
        zIndex: size,
        transform: `translate3d(${cumulX}px, ${cumulY}px, 0)`,
      }}
    />
  );
};

export default Target;
