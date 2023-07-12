import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { CursorPosition, CursorType } from "../../type";
import CursorImg from "../CursorImg";
import { cursors } from "../../data";
import CursorBtn from "../CursorBtn";

type ContainerProps = {
  selectedCursor?: CursorType;
  setSelectedCursor: Dispatch<SetStateAction<CursorType | undefined>>;
  cursorPosition: CursorPosition;
};
function Container({ ...props }: ContainerProps) {
  const { selectedCursor, setSelectedCursor, cursorPosition } = props;
  return (
    <div className={classNames("container", { on: selectedCursor })}>
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
    </div>
  );
}

export default Container;
