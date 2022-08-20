import React from "react";
type paginateProp = {
  count: number;

  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};
const Pagination = ({ count, activePage, setActivePage }: paginateProp) => {
  const arr = [];
  for (let index = activePage - 2; index <= activePage + 2; index++) {
    if (index <= 0) continue;
    if (index > count) break;
    arr.push(index);
  }

  return (
    <div className="flex justify-center gap-1 mb-3">
      <button
        onClick={() => setActivePage((prev) => prev - 1)}
        disabled={activePage === 1}
        className="py-2 px-4 rounded-lg cursor-pointer flex items-center justify-center border-gray-800 border"
      >
        &lsaquo; &lsaquo;
      </button>
      {arr.map((item) => (
        <button
          onClick={() => setActivePage(item)}
          className={`py-2 px-4 rounded-lg cursor-pointer flex items-center justify-center border-gray-800 border${
            item === activePage
              ? "  border-blue-500 border-2 bg-blue-500 text-white"
              : ""
          }`}
        >
          {item}
        </button>
      ))}
      <button
        disabled={activePage === count}
        onClick={() => setActivePage((prev) => prev + 1)}
        className="py-2 px-4 rounded-lg cursor-pointer flex items-center justify-center border-gray-800 border"
      >
        &rsaquo; &rsaquo;
      </button>
    </div>
  );
};

export default Pagination;
