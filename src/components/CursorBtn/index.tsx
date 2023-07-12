import React, { Dispatch, SetStateAction } from "react";
import { CursorType } from "../../type";
import Img from "../Img";
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
      className={`${selected ? "selected" : ""} cursor-btn`}
      onClick={handleClick}
    >
      <Img imgFileName={name} alt={`${name} img`} />
    </button>
  );
}

export default React.memo(CursorBtn);
