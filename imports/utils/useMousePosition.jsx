import React, { useEffect, useState, useCallback } from "react";

export default useMousePosition = () => {
  const [isPointerLockedState, setIsPointerLockedState] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    movX: 0,
    movY: 0,
    cumulX: 0,
    cumulY: 0,
  });

  console.log(isPointerLockedState);

  const setFromEvent = useCallback(
    (e) => {
      console.log("move?", isPointerLockedState);
      if (isPointerLockedState) {
        setPosition(({ cumulX, cumulY }) => ({
          x: e.clientX,
          y: e.clientY,
          movX: e.movementX,
          movY: e.movementY,
          cumulX: cumulX + e.movementX,
          cumulY: cumulY + e.movementY,
        }));
      }
    },
    [isPointerLockedState, setIsPointerLockedState]
  );

  const setIsPointLock = useCallback((newValue) => {
    setIsPointerLockedState(newValue);
  }, []);

  useEffect(() => {
    window.addEventListener("click", () => {
      if (!isPointerLockedState) {
        document.body.requestPointerLock();
      }
    });
    return () =>
      window.removeEventListener("click", () => {
        if (!isPointerLockedState) {
          document.body.requestPointerLock();
        }
      });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [isPointerLockedState]);

  useEffect(() => {
    document.addEventListener("pointerlockchange", () => {
      isPointerLocked = document.pointerLockElement === document.body;
      setIsPointLock(isPointerLocked);
    });
    return () => {
      document.removeEventListener("pointerlockchange", () => {
        isPointerLocked = document.pointerLockElement === document.body;
        setIsPointLock(isPointerLocked);
      });
    };
  }, []);

  return { ...position, isPointerLockedState };
};
