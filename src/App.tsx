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
  useEffect(() => {}, []);
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
