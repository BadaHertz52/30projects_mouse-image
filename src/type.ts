export type CursorPosition = { x: number; y: number };
const cursor = "cursor";
type Cursor = typeof cursor;
type CursorImgNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type CursorType = `${Cursor}${CursorImgNumber}`;
