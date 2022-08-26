import React, { useEffect, useState } from "react";

const RectAngel = ({ isSelected, changeColor, props }) => {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onDragMove,
    children,
    style,
    className,
    isSvg = false,
  } = props;
  const [isDragging, setIsDragging] = useState(false);
  const handlePointerDown = (e) => {
    setIsDragging(true);

    onPointerDown(e);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);

    onPointerUp(e);
  };

  const handlePointerMove = (e) => {
    if (isDragging) onDragMove(e);

    onPointerMove(e);
  };

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);
  return (
    <>
      <div
        className="squreColor"
        style={{
          backgroundColor: `${changeColor}`,
        }}
      ></div>
      ;
    </>
  );
};

export default RectAngel;
