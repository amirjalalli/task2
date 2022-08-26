import { useEffect, useRef, useState } from "react";
import { Rect, Transformer } from "react-konva";
import ResizableRect from "react-resizable-rotatable-draggable";
import city from "./../../image/city.jpg";

const Picture = (props) => {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onDragMove,
    children,
    style,
    className,
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

  return (
    <div
      className="img-content"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      style={style}
    >
      {children}
      <img src={city} alt="city" />
    </div>
  );
};
Picture.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};
export default Picture;
