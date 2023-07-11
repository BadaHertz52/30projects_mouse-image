import React, { useEffect, useState } from "react";
import CursorImg from "./components/CursorImg";
import CursorBtn from "./components/CursorBtn";
import { cursors } from "./data";
import { CursorPosition } from "./type";

import classNames from "classnames";
function App() {
  const [selectedCursor, setSelectedCursor] = useState<string>();
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  let timer: undefined | NodeJS.Timeout;
  const changeCursorPosition = useCallback((event: MouseEvent) => {
    if (event) {
      const { offsetX, offsetY } = event;
      const target = event.target as HTMLElement | null;
      if (target) {
        if (target.className === "App") {
          setCursorPosition({ x: offsetX, y: offsetY });
        } else {
          const domRect = target.getClientRects()[0];
          setCursorPosition({ x: offsetX + domRect.x, y: offsetY + domRect.y });
        }
      }
    }
  }, []);
  const handleMouseMove = (event: MouseEvent) => {
    const mouseEvent = event;
    if (!timer) {
      timer = setTimeout(() => {
        timer = undefined;
        changeCursorPosition(mouseEvent);
      }, 80);
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", (event) => handleMouseMove(event));
    return window.removeEventListener("mousemove", (event) =>
      handleMouseMove(event)
    );
  }, [selectedCursor]);
  return (
    <div className={classNames("App", { on: selectedCursor })}>
      {selectedCursor && (
        <CursorImg
          selectedCursor={selectedCursor}
          cursorPosition={cursorPosition}
        />
      )}
      <header>버튼을 눌러서 마우스 커서를 바꿔보세요</header>
      <div className={classNames("btn-group", { on: selectedCursor })}>
        {cursors?.map((c, i) => (
          <CursorBtn
            key={`cursorBtn_${i}`}
            name={c}
            selected={c === selectedCursor}
            setSelectedCursor={setSelectedCursor}
          />
        ))}
      </div>

      <div></div>
    </div>
  );
}

export default App;
