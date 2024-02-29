import LiSearch from "../atoms/LiSearch";
import LiHome from "../atoms/LiHome";

const ListNavbar = () => {
  return (
    <ul className="flex flex-row gap-3">
      <li>
        <LiHome />
      </li>
      <li>
        <LiSearch />
      </li>
    </ul>
  );
};

export default ListNavbar;
