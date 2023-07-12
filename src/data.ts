import { CursorType } from "./type";
const cursor = "cursor";
const getCursors = (): CursorType[] | undefined => {
  let array: CursorType[] | undefined;
  for (let i = 1; i < 9; i++) {
    const item = `${cursor}${i}` as CursorType;
    if (array) {
      array.push(item);
    } else {
      array = [item];
    }
  }
  return array;
};

export const cursors = getCursors();
