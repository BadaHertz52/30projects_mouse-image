import React, { CSSProperties, useEffect, useState } from "react";
import { CursorPosition, CursorType } from "../../type";
import Img from "../Img";
type CursorImgProps = {
  selectedCursor: CursorType;
  cursorPosition: CursorPosition;
};
function CursorImg({ selectedCursor, cursorPosition }: CursorImgProps) {
  const [style, setStyle] = useState<CSSProperties>();
  useEffect(() => {
    setStyle({
      position: "fixed",
      left: cursorPosition.x,
      top: cursorPosition.y,
    });
  }, [cursorPosition]);

  return (
    <Img
      className="cursor-img"
      alt="cursor img"
      imgFileName={selectedCursor}
      imgAttribute={{ style: style }}
    />
  );
}

export default React.memo(CursorImg);
