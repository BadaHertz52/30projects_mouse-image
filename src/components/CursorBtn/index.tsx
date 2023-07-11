import React, { Dispatch, SetStateAction } from "react";
type CursorBtnProps = {
  name: string;
  selected?: boolean;
  setSelectedCursor: Dispatch<SetStateAction<string | undefined>>;
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
      <img src={`/images/${name}.png`} alt={`${name} img`} />
    </button>
  );
}

export default CursorBtn;
