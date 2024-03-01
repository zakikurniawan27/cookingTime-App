import { Link } from "react-router-dom";

const LiSearch = ({ detail }) => {
  return (
    <p className="text-xs sm:text-sm md:text-base text-black font-bold font-serif hover:underline">
      {detail == true ? (
        <Link to={`/`}>Cari</Link>
      ) : (
        <Link to={`#search`}>Cari</Link>
      )}
    </p>
  );
};

export default LiSearch;
