import React, { CSSProperties } from "react";
import { CursorPosition } from "../../type";
type CursorImgProps = {
  selectedCursor: string;
  cursorPosition: CursorPosition;
};
function CursorImg({ selectedCursor, cursorPosition }: CursorImgProps) {
  const style: CSSProperties = {
    left: cursorPosition.x,
    top: cursorPosition.y,
  };
  return (
    <img src={`/images/${selectedCursor}.png`} alt="cursor img" style={style} />
  );
}

export default React.memo(CursorImg);
