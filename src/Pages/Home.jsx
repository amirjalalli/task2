import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect, Transformer, Rectangle } from "react-konva";
import city from "./../image/city.jpg";
import Color from "./../component/Color/Color";
import Data from "./../Data";

import Picture from "../component/Picture/Picture";
import ResizableRect from "react-resizable-rotatable-draggable";

const Home = () => {
  const [showSquer, setShowSquer] = useState(false);
  const [rectangles, setRectangles] = useState(Data);
  const [changeColor, setChageColor] = useState("");

  const showSquerHandler = (e) => {
    setShowSquer(!showSquer);
    setChageColor(e.target.attributes[1].nodeValue.slice(18, 39));
  };
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <>
      <article className="HomeContent">
        <section className="pictureContent" style={{ overflow: "hidden" }}>
          <Picture changeColor={changeColor} onDragMove={handleDragMove}>
            {
              // rectangles.find((rect, i) => {
              //   return (
              //     rect.id !==
              // Data.map((rect, i) => {
              // return (
              <div
                className="squreColor"
                style={{
                  overflow: "hidden",
                  backgroundColor: `${changeColor}`,
                  transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
                }}
              ></div>

              // );
              // })
              //   );
              // }).id
            }
            {/* {console.log(
              rectangles.find((rect, i) => {
                return (
                  rect.id !==
                  Data.map((rect, i) => {
                    return (
                      <div
                        key={rect.id}
                        className="squreColor"
                        style={{
                          overflow: "hidden",
                          backgroundColor: `${changeColor}`,
                          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
                          width: `${rect.width}`,
                          height: `${rect.height}`,
                        }}
                      ></div>
                    );
                  })
                );
              }).id
            )} */}

            <div
              // key={id}
              className="squreColor"
              style={{
                overflow: "hidden",
                backgroundColor: `${changeColor}`,
                transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
                // top: `${y}px`,
                // left: `${x}px`,
              }}
            ></div>
          </Picture>
        </section>
        <section className="footerContent">
          <div className="foooterTitle">
            <p>RDI</p>
            <div className="border"></div>
          </div>
          <div className="choseColor">
            <Color data={Data} toggleSquer={showSquerHandler} />
            <div className="btn">+</div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;

// .map((rect, i) => {
//   const { fill, id, height, width, x, y } = rect;
//   return (
//     <div
//       key={id}
//       className="squreColor"
//       style={{
//         overflow: "hidden",
//         backgroundColor: `${changeColor}`,
//         transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
//         top: `${y}px`,
//         left: `${x}px`,
//       }}
//     ></div>
//   );
// })

// <div
// className="squreColor"
// style={{
//   overflow: "hidden",
//   backgroundColor: `${changeColor}`,
//   transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
// }}
// ></div>
