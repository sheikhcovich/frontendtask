import React, { useEffect, useReducer, useState } from "react";
import actions from "./booksReducer/actions";
import httpServices from "../../services";
import booksReducer, { initialState } from "./booksReducer/BooksReducer";
import Book from "./book/Book";
import Pagination from "../pagination/Pagination";

export const Books: React.FC = (): JSX.Element => {
  const [state, booksDispatch] = useReducer(booksReducer, initialState);
  const { loading, error, data } = state;
  const [activePage, setactivePage] = useState(1);

  const getPage: Function = async (): Promise<void> => {
    try {
      booksDispatch({ type: actions.LOADING });
      const { data } = await httpServices.get(
        `${process.env.REACT_APP_BASE_URL}/?page=${activePage}`
      );
      booksDispatch({ type: actions.SUCCESS, payload: data });
    } catch (error) {
      booksDispatch({ type: actions.ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    getPage();
  }, [activePage]);

  if (loading)
    return <h1 className="text-5xl text-center font-bold mt-10">Loading...</h1>;
  console.log(state);
  if (error)
    return (
      <div className="m-10 py-8 px-2 text-white bg-red-500  transform scale-100 transition duration-300 ">
        {error}
      </div>
    );

  return (
    <>
      <div className=" md:p-14 sm:p-4 flex flex-wrap gap-y-6 justify-center">
        {data?.results.map((book) => (
          <Book book={book} />
        ))}
      </div>
      <Pagination
        setActivePage={setactivePage}
        activePage={activePage}
        count={data?.count}
      />
    </>
  );
};
