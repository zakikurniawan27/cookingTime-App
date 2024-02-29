import LogoImage from "../atoms/LogoImage";
import ListNavbar from "../molecules/ListNavbar";

const Navbar = ({ navbar, mainContent }) => {
  return (
    <header className="shadow-lg bg-white px-3 sm:px-7 md:px-10">
      <nav className="flex justify-between h-full">
        <div className="py-3">
          <LogoImage navbar={navbar} mainContent={mainContent} />
        </div>
        <div className="flex items-center">
          <ListNavbar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
