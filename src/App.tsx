import React, { useEffect, useState } from "react";
import CursorImg from "./components/CursorImg";
import CursorBtn from "./components/CursorBtn";
import { cursors } from "./data";
import { CursorPosition } from "./type";

function App() {
  const [selectedCursor, setSelectedCursor] = useState<string>();
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  useEffect(() => {}, []);
  return (
    <div className="App">
      {cursors?.map((c) => (
        <CursorBtn
          name={c}
          selected={c === selectedCursor}
          setSelectedCursor={setSelectedCursor}
      {selectedCursor && (
        <CursorImg
          selectedCursor={selectedCursor}
          cursorPosition={cursorPosition}
        />
      ))}
      <div></div>
    </div>
  );
}

export default App;
