import React, { CSSProperties, useEffect, useState } from "react";
import { CursorPosition } from "../../type";
type CursorImgProps = {
  selectedCursor: string;
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
    <img
      className="cursor-img"
      src={`/images/${selectedCursor}.png`}
      alt="cursor img"
      style={style}
    />
  );
}

export default React.memo(CursorImg);
