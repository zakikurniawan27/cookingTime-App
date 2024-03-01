import LiSearch from "../atoms/LiSearch";
import LiHome from "../atoms/LiHome";

const ListNavbar = ({ detail }) => {
  return (
    <ul className="flex flex-row gap-3">
      <li>
        <LiHome />
      </li>
      <li>
        <LiSearch detail={detail} />
      </li>
    </ul>
  );
};

export default ListNavbar;
