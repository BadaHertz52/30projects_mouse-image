import { CURSOR_IMG_FILES } from "./data";

export type CursorPosition = { x: number; y: number };

export type CursorType = keyof typeof CURSOR_IMG_FILES;
