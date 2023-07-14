import React, { Dispatch, SetStateAction } from "react";
import { CursorType } from "../../type";
import Img from "../Img";
import classNames from "classnames";
type CursorBtnProps = {
  name: CursorType;
  selected?: boolean;
  setSelectedCursor: Dispatch<SetStateAction<CursorType | undefined>>;
};

function CursorBtn({ name, selected, setSelectedCursor }: CursorBtnProps) {
  const handleClick = () => {
    setSelectedCursor(name);
  };
  return (
    <button
      className={classNames("cursor-btn", { selected: selected })}
      onClick={handleClick}
    >
      <Img imgFileName={name} alt={`${name} img`} />
    </button>
  );
}

export default React.memo(CursorBtn);
