import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchDataRecipesCall } from "../../store/action/recipesAction";

const InputGroupSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchDataRecipesCall(search));
  }, [search, dispatch]);
  return (
    <form className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-4 sm:start-8 start-12 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className=" w-80 sm:w-96 p-4 ps-10 text-sm placeholder:text-sm text-black border border-gray-300 rounded-lg bg-white shadow-xl "
          placeholder="Cari resep yang ingin anda masak..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button
          type="submit"
          className="text-white absolute end-14 sm:end-10 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          onClick={() => dispatch(searchDataRecipesCall(search))}
        >
          Cari
        </button>
      </div>
    </form>
  );
};

export default InputGroupSearch;
