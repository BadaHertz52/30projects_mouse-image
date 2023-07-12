import { CURSOR_IMG_FILES } from "./assets/images";

export type CursorPosition = { x: number; y: number };

export type CursorType = keyof typeof CURSOR_IMG_FILES;
