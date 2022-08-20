import React from "react";
import { book } from "../Books.types";
type bookProp = {
  book: book;
};
const Book: React.FC<bookProp> = ({
  book: { title, formats, download_count, authors },
}: bookProp): JSX.Element => {
  return (
    <div className="lg:w-1/3 md:w-1/2 md:p-4 w-full sm:p-0  box-border rounded-xl">
      <div className="pt-96 h-0 relative w-full">
        <img
          className="w-full h-full rounded-xl absolute top-0 left-0 object-cover"
          src={formats["image/jpeg"]}
          alt=""
        />
        <p className="text-white font-bold absolute bottom-3 text-2xl left-2 text- px-2 text-ellipsis overflow-hidden w-3/4 whitespace-nowrap shadow-2xl">
          {title}
        </p>
      </div>
      <div className="flex justify-between flex-wrap items-center">
        <span className="font-semibold text-lg ">{authors[0]?.name}</span>
        <span className="text-xs font-semibold ">
          Downloads: {download_count}
        </span>
      </div>
    </div>
  );
};

export default Book;
