import { Link } from "react-router-dom";

const LiHome = () => {
  return (
    <p className="text-xs sm:text-sm md:text-base text-black font-bold font-serif hover:underline">
      <Link to={`/`}>Home</Link>
    </p>
  );
};

export default LiHome;
