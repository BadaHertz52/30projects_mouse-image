import React, { HtmlHTMLAttributes } from "react";
import { CURSOR_IMG_FILES } from "../../data";
import { CursorType } from "../../type";
import classNames from "classnames";

type ImgProps = {
  className?: string;
  imgFileName: CursorType;
  alt: string;
  imgAttribute?: HtmlHTMLAttributes<HTMLImageElement>;
};
function Img({ className, imgFileName, alt, imgAttribute }: ImgProps) {
  return (
    <img
      className={classNames(className)}
      src={CURSOR_IMG_FILES[imgFileName]}
      alt={alt}
      {...imgAttribute}
    />
  );
}

export default React.memo(Img);
