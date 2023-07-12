import { useCallback, useEffect, useRef, useState } from "react";
import { CursorPosition, CursorType } from "./type";
import "./assets/style.scss";
import Container from "./components/Container";
function App() {
  const [selectedCursor, setSelectedCursor] = useState<CursorType>();
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const timer = useRef<undefined | NodeJS.Timeout>();
  const changeCursorPosition = useCallback((event: MouseEvent) => {
    if (event) {
      const { offsetX, offsetY } = event;
      const target = event.target as HTMLElement | null;
      if (target) {
        if (target.className === "app") {
          setCursorPosition({ x: offsetX, y: offsetY });
        } else {
          const domRect = target.getClientRects()[0];
          setCursorPosition({ x: offsetX + domRect.x, y: offsetY + domRect.y });
        }
      }
    }
  }, []);
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const mouseEvent = event;
    if (!timer.current) {
      timer.current = setTimeout(() => {
        timer.current = undefined;
        changeCursorPosition(mouseEvent);
      }, 50);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => handleMouseMove(event));
    return window.removeEventListener("mousemove", (event) =>
      handleMouseMove(event)
    );
  }, [selectedCursor, handleMouseMove]);
  return (
    <div className="app">
      <Container
        selectedCursor={selectedCursor}
        setSelectedCursor={setSelectedCursor}
        cursorPosition={cursorPosition}
      />
    </div>
  );
}

export default App;
