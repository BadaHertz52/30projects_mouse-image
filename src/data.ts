import { CursorType } from "./type";
import {
  cursor1,
  cursor2,
  cursor3,
  cursor4,
  cursor5,
  cursor6,
  cursor7,
  cursor8,
} from "./assets/images";

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

export const CURSOR_IMG_FILES = {
  cursor1: cursor1,
  cursor2: cursor2,
  cursor3: cursor3,
  cursor4: cursor4,
  cursor5: cursor5,
  cursor6: cursor6,
  cursor7: cursor7,
  cursor8: cursor8,
};
